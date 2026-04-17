import type { SocialToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import RedditFormatterComponent from './component.astro';
import RedditFormatterSEO from './seo.astro';
import RedditFormatterBibliography from './bibliography.astro';

import type { RedditFormatterUI } from './ui';
export type RedditFormatterLocaleContent = ToolLocaleContent<RedditFormatterUI>;

export const redditFormatter: SocialToolEntry<RedditFormatterUI> = {
  id: 'reddit-formatter',
  icons: {
    bg: 'mdi:reddit',
    fg: 'mdi:format-text-rotation-none',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { RedditFormatterComponent, RedditFormatterSEO, RedditFormatterBibliography };

export const REDDIT_FORMATTER_TOOL: ToolDefinition = {
  entry: redditFormatter,
  Component: RedditFormatterComponent,
  SEOComponent: RedditFormatterSEO,
  BibliographyComponent: RedditFormatterBibliography,
};
