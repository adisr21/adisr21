import { messages } from './messages.ts';

export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];
export type Message = keyof typeof messages;
export type Alternates = Partial<Record<Locale, string>>;
export const languageNames: Record<Locale, string> = { en: 'English', id: 'Bahasa Indonesia' };

export function getLocale(pathname: string): Locale {
    return /^\/id(?:\/|$)/.test(pathname) ? 'id' : 'en';
}

export function localizePath(path: string, locale: Locale): string {
    const url = new URL(path, 'https://adisr.xyz');
    const bare = url.pathname.replace(/^\/id(?=\/|$)/, '') || '/';
    const pathname = locale === 'id' ? `/id${bare}` : bare;
    return `${pathname}${url.search}${url.hash}`;
}

export function useTranslations(locale: Locale) {
    return (message: Message): string => locale === 'id' ? messages[message] : message;
}

export function i18n(pathname: string) {
    const lang = getLocale(pathname);
    return { lang, t: useTranslations(lang), href: (path: string) => localizePath(path, lang) };
}
