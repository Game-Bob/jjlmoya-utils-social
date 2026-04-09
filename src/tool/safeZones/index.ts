import type { SocialToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SafeZonesComponent from './component.astro';
import SafeZonesSEO from './seo.astro';
import SafeZonesBibliography from './bibliography.astro';

import type { SafeZonesUI } from './ui';

export type SafeZonesLocaleContent = ToolLocaleContent<SafeZonesUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const safeZones: SocialToolEntry<SafeZonesUI> = {
  id: 'safe-zones',
  icons: {
    bg: 'mdi:cellphone',
    fg: 'mdi:crop-free',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { SafeZonesComponent, SafeZonesSEO, SafeZonesBibliography };

export const SAFE_ZONES_TOOL: ToolDefinition = {
  entry: safeZones,
  Component: SafeZonesComponent,
  SEOComponent: SafeZonesSEO,
  BibliographyComponent: SafeZonesBibliography,
};
