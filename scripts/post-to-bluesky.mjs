import { readFileSync } from 'fs';
import { basename, dirname } from 'path';

const BLUESKY_HANDLE = process.env.BLUESKY_HANDLE;
const BLUESKY_APP_PASSWORD = process.env.BLUESKY_APP_PASSWORD;
const SITE_URL = process.env.SITE_URL || 'https://empatheticengineering.blog';
const NEW_POST_FILES = process.env.NEW_POST_FILES || '';

function parseFrontmatter(content) {
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return {};
	const result = {};
	for (const line of match[1].split('\n')) {
		const colonIndex = line.indexOf(':');
		if (colonIndex === -1) continue;
		const key = line.slice(0, colonIndex).trim();
		const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
		if (key) result[key] = value;
	}
	return result;
}

function getSlug(filePath) {
	const base = basename(filePath).replace(/\.(md|mdx)$/, '');
	if (base === 'index') return basename(dirname(filePath));
	return base;
}

async function authenticate() {
	const res = await fetch('https://bsky.social/xrpc/com.atproto.server.createSession', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ identifier: BLUESKY_HANDLE, password: BLUESKY_APP_PASSWORD }),
	});
	if (!res.ok) throw new Error(`Auth failed: ${await res.text()}`);
	return res.json();
}

async function post(session, { title, description, url }) {
	const text = description
		? `${title}\n\n${description}\n\n${url}`
		: `${title}\n\n${url}`;

	// Build a facet so the URL is a clickable link
	const encoder = new TextEncoder();
	const urlStart = encoder.encode(text.slice(0, text.lastIndexOf(url))).length;
	const urlEnd = urlStart + encoder.encode(url).length;

	const res = await fetch('https://bsky.social/xrpc/com.atproto.repo.createRecord', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${session.accessJwt}`,
		},
		body: JSON.stringify({
			repo: session.did,
			collection: 'app.bsky.feed.post',
			record: {
				$type: 'app.bsky.feed.post',
				text,
				createdAt: new Date().toISOString(),
				facets: [
					{
						index: { byteStart: urlStart, byteEnd: urlEnd },
						features: [{ $type: 'app.bsky.richtext.facet#link', uri: url }],
					},
				],
				embed: {
					$type: 'app.bsky.embed.external',
					external: { uri: url, title, description: description || '' },
				},
			},
		}),
	});
	if (!res.ok) throw new Error(`Post failed: ${await res.text()}`);
	return res.json();
}

async function main() {
	if (!BLUESKY_HANDLE || !BLUESKY_APP_PASSWORD) {
		console.error('Missing BLUESKY_HANDLE or BLUESKY_APP_PASSWORD secrets.');
		process.exit(1);
	}

	const files = NEW_POST_FILES.trim().split(/\s+/).filter(Boolean);
	if (files.length === 0) {
		console.log('No new blog posts detected.');
		return;
	}

	console.log('Authenticating with Bluesky...');
	const session = await authenticate();
	console.log(`Authenticated as ${BLUESKY_HANDLE}`);

	for (const file of files) {
		try {
			const content = readFileSync(file, 'utf-8');
			const { title, description } = parseFrontmatter(content);
			const url = `${SITE_URL}/blog/${getSlug(file)}/`;

			console.log(`Posting: "${title}" → ${url}`);
			await post(session, { title: title || getSlug(file), description, url });
			console.log(`✓ Posted successfully`);
		} catch (err) {
			console.error(`✗ Failed to post ${file}:`, err.message);
			process.exitCode = 1;
		}
	}
}

main();
