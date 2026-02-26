# Empathetic Engineering — Site Guide

Your personal site, built with [Astro](https://astro.build) and deployed via [GitHub Pages](https://pages.github.com). This doc covers everything you need to know to keep the site running and up to date — no prior web dev experience required.

---

## Table of Contents

1. [How the site is structured](#1-how-the-site-is-structured)
2. [Making content updates](#2-making-content-updates)
   - [Writing a new blog post](#writing-a-new-blog-post)
   - [Updating the Now page](#updating-the-now-page)
   - [Updating the Resume](#updating-the-resume)
   - [Updating site-wide info (title, bio, links)](#updating-site-wide-info)
3. [Previewing changes locally](#3-previewing-changes-locally)
4. [Deploying to production](#4-deploying-to-production)
5. [Quick reference cheat sheet](#5-quick-reference-cheat-sheet)

---

## 1. How the site is structured

```
empathetic-engineering/
│
├── src/
│   ├── content/
│   │   └── blog/          ← ✏️  All blog posts live here (.md files)
│   │
│   ├── pages/
│   │   ├── index.astro    ← Home page
│   │   ├── subscribe.astro← Subscribe page
│   │   ├── now.md         ← ✏️  The /now page (edit this directly)
│   │   ├── resume.mdx     ← ✏️  Your resume (edit this directly)
│   │   ├── blog/          ← Blog index + post routing (don't touch)
│   │   └── rss.xml.js     ← Auto-generated RSS feed (don't touch)
│   │
│   ├── components/        ← Reusable UI pieces (Header, Footer, etc.)
│   ├── layouts/           ← Page templates (BlogPost, Page)
│   ├── styles/
│   │   └── global.css     ← Site-wide styles
│   └── consts.ts          ← ✏️  Site title, description, social links
│
├── public/                ← Static files (favicon, images, fonts)
├── astro.config.mjs       ← Build config (don't touch)
├── package.json           ← Project deps (don't touch)
└── README.md              ← This file
```

### The short version

| What you want to change | Where to go |
|---|---|
| Write / edit a blog post | `src/content/blog/` |
| Update the Now page | `src/pages/now.md` |
| Update your resume | `src/pages/resume.mdx` |
| Change site title or bio | `src/consts.ts` |
| Add an image or file | `public/` |

---

## 2. Making content updates

### Writing a new blog post

1. Create a new `.md` file in `src/content/blog/`. The filename becomes the URL slug, so keep it lowercase with hyphens:
   ```
   src/content/blog/my-new-post.md
   ```

2. Every post **must** start with this frontmatter block (the stuff between the `---` lines):
   ```markdown
   ---
   title: "Your Post Title"
   description: "A one-sentence summary shown in the blog list and SEO."
   pubDate: 2026-03-01
   ---

   Your content starts here...
   ```

3. Write the rest of the post in standard Markdown:
   ```markdown
   ## A Section Header

   Normal paragraph text. **Bold**, *italic*, [links](https://example.com).

   - Bullet one
   - Bullet two

   ---

   A horizontal rule above renders as a centered · · · divider on the site.
   ```

4. **Date format**: Always use `YYYY-MM-DD` (e.g. `2026-03-15`). Posts are sorted by this date, newest first.

5. **Draft posts**: If you're not ready to publish, just don't push — the post won't go live until you deploy. There's no draft flag needed.

> **Tip:** If you use an MDX editor like iA Writer or Obsidian, you can write there and drop the file into `src/content/blog/` when you're ready.

---

### Updating the Now page

The `/now` page lives at `src/pages/now.md`. Open it and edit the content under each section header. Also update the `lastUpdated` date in the frontmatter at the top:

```markdown
---
layout: ../layouts/Page.astro
title: "Now"
lastUpdated: "March 2026"    ← update this when you edit
---

# Now

## Work
What I'm actually working on right now...

## Reading
The book I'm genuinely reading (not just aspirationally)...
```

You can add or remove sections freely — just use `##` for section headers.

> **MDX note:** If you ever want to drop in a component (like an embedded chart or a callout box), rename the file to `now.mdx` and it'll work automatically — no other changes needed.

---

### Updating the Resume

The resume lives at `src/pages/resume.mdx`. It uses a few special formatting tricks:

| Syntax | What it does |
|---|---|
| `<mark>key metric</mark>` | Yellow highlight on important numbers/phrases |
| `<abbr title="full name">ABBR</abbr>` | Tooltip on hover showing the expanded term |
| `<details><summary>Role Title</summary> ... </details>` | Collapsible older role |
| `<div class="chips"><span class="chip">Skill</span></div>` | Pill-style skill tags |

**To update the "last updated" date**, change the `lastUpdated` field at the top of the file:
```markdown
---
layout: ../layouts/Page.astro
title: "Resume"
lastUpdated: "March 2026"    ← change this
---
```

The ⎙ Print / Save PDF button in the top right automatically opens all collapsed sections before printing, so nothing gets cut off.

---

### Updating site-wide info

To change the site title, description, or social links, edit `src/consts.ts`:

```ts
export const SITE_TITLE = 'Empathetic Engineering';
export const SITE_DESCRIPTION = 'Your one-liner here.';
```

---

## 3. Previewing changes locally

Before deploying, you can run the site on your own machine to see exactly how it'll look.

**Prerequisites:** You need Node.js installed. If you haven't set it up, run `node -v` in Terminal — if it prints a version number you're good.

```bash
# From the project folder in Terminal:
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321) in your browser. The site will live-reload as you save files — no need to restart.

To stop the dev server, press `Ctrl + C` in Terminal.

**To do a full production build (optional but good to verify):**
```bash
npm run build
```
This catches any errors that might only show up at build time.

---

## 4. Deploying to production

Changes go live by pushing to GitHub. The site auto-deploys on every push to `main`.

```bash
# 1. Stage your changes
git add .

# 2. Commit with a message describing what you changed
git commit -m "Add new post: my post title"

# 3. Push to GitHub → triggers deploy
git push
```

That's it. Changes are usually live within a minute or two.

**If `git push` fails with an authentication error**, you may need to re-authenticate:
```bash
gh auth login
```
Follow the prompts (choose GitHub.com → HTTPS → browser login). This only needs to happen occasionally.

### Typical end-to-end workflow

```
Write/edit a file → save → npm run dev (preview) → git add . → git commit -m "..." → git push
```

---

## 5. Quick reference cheat sheet

### Markdown basics

```markdown
# H1 heading
## H2 heading
### H3 heading

**bold text**
*italic text*
~~strikethrough~~

[link text](https://url.com)
![alt text](image.jpg)

- Bullet item
1. Numbered item

> Blockquote

`inline code`

---   ← renders as a · · · section divider in blog posts
```

### Git commands

```bash
git status              # see what files have changed
git add .               # stage all changes
git add src/path/file   # stage a specific file
git commit -m "message" # commit with a description
git push                # deploy to production
git pull                # pull any changes from GitHub (sync)
git log --oneline -10   # see recent commits
```

### npm commands

```bash
npm run dev     # start local preview at localhost:4321
npm run build   # full production build (checks for errors)
npm run preview # preview the production build locally
```

---

*Site built with [Astro](https://astro.build). Hosted on [GitHub Pages](https://pages.github.com). Analytics via [GoatCounter](https://www.goatcounter.com).*
