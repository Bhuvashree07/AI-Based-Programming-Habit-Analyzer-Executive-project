import React from 'react';
import { AlertOctagon, Repeat, Layers, Type, CheckSquare, Maximize2, ShieldX, HelpCircle, ArrowRight } from 'lucide-react';

interface Page4ProblemStatementProps {
  onNavigate: (slug: string) => void;
}

export const Page4ProblemStatement: React.FC<Page4ProblemStatementProps> = ({ onNavigate }) => {
  const commonIssues = [
    {
      num: 1,
      title: 'Excessive Loops & Deep Nesting',
      icon: Layers,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      description: 'Nesting 3, 4, or 5 layers of for/while loops and if/else blocks (the "Arrow Anti-Pattern"), making code unreadable and bug-prone.',
    },
    {
      num: 2,
      title: 'Code Duplication (Copy-Paste)',
      icon: Repeat,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      description: 'Copying and pasting similar blocks of logic across branches or functions rather than extracting parameterized helper routines.',
    },
    {
      num: 3,
      title: 'Poor & Cryptic Naming Conventions',
      icon: Type,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      description: 'Using opaque names like `x`, `arr2`, `temp_val`, and `data` that obscure data semantics and require external explanation.',
    },
    {
      num: 4,
      title: 'Low Testing & Boundary Neglect',
      icon: CheckSquare,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      description: 'Testing only happy-path examples provided in assignment prompts while neglecting empty sets, negative bounds, and overflow cases.',
    },
    {
      num: 5,
      title: 'Weak Function Usage & Giant Bodies',
      icon: Maximize2,
      color: 'text-teal-600 bg-teal-50 border-teal-200',
      description: 'Writing monolithic 100+ line functions that perform parsing, validation, core logic, and printing all inside a single routine.',
    },
    {
      num: 6,
      title: 'High Cyclomatic Complexity',
      icon: ShieldX,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      description: 'Excessive decision branches (if/elif/switch/ternary) creating dozens of execution pathways that cannot be reliably reasoned about.',
    },
    {
      num: 7,
      title: 'Lack of Documentation & Docstrings',
      icon: HelpCircle,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      description: 'Functions lacking parameter contracts, expected return types, or algorithmic explanations, resulting in black-box code.',
    },
  ];

  return (
    <div className="space-y-10">
      {/* The Fundamental Evaluation Gap */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
            <AlertOctagon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">The Core Evaluation Gap in Computer Science Education</h2>
            <p className="text-xs text-slate-500">Source: Project Presentation Slide 3</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-3">
          <p>
            <strong>The Problem:</strong> Students are usually completely unaware of their own recurring coding habits because existing academic systems evaluate <strong>single submissions in isolation</strong> rather than observing behavior across multiple submissions over time.
          </p>
          <p>
            When an auto-grader grades Assignment 1, then Assignment 2, then Assignment 3, each assignment is treated as a tabula rasa. Even if the student commits the exact same deep-nesting mistake in every single lab throughout the semester, no system connects the dots to say: <em>"You have a recurring tendency to write deeply nested loops across 80% of your work."</em>
          </p>
        </div>
      </section>

      {/* The 7 Common Issues Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">The 7 Tracked Student Coding Weaknesses</h3>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            Measured by AST Analysis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commonIssues.map((issue) => (
            <div key={issue.num} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Issue #0{issue.num}
                  </span>
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${issue.color}`}>
                    <issue.icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{issue.title}</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{issue.description}</p>
              </div>
            </div>
          ))}

          {/* Solution teaser card */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-xl p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 mb-2">
                The Solution Approach
              </div>
              <h4 className="text-sm font-bold text-white">Longitudinal Habit Profiling</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                By maintaining a historical ledger of student metrics across every assignment, our analyzer detects persistence, escalation, or improvement in each of these 7 areas.
              </p>
            </div>
            <button
              onClick={() => onNavigate('objectives')}
              className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-400 hover:text-indigo-300"
            >
              <span>View System Objectives</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
