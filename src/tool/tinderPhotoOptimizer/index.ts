export * from './entry';
export const TINDER_PHOTO_OPTIMIZER_TOOL: ToolDefinition = {
  entry: tinderPhotoOptimizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
