import React from 'react';
import { Cpu, Code2, Layout, Database, BrainCircuit, Terminal, CheckCircle2, Shield } from 'lucide-react';

interface Page9TechnologyStackProps {
  onNavigate: (slug: string) => void;
}

export const Page9TechnologyStack: React.FC<Page9TechnologyStackProps> = ({ onNavigate }) => {
  const stackCategories = [
    {
      category: 'Frontend & Visual Interface',
      icon: Layout,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      technologies: [
        { name: 'React 18 / 19', role: 'Reactive single-page application framework with component modularity.' },
        { name: 'Tailwind CSS', role: 'Utility-first styling system adhering to strict high-contrast design scales.' },
        { name: 'Motion / Framer', role: 'Fluid route transitions, accordion physics, and progress bar animations.' },
        { name: 'Lucide Icons', role: 'Consistent technical vector iconography across all system views.' },
      ],
    },
    {
      category: 'Backend & AST Static Analysis',
      icon: Terminal,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      technologies: [
        { name: 'Node.js & Express / Python FastAPI', role: 'High-throughput asynchronous REST microservices for submission routing.' },
        { name: 'Python `ast` & Tree-sitter', role: 'Multi-language grammatical parsers for AST graph traversal and tokenization.' },
        { name: 'Radon & Lizard Engine', role: 'Industry-standard cyclomatic complexity and code maintainability metrics.' },
        { name: 'Rabin-Karp Rolling Hash', role: 'Syntactic token duplication detection across student source files.' },
      ],
    },
    {
      category: 'AI & Pedagogical Reasoning',
      icon: BrainCircuit,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      technologies: [
        { name: 'Gemini Large Language Model', role: 'Generates empathetic, pedagogical explanations from numerical AST metrics.' },
        { name: 'Structured JSON Schema Output', role: 'Ensures reliable, machine-parseable refactoring suggestions.' },
        { name: 'Few-Shot Code Smell Prompts', role: 'Trained with computer science education guidelines to encourage growth.' },
      ],
    },
    {
      category: 'Database & Persistent Storage',
      icon: Database,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      technologies: [
        { name: 'PostgreSQL / Cloud SQL', role: 'ACID relational database managing student accounts, assignments, and time-series.' },
        { name: 'Time-Series Indices', role: 'Optimized queries for longitudinal metric progression over multi-week courses.' },
        { name: 'Encrypted Source Archive', role: 'Secure cryptographic hashing (SHA-256) of student code submissions.' },
      ],
    },
  ];

  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-indigo-600" />
          Full System Technology Stack
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The engineering foundation of the AI-Based Programming Habit Analyzer combines proven static analysis parsing tools with cutting-edge AI language models and high-performance relational storage.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stackCategories.map((cat) => (
          <div key={cat.category} className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${cat.color}`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{cat.category}</h3>
              </div>

              <div className="space-y-3">
                {cat.technologies.map((t) => (
                  <div key={t.name} className="p-2.5 rounded-lg bg-slate-50 border border-slate-150">
                    <div className="font-semibold text-xs text-slate-900">{t.name}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">{t.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
