export * from './entry';
export const YOUTUBE_THUMBNAIL_TOOL: ToolDefinition = {
  entry: youtubeThumbnail,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
