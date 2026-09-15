import React from 'react';
import { Network, CheckCircle2, ArrowRight, GitFork, Activity, BrainCircuit, LineChart, Sparkles } from 'lucide-react';

interface Page6ProposedSystemProps {
  onNavigate: (slug: string) => void;
}

export const Page6ProposedSystem: React.FC<Page6ProposedSystemProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      {/* Key Idea Highlight Card */}
      <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Slide 5 Core Concept</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            The Fundamental Shift: Longitudinal, Not One-Off
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            The proposed system revolutionizes programming assessment by replacing the isolated "snapshot" evaluation model with a <strong>continuous longitudinal behavioral analysis engine</strong>. Rather than judging a student based on a single moment in time, the system observes trends across 5, 10, or 20 assignments to identify chronic coding habits.
          </p>
        </div>
      </section>

      {/* System Flow Diagram */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Network className="w-5 h-5 text-indigo-600" />
          System Dataflow Sequence
        </h3>
        <p className="text-xs text-slate-500 mb-8">
          The step-by-step information flow connecting student input to pedagogical recommendations.
        </p>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-indigo-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {[
              { title: 'Student Submissions', sub: 'Multi-assignment source code ingestion', step: 'Step 1' },
              { title: 'Code Analysis', sub: 'AST inspection & quality metric calculation', step: 'Step 2' },
              { title: 'Habit Detection', sub: 'Sliding window cross-submission pattern matching', step: 'Step 3' },
              { title: 'AI Analysis', sub: 'Large language model translation & synthesis', step: 'Step 4' },
              { title: 'Personal Feedback', sub: 'Plain-language explanations & refactoring drills', step: 'Step 5' },
              { title: 'Progress Tracking', sub: 'Longitudinal dashboard with growth curves', step: 'Step 6' },
            ].map((node, i) => (
              <div
                key={node.step}
                className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-xs hover:border-indigo-400 hover:shadow-sm transition-all"
              >
                <div className="w-7 h-7 mx-auto rounded-full bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center mb-2">
                  {i + 1}
                </div>
                <h4 className="text-xs font-bold text-slate-900">{node.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">{node.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main System Functions */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Core Operational Functions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              1. Non-Executing Static Parsing
            </h4>
            <p className="leading-relaxed">
              Analyzes code structure purely via AST nodes without executing untrusted student code, providing a safe, sandbox-free analysis environment.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              2. Multi-Assignment Historical Ledger
            </h4>
            <p className="leading-relaxed">
              Maintains time-series database entries indexing every assignment's cyclomatic complexity, nesting depth, and naming ratings.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              3. Habit Frequency Classification
            </h4>
            <p className="leading-relaxed">
              Applies heuristic frequency thresholds (e.g. anti-pattern appearing in &gt;60% of submissions over a 30-day window) to classify chronic habits.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              4. AI Pedagogical Transformation
            </h4>
            <p className="leading-relaxed">
              Feeds raw AST metrics and diff histories into Gemini AI to generate supportive mentoring messages and tailored refactoring challenges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
