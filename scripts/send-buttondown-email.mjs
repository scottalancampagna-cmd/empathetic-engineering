import { readFileSync } from 'fs';
import { basename } from 'path';

const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY;
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
	return basename(filePath).replace(/\.(md|mdx)$/, '');
}

function getPostBody(content) {
	// Strip frontmatter and return the markdown body
	return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim();
}

async function sendEmail({ title, description, body, url }) {
	const emailBody = `${body}

---

*[Read this post on the web](${url})*`;

	const res = await fetch('https://api.buttondown.email/v1/emails', {
		method: 'POST',
		headers: {
			Authorization: `Token ${BUTTONDOWN_API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			subject: title,
			body: emailBody,
			status: 'about_to_send',
		}),
	});

	if (!res.ok) throw new Error(`Buttondown API error: ${await res.text()}`);
	return res.json();
}

async function main() {
	if (!BUTTONDOWN_API_KEY) {
		console.error('Missing BUTTONDOWN_API_KEY secret.');
		process.exit(1);
	}

	const files = NEW_POST_FILES.trim().split(/\s+/).filter(Boolean);
	if (files.length === 0) {
		console.log('No new blog posts detected.');
		return;
	}

	for (const file of files) {
		try {
			const content = readFileSync(file, 'utf-8');
			const { title, description } = parseFrontmatter(content);
			const slug = getSlug(file);
			const url = `${SITE_URL}/blog/${slug}/`;
			const body = getPostBody(content);

			console.log(`Sending email: "${title}"`);
			await sendEmail({ title: title || slug, description, body, url });
			console.log(`✓ Email queued successfully`);
		} catch (err) {
			console.error(`✗ Failed to send email for ${file}:`, err.message);
			process.exitCode = 1;
		}
	}
}

main();
