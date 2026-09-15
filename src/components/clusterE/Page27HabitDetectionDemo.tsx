import React, { useState } from 'react';
import { DETECTED_HABITS } from '../../data/mockData';
import { HabitItem } from '../../types';
import { Activity, ShieldAlert, CheckCircle2, Filter, ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';

interface Page27HabitDetectionDemoProps {
  onNavigate: (slug: string) => void;
}

export const Page27HabitDetectionDemo: React.FC<Page27HabitDetectionDemoProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'strength' | 'weakness'>('all');

  const filteredHabits = DETECTED_HABITS.filter((h) => {
    if (filter === 'all') return true;
    return h.type === filter;
  });

  return (
    <div className="space-y-8" id="habit-detection-demo">
      {/* Interactive Prototype Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-amber-900">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <strong className="font-semibold">Interactive Prototype:</strong> Habit Detection Ledger (Page 27 of 35)
        </div>
        <button
          onClick={() => onNavigate('demo-progress-tracking')}
          className="text-amber-800 hover:text-amber-950 underline font-medium flex items-center gap-1"
        >
          <span>Next: Progress Tracking Demo</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Header & Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
              SLIDING WINDOW: LAST 5 SUBMISSIONS
            </span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Longitudinal Habit Classification Ledger</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Patterns observed consistently across Assignments 1 through 5 for student Alex Sharma.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === 'all' ? 'bg-white text-indigo-600 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Patterns ({DETECTED_HABITS.length})
          </button>
          <button
            onClick={() => setFilter('weakness')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === 'weakness' ? 'bg-white text-rose-600 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Weaknesses ({DETECTED_HABITS.filter((h) => h.type === 'weakness').length})
          </button>
          <button
            onClick={() => setFilter('strength')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === 'strength' ? 'bg-white text-emerald-600 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Strengths ({DETECTED_HABITS.filter((h) => h.type === 'strength').length})
          </button>
        </div>
      </div>

      {/* Habits List */}
      <div className="space-y-4">
        {filteredHabits.map((h) => (
          <div
            key={h.id}
            className={`bg-white rounded-2xl border p-6 shadow-xs transition-all ${
              h.type === 'weakness'
                ? 'border-rose-200 hover:border-rose-400'
                : 'border-emerald-200 hover:border-emerald-400'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                {h.type === 'weakness' ? (
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}
                <div>
                  <h3 className="text-base font-bold text-slate-900">{h.title}</h3>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">{h.category}</span>
                    <span>•</span>
                    <span>Observed in {h.occurrences} of 5 submissions ({h.frequency}% frequency)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    h.severity === 'high'
                      ? 'bg-rose-100 text-rose-800'
                      : h.severity === 'medium'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {h.type === 'strength' ? 'VERIFIED STRENGTH' : `${h.severity} SEVERITY`}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 mt-3 leading-relaxed">{h.description}</p>

            {/* AI Explanation preview */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                AI Contextual Feedback:
              </div>
              <p className="text-slate-600 italic">"{h.aiExplanation}"</p>
              <div className="text-indigo-600 font-semibold pt-1">
                Remediation: {h.suggestedAction}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
