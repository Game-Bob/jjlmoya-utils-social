import type { SocialToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import RedditFormatterComponent from './component.astro';
import RedditFormatterSEO from './seo.astro';
import RedditFormatterBibliography from './bibliography.astro';

import type { RedditFormatterUI } from './ui';
export type RedditFormatterLocaleContent = ToolLocaleContent<RedditFormatterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const redditFormatter: SocialToolEntry<RedditFormatterUI> = {
  id: 'reddit-formatter',
  icons: {
    bg: 'mdi:reddit',
    fg: 'mdi:format-text-rotation-none',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { RedditFormatterComponent, RedditFormatterSEO, RedditFormatterBibliography };

export const REDDIT_FORMATTER_TOOL: ToolDefinition = {
  entry: redditFormatter,
  Component: RedditFormatterComponent,
  SEOComponent: RedditFormatterSEO,
  BibliographyComponent: RedditFormatterBibliography,
};
