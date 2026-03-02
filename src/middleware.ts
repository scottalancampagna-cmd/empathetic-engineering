import { defineMiddleware } from 'astro:middleware';

// URL rewriting for Keystatic OAuth is handled directly in
// src/pages/api/keystatic/[...params].ts via a context Proxy.
export const onRequest = defineMiddleware((_context, next) => {
	return next();
});
