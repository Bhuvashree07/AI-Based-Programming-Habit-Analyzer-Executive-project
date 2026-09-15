import React from 'react';
import { SearchCode, Cpu, BarChart3, Binary, ArrowRight, ExternalLink } from 'lucide-react';

interface Page14CodeAnalysisProps {
  onNavigate: (slug: string) => void;
}

export const Page14CodeAnalysis: React.FC<Page14CodeAnalysisProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center shrink-0">
            <SearchCode className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Module 3: Code Analysis</h2>
            <p className="text-xs text-slate-500">AST Structural Parsing, Grammatical Traversal, and 7-Metric Extraction</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Code Analysis module is the objective measurement heart of the system. Rather than executing code or evaluating unit test success, it constructs an Abstract Syntax Tree (AST) to measure the architectural properties of student programs.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Binary className="w-4 h-4 text-indigo-600" />
            Abstract Syntax Tree (AST) Traversal
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            The parser tokenizes source statements into hierarchical nodes (`FunctionDef`, `For`, `If`, `BinOp`, `Call`). Grammatical visitors traverse this tree to measure branching depth, variable declarations, and nested control flow.
          </p>
          <div className="p-3 bg-slate-900 text-slate-200 rounded-lg font-mono text-[11px] leading-relaxed">
            <code>
              FunctionDef(name='find_user')<br />
              &nbsp;&nbsp;└── For(target=Name(id='u'), iter=Name(id='users'))<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── If(test=Compare(Name(id='u.id'), Eq(), ...))
            </code>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            Computation of the 7 Core Metrics
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            From the parsed tree, the analyzer extracts seven mathematical code-quality indicators:
          </p>
          <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
            <li><strong>Cyclomatic Complexity:</strong> Independent decision paths via McCabe's formula $M = E - N + 2P$.</li>
            <li><strong>Max Nesting Depth:</strong> Highest indentation tier reached by control loops.</li>
            <li><strong>Duplication Index:</strong> Grammatically repeated token patterns.</li>
            <li><strong>Naming & Docs:</strong> Identifier descriptive scores and docstring coverage.</li>
          </ul>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-teal-950">Inspect live analysis telemetry</h4>
          <p className="text-xs text-slate-600 mt-0.5">View the interactive Analysis Report Demo with charts and radar breakdowns (Page 26).</p>
        </div>
        <button
          onClick={() => onNavigate('demo-analysis-report')}
          className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <span>View Analysis Report Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
