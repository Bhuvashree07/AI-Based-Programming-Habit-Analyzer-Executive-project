import React from 'react';
import { KeyMetricsChart } from '../common/KeyMetricsChart';
import { CORE_METRICS } from '../../data/mockData';
import { SearchCode, ArrowRight, Code2, AlertTriangle, Sparkles, CheckCircle2, FileText } from 'lucide-react';

interface Page26AnalysisReportDemoProps {
  onNavigate: (slug: string) => void;
}

export const Page26AnalysisReportDemo: React.FC<Page26AnalysisReportDemoProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8" id="analysis-report-demo">
      {/* Interactive Prototype Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-amber-900">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <strong className="font-semibold">Interactive Prototype:</strong> Detailed Code Analysis Report (Page 26 of 35)
        </div>
        <button
          onClick={() => onNavigate('demo-habit-detection')}
          className="text-amber-800 hover:text-amber-950 underline font-medium flex items-center gap-1"
        >
          <span>Next: Habit Detection Report Demo</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Submission Metadata Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
              AUDIT: SUB-1086
            </span>
            <span className="text-xs text-slate-400">• Assignment 6: Graph Cycles</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Static Telemetry & Quality Diagnosis</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Student: Alex Sharma • File: <code>solution_graph_cycles.py</code> • 28 LOC
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-2xl font-black text-indigo-600">88/100</div>
            <div className="text-[10px] uppercase font-bold text-emerald-600">Optimal Range</div>
          </div>
        </div>
      </div>

      {/* Reusable Key Metrics Chart Instance #3 */}
      <KeyMetricsChart
        metrics={CORE_METRICS}
        title="7-Dimension Structural Scorecard (SUB-1086)"
        subtitle="Evaluated against department benchmarks for Semester VI Algorithms"
      />

      {/* Code Snippet Inspection with In-line Diagnostics */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Code2 className="w-4 h-4 text-indigo-600" />
          AST Node Diagnostic Callouts
        </h3>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300 overflow-x-auto space-y-1">
          <div className="text-slate-500">1 | def find_cycles_in_dependency_graph(adjacency_list):</div>
          <div className="text-slate-500">2 |     visited_nodes = set()</div>
          <div className="text-slate-500">3 |     recursion_stack = set()</div>
          <div className="text-emerald-400 bg-emerald-950/40 px-1 py-0.5 rounded">
            4 |     # [AST Pass] High descriptive naming quality on recursion_stack
          </div>
          <div className="text-slate-500">5 |     def dfs(node, current_path):</div>
          <div className="text-slate-500">6 |         visited_nodes.add(node)</div>
          <div className="text-slate-500">7 |         for neighbor in adjacency_list.get(node, []):</div>
          <div className="text-amber-400 bg-amber-950/40 px-1 py-0.5 rounded">
            8 |             # [AST Warning] Level 2 indentation: consider extracting neighbor visit logic
          </div>
        </div>
      </div>

      {/* Actionable Next Step Card */}
      <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-indigo-950">How does this affect your longitudinal habits?</h4>
          <p className="text-xs text-slate-600 mt-0.5">
            Check the Habit Detection Report to see if your cyclomatic complexity has permanently stabilized.
          </p>
        </div>
        <button
          onClick={() => onNavigate('demo-habit-detection')}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <span>Open Habit Detection Demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
