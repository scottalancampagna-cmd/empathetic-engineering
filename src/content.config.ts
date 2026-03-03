import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '!(_templates)/**/*.{md,mdx}|*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const pages = defineCollection({
	// Singleton-style pages edited via Keystatic
	loader: glob({ base: './src/content/pages', pattern: '*.{md,mdx}' }),
	schema: z.object({
		subtitle: z.string().optional(),
		lastUpdated: z.string().optional(),
	}),
});

export const collections = { blog, pages };
