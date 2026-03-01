import { config, collection, fields } from '@keystatic/core';

export default config({
	storage: {
		kind: 'github',
		repo: {
			owner: 'scottalancampagna-cmd',
			name: 'empathetic-engineering',
		},
	},

	ui: {
		brand: { name: 'Empathetic Engineering' },
	},

	collections: {
		blog: collection({
			label: 'Blog Posts',
			slugField: 'title',
			path: 'src/content/blog/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: 'Title' },
					slug: { label: 'Slug', description: 'URL path for this post' },
				}),
				description: fields.text({
					label: 'Description',
					validation: { isRequired: true },
				}),
				pubDate: fields.date({
					label: 'Publish Date',
					validation: { isRequired: true },
				}),
				updatedDate: fields.date({
					label: 'Updated Date',
					validation: { isRequired: false },
				}),
				heroImage: fields.image({
					label: 'Hero Image',
					directory: 'src/assets/blog-images',
					publicPath: '../../assets/blog-images/',
				}),
				content: fields.mdx({
					label: 'Content',
					extension: 'md',
				}),
			},
		}),
	},
});
