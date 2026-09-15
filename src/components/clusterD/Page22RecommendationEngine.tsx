import React from 'react';
import { Compass, Target, Sparkles, BookOpen, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

interface Page22RecommendationEngineProps {
  onNavigate: (slug: string) => void;
}

export const Page22RecommendationEngine: React.FC<Page22RecommendationEngineProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Personalized Recommendation Engine</h2>
            <p className="text-xs text-slate-500">Algorithmic curation of targeted micro-drills, refactoring katas, and reading modules</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Recommendation Engine maps a student’s active weakness signatures directly to a catalog of calibrated programming katas. By focusing exclusively on the specific anti-pattern observed in recent submissions, students improve without spending hours on concepts they already master.
        </p>
      </section>

      {/* 3-Step Recommendation Lifecycle */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 font-bold text-xs flex items-center justify-center">
            01
          </div>
          <h3 className="text-base font-bold text-slate-900">1. Signature Profiling</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            The engine evaluates the student’s lowest-scoring dimension (e.g. Nesting Level at 52/100, Testing at 45/100) and extracts the primary bottleneck.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 font-bold text-xs flex items-center justify-center">
            02
          </div>
          <h3 className="text-base font-bold text-slate-900">2. Constraint Matching</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Selects exercises calibrated with strict negative constraints (e.g. "Solve this search problem without writing more than one level of indentation").
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-teal-600 font-bold text-xs flex items-center justify-center">
            03
          </div>
          <h3 className="text-base font-bold text-slate-900">3. Formative Re-Evaluation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            When the student submits the refactored drill, the AST parser validates that the target metric has improved before updating the student’s habit badge status.
          </p>
        </div>
      </section>

      {/* Sample Tailored Exercise Catalog */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">Sample Generated Targeted Practice Katas</h3>
        <div className="space-y-3">
          {[
            {
              title: 'Kata 1: The Guard Clause Challenge',
              tag: 'Target: Nesting Level',
              desc: 'Refactor a 4-tier nested customer qualification function into a single-indent routine using early returns and guard statements.',
              time: '15 mins',
            },
            {
              title: 'Kata 2: Zero-Duplication Parser',
              tag: 'Target: Code Duplication',
              desc: 'Extract identical string sanitization routines from three disparate report generators into a single pure utility function.',
              time: '20 mins',
            },
            {
              title: 'Kata 3: Boundary Testing Arsenal',
              tag: 'Target: Testing Practices',
              desc: 'Write five parameterized unit test assertions covering null inputs, negative ranges, and duplicate keys for an existing hashmap.',
              time: '25 mins',
            },
          ].map((k, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">{k.title}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                    {k.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{k.desc}</p>
              </div>
              <div className="text-xs font-mono font-bold text-slate-500 shrink-0 bg-white px-2.5 py-1 rounded border border-slate-200">
                {k.time}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
