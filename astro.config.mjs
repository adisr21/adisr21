// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';

// Connect real translations in the sitemap and keep editorial drafts out.
const blogDirectory = new URL('./src/content/blog/', import.meta.url);
const articleRecords = readdirSync(blogDirectory, { recursive: true })
  .filter((file) => typeof file === 'string' && /\.(md|mdx)$/.test(file))
  .map((file) => {
    const frontmatter = readFileSync(new URL(file, blogDirectory), 'utf8').split('---')[1] ?? '';
    const lang = /^lang:\s*['"]?id['"]?\s*$/m.test(frontmatter) ? 'id' : 'en';
    const key = frontmatter.match(/^translationKey:\s*['"]?([a-z0-9-]+)['"]?\s*$/m)?.[1];
    if (!key) throw new Error(`Missing article translationKey: ${file}`);
    return { lang, key, draft: /^draft:\s*true\s*$/m.test(frontmatter), path: `${lang === 'id' ? '/id' : ''}/blog/${key}/` };
  });
const draftPaths = articleRecords.filter(post => post.draft).map(post => post.path);
const translatedPagePaths = ['/', '/about/', '/blog/', '/work/optical-management-system/', '/work/order-system/'];
const languageLinks = [
  ...translatedPagePaths.map(path => [{ lang: 'en', url: `https://adisr.xyz${path}` }, { lang: 'id', url: `https://adisr.xyz/id${path}` }]),
  ...[...new Set(articleRecords.map(post => post.key))].map(key => articleRecords
    .filter(post => post.key === key && !post.draft)
    .map(post => ({ lang: post.lang, url: `https://adisr.xyz${post.path}` }))),
];

// https://astro.build/config
export default defineConfig({
	site: 'https://adisr.xyz',
	i18n: { locales: ['en', 'id'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } },
	redirects: { '/work/optik-siliwangi': '/work/optical-management-system/' },
	integrations: [mdx(), sitemap({
      filter: (page) => !draftPaths.includes(`${new URL(page).pathname.replace(/\/$/, '')}/`),
      serialize: (item) => ({ ...item, links: languageLinks.find(links => links.some(link => link.url === item.url)) }),
    })],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
