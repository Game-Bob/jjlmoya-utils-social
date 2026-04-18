export * from './entry';
export const SOCIAL_IMAGE_RESIZER_TOOL: ToolDefinition = {
  entry: socialImageResizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
