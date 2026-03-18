import { config, collection, singleton, fields } from '@keystatic/core';

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
		linkedinHighlights: singleton({
			label: 'LinkedIn Highlights',
			path: 'src/data/linkedin-highlights',
			format: { data: 'json' },
			schema: {
				highlights: fields.array(
					fields.object({
						title: fields.text({ label: 'Post Title / Excerpt' }),
						url: fields.text({ label: 'LinkedIn Post URL' }),
						date: fields.date({ label: 'Post Date' }),
						summary: fields.text({ label: 'Summary', multiline: true }),
					}),
					{ label: 'Highlights', itemLabel: (props) => props.fields.title.value || 'New Highlight' },
				),
			},
		}),
		books: singleton({
			label: 'Reading List',
			path: 'src/data/books',
			format: { data: 'json' },
			schema: {
				books: fields.array(
					fields.object({
						title: fields.text({ label: 'Title', validation: { isRequired: true } }),
						author: fields.text({ label: 'Author', validation: { isRequired: true } }),
						status: fields.select({
							label: 'Status',
							options: [
								{ label: 'Currently Reading', value: 'reading' },
								{ label: 'Read', value: 'read' },
								{ label: 'Want to Read', value: 'want' },
							],
							defaultValue: 'reading',
						}),
						goodreadsUrl: fields.text({ label: 'Goodreads URL (optional)' }),
						coverUrl: fields.text({ label: 'Cover Image URL (optional)' }),
						startDate: fields.date({ label: 'Start Date (optional)' }),
						finishDate: fields.date({ label: 'Finish Date (optional)' }),
						notes: fields.text({ label: 'Notes (optional)', multiline: true }),
					}),
					{ label: 'Books', itemLabel: (props) => `${props.fields.title.value} — ${props.fields.author.value}` || 'New Book' },
				),
			},
		}),
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
				content: fields.text({
					label: 'Content',
					multiline: true,
					description: 'Raw MDX — includes PreviewLink components. Edit here or directly in VS Code.',
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
				content: fields.text({
					label: 'Content',
					multiline: true,
					description: 'Raw MDX — contains custom HTML. Best edited directly in VS Code.',
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
					slug: {
						label: 'Slug',
						description: 'URL path for this post (auto-prefixed with YYYYMMDD on creation)',
						generate: (title) => {
							const d = new Date();
							const prefix = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
							const slugified = title
								.toLowerCase()
								.replace(/[^a-z0-9]+/g, '-')
								.replace(/^-+|-+$/g, '');
							return `${prefix}-${slugified}`;
						},
					},
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
