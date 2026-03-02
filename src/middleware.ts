import { defineMiddleware } from 'astro:middleware';

// Keystatic doesn't read Vercel's x-forwarded-host header, so it constructs
// OAuth redirect URIs using 'localhost' instead of the real domain.
// We use import.meta.env.SITE (set in astro.config.mjs) as the canonical URL
// so that both the sign-in redirect and the OAuth callback use the same domain,
// preventing state cookie mismatches caused by www vs non-www variations.
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
