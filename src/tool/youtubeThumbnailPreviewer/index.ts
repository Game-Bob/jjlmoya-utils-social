export * from './entry';
export const YOUTUBE_THUMBNAIL_PREVIEWER_TOOL: ToolDefinition = {
  entry: youtubeThumbnailPreviewer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
