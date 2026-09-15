import React from 'react';
import { GitBranch, ArrowRight, Code2, SearchCode, Database, Activity, BrainCircuit, Sparkles, LineChart, CheckCircle2 } from 'lucide-react';

interface Page8HowItWorksProps {
  onNavigate: (slug: string) => void;
}

export const Page8HowItWorks: React.FC<Page8HowItWorksProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: 1,
      title: 'Student Submits Program',
      role: 'Student Action',
      desc: 'The student uploads or pastes source code for an assignment into the web interface or connects their repository.',
      icon: Code2,
      input: 'Raw source files (.py, .java, .cpp)',
      output: 'Validated submission record with timestamp',
    },
    {
      num: 2,
      title: 'Static Code Analysis',
      role: 'AST Analysis Engine',
      desc: 'The engine parses the program into an Abstract Syntax Tree (AST), performing grammatical and structural decomposition without code execution.',
      icon: SearchCode,
      input: 'Source AST token tree',
      output: 'Syntax node graph with control flow paths',
    },
    {
      num: 3,
      title: 'Extract Programming Metrics',
      role: 'Metric Calculator',
      desc: 'Calculates the 7 quantitative dimensions: cyclomatic complexity, nesting depth, code duplication, naming quality, documentation, testing, and functions.',
      icon: Database,
      input: 'AST control flow paths',
      output: '7 normalized numerical scores (0–100 scale)',
    },
    {
      num: 4,
      title: 'Compare With Previous Submissions',
      role: 'Historical Engine',
      desc: 'Retrieves the student’s past submissions over a configurable sliding window (e.g. last 5–10 assignments) to compute rolling moving averages.',
      icon: LineChart,
      input: 'Current metrics + Historical ledger',
      output: 'Longitudinal delta trajectories per dimension',
    },
    {
      num: 5,
      title: 'Identify Recurring Habits',
      role: 'Habit Classifier',
      desc: 'Applies classification thresholds. If an anti-pattern (e.g. 4+ nesting levels) persists in 60%+ of recent assignments, it is tagged as an active habit.',
      icon: Activity,
      input: 'Longitudinal trajectories',
      output: 'Classified list of Strengths & Weaknesses',
    },
    {
      num: 6,
      title: 'AI Generates Feedback',
      role: 'Gemini AI Model',
      desc: 'An LLM analyzes the detected habits alongside sample code snippets, generating plain-language explanations of why the habit causes long-term friction.',
      icon: BrainCircuit,
      input: 'AST metrics + habit tags + code snippets',
      output: 'Compassionate pedagogical feedback narrative',
    },
    {
      num: 7,
      title: 'Personalized Recommendations',
      role: 'Recommendation Engine',
      desc: 'Synthesizes targeted micro-drills, refactoring exercises, and clean code guidelines specifically mapped to the student’s weakest areas.',
      icon: Sparkles,
      input: 'AI feedback + habit tags',
      output: '3 tailored exercises with before/after refactoring tips',
    },
    {
      num: 8,
      title: 'Progress Dashboard Updated',
      role: 'Visualization Tier',
      desc: 'The student and instructor dashboards refresh with updated radar charts, metric delta indicators, and celebration of overcome bad habits.',
      icon: CheckCircle2,
      input: 'Updated habit states',
      output: 'Interactive visual analytics dashboard',
    },
  ];

  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <GitBranch className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">End-to-End Execution Workflow</h2>
            <p className="text-xs text-slate-500">Source: Project Presentation Slide 7 — Detailed Operational Pipeline</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          From the instant a student hits "Submit Program" to the rendering of longitudinal progress curves, follow the eight distinct transformation phases executed by the analyzer.
        </p>
      </section>

      {/* Sequential Timeline Steps */}
      <section className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-indigo-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                0{step.num}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">{step.title}</h3>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {step.role}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-2xl">{step.desc}</p>
              </div>
            </div>

            {/* Input / Output data contract badge */}
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-[11px] text-slate-600 shrink-0 md:w-64 space-y-1">
              <div>
                <strong className="text-slate-800">In:</strong> {step.input}
              </div>
              <div>
                <strong className="text-indigo-700">Out:</strong> {step.output}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
