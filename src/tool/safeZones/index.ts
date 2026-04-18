export * from './entry';
export const SAFE_ZONES_TOOL: ToolDefinition = {
  entry: safeZones,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
