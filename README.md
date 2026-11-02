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

- `src/consts.ts`: site identity, description, GitHub profile, and WhatsApp contact CTA.
- `src/pages/index.astro`: homepage and portfolio project cards.
- `src/pages/work/optical-management-system.astro`: Optical Management System case study, focused on process clarity, accountability, and continuity across the full operation.
- `src/pages/work/order-system.astro`: wholesale spare-parts ordering case study, using the supplied Libra Jaya screenshots and verified application features.
- `src/pages/about.astro`: editable professional introduction.
- `src/content/blog/`: journal articles. Add a Markdown or MDX file with the frontmatter below.
- `src/content/examples/`: preserved Astro starter examples, outside the blog collection.
- `src/styles/global.css`: visual system and responsive styles.

```yaml
---
lang: en
translationKey: a-clear-specific-article
title: 'A clear, specific article title'
description: 'A short description of what the reader will learn.'
pubDate: '2026-11-02'
category: 'Engineering'
draft: true
---
```

Topics are `Engineering`, `Product thinking`, and `Building in public`. Articles appear in date order. Reading time and article navigation are generated from the content.

Articles marked `draft: true` are visible with a label, have `noindex` metadata, and are excluded from RSS and the sitemap. Set `draft: false` when an article is ready to publish. To keep an unpublished article entirely out of the website, move it outside `src/content/blog/`.

Light/dark preference is stored locally in the visitor’s browser. Article filtering and search run locally. Fonts and project images are served by the site; the font licenses are included in `public/fonts/`.

## Indonesian and English

English keeps the original URLs (`/`, `/work/...`, `/blog/...`). Indonesian uses `/id/`, `/id/work/...`, and `/id/blog/...`. The ID / EN selector opens the equivalent page; all navigation, search feedback, dates, and article tools follow that page’s language. Theme preference is shared across languages.

- UI and portfolio copy: `src/i18n/messages.ts`. English source phrases are keys; values are the Indonesian translations. Use `t('English source phrase')` in shared templates.
- URL and locale helpers: `src/i18n/index.ts`. Use `href('/blog/')` for links in a localized template.
- Indonesian page entry points in `src/pages/id/` reuse the English page templates, so layout changes apply to both languages.
- English articles: `src/content/blog/*.md`. Indonesian articles: `src/content/blog/id/*.md`.

To add an article translation, create a separate Markdown/MDX file with `lang: id`, the **same `translationKey`** as the English article, and translated title, description, and body. The key becomes the public slug in both languages, independent of the filename. Keep category keys in English; their labels are translated automatically. Each language/key pair must be unique; the build rejects duplicates. Publish status is per translation.

Only available translations appear in an article’s `hreflang` metadata. If its counterpart does not exist yet, the selector links to the target language’s journal. Each language has its own RSS feed (`/rss.xml` and `/id/rss.xml`); drafts are excluded. The sitemap links matching published translations.

Run locale helper tests with `node --test src/i18n/index.test.ts`, then `npm run build` to validate all static routes and content schemas.
