import React, { useState } from 'react';
import { CORE_METRICS } from '../../data/mockData';
import { KeyMetricsChart } from '../common/KeyMetricsChart';
import { MetricItem } from '../../types';
import { BarChart3, HelpCircle, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

interface Page19MetricsExplainedProps {
  onNavigate: (slug: string) => void;
}

export const Page19MetricsExplained: React.FC<Page19MetricsExplainedProps> = ({ onNavigate }) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricItem>(CORE_METRICS[0]);

  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">The 7 Code Quality Dimensions Explained</h2>
            <p className="text-xs text-slate-500">Mathematical formulation, pedagogical significance, and remediation strategies</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Rather than assessing general subjective cleanliness, the system calculates seven rigorous structural metrics. Each metric maps directly to software engineering principles that determine code maintainability and correctness.
        </p>
      </section>

      {/* Reusable Key Metrics Chart Instance #1 */}
      <KeyMetricsChart
        metrics={CORE_METRICS}
        title="Interactive Metric Benchmark Evaluation"
        subtitle="Click any metric to inspect its detailed formula and pedagogical rationale below"
        highlightKey={selectedMetric.key}
        onSelectMetric={(m) => setSelectedMetric(m)}
      />

      {/* Deep-Dive on Selected Metric Card */}
      <section className="bg-white rounded-2xl border-2 border-indigo-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
              Selected Dimension Deep Dive
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedMetric.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Target Benchmark:</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 font-mono font-bold text-slate-800 text-xs">
              {selectedMetric.benchmark}/100
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
              Plain-Language Definition
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">{selectedMetric.plainMeaning}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              Why It Matters in Software
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">{selectedMetric.whyItMatters}</p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
              Recommended Habit Action
            </h4>
            <p className="text-xs text-slate-800 leading-relaxed">{selectedMetric.recommendedAction}</p>
          </div>
        </div>
      </section>

      {/* Quick Summary Matrix for all 7 metrics */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">Complete 7-Metric Reference Matrix</h3>
        <div className="divide-y divide-slate-100">
          {CORE_METRICS.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelectedMetric(m)}
              className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 px-2 rounded-lg transition-colors"
            >
              <div>
                <span className="text-xs font-bold text-slate-900 hover:text-indigo-600">{m.name}</span>
                <p className="text-[11px] text-slate-500 line-clamp-1">{m.plainMeaning}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0 text-xs">
                <span className="font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{m.valueDisplay}</span>
                <span className={`font-semibold ${m.score >= m.benchmark ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {m.score}/100
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
