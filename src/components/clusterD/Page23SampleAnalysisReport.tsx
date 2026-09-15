import React from 'react';
import { FileSpreadsheet, Code2, CheckCircle2, AlertTriangle, Sparkles, ArrowRight, Printer, Share2 } from 'lucide-react';
import { KeyMetricsChart } from '../common/KeyMetricsChart';
import { MetricItem } from '../../types';

interface Page23SampleAnalysisReportProps {
  onNavigate: (slug: string) => void;
}

export const Page23SampleAnalysisReport: React.FC<Page23SampleAnalysisReportProps> = ({ onNavigate }) => {
  // Customized sample metrics for Submission SUB-1085
  const sampleMetrics: MetricItem[] = [
    {
      id: 'sm1',
      name: 'Cyclomatic Complexity',
      key: 'complexity',
      score: 78,
      benchmark: 85,
      status: 'warning',
      unit: 'v(G)',
      valueDisplay: '6.4 avg / func',
      plainMeaning: 'Measures independent decision pathways.',
      whyItMatters: 'Higher complexity correlates with higher defect rates.',
      recommendedAction: 'Extract inner match branches into helper predicates.',
    },
    {
      id: 'sm2',
      name: 'Code Duplication',
      key: 'duplication',
      score: 91,
      benchmark: 80,
      status: 'optimal',
      unit: '% dup',
      valueDisplay: '1.9% duplicated',
      plainMeaning: 'Repeated syntactic token sequences.',
      whyItMatters: 'Zero duplication guarantees single-point bug fixes.',
      recommendedAction: 'Maintain current shared utility structure.',
    },
    {
      id: 'sm3',
      name: 'Nesting Level',
      key: 'nesting',
      score: 75,
      benchmark: 80,
      status: 'warning',
      unit: 'levels',
      valueDisplay: '3.0 max depth',
      plainMeaning: 'Max depth of embedded loops and conditionals.',
      whyItMatters: 'Flatter code is exponentially easier to comprehend.',
      recommendedAction: 'Apply guard returns at line 48 to eliminate level 3 indentation.',
    },
    {
      id: 'sm4',
      name: 'Naming Quality',
      key: 'naming',
      score: 88,
      benchmark: 80,
      status: 'optimal',
      unit: 'rating',
      valueDisplay: '88 / 100 rating',
      plainMeaning: 'Intention-revealing identifier clarity.',
      whyItMatters: 'Domain nouns reduce cognitive load.',
      recommendedAction: 'Excellent domain nouns utilized throughout class definition.',
    },
    {
      id: 'sm5',
      name: 'Documentation',
      key: 'documentation',
      score: 86,
      benchmark: 75,
      status: 'optimal',
      unit: '% covered',
      valueDisplay: '90% docstring ratio',
      plainMeaning: 'Presence of docstrings and parameter contracts.',
      whyItMatters: 'Accelerates interface discovery.',
      recommendedAction: 'Document expected exceptions for edge-case cache evictions.',
    },
    {
      id: 'sm6',
      name: 'Testing Practices',
      key: 'testing',
      score: 65,
      benchmark: 75,
      status: 'warning',
      unit: '% coverage',
      valueDisplay: '58% test assertions',
      plainMeaning: 'Ratio of boundary and exception assertions.',
      whyItMatters: 'Protects refactoring stability.',
      recommendedAction: 'Add negative tests for cache capacity overflow and null keys.',
    },
    {
      id: 'sm7',
      name: 'Function Modularity',
      key: 'functionUsage',
      score: 85,
      benchmark: 75,
      status: 'optimal',
      unit: 'LOC/fn',
      valueDisplay: '16.4 lines / func',
      plainMeaning: 'Single-responsibility encapsulation.',
      whyItMatters: 'Modular routines facilitate rapid unit testing.',
      recommendedAction: 'Maintain current small method conventions.',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Report metadata header card */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                REPORT REF: SUB-1085-AUDIT
              </span>
              <span className="text-xs text-slate-400">• Analyzed in 240ms</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Assignment 5: LRU Cache & Event Dispatcher</h2>
            <p className="text-xs text-slate-500 mt-1">Student ID: CS-2026-STU48 • Language: Python 3.11 • 220 LOC</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-2xl font-black text-indigo-600">84/100</div>
              <div className="text-[10px] uppercase font-bold text-emerald-600">Quality Grade A-</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-xs text-slate-600">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Total Functions</span>
            <span className="text-slate-900 font-bold text-sm">8 Defined</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Average Function Length</span>
            <span className="text-slate-900 font-bold text-sm">16.4 Lines</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Max Nesting Encountered</span>
            <span className="text-slate-900 font-bold text-sm">Level 3</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">AST Traversal Nodes</span>
            <span className="text-slate-900 font-bold text-sm">1,420 Tokens</span>
          </div>
        </div>
      </section>

      {/* Reusable Key Metrics Chart Instance #2 */}
      <KeyMetricsChart
        metrics={sampleMetrics}
        title="Comprehensive Quality Scorecard (SUB-1085)"
        subtitle="Live calculation across all 7 evaluated dimensions for this submission"
      />

      {/* AI Diagnostic Commentary Card */}
      <section className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md space-y-4">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          Gemini AI Automated Assessment Review
        </div>
        <p className="text-sm text-slate-200 leading-relaxed">
          "This submission demonstrates remarkable progress compared to your first three assignments. You have completely dismantled the monolithic structure previously observed in Assignment 1, breaking the cache logic into eight clean, self-contained methods averaging just 16 lines each. Code duplication has plummeted to an exceptional 1.9%."
        </p>
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 space-y-2">
          <div className="font-bold text-indigo-300">Remaining Focus Area: Boundary Test Coverage</div>
          <p className="leading-relaxed">
            While your happy-path tests verify regular cache hits and misses, the test suite does not assert what occurs when capacity is set to zero or when keys are non-hashable. Addressing boundary testing will bring your overall quality score above 90.
          </p>
        </div>
      </section>
    </div>
  );
};
