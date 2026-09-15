import React from 'react';
import { TrendingUp, LineChart, Award, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface Page17ProgressTrackingProps {
  onNavigate: (slug: string) => void;
}

export const Page17ProgressTracking: React.FC<Page17ProgressTrackingProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Module 6: Progress Tracking</h2>
            <p className="text-xs text-slate-500">Longitudinal Growth Curves, Historical Delta Comparison, and Milestone Badges</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Progress Tracking module provides the visual evidence of growth. By charting metric trajectories across weeks and marking the resolution of previously flagged bad habits, it turns programming improvement into a motivating journey.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <LineChart className="w-4 h-4 text-emerald-600" />
            Longitudinal Metric Delta Curves
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Tracks moving averages for cyclomatic complexity, nesting levels, test ratios, and overall code quality scores across assignments. Students can see their complexity drop as they adopt modular methods.
          </p>
          <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
            <span>Overall Habit Quality Index</span>
            <span className="font-bold text-emerald-700">+26% Improvement (58 → 84)</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            Habit Mitigation Milestones
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            When a previously chronic weakness (e.g. "Deep Nesting in Loops") disappears for three consecutive assignments, the system awards an automated mastery badge and updates the student portfolio.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded text-xs font-semibold">
              🏆 Master of Guard Clauses
            </span>
            <span className="px-2 py-1 bg-indigo-50 text-indigo-800 border border-indigo-200 rounded text-xs font-semibold">
              ⚡ Clean Naming Champion
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-emerald-950">View interactive longitudinal charts</h4>
          <p className="text-xs text-slate-600 mt-0.5">Explore the Progress Tracking Dashboard with interactive timeline charts (Page 28).</p>
        </div>
        <button
          onClick={() => onNavigate('demo-progress-tracking')}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <span>Open Progress Dashboard Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
