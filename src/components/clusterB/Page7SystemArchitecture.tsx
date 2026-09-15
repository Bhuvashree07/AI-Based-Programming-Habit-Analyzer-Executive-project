import React from 'react';
import { Layers, Layout, Server, BrainCircuit, Database, ArrowDown, ShieldCheck, Cpu } from 'lucide-react';

interface Page7SystemArchitectureProps {
  onNavigate: (slug: string) => void;
}

export const Page7SystemArchitecture: React.FC<Page7SystemArchitectureProps> = ({ onNavigate }) => {
  const layers = [
    {
      title: 'Tier 1: Presentation Layer (Client Interface)',
      desc: 'Responsive web portal built with modern component architecture providing interactive telemetry dashboards for students and faculty.',
      icon: Layout,
      color: 'border-blue-300 bg-blue-50/50',
      tagColor: 'bg-blue-100 text-blue-800',
      components: [
        'Student Habit Dashboard (Page 24)',
        'Code Submission & Monaco Sandbox (Page 25)',
        'Multi-Metric Breakdown View (Page 26)',
        'Faculty Class Cohort Portal (Page 29)',
      ],
    },
    {
      title: 'Tier 2: Application & Static Analysis Services',
      desc: 'Orchestrates submission intake, language detection, syntax tokenization, and multi-dimensional AST metric extraction.',
      icon: Server,
      color: 'border-indigo-300 bg-indigo-50/50',
      tagColor: 'bg-indigo-100 text-indigo-800',
      components: [
        'JWT Auth & Language Router (Module 1)',
        'Abstract Syntax Tree (AST) Parser (Module 3)',
        'Complexity & Halstead Calculator',
        'Duplication Token Matcher (Rabin-Karp)',
      ],
    },
    {
      title: 'Tier 3: Habit Classification & AI Synthesis Engine',
      desc: 'Correlates longitudinal AST histories across sliding windows and executes LLM-driven pedagogical transformation.',
      icon: BrainCircuit,
      color: 'border-purple-300 bg-purple-50/50',
      tagColor: 'bg-purple-100 text-purple-800',
      components: [
        'Sliding-Window Habit Matcher (Module 4)',
        'Severity & Frequency Scoring Matrix',
        'Gemini AI Pedagogical Prompt Pipeline (Module 5)',
        'Targeted Practice Drill Generator (Module 6)',
      ],
    },
    {
      title: 'Tier 4: Relational Persistence Tier',
      desc: 'High-integrity storage holding student credentials, submission files, longitudinal metric series, habit flags, and coaching logs.',
      icon: Database,
      color: 'border-emerald-300 bg-emerald-50/50',
      tagColor: 'bg-emerald-100 text-emerald-800',
      components: [
        'Students & Enrolled Sections Table',
        'Source Submissions & AST Snapshots',
        'Metric Time-Series Data Lake',
        'Historical Habit & Progress Ledger',
      ],
    },
  ];

  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          Layered System Architecture
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The architecture follows a decoupled 4-tier model designed for horizontal scalability, data privacy, and rapid AST metric calculation.
        </p>
      </section>

      {/* Layered Diagram Stack */}
      <section className="space-y-4">
        {layers.map((layer, idx) => (
          <div key={layer.title} className="relative">
            <div className={`rounded-2xl border-2 p-5 sm:p-6 bg-white shadow-xs ${layer.color} transition-all`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-2xs shrink-0">
                    <layer.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${layer.tagColor}`}>
                      Architecture Layer 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1">{layer.title}</h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-4">{layer.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {layer.components.map((comp) => (
                  <div
                    key={comp}
                    className="px-3 py-2 bg-white/90 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span className="truncate">{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {idx < layers.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowDown className="w-5 h-5 text-slate-400 animate-bounce" />
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};
