// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';

// Editorial drafts remain available for review, outside search-engine sitemaps.
const blogDirectory = new URL('./src/content/blog/', import.meta.url);
const draftPaths = readdirSync(blogDirectory)
	.filter((file) => /\.(md|mdx)$/.test(file))
	.filter((file) => /^draft:\s*true\s*$/m.test(readFileSync(new URL(file, blogDirectory), 'utf8').split('---')[1] ?? ''))
	.map((file) => `/blog/${file.replace(/\.(md|mdx)$/, '')}`);

// https://astro.build/config
export default defineConfig({
	site: 'https://adisr.xyz',
	redirects: { '/work/optik-siliwangi': '/work/optical-management-system/' },
	integrations: [mdx(), sitemap({ filter: (page) => !draftPaths.includes(new URL(page).pathname.replace(/\/$/, '')) })],
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
