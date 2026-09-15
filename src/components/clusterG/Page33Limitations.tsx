import React from 'react';
import { AlertTriangle, Rocket, ArrowRight, ShieldAlert, Cpu, CheckCircle2, Globe, Terminal } from 'lucide-react';

interface Page33LimitationsProps {
  onNavigate: (slug: string) => void;
}

export const Page33Limitations: React.FC<Page33LimitationsProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Limitations & Future Roadmap</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Source Material: Project Presentation Slides 9 & 10 — Critical academic transparency regarding current design boundaries and future engineering expansion.
        </p>
      </section>

      {/* Slide 9: Limitations */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Current System Limitations (Slide 9)</h3>
            <p className="text-xs text-slate-500">Documented technical and operational constraints</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900">1. Language Support Scope</h4>
            <p className="leading-relaxed">
              Current AST grammar parsing is actively tested and optimized for Python, Java, and C/C++. Dynamic scripting languages or frameworks with heavy meta-programming require separate AST parsers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900">2. Static vs. Dynamic Runtime Visibility</h4>
            <p className="leading-relaxed">
              Because code is analyzed purely without execution, runtime performance habits (such as memory allocations, runtime cache misses, or async race conditions) are not observed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900">3. Cold-Start History Requirement</h4>
            <p className="leading-relaxed">
              Reliable habit classification requires a minimum history of 3 to 5 submissions. A first-time student's initial submission can only produce single-instance metrics, not longitudinal habit trends.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900">4. AI LLM Prompt Constraining</h4>
            <p className="leading-relaxed">
              While few-shot prompting and JSON schemas eliminate 99.6% of inaccuracies, complex domain-specific logic requires instructor oversight on high-stakes assignments.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 10: Future Scope */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <Rocket className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Future Engineering Scope (Slide 10)</h3>
            <p className="text-xs text-slate-500">Planned enhancements and real-world deployment pathways</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 space-y-1.5">
            <h4 className="font-bold text-indigo-950 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-600" />
              1. Real-Time IDE Extension
            </h4>
            <p className="leading-relaxed">
              Build VS Code and JetBrains plugins that compute habit telemetry in the background as the student types, providing gentle inline coaching before submission.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 space-y-1.5">
            <h4 className="font-bold text-indigo-950 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              2. Additional Language Grammars
            </h4>
            <p className="leading-relaxed">
              Integrate Tree-sitter AST bindings for Rust, Go, TypeScript, and Kotlin to support web engineering and systems programming curricula.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 space-y-1.5">
            <h4 className="font-bold text-indigo-950 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
              3. Deep Behavioral Graph Models
            </h4>
            <p className="leading-relaxed">
              Apply Graph Neural Networks (GNNs) directly to AST graph structures to predict student pass rates on upcoming exams and identify conceptual misconceptions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 space-y-1.5">
            <h4 className="font-bold text-indigo-950 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
              4. LMS Platform Interoperability
            </h4>
            <p className="leading-relaxed">
              Develop LTI 1.3 standards-compliant plugins for Canvas, Moodle, and Google Classroom to sync grades and habit reports automatically.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 space-y-1.5">
            <h4 className="font-bold text-indigo-950 flex items-center gap-1.5">
              <Rocket className="w-3.5 h-3.5 text-indigo-600" />
              5. Gamified Habit Milestones
            </h4>
            <p className="leading-relaxed">
              Introduce verifiable digital open badges (Mozilla Open Badges) celebrating clean code practices, which students can attach to their professional LinkedIn profiles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
