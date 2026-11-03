import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { useTranslations, type Locale } from '../i18n';
import { postsForLocale, postPath } from './blog';

export async function localizedFeed(site: URL | undefined, lang: Locale) {
  const t = useTranslations(lang);
  const posts = (await postsForLocale(lang)).filter(post => !post.data.draft);
  return rss({
    title: t(SITE_TITLE),
    description: t(SITE_DESCRIPTION),
    site: site ?? 'https://adisr21.xyz',
    customData: `<language>${lang}</language>`,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post),
    })),
  });
}
