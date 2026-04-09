export interface CalcInputs {
  followers: number;
  avgViews: number;
  avgEngagement: number;
  niche: string;
  platform: 'tiktok' | 'instagram';
}

export interface CalcResult {
  tariff: number;
  lowRange: number;
  highRange: number;
  er: number;
  projectedCPM: number;
}

const NICHE_MULTIPLIERS: Record<string, number> = {
  entertainment: 1.0,
  finance: 2.3,
  tech: 1.9,
  fitness: 1.5,
  fashion: 1.3,
  travel: 1.4,
  food: 1.2,
  gaming: 1.25,
  home: 2.1,
};

function getQualityScore(er: number): number {
  if (er < 2) return 0.85;
  if (er < 5) return 1.1;
  if (er < 10) return 1.4;
  return 1.8;
}

export function calculateValue(inputs: CalcInputs): CalcResult | null {
  const { followers, avgViews, avgEngagement, niche, platform } = inputs;
  if (followers === 0 && avgViews === 0) return null;

  const er = followers > 0 ? (avgEngagement / followers) * 100 : 0;

  let baseRate = 0;
  if (platform === 'tiktok') {
    baseRate = avgViews * 0.015;
  } else {
    baseRate = followers * 0.006 + avgViews * 0.02;
  }

  const nicheMult = NICHE_MULTIPLIERS[niche] ?? 1.0;
  const qualityScore = getQualityScore(er);
  const tariff = baseRate * nicheMult * qualityScore;

  return {
    tariff,
    lowRange: tariff * 0.8,
    highRange: tariff * 1.3,
    er,
    projectedCPM: avgViews > 0 ? (tariff / avgViews) * 1000 : 0,
  };
}
