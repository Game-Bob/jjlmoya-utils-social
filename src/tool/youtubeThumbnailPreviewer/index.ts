import type { SocialToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import YoutubeThumbnailPreviewerComponent from './component.astro';
import YoutubeThumbnailPreviewerSEO from './seo.astro';
import YoutubeThumbnailPreviewerBibliography from './bibliography.astro';

import type { YoutubeThumbnailPreviewerUI } from './ui';

export type YoutubeThumbnailPreviewerLocaleContent = ToolLocaleContent<YoutubeThumbnailPreviewerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const youtubeThumbnailPreviewer: SocialToolEntry<YoutubeThumbnailPreviewerUI> = {
  id: 'youtube-thumbnail-previewer',
  icons: {
    bg: 'mdi:youtube',
    fg: 'mdi:image-search-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { YoutubeThumbnailPreviewerComponent, YoutubeThumbnailPreviewerSEO, YoutubeThumbnailPreviewerBibliography };

export const YOUTUBE_THUMBNAIL_PREVIEWER_TOOL: ToolDefinition = {
  entry: youtubeThumbnailPreviewer,
  Component: YoutubeThumbnailPreviewerComponent,
  SEOComponent: YoutubeThumbnailPreviewerSEO,
  BibliographyComponent: YoutubeThumbnailPreviewerBibliography,
};
