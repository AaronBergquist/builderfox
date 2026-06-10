# BuilderFox — builderfox.com

Brand site for **BuilderFox**, a creative agency that builds and publishes
smart, tactical games. First title in production: **Wrestling City Tactics**, a
turn-based tactics RPG where the ring meets the grid.

## Stack

[Eleventy v3](https://www.11ty.dev/) static site generator.

- The homepage (`index.html`) is hand-crafted HTML + CSS, passthrough-copied
  verbatim — Eleventy never template-processes it.
- New pages are Nunjucks (`.njk`) / Markdown (`.md`) templates; dev blog posts
  live in `blog/posts/` as markdown.
- Original vector (SVG) artwork only — brand mark, wordmark, and favicon are
  hand-authored SVG in `assets/`; the tactical-grid vignettes and the
  Wrestling City Tactics cover are inline SVG in their pages. No photos, no
  raster art, no likenesses.

## Adding a blog post

Create a markdown file in `blog/posts/` — the filename becomes the URL slug
(`blog/posts/opening-bell.md` → `builderfox.com/blog/opening-bell/`):

```markdown
---
title: Post Title
description: "One-sentence summary, used on the blog index and in meta tags."
date: 2026-06-09
---
Post body in plain markdown.
```

That's the entire required front matter. `blog/posts/posts.11tydata.js`
supplies the rest automatically: the post layout (`layouts/post.njk`), the `post` tag that
places it on `/blog/` and in the Atom feed (`/feed.xml`), and the
`/blog/<slug>/` permalink. Don't override those unless you mean to. Posts are
pure markdown (no Liquid/Nunjucks preprocessing), so `{{ }}` and `{% %}` in
prose or code snippets are safe.

## Local dev

```bash
npm install
npm run dev
```

Then open the printed URL (default `http://localhost:8080`).

## Build

```bash
npm run build
```

Output goes to `_site/`.

## Deploy

Deployed on Vercel, auto-built from GitHub `main`. `vercel.json` sets the
build command (`npx @11ty/eleventy`), the output directory (`_site`), and
enables `cleanUrls`.

## Brand tokens

| Token | Hex |
|---|---|
| fox-green | `#79A84B` |
| moss (text-safe green) | `#4E7A2E` |
| crimson | `#C9304C` |
| cream | `#FAF6EC` |
| ink | `#23271E` |
