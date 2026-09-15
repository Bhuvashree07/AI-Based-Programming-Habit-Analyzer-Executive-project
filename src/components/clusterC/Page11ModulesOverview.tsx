import React from 'react';
import { Boxes, UserCheck, Code2, SearchCode, Activity, BrainCircuit, TrendingUp, ArrowRight } from 'lucide-react';

interface Page11ModulesOverviewProps {
  onNavigate: (slug: string) => void;
}

export const Page11ModulesOverview: React.FC<Page11ModulesOverviewProps> = ({ onNavigate }) => {
  const modules = [
    {
      slug: 'module-student-management',
      num: 1,
      title: 'Student Management',
      icon: UserCheck,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      keyResponsibilities: ['Student registration & authentication', 'Language preference configuration', 'Student profile & historical portfolios'],
      outputs: 'Authenticated session & student context',
    },
    {
      slug: 'module-code-submission',
      num: 2,
      title: 'Code Submission',
      icon: Code2,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      keyResponsibilities: ['Assignment upload & version indexing', 'File format validation (.py, .java, .cpp)', 'Secure code storage & submission history'],
      outputs: 'Indexed submission with metadata timestamp',
    },
    {
      slug: 'module-code-analysis',
      num: 3,
      title: 'Code Analysis',
      icon: SearchCode,
      color: 'text-teal-600 bg-teal-50 border-teal-200',
      keyResponsibilities: ['Abstract Syntax Tree (AST) parsing', '7-dimension code metric computation', 'Safe non-executing structural scanning'],
      outputs: '7 quantitative quality scores',
    },
    {
      slug: 'module-habit-detection',
      num: 4,
      title: 'Habit Detection',
      icon: Activity,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      keyResponsibilities: ['Cross-submission rolling comparison', 'Recurring pattern threshold matching', 'Classification of Strengths vs Weaknesses'],
      outputs: 'Active behavioral habit taxonomy',
    },
    {
      slug: 'module-ai-feedback',
      num: 5,
      title: 'AI Feedback',
      icon: BrainCircuit,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      keyResponsibilities: ['Natural language LLM explanation', 'Before & After refactoring guidance', 'Empathetic, non-punitive pedagogical tone'],
      outputs: 'Personalized feedback card & actionable drills',
    },
    {
      slug: 'module-progress-tracking',
      num: 6,
      title: 'Progress Tracking',
      icon: TrendingUp,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      keyResponsibilities: ['Longitudinal growth curve plotting', 'Delta analysis vs historical submissions', 'Student & Instructor visual dashboards'],
      outputs: 'Interactive progress dashboards & radar charts',
    },
  ];

  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <Boxes className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">The 6 Foundational System Modules</h2>
            <p className="text-xs text-slate-500">Source: Project Presentation Slide 6 — Core Modular Architecture</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The analyzer is engineered into six autonomous yet tightly coordinated modules. Explore each module below to inspect its functional specifications, data inputs/outputs, and corresponding live prototype interfaces.
        </p>
      </section>

      {/* Grid of 6 modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((m) => (
          <div
            key={m.slug}
            onClick={() => onNavigate(m.slug)}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Module 0{m.num}
                </span>
                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${m.color}`}>
                  <m.icon className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {m.title}
              </h3>

              <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                {m.keyResponsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-500 shrink-0 mt-1.5" />
                    <span className="line-clamp-1">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
              <span className="text-[11px] text-slate-500 font-normal truncate max-w-[170px]">
                {m.outputs}
              </span>
              <span className="flex items-center gap-1">
                Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
