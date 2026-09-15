import React from 'react';
import { Binary, ShieldAlert, CheckCircle2, Sliders, ArrowRight, Activity, Percent } from 'lucide-react';

interface Page20HabitDetectionLogicProps {
  onNavigate: (slug: string) => void;
}

export const Page20HabitDetectionLogic: React.FC<Page20HabitDetectionLogicProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <Binary className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Habit Detection Logic & Heuristics</h2>
            <p className="text-xs text-slate-500">Sliding Window Time Horizons, Frequency Thresholds, and Classification Scoring</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          How does the system know whether deeply nested code is an isolated anomaly or a chronic bad habit? This page reveals the mathematical logic governing habit identification across the student's submission history.
        </p>
      </section>

      {/* The 3 Core Heuristic Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
            <Sliders className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-slate-900">1. Sliding Window (N = 5)</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Evaluation is calculated across the most recent $N$ submissions (default $N = 5$) to maintain recency sensitivity while ignoring transient outliers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
            <Percent className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-slate-900">2. Frequency Threshold (≥ 60%)</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            If a defect breaches acceptable limits in $\ge 60\%$ of submissions in the window (e.g. 3 of 5 assignments), it is promoted from a warning to an <strong>Active Habit</strong>.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-slate-900">3. Resolution Condition</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            A previously active bad habit is marked as <strong>Resolved / Overcome</strong> only when compliant scores are sustained for 3 consecutive submissions.
          </p>
        </div>
      </section>

      {/* Mathematical Classification Matrix Table */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs overflow-hidden">
        <h3 className="text-base font-bold text-slate-900 mb-4">Classification Decision Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                <th className="py-2.5 px-3 font-semibold">Tracked Dimension</th>
                <th className="py-2.5 px-3 font-semibold">Violation Condition</th>
                <th className="py-2.5 px-3 font-semibold">Strength Condition</th>
                <th className="py-2.5 px-3 font-semibold">Severity Assigned</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-900">Nesting Level</td>
                <td className="py-3 px-3 text-rose-700">Depth &gt; 4 in $\ge$ 60% submissions</td>
                <td className="py-3 px-3 text-emerald-700">Max depth $\le$ 2 across all</td>
                <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold">HIGH</span></td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-900">Code Duplication</td>
                <td className="py-3 px-3 text-rose-700">Duplication &gt; 12% in $\ge$ 50% submissions</td>
                <td className="py-3 px-3 text-emerald-700">Duplication &lt; 3% across all</td>
                <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold">HIGH</span></td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-900">Cyclomatic Complexity</td>
                <td className="py-3 px-3 text-amber-700">Avg function $v(G) &gt; 10$</td>
                <td className="py-3 px-3 text-emerald-700">Avg function $v(G) \le 5$</td>
                <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">MEDIUM</span></td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-900">Identifier Naming</td>
                <td className="py-3 px-3 text-amber-700">Single-letter variable ratio &gt; 25%</td>
                <td className="py-3 px-3 text-emerald-700">Single-letter ratio &lt; 5%</td>
                <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">MEDIUM</span></td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-900">Testing Practices</td>
                <td className="py-3 px-3 text-rose-700">Zero unit test assertions in $\ge$ 40%</td>
                <td className="py-3 px-3 text-emerald-700">Coverage assertion ratio &gt; 70%</td>
                <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold">HIGH</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
