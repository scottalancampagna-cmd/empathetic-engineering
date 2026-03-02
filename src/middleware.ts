import { defineMiddleware } from 'astro:middleware';

// Keystatic doesn't read Vercel's x-forwarded-host header, so it constructs
// OAuth redirect URIs using 'localhost' instead of the real domain.
// This middleware rewrites the URL for Keystatic API routes before they're handled.
// See: https://github.com/Thinkmill/keystatic/issues/1022
export const onRequest = defineMiddleware((context, next) => {
	const url = new URL(context.request.url);

	if (
		url.pathname.startsWith('/api/keystatic') &&
		(url.hostname === 'localhost' || url.hostname === '127.0.0.1')
	) {
		const forwardedHost = context.request.headers.get('x-forwarded-host');
		const forwardedProto = context.request.headers.get('x-forwarded-proto') ?? 'https';

		if (forwardedHost) {
			url.hostname = forwardedHost;
			url.protocol = forwardedProto + ':';
			url.port = '';
			return context.rewrite(new Request(url.toString(), context.request));
		}
	}

	return next();
});
