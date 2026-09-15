import React from 'react';
import { User, TrendingUp, CheckCircle2, ArrowRight, ShieldAlert, Award } from 'lucide-react';

interface Page32CaseStudiesProps {
  onNavigate: (slug: string) => void;
}

export const Page32CaseStudies: React.FC<Page32CaseStudiesProps> = ({ onNavigate }) => {
  const cases = [
    {
      student: 'Student Alpha',
      role: 'Sophomore, Computer Science',
      initialState: 'Monolithic Functions & 5-Tier Indentation',
      finalState: 'Modular Functions averaging 18 lines, max nesting depth of 2',
      trajectory: '+32 Quality Score Growth (52 → 84)',
      summary:
        'In Assignments 1 and 2, Student Alpha habitually crammed file parsing, matrix math, and CLI rendering into a single 140-line main() routine. After receiving AI explanations illustrating early guard clauses and modular decomposition, Alpha decomposed Assignment 4 into six cohesive helper functions.',
      metrics: [
        { label: 'Avg Function Length', before: '142 lines', after: '18 lines' },
        { label: 'Max Nesting Depth', before: 'Level 5', after: 'Level 2' },
        { label: 'Cyclomatic Complexity', before: '18.4 avg', after: '4.2 avg' },
      ],
      badge: '🏆 Guard Clause Champion',
    },
    {
      student: 'Student Beta',
      role: 'Junior, Information Technology',
      initialState: 'Chronic Code Duplication (24% duplicated lines)',
      finalState: 'Dry Code Architecture with shared utility modules (2.1% duplication)',
      trajectory: '+25 Quality Score Growth (61 → 86)',
      summary:
        'Student Beta frequently copy-pasted validation checks across every HTTP route. The system identified this anti-pattern with an 80% habit frequency tag. Following targeted DRY katas, Beta authored an isolated validator package that was reused across subsequent submissions.',
      metrics: [
        { label: 'Duplication Ratio', before: '24.2%', after: '2.1%' },
        { label: 'Lines of Code', before: '420 LOC', after: '235 LOC' },
        { label: 'Unit Test Coverage', before: '20%', after: '78%' },
      ],
      badge: '⚡ DRY Code Practitioner',
    },
  ];

  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Student Case Studies: Real Longitudinal Trajectories</h2>
            <p className="text-xs text-slate-500">Documented behavior transformation over a full 8-week course term</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          These case studies demonstrate how the combination of static metrics, longitudinal habit tracking, and supportive AI coaching systematically refactors novice programming behavior.
        </p>
      </section>

      {/* Case Study Cards */}
      <div className="space-y-6">
        {cases.map((c, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                  CASE STUDY 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{c.student}</h3>
                <p className="text-xs text-slate-500">{c.role}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  {c.trajectory}
                </span>
                <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-xs font-bold">
                  {c.badge}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">{c.summary}</p>

            {/* Metric Shift Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {c.metrics.map((m, mi) => (
                <div key={mi} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-500">{m.label}</div>
                  <div className="flex items-center gap-3 mt-1.5 text-xs font-mono">
                    <span className="text-rose-600 line-through">{m.before}</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-emerald-700 font-bold">{m.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
