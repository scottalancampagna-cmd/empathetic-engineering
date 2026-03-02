// This file overrides the route injected by @keystatic/astro so we can rewrite
// the request URL before Keystatic handles it. Keystatic reads context.request.url
// to build OAuth redirect URIs, but Vercel's internal hostname is 'localhost'.
// We proxy the context to return a corrected request URL using the canonical site.
// See: https://github.com/Thinkmill/keystatic/issues/1022

import { makeHandler } from '@keystatic/astro/dist/keystatic-astro-api.js';
// @ts-ignore — virtual module provided by @keystatic/astro integration
import config from 'virtual:keystatic-config';

const baseHandler = makeHandler({ config });

function rewriteRequest(request: Request): Request {
	const url = new URL(request.url);
	if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
		const siteUrl = new URL(import.meta.env.SITE);
		url.hostname = siteUrl.hostname;
		url.protocol = siteUrl.protocol;
		url.port = '';
		return new Request(url.toString(), request);
	}
	return request;
}

export const ALL = (context: any) => {
	const proxiedContext = new Proxy(context, {
		get(target, prop) {
			if (prop === 'request') return rewriteRequest(target.request);
			return target[prop];
		},
	});
	return baseHandler(proxiedContext);
};

export const prerender = false;
