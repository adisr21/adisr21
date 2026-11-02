import { localizedFeed } from '../lib/rss';

export async function GET(context) {
  return localizedFeed(context.site, 'en');
}
