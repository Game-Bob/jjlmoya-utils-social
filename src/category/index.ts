import type { SocialCategoryEntry } from '../types';
import { safeZones } from '../tool/safeZones/index';

export const socialCategory: SocialCategoryEntry = {
  icon: 'mdi:account-group',
  tools: [safeZones],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

