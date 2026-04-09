export interface SocialValueCalculatorUI extends Record<string, string> {
  // Sidebar
  sectionTag: string;
  labelFollowers: string;
  labelAvgViewsTiktok: string;
  labelAvgViewsIg: string;
  tooltipViews: string;
  labelEngagement: string;
  tooltipEngagement: string;
  labelNiche: string;
  // Niche options
  nicheEntertainment: string;
  nicheFinance: string;
  nicheTech: string;
  nicheFitness: string;
  nicheFashion: string;
  nicheTravel: string;
  nicheFood: string;
  nicheGaming: string;
  nicheHome: string;
  // Button
  btnCalculate: string;
  // Empty state
  emptyTitle: string;
  emptyDesc: string;
  // Results
  roiLabel: string;
  rangeLabel: string;
  audienceQuality: string;
  metricER: string;
  investmentEfficiency: string;
  metricCPM: string;
  insightText: string;
  // Localisation
  currencySymbol: string;
  numberLocale: string;
}
