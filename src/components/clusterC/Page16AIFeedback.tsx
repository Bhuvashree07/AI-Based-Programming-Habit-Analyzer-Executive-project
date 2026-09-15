import React from 'react';
import { BrainCircuit, Sparkles, MessageSquareCode, ArrowRight, ExternalLink, Lightbulb } from 'lucide-react';

interface Page16AIFeedbackProps {
  onNavigate: (slug: string) => void;
}

export const Page16AIFeedback: React.FC<Page16AIFeedbackProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shrink-0">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Module 5: AI Feedback</h2>
            <p className="text-xs text-slate-500">LLM Pedagogical Translation, Code Explanation, and Personalized Suggestions</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Static analysis produces cold numerical telemetry (e.g. <code>v(G) = 14</code>, <code>nesting_depth = 5</code>). Most students cannot convert these numbers into better habits. The AI Feedback module uses Large Language Models to contextualize and explain these patterns in plain, supportive human language.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Plain-Language Contextualization
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Instead of telling the student <em>"Nesting depth exceeded threshold 4"</em>, the AI model generates a friendly narrative:
          </p>
          <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-lg text-xs text-purple-950 italic">
            "Your algorithm correctly processes students, but nesting three loops inside an if-statement makes it tough to test each filter in isolation. Let's see how an early guard clause simplifies this!"
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            Personalized Refactoring Recommendations
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            The AI engine synthesizes a direct before-and-after comparison extracted from the student's actual submission, showing the exact refactoring diff needed to cultivate clean coding practices.
          </p>
          <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
            <li>Recommends specific design patterns (Guard Clauses, Lookup Tables)</li>
            <li>Curates targeted micro-exercises to reinforce the improved pattern</li>
            <li>Prioritizes the highest-impact weakness to prevent student cognitive overload</li>
          </ul>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-purple-950">Review real AI feedback cards</h4>
          <p className="text-xs text-slate-600 mt-0.5">Explore realistic before/after code transformations and AI coaching prompts (Page 21).</p>
        </div>
        <button
          onClick={() => onNavigate('ai-feedback-examples')}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <span>View AI Feedback Examples</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
