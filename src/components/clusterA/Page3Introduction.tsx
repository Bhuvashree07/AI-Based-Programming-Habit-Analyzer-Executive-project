import React from 'react';
import { AlertTriangle, CheckCircle2, TrendingUp, Lightbulb, Code2, ArrowRight } from 'lucide-react';

interface Page3IntroductionProps {
  onNavigate: (slug: string) => void;
}

export const Page3Introduction: React.FC<Page3IntroductionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      {/* The Core Paradox */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          The Correctness Paradox: Passing Tests vs. Clean Code
        </h2>
        <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-3">
          <p>
            When a student submits code to an automated grading platform, the evaluation metric is nearly always binary: <em>Did the program produce the expected stdout output within memory and time constraints?</em>
          </p>
          <p>
            If the answer is yes, the student receives full marks. This establishes a harmful subconscious belief: <strong>"As long as it works, it doesn't matter how I wrote it."</strong>
          </p>
          <p>
            In practice, this creates a dangerous divergence between code correctness and code quality. A student's program may pass 100% of test cases while containing deep architectural defects:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              What Traditional Auto-Graders Accept:
            </div>
            <ul className="text-xs text-rose-900 space-y-2 list-disc list-inside leading-relaxed">
              <li>Monolithic 300-line functions with zero decomposition</li>
              <li>5-level deep nested loops ("Arrow Anti-Pattern")</li>
              <li>Opaque single-letter variable names (`a`, `b`, `temp2`, `arr_final`)</li>
              <li>Zero internal unit tests or edge-case boundary checks</li>
              <li>Duplicated blocks copy-pasted across conditional branches</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              What Professional Software Practice Requires:
            </div>
            <ul className="text-xs text-emerald-900 space-y-2 list-disc list-inside leading-relaxed">
              <li>High modularity with focused single-responsibility routines</li>
              <li>Flat control flow using early guard clauses and functional mapping</li>
              <li>Intention-revealing domain naming without reliance on guesswork</li>
              <li>Robust automated testing of empty states and edge boundaries</li>
              <li>DRY (Don't Repeat Yourself) consolidated utility logic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Programming Habits Matter */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          Why Programming Habits Matter Long-Term
        </h2>
        <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
          <p>
            Cognitive psychology reveals that coding is predominantly an activity of habit formation. When solving algorithmic challenges under deadline pressure, programmers rely on automatic cognitive heuristics.
          </p>
          <p>
            If a novice student defaults to nesting three loops whenever searching for an element, this syntactic reflex becomes hardwired into their procedural memory. By the time they enter collaborative software teams or open-source projects, unlearning these deeply ingrained habits requires painful and costly code-review friction.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
              Early Intervention
            </h4>
            <p className="text-xs text-slate-600">
              Catching bad practices during foundational CS courses prevents anti-patterns from becoming lifelong cognitive defaults.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">
              Metacognitive Growth
            </h4>
            <p className="text-xs text-slate-600">
              Students become reflective practitioners who question how they construct algorithms rather than racing purely for the green checkmark.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
              Constructive, Non-Punitive
            </h4>
            <p className="text-xs text-slate-600">
              Habit tracking guides students with encouraging coaching and refactoring examples without deducting assignment grades.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 2 Summary CTA */}
      <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-indigo-950">Next: The 7 Common Issues & Evaluation Gap</h3>
          <p className="text-xs text-slate-600 mt-1">
            Explore Slide 3 material detailing the precise weaknesses tracked by our analyzer.
          </p>
        </div>
        <button
          onClick={() => onNavigate('problem-statement')}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 shrink-0 transition-colors"
        >
          <span>Read Problem Statement</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
