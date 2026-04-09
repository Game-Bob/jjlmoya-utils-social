import type { SocialToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import SocialValueCalculatorComponent from './component.astro';
import SocialValueCalculatorSEO from './seo.astro';
import SocialValueCalculatorBibliography from './bibliography.astro';

import type { SocialValueCalculatorUI } from './ui';
export type SocialValueCalculatorLocaleContent = ToolLocaleContent<SocialValueCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const socialValueCalculator: SocialToolEntry<SocialValueCalculatorUI> = {
  id: 'social-value-calculator',
  icons: {
    bg: 'mdi:currency-usd',
    fg: 'mdi:instagram',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { SocialValueCalculatorComponent, SocialValueCalculatorSEO, SocialValueCalculatorBibliography };

export const SOCIAL_VALUE_CALCULATOR_TOOL: ToolDefinition = {
  entry: socialValueCalculator,
  Component: SocialValueCalculatorComponent,
  SEOComponent: SocialValueCalculatorSEO,
  BibliographyComponent: SocialValueCalculatorBibliography,
};
