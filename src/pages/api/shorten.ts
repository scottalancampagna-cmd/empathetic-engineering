import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
	const targetUrl = url.searchParams.get('url');

	if (!targetUrl) {
		return new Response(JSON.stringify({ error: 'Missing url param' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	try {
		const res = await fetch(
			`https://tinyurl.com/api-create.php?url=${encodeURIComponent(targetUrl)}`,
		);
		const shortUrl = (await res.text()).trim();
		return new Response(JSON.stringify({ shortUrl }), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch {
		return new Response(JSON.stringify({ shortUrl: targetUrl }), {
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
