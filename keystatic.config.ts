import { config, collection, singleton, fields, component } from '@keystatic/core';

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

	singletons: {
		home: singleton({
			label: 'Home Page',
			path: 'src/content/pages/home',
			format: { contentField: 'content' },
			schema: {
				subtitle: fields.text({
					label: 'Subtitle',
					description: 'Tagline shown under the site title on the home page',
				}),
				content: fields.mdx({ label: 'Bio Content' }),
			},
		}),
		now: singleton({
			label: 'Now Page',
			path: 'src/content/pages/now',
			format: { contentField: 'content' },
			schema: {
				lastUpdated: fields.text({
					label: 'Last Updated',
					description: 'e.g. "February 2026"',
				}),
				content: fields.mdx({
					label: 'Content',
					components: {
						PreviewLink: component({
							label: 'Preview Link',
							schema: {
								href: fields.text({ label: 'URL' }),
								image: fields.text({
									label: 'Image path',
									description: 'e.g. /previews/my-image.jpg',
								}),
								alt: fields.text({ label: 'Alt text' }),
							},
							preview: () => null,
						}),
					},
				}),
			},
		}),
		resume: singleton({
			label: 'Resume',
			path: 'src/content/pages/resume',
			format: { contentField: 'content' },
			schema: {
				lastUpdated: fields.text({
					label: 'Last Updated',
					description: 'e.g. "February 2026"',
				}),
				content: fields.mdx({
					label: 'Content',
					components: {
						mark: component({
							label: 'Highlight',
							schema: {},
							preview: () => null,
						}),
						abbr: component({
							label: 'Abbreviation',
							schema: {
								title: fields.text({ label: 'Full text' }),
							},
							preview: () => null,
						}),
						details: component({
							label: 'Details',
							schema: {},
							preview: () => null,
						}),
						summary: component({
							label: 'Summary',
							schema: {},
							preview: () => null,
						}),
						div: component({
							label: 'Div',
							schema: {
								className: fields.text({ label: 'Class name' }),
							},
							preview: () => null,
						}),
						span: component({
							label: 'Span',
							schema: {
								className: fields.text({ label: 'Class name' }),
							},
							preview: () => null,
						}),
					},
				}),
			},
		}),
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
