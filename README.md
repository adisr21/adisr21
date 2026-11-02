# adisr. — Portfolio & Journal

Personal portfolio and professional engineering journal for **adisr.xyz**, built with Astro and Markdown.

## Run locally

Use Node 22.23.4 or newer and install dependencies with `npm ci`.

```sh
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev stop
```

Build the static website with `npm run build`. Output is written to `dist/`.

## Content and identity

- `src/consts.ts`: site identity, description, and GitHub contact link.
- `src/pages/index.astro`: homepage and portfolio project cards.
- `src/pages/work/optik-siliwangi.astro`: project case study, grounded in the supplied screenshots and project documentation.
- `src/pages/work/order-system.astro`: wholesale spare-parts ordering case study, using the supplied Libra Jaya screenshots and verified application features.
- `src/pages/about.astro`: editable professional introduction.
- `src/content/blog/`: journal articles. Add a Markdown or MDX file with the frontmatter below.
- `src/content/examples/`: preserved Astro starter examples, outside the blog collection.
- `src/styles/global.css`: visual system and responsive styles.

```yaml
---
title: 'A clear, specific article title'
description: 'A short description of what the reader will learn.'
pubDate: '2026-11-02'
category: 'Engineering'
draft: true
---
```

Topics are `Engineering`, `Product thinking`, and `Building in public`. Articles appear in date order. Reading time and article navigation are generated from the content.

The three initial articles are **editorial drafts for review**. Drafts are visible with a label, have `noindex` metadata, and are excluded from RSS and the sitemap. Set `draft: false` when an article is ready to publish. To keep an unpublished article entirely out of the website, move it outside `src/content/blog/`.

Light/dark preference is stored locally in the visitor’s browser. Article filtering and search run locally. Fonts and project images are served by the site; the font licenses are included in `public/fonts/`.
