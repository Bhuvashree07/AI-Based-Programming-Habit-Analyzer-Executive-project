import React from 'react';
import { Activity, ShieldAlert, CheckCircle2, TrendingDown, ArrowRight, ExternalLink } from 'lucide-react';

interface Page15HabitDetectionProps {
  onNavigate: (slug: string) => void;
}

export const Page15HabitDetection: React.FC<Page15HabitDetectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Module 4: Habit Detection</h2>
            <p className="text-xs text-slate-500">Cross-Submission Sliding-Window Pattern Classification</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Habit Detection module bridges the gap between single-program metrics and true behavioral understanding. By examining multiple submissions across time, it separates occasional anomalies from persistent habits.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            Classifying Recurring Weaknesses
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            If an anti-pattern (such as nested loops &gt; 4 levels or single-letter loop variables) occurs in <strong>60% or more of submissions</strong> within the active sliding window, the system flags it as an active chronic weakness.
          </p>
          <div className="p-3 bg-rose-50 rounded-lg border border-rose-200 text-xs text-rose-900 space-y-1">
            <div className="font-bold">Detected Habit: Excessive Control-Flow Nesting</div>
            <div>Occurred in 4 out of last 5 assignments (80% frequency) • Severity: High</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Reinforcing Positive Strengths
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Equally important to pedagogical development is positive reinforcement. Consistent modular decomposition (&lt; 25 lines per routine) or near-zero code duplication is celebrated as a verified coding strength.
          </p>
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-900 space-y-1">
            <div className="font-bold">Verified Strength: Modular Decomposition</div>
            <div>Maintained average function length of 18 lines across all 5 submissions</div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-amber-950">Inspect the habit classification matrix</h4>
          <p className="text-xs text-slate-600 mt-0.5">Explore the live Habit Detection Report Demo with active strengths and weaknesses (Page 27).</p>
        </div>
        <button
          onClick={() => onNavigate('demo-habit-detection')}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <span>Open Habit Detection Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
