import React from 'react';
import { Sparkles, MessageSquareCode, ArrowRight, CheckCircle2, AlertTriangle, Code2 } from 'lucide-react';
import { DETECTED_HABITS } from '../../data/mockData';

interface Page21AIFeedbackExamplesProps {
  onNavigate: (slug: string) => void;
}

export const Page21AIFeedbackExamples: React.FC<Page21AIFeedbackExamplesProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shrink-0">
            <MessageSquareCode className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">AI Feedback Examples: Before & After Transformation</h2>
            <p className="text-xs text-slate-500">Realistic student code smells paired with Gemini pedagogical explanations and clean refactorings</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          See how the AI Feedback module avoids generic criticism by generating concrete, educational comparisons that teach students how to restructure their code.
        </p>
      </section>

      {/* Before & After Feedback Cards */}
      <div className="space-y-8">
        {DETECTED_HABITS.slice(0, 3).map((habit, idx) => (
          <div key={habit.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Habit header */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-purple-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900">{habit.title}</h3>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  {habit.category} • {habit.frequency}% Frequency
                </span>
              </div>
              <span className="text-xs text-slate-500">Severity: {habit.severity.toUpperCase()}</span>
            </div>

            <div className="p-6 space-y-6">
              {/* Code comparison grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Bad code smell */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Student Submission Code Smell:
                  </div>
                  <pre className="p-3.5 rounded-xl bg-slate-900 text-rose-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                    <code>{habit.codeExampleBad}</code>
                  </pre>
                </div>

                {/* Clean refactored version */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    AI Recommended Clean Pattern:
                  </div>
                  <pre className="p-3.5 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                    <code>{habit.codeExampleGood}</code>
                  </pre>
                </div>
              </div>

              {/* AI Explanation & Pedagogical Coaching */}
              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-900 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  Gemini AI Pedagogical Explanation:
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{habit.aiExplanation}"
                </p>
                <div className="pt-2 border-t border-purple-200/60 text-xs text-purple-950 font-medium flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span><strong>Next Practice Step:</strong> {habit.suggestedAction}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
