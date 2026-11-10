# Hi, I'm Adi

**Full-Stack Software Engineer · Web Applications · Business Systems**

I build web applications that make business processes clear, accountable, and easier to operate. My work connects user interfaces, backend rules, and relational data so teams can follow a complete process, understand who owns each step, and continue the work across handoffs.

This repository brings together my portfolio and engineering journal at **[adisr21.xyz](https://adisr21.xyz/)**, with case studies and writing in English and Bahasa Indonesia.

[Portfolio](https://adisr21.xyz/#work) · [Journal](https://adisr21.xyz/blog/) · [Bahasa Indonesia](https://adisr21.xyz/id/) · [GitHub](https://github.com/adisr21) · [Contact via WhatsApp](https://wa.me/628122012107)

## Engineering focus

- **Complete business processes:** connect the steps from an initial request through approvals, payment, fulfillment, and completion.
- **Accountability by design:** make ownership, permissions, branch scope, and action history visible in the system.
- **Clear user experiences:** use precise language, useful status information, and consistent interactions to help people take the next step.
- **Reliable interactions:** consider validation, repeated submissions, interrupted connections, and recovery alongside the successful path.

## Selected projects

### [Optical Management System](https://adisr21.xyz/work/optical-management-system/)

An operational platform connecting examination bookings, customer records, prescriptions, sales, payments, inventory, lens fulfillment, and collection.

The system carries the rules and context through the whole process. Explicit statuses, role-based access, approval steps, and audit history help the team understand what needs attention and who is responsible. Another authorized team member can continue the work from its recorded state when a particular person is unavailable.

**Stack:** Laravel · PostgreSQL · Astro

**Business focus:** process clarity, accountability, and operational continuity.

### [Order System](https://adisr21.xyz/work/order-system/)

A wholesale ordering platform for phone spare parts, built around product discovery and purchasing across many related models and variants.

Customers can search by phone model, filter categories, view account-specific prices, select quantities across products, and review order history. The implementation handles quantity multiples, products already in the cart, repeated submissions, and recovery of ordering drafts. Browser tests cover search, bulk ordering, recovery, and order history.

**Stack:** Laravel · MySQL · Blade · Bootstrap · JavaScript

**Product focus:** clear pricing, consistent catalog interactions, and a connected bulk-order flow.

## Technologies and practice

| Area | Technologies | Application |
| --- | --- | --- |
| Backend | PHP, Laravel | Business rules, validation, permissions, approvals, and transaction workflows |
| Frontend | Astro, TypeScript, JavaScript, Blade, HTML, CSS, Bootstrap | Responsive interfaces, interactive forms, and content-driven websites |
| Data | PostgreSQL, MySQL | Connected customer, order, payment, inventory, and pricing records |
| Quality | Node.js test runner, browser testing, content schemas | Locale routing, workflow behavior, recovery, and structured content validation |
| Delivery | Git, GitHub, npm, Cloudflare Workers, Wrangler | Versioned source, static builds, deployment configuration, and runtime checks |

## How I approach the work

I start with the people using the system, the decisions they need to make, and the information required at each handoff. I translate that context into explicit states, responsibilities, and validation rules, then connect the interface to those rules.

I review the experience through both successful and interrupted flows. The aim is software that makes its behavior understandable and gives the next person enough context to keep working.

## Writing

My journal explores software engineering, product decisions, and the reasoning behind the work:

- [Good software considers the unhappy path](https://adisr21.xyz/blog/designing-for-the-unhappy-path/) — designing useful feedback and recovery when an interaction fails.
- [Clarity is a product feature](https://adisr21.xyz/blog/clarity-before-complexity/) — making names, status, scope, and next steps easier to understand.
- [Show the thinking, not just the screen](https://adisr21.xyz/blog/a-portfolio-that-explains-the-work/) — connecting a project’s problem, decisions, and evidence.

Read the [English journal](https://adisr21.xyz/blog/) or [jurnal Bahasa Indonesia](https://adisr21.xyz/id/blog/). RSS is available in [English](https://adisr21.xyz/rss.xml) and [Bahasa Indonesia](https://adisr21.xyz/id/rss.xml).

## About this repository

The portfolio is an Astro website with Markdown/MDX articles, shared bilingual templates, project case studies, client-side article search and topic filters, and a persistent light/dark theme. Fonts and project images are served by the website.

Astro prerenders the pages into `dist/`. Cloudflare Workers serves that output as Static Assets, including both language versions, RSS feeds, and the sitemap.

<details>
<summary><strong>Development, content, and deployment guide</strong></summary>

### Local development

Use **Node.js 24**, matching [.node-version](.node-version), and install the locked dependencies:

```sh
npm ci
npm run dev -- --background
```

Manage the background development server with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

### Build and verification

```sh
node --test src/i18n/index.test.ts
npm run build
npx wrangler deploy --dry-run
```

The locale tests check language detection, URL conversion, and translated UI helpers. The build validates article schemas and generates the static routes. Wrangler's dry-run checks the Worker deployment configuration without publishing.

Use `npm run preview` to inspect the built website, or `npx wrangler dev --local` to serve it through the local Cloudflare runtime after building.

### Source guide

| Location | Purpose |
| --- | --- |
| [src/consts.ts](src/consts.ts) | Site identity, GitHub profile, and WhatsApp contact |
| [src/pages/index.astro](src/pages/index.astro) | Homepage and featured project cards |
| [src/pages/work/](src/pages/work/) | Optical Management System and Order System case studies |
| [src/pages/about.astro](src/pages/about.astro) | Professional introduction and working approach |
| [src/components/](src/components/) and [src/layouts/](src/layouts/) | Shared UI, metadata, and article layout |
| [src/content/blog/](src/content/blog/) | English and Indonesian Markdown/MDX articles |
| [src/content.config.ts](src/content.config.ts) | Article frontmatter schema |
| [src/i18n/](src/i18n/) | UI translations, URL helpers, and locale tests |
| [src/lib/](src/lib/) | Article lookup, translation pairing, and RSS generation |
| [src/pages/id/](src/pages/id/) | Indonesian entry points using shared page templates |
| [src/styles/global.css](src/styles/global.css) | Typography, colors, and shared responsive styles |
| [astro.config.mjs](astro.config.mjs) | Site URL, locale routing, redirects, fonts, and sitemap |
| [wrangler.jsonc](wrangler.jsonc) | Cloudflare Worker name and static asset routing |

The starter content in `src/content/examples/` is kept outside the blog collection. Font licenses are included in `public/fonts/`.

### Add or translate an article

Store English articles in `src/content/blog/` and Indonesian articles in `src/content/blog/id/`. Each article needs frontmatter such as:

```yaml
---
lang: en
translationKey: a-clear-specific-article
title: 'A clear, specific article title'
description: 'A short description of what the reader will learn.'
pubDate: '2026-11-03'
category: 'Engineering'
draft: true
---
```

For an Indonesian translation, create a separate file with `lang: id`, the **same `translationKey`**, and a translated title, description, and body. The key becomes the public slug in both languages, independent of the filename. Each language/key pair must be unique; the build rejects duplicates.

Keep category values as `Engineering`, `Product thinking`, or `Building in public`; their visible labels are translated automatically. Articles appear in date order, with reading time and section navigation generated from the content.

**Draft visibility:** `draft: true` articles are publicly accessible with a draft label and `noindex` metadata, and are excluded from RSS and the sitemap. Publish each translation by setting `draft: false`. To keep an article entirely off the website, store it outside `src/content/blog/`.

### Maintain the two languages

| Content | English | Bahasa Indonesia |
| --- | --- | --- |
| Home | `/` | `/id/` |
| Project case studies | `/work/<project>/` | `/id/work/<project>/` |
| Journal | `/blog/` | `/id/blog/` |
| Article | `/blog/<translationKey>/` | `/id/blog/<translationKey>/` |
| RSS | `/rss.xml` | `/id/rss.xml` |

The ID / EN selector opens the matching page or article. If an article's counterpart is unavailable, it links to the target language's journal. Navigation, search feedback, dates, and article tools follow the current language. Theme preference is shared across languages.

Edit UI and portfolio translations in [src/i18n/messages.ts](src/i18n/messages.ts): English source phrases are keys, with Indonesian values. Shared templates use `t('English source phrase')` for text and `href('/blog/')` for localized internal links. Only available article translations appear in `hreflang` metadata, and the sitemap pairs published translations.

### Deploy to Cloudflare Workers

In **Cloudflare → Workers & Pages → your Worker → Settings → Build**, connect this repository and use:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | Repository root (`/`) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Node version | `24`, set by `.node-version` |

The Worker name in `wrangler.jsonc` is `adisr21`; it must match the existing Worker name in Cloudflare. Set any dashboard `NODE_VERSION` override to `24` as well. Attach `adisr21.xyz` to this Worker under **Settings → Domains & Routes**, matching `site` in `astro.config.mjs`.

For deployment from a local checkout, authenticate Wrangler with the intended Cloudflare account and run:

```sh
npm run deploy
```

This command builds the website before publishing. The Worker serves `dist/` directly without an SSR entry point. HTML routes use trailing slashes. Missing pages return HTTP 404 with the custom page from `src/pages/404.astro`; `/id/...` requests use the Indonesian version. The build copies the localized page to `dist/id/404.html` so Cloudflare can select the nearest error page. Both versions are marked `noindex` and excluded from the sitemap.

References: [Astro on Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/) · [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/).

</details>
