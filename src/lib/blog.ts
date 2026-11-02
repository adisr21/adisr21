import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePath, type Alternates, type Locale } from '../i18n';

export async function allPosts() {
    const posts = await getCollection('blog');
    const seen = new Set<string>();
    for (const post of posts) {
        const key = `${post.data.lang}:${post.data.translationKey}`;
        if (seen.has(key)) throw new Error(`Duplicate article translation: ${key}`);
        seen.add(key);
    }
    return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function postsForLocale(lang: Locale) {
    return (await allPosts()).filter(post => post.data.lang === lang);
}

export function postPath(post: CollectionEntry<'blog'>) {
    return localizePath(`/blog/${post.data.translationKey}/`, post.data.lang);
}

export async function postAlternates(post: CollectionEntry<'blog'>): Promise<Alternates> {
    return Object.fromEntries((await allPosts()).filter(candidate => candidate.data.translationKey === post.data.translationKey)
        .map(candidate => [candidate.data.lang, postPath(candidate)]));
}
