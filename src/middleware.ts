import { defineMiddleware } from 'astro:middleware';

// Keystatic reads request.url to build OAuth redirect URIs, but Vercel's
// internal hostname is 'localhost'. We rewrite /api/keystatic requests to
// use the canonical site URL so the redirect_uri is correct.
// See: https://github.com/Thinkmill/keystatic/issues/1022
export const onRequest = defineMiddleware((context, next) => {
	const url = new URL(context.request.url);

	if (
		url.pathname.startsWith('/api/keystatic') &&
		(url.hostname === 'localhost' || url.hostname === '127.0.0.1')
	) {
		const siteUrl = new URL(import.meta.env.SITE);
		url.hostname = siteUrl.hostname;
		url.protocol = siteUrl.protocol;
		url.port = '';
		return context.rewrite(new Request(url.toString(), context.request));
	}

	return next();
});
