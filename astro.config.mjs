// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.empatheticengineering.blog',
	adapter: vercel(),
	integrations: [mdx(), sitemap(), react(), keystatic()],
	vite: {
		server: {
			watch: {
				// Prevent Obsidian vault files from triggering page reloads
				ignored: [
					'**/src/pages/blog/Blog Posts/**',
					'**/src/pages/Empathetic Engineering/**',
				],
			},
		},
	},
});
