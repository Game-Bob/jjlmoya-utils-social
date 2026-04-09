import type { SocialToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import YoutubeThumbnailComponent from './component.astro';
import YoutubeThumbnailSEO from './seo.astro';
import YoutubeThumbnailBibliography from './bibliography.astro';

import type { YoutubeThumbnailUI } from './ui';
export type YoutubeThumbnailLocaleContent = ToolLocaleContent<YoutubeThumbnailUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const youtubeThumbnail: SocialToolEntry<YoutubeThumbnailUI> = {
  id: 'youtube-thumbnail',
  icons: {
    bg: 'mdi:youtube',
    fg: 'mdi:image-search',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { YoutubeThumbnailComponent, YoutubeThumbnailSEO, YoutubeThumbnailBibliography };

export const YOUTUBE_THUMBNAIL_TOOL: ToolDefinition = {
  entry: youtubeThumbnail,
  Component: YoutubeThumbnailComponent,
  SEOComponent: YoutubeThumbnailSEO,
  BibliographyComponent: YoutubeThumbnailBibliography,
};
