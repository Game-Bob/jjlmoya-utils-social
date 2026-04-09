import type { SocialToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import SocialImageResizerComponent from './component.astro';
import SocialImageResizerSEO from './seo.astro';
import SocialImageResizerBibliography from './bibliography.astro';

import type { SocialImageResizerUI } from './ui';
export type SocialImageResizerLocaleContent = ToolLocaleContent<SocialImageResizerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const socialImageResizer: SocialToolEntry<SocialImageResizerUI> = {
  id: 'social-image-resizer',
  icons: {
    bg: 'mdi:image-size-select-large',
    fg: 'mdi:crop',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { SocialImageResizerComponent, SocialImageResizerSEO, SocialImageResizerBibliography };

export const SOCIAL_IMAGE_RESIZER_TOOL: ToolDefinition = {
  entry: socialImageResizer,
  Component: SocialImageResizerComponent,
  SEOComponent: SocialImageResizerSEO,
  BibliographyComponent: SocialImageResizerBibliography,
};
