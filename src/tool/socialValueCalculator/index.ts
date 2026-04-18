export * from './entry';
export const SOCIAL_VALUE_CALCULATOR_TOOL: ToolDefinition = {
  entry: socialValueCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
