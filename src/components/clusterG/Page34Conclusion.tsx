import React from 'react';
import { Award, CheckCircle2, ArrowRight, Sparkles, Quote, BookOpen, Layers } from 'lucide-react';

interface Page34ConclusionProps {
  onNavigate: (slug: string) => void;
}

export const Page34Conclusion: React.FC<Page34ConclusionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      {/* Project Summary Card */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Project Conclusion & Research Impact</h2>
            <p className="text-xs text-slate-500">Summary of academic contributions and practical implementation outcomes</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The <strong>AI-Based Programming Habit Analyzer</strong> demonstrates that modern programming education must look beyond boolean correctness tests. By introducing longitudinal behavioral telemetry, combining safe static Abstract Syntax Tree analysis with empathetic Large Language Model coaching, this project establishes a replicable framework for turning novice coders into disciplined, self-aware software engineers.
        </p>

        {/* 4 Key Contributions Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              Longitudinal Observation Paradigm
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Pioneered the shift from single-snapshot grading to time-series behavioral habit classification across multiple coursework submissions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              Zero-Execution Safe AST Engine
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Delivered complete structural, complexity, and duplication measurements without sandboxing or executing untrusted student binaries.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              Pedagogical AI Synthesis
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Demonstrated effective translation of cold static metrics into encouraging, actionable refactoring guidance and personalized micro-drills.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              Comprehensive 35-Page Technical Artifact
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Created an exhaustive, rigorous documentation and interactive prototype portal ready for university evaluation and industrial demonstration.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Slide 11 Closing Quote Card */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-center">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <Quote className="w-10 h-10 text-indigo-400/40 mx-auto" />
          <blockquote className="text-xl sm:text-2xl font-medium tracking-tight leading-snug">
            "Instead of only asking whether a student's code is correct, the system helps answer: 
            <span className="text-indigo-300 font-bold block mt-1">How is the student improving as a programmer?</span>"
          </blockquote>
          <div className="pt-2 text-xs font-mono text-indigo-400 uppercase tracking-widest">
            — Project Presentation Slide 11 (Concluding Axiom)
          </div>
        </div>
      </section>

      {/* Final navigation button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={() => onNavigate('team-references')}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all"
        >
          <span>View Team Members & Academic References (Page 35)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
