/**
 * One-time script: converts a Substack export into Astro blog markdown files.
 * Usage: node scripts/convert-substack.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const SUBSTACK_EXPORT = '/Users/a314590/Downloads/substack-export';
const OUTPUT_DIR = '/Users/a314590/Desktop/empathetic-engineering/src/content/blog';

// ─── CSV parser ─────────────────────────────────────────────────────────────

function parseCSV(content) {
	const lines = content.trim().split('\n');
	const headers = parseCSVLine(lines[0]);
	return lines.slice(1).map((line) => {
		const values = parseCSVLine(line);
		return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']));
	});
}

function parseCSVLine(line) {
	const result = [];
	let field = '';
	let inQuotes = false;
	for (let i = 0; i < line.length; i++) {
		const ch = line[i];
		if (ch === '"') {
			inQuotes = !inQuotes;
		} else if (ch === ',' && !inQuotes) {
			result.push(field);
			field = '';
		} else {
			field += ch;
		}
	}
	result.push(field);
	return result;
}

// ─── HTML → Markdown ─────────────────────────────────────────────────────────

function htmlToMarkdown(html) {
	let md = html;

	// Strip Substack subscription widgets entirely
	md = md.replace(
		/<div[^>]*class="[^"]*subscription-widget-wrap[^"]*"[^>]*>[\s\S]*?<\/form>\s*<\/div>\s*<\/div>\s*<\/div>/g,
		''
	);

	// Strip any remaining Substack-specific divs (captchas, paywalls, etc.)
	md = md.replace(/<div[^>]*data-component-name="[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');

	// Headings
	md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, (_, c) => `# ${stripTags(c).trim()}\n\n`);
	md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, (_, c) => `## ${stripTags(c).trim()}\n\n`);
	md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, (_, c) => `### ${stripTags(c).trim()}\n\n`);
	md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, (_, c) => `#### ${stripTags(c).trim()}\n\n`);

	// Blockquotes
	md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/g, (_, c) => {
		const inner = htmlToMarkdown(c).trim();
		return inner.split('\n').map((l) => `> ${l}`).join('\n') + '\n\n';
	});

	// Lists
	md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (_, c) => {
		return c.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (_, item) => `- ${stripTags(item).trim()}\n`) + '\n';
	});
	md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, (_, c) => {
		let i = 1;
		return c.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (_, item) => `${i++}. ${stripTags(item).trim()}\n`) + '\n';
	});

	// Inline: bold, italic, links
	md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g, '**$1**');
	md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/g, '**$1**');
	md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/g, '*$1*');
	md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/g, '*$1*');
	md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');

	// Paragraphs
	md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, '$1\n\n');

	// Horizontal rules (bare or wrapped in a div)
	md = md.replace(/<div[^>]*>\s*<hr[^>]*>\s*<\/div>/g, '\n---\n\n');
	md = md.replace(/<hr[^>]*>/g, '\n---\n\n');

	// Strip any remaining tags
	md = md.replace(/<[^>]+>/g, '');

	// Decode HTML entities
	md = md
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#039;/g, "'")
		.replace(/&ldquo;/g, '\u201C')
		.replace(/&rdquo;/g, '\u201D')
		.replace(/&lsquo;/g, '\u2018')
		.replace(/&rsquo;/g, '\u2019')
		.replace(/&mdash;/g, '\u2014')
		.replace(/&ndash;/g, '\u2013')
		.replace(/&hellip;/g, '\u2026')
		.replace(/&nbsp;/g, ' ');

	// Collapse 3+ blank lines → 2
	md = md.replace(/\n{3,}/g, '\n\n');

	return md.trim();
}

function stripTags(html) {
	return html.replace(/<[^>]+>/g, '');
}

// ─── YAML helpers ─────────────────────────────────────────────────────────────

function yamlString(str) {
	// Escape double quotes and wrap in double quotes
	return `"${str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const csvContent = readFileSync(join(SUBSTACK_EXPORT, 'posts.csv'), 'utf-8');
const posts = parseCSV(csvContent);

let converted = 0;
let skipped = 0;

for (const post of posts) {
	// Skip drafts / unpublished
	if (post.is_published !== 'true') {
		console.log(`⏭  Skipping (unpublished): ${post.title || post.post_id}`);
		skipped++;
		continue;
	}

	const htmlPath = join(SUBSTACK_EXPORT, 'posts', `${post.post_id}.html`);
	if (!existsSync(htmlPath)) {
		console.log(`⏭  Skipping (no HTML file): ${post.title}`);
		skipped++;
		continue;
	}

	// Derive slug from the post_id (everything after the first dot)
	const slug = post.post_id.split('.').slice(1).join('.');

	// Parse date (YYYY-MM-DD)
	const pubDate = post.post_date ? post.post_date.split('T')[0] : '';

	// Read + convert content
	const html = readFileSync(htmlPath, 'utf-8');
	const body = htmlToMarkdown(html);

	// Use subtitle as description; fall back to first 150 chars of body
	const description =
		post.subtitle?.trim() ||
		body.replace(/[#*>\-\[\]]/g, '').slice(0, 150).replace(/\s+/g, ' ').trim();

	const frontmatter = [
		'---',
		`title: ${yamlString(post.title || slug)}`,
		`description: ${yamlString(description)}`,
		`pubDate: ${pubDate}`,
		'---',
		'',
	].join('\n');

	const outputPath = join(OUTPUT_DIR, `${slug}.md`);
	writeFileSync(outputPath, frontmatter + body + '\n');
	console.log(`✓  ${post.title} → ${slug}.md`);
	converted++;
}

console.log(`\nDone: ${converted} converted, ${skipped} skipped.`);
