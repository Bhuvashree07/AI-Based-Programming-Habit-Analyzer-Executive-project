export type ClusterId = 'overview' | 'system' | 'modules' | 'ai-metrics' | 'demo' | 'impact' | 'about';

export interface PageInfo {
  id: string;
  num: number;
  slug: string;
  title: string;
  shortTitle: string;
  cluster: ClusterId;
  clusterName: string;
  description: string;
  icon: string;
  relatedPages?: string[]; // slugs
}

export interface MetricItem {
  id: string;
  name: string;
  key: string;
  score: number; // 0-100
  benchmark: number;
  status: 'optimal' | 'warning' | 'critical';
  unit: string;
  valueDisplay: string;
  plainMeaning: string;
  whyItMatters: string;
  recommendedAction: string;
}

export interface HabitItem {
  id: string;
  title: string;
  type: 'weakness' | 'strength';
  frequency: number; // e.g. 78% of submissions
  occurrences?: number;
  severity: 'high' | 'medium' | 'low';
  category: string;
  description: string;
  codeExampleBad?: string;
  codeExampleGood?: string;
  aiExplanation: string;
  suggestedAction: string;
}

export type PageMeta = PageInfo;

export interface SubmissionSample {
  id: string;
  title: string;
  timestamp: string;
  language: string;
  loc: number;
  overallScore: number;
  status: string;
  metrics: {
    complexity: number;
    duplication: number;
    nesting: number;
    naming: number;
    documentation: number;
    testing: number;
    functionUsage: number;
  };
}
