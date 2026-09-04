import type { ToolDefinition } from '../../types';
import { redditFormatter } from './entry';
export * from './entry';
export const REDDIT_FORMATTER_TOOL: ToolDefinition = {
  entry: redditFormatter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
