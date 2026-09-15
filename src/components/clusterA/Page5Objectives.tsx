import React from 'react';
import { Target, CheckCircle2, ArrowRight, Sparkles, BrainCircuit, LineChart, Code2, Database, SearchCode, ShieldAlert } from 'lucide-react';

interface Page5ObjectivesProps {
  onNavigate: (slug: string) => void;
}

export const Page5Objectives: React.FC<Page5ObjectivesProps> = ({ onNavigate }) => {
  const objectives = [
    {
      num: 1,
      title: "Analyze a Student's Programming Submissions",
      desc: 'Ingest raw source files and perform deep syntactic parsing via Abstract Syntax Trees to extract code structure without executing arbitrary code.',
      icon: Code2,
      category: 'Static Ingestion',
    },
    {
      num: 2,
      title: 'Identify Recurring Coding Patterns and Habits',
      desc: 'Correlate structures across consecutive submissions to distinguish isolated one-off errors from genuine, chronic behavioral habits.',
      icon: ShieldAlert,
      category: 'Pattern Detection',
    },
    {
      num: 3,
      title: 'Measure Important Code-Quality Characteristics',
      desc: 'Compute seven normalized dimensions: cyclomatic complexity, code duplication, nesting depth, naming quality, documentation, testing coverage, and function modularity.',
      icon: SearchCode,
      category: 'Metric Computation',
    },
    {
      num: 4,
      title: "Maintain a History of the Student's Programming Behavior",
      desc: 'Store timestamped relational snapshots of AST telemetry in a persistent historical ledger spanning the entire semester or course.',
      icon: Database,
      category: 'Longitudinal Storage',
    },
    {
      num: 5,
      title: 'Use AI to Explain Identified Weaknesses',
      desc: 'Leverage Large Language Models (Gemini) to translate cold numerical metrics into empathetic, human-readable pedagogical explanations.',
      icon: BrainCircuit,
      category: 'AI Synthesis',
    },
    {
      num: 6,
      title: 'Provide Personalized Improvement Suggestions',
      desc: 'Synthesize actionable refactoring patterns, before-and-after code transformations, and targeted micro-exercises tailored to each student’s specific habit profile.',
      icon: Sparkles,
      category: 'Actionable Coaching',
    },
    {
      num: 7,
      title: "Track the Student's Progress Over Time",
      desc: 'Visualize longitudinal improvement trajectories on intuitive dashboards, showing habit mitigation curves and quality score growth.',
      icon: LineChart,
      category: 'Visual Analytics',
    },
    {
      num: 8,
      title: 'Help Students Develop Better Programming Practices',
      desc: 'Instill lifelong software engineering principles, clean code standards, and metacognitive self-reflection before students enter industry careers.',
      icon: CheckCircle2,
      category: 'Pedagogical Outcome',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Introduction banner */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">The 8 Primary System Objectives</h2>
            <p className="text-xs text-slate-500">Source: Project Presentation Slide 4 — Academic Ground Truth</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          The project is engineered around eight tightly interconnected technical and pedagogical objectives. Together, they form a continuous feedback loop that shifts programming education from passive assessment to active habit cultivation.
        </p>
      </section>

      {/* Numbered Visual List */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {objectives.map((obj) => (
            <div
              key={obj.num}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-indigo-300 hover:shadow-sm transition-all flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 group-hover:bg-indigo-600 group-hover:border-indigo-600 flex items-center justify-center text-indigo-700 group-hover:text-white shrink-0 font-mono font-bold text-sm transition-colors">
                0{obj.num}
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/60 px-2 py-0.5 rounded">
                  {obj.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                  {obj.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cluster B transition card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Ready for Cluster B?</span>
          <h3 className="text-base font-bold mt-0.5">Explore the Proposed System Architecture</h3>
          <p className="text-xs text-slate-300 mt-1">
            Dive into Page 6: System Flow, architecture diagrams, and longitudinal design principles.
          </p>
        </div>
        <button
          onClick={() => onNavigate('proposed-system')}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shrink-0 transition-colors shadow-md"
        >
          <span>Proceed to Proposed System</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
