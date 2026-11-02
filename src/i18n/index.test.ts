import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getLocale, localizePath, i18n, useTranslations } from './index.ts';

test('locale detection respects path segment boundaries', () => {
  assert.equal(getLocale('/id'), 'id');
  assert.equal(getLocale('/id/blog/example/'), 'id');
  for (const path of ['/', '/blog/', '/identity/', '/work/id/']) assert.equal(getLocale(path), 'en');
});

test('language switches preserve the page, query and fragment without repeated prefixes', () => {
  for (const path of ['/', '/about/', '/blog/clarity-before-complexity/', '/work/optical-management-system/', '/rss.xml']) {
    const localized = localizePath(`${path}?source=journal#work`, 'id');
    assert.equal(localized, `/id${path}?source=journal#work`);
    assert.equal(localizePath(localized, 'id'), localized);
    assert.equal(localizePath(localized, 'en'), `${path}?source=journal#work`);
  }
  assert.equal(localizePath('/id', 'en'), '/');
  assert.equal(localizePath('/identity/', 'id'), '/id/identity/');
});

test('templates receive locale-specific UI and navigation', () => {
  const { lang, t, href } = i18n('/id/blog/');
  assert.equal(lang, 'id');
  assert.equal(t('Search articles'), 'Cari artikel');
  assert.equal(href('/work/order-system/'), '/id/work/order-system/');
  assert.equal(useTranslations('en')('Search articles'), 'Search articles');
});
