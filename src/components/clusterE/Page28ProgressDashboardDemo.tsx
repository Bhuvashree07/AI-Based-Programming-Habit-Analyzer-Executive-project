import React from 'react';
import { SAMPLE_SUBMISSIONS } from '../../data/mockData';
import { LineChart, TrendingUp, Award, CheckCircle2, ArrowRight, ArrowUpRight, Flame } from 'lucide-react';

interface Page28ProgressDashboardDemoProps {
  onNavigate: (slug: string) => void;
}

export const Page28ProgressDashboardDemo: React.FC<Page28ProgressDashboardDemoProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8" id="progress-dashboard-demo">
      {/* Interactive Prototype Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-amber-900">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <strong className="font-semibold">Interactive Prototype:</strong> Longitudinal Progress Analytics (Page 28 of 35)
        </div>
        <button
          onClick={() => onNavigate('demo-teacher-dashboard')}
          className="text-amber-800 hover:text-amber-950 underline font-medium flex items-center gap-1"
        >
          <span>Next: Teacher/Admin Dashboard Demo</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Trajectory Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              GROWTH TRAJECTORY: +26 POINTS
            </span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Alex Sharma's Semester Progression</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Continuous behavioral monitoring across Assignments 1 through 5 (Jan 15 - Feb 18, 2026).
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting Baseline</span>
            <span className="text-xl font-bold text-slate-500">58/100</span>
          </div>
          <div className="text-2xl text-slate-300">→</div>
          <div className="text-center">
            <span className="text-[10px] uppercase font-bold text-indigo-500 block">Current Level</span>
            <span className="text-2xl font-black text-indigo-600">84/100</span>
          </div>
        </div>
      </div>

      {/* Visual Timeline Progression Chart */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            Assignment Quality Score Timeline
          </h3>
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-4 h-4" /> +44.8% Relative Growth
          </span>
        </div>

        {/* Progress Bar Visualization */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {SAMPLE_SUBMISSIONS.map((sub, i) => (
            <div key={sub.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Assignment 0{i + 1}</span>
                <h4 className="text-xs font-bold text-slate-900 mt-0.5 truncate">{sub.title}</h4>
                <span className="text-[10px] text-slate-500 block mt-1">{sub.timestamp}</span>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-baseline justify-between">
                <span className="text-xl font-black text-indigo-600">{sub.overallScore}</span>
                <span className="text-[10px] text-slate-400">/100</span>
              </div>

              {/* Mini visual bar height */}
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-indigo-600 h-full rounded-full transition-all"
                  style={{ width: `${sub.overallScore}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Badges Earned */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-500" />
          Mastered Behavioral Milestones
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
            <div className="text-lg">🛡️</div>
            <h4 className="text-xs font-bold text-amber-950">Guard Clause Adoption</h4>
            <p className="text-[11px] text-slate-600">Reduced maximum loop nesting from Level 5 to Level 2.</p>
            <span className="text-[10px] text-amber-800 font-semibold block pt-1">Achieved: Feb 02, 2026</span>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-1">
            <div className="text-lg">✂️</div>
            <h4 className="text-xs font-bold text-indigo-950">Dry Code Practitioner</h4>
            <p className="text-[11px] text-slate-600">Suppressed code duplication from 18% down to under 2%.</p>
            <span className="text-[10px] text-indigo-800 font-semibold block pt-1">Achieved: Feb 10, 2026</span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
            <div className="text-lg">📦</div>
            <h4 className="text-xs font-bold text-emerald-950">Method Decomposition</h4>
            <p className="text-[11px] text-slate-600">Maintained function length &lt; 20 lines across 3 submissions.</p>
            <span className="text-[10px] text-emerald-800 font-semibold block pt-1">Achieved: Feb 18, 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
