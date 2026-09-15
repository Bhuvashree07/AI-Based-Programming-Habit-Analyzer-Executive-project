import React from 'react';
import { Sparkles, BrainCircuit, SearchCode, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface Page18RoleOfAIProps {
  onNavigate: (slug: string) => void;
}

export const Page18RoleOfAI: React.FC<Page18RoleOfAIProps> = ({ onNavigate }) => {
  const aiRoles = [
    { title: 'Interprets Detected Patterns', desc: 'Synthesizes multiple raw AST metrics (e.g. cyclomatic complexity + max nesting) into holistic behavioral diagnoses.' },
    { title: 'Explains Weaknesses in Simple Language', desc: 'Avoids sterile compiler jargon, providing clear humanized analogies that novice programmers immediately grasp.' },
    { title: 'Prioritizes Improvement Areas', desc: 'Ranks defects so students are not overwhelmed by fifty minor warnings, focusing on the single most critical habit first.' },
    { title: 'Generates Personalized Recommendations', desc: 'Crafts tailored refactoring snippets based directly on the student’s actual code structure.' },
    { title: 'Suggests Suitable Practice Exercises', desc: 'Recommends targeted micro-drills (e.g. guard clause conversions, boundary test suites) to solidify improved habits.' },
    { title: 'Summarizes Longitudinal Progress', desc: 'Drafts positive narrative summaries tracking student evolution across the entire course term.' },
    { title: 'Identifies Behavioral Changes Over Time', desc: 'Detects subtle shifts—such as a student slowly decreasing function lengths or adopting descriptive identifiers.' },
  ];

  return (
    <div className="space-y-10">
      {/* Slide 8 Core Dichotomy Banner */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shrink-0">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">The Synergy: Static Analysis + Artificial Intelligence</h2>
            <p className="text-xs text-slate-500">Source: Project Presentation Slide 8 — Role of AI</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-sm text-slate-800 font-medium">
          <strong>Core Architectural Principle:</strong> Static analysis supplies measurable, objective facts; AI converts that raw data into constructive, humanized learning feedback.
        </div>
      </section>

      {/* Comparison Grid: Static Analysis vs AI */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center shrink-0">
              <SearchCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">What Static Analysis Provides</h3>
              <p className="text-xs text-slate-500">The Objective Mathematical Foundation</p>
            </div>
          </div>

          <ul className="text-xs text-slate-600 space-y-2.5">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Deterministic, reproducible metrics without hallucinations.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Exact line numbers of nested loops and duplicated tokens.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Precise cyclomatic complexity calculations via control flow graphs.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Historical time-series indexing of raw telemetry points.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">What Artificial Intelligence Contributes</h3>
              <p className="text-xs text-slate-500">The Humanized Pedagogical Coach</p>
            </div>
          </div>

          <ul className="text-xs text-slate-600 space-y-2.5">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span>Explains <em>why</em> a pattern hurts maintainability in plain English.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span>Translates complex data structures into intuitive mental models.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span>Produces targeted, customized refactoring demonstrations.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span>Adapts feedback tone to be encouraging and growth-oriented.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* The 7 Roles of AI in this System */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">The 7 Distinct Roles of AI in the Analyzer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {aiRoles.map((role, i) => (
            <div key={i} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">{role.title}</h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{role.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
