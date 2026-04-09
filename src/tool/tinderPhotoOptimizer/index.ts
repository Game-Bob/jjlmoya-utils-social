import type { SocialToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TinderPhotoOptimizerComponent from './component.astro';
import TinderPhotoOptimizerSEO from './seo.astro';
import TinderPhotoOptimizerBibliography from './bibliography.astro';

import type { TinderPhotoOptimizerUI } from './ui';

export type TinderPhotoOptimizerLocaleContent = ToolLocaleContent<TinderPhotoOptimizerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const tinderPhotoOptimizer: SocialToolEntry<TinderPhotoOptimizerUI> = {
  id: 'tinder-photo-optimizer',
  icons: {
    bg: 'mdi:fire',
    fg: 'mdi:image-edit-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { TinderPhotoOptimizerComponent, TinderPhotoOptimizerSEO, TinderPhotoOptimizerBibliography };

export const TINDER_PHOTO_OPTIMIZER_TOOL: ToolDefinition = {
  entry: tinderPhotoOptimizer,
  Component: TinderPhotoOptimizerComponent,
  SEOComponent: TinderPhotoOptimizerSEO,
  BibliographyComponent: TinderPhotoOptimizerBibliography,
};
