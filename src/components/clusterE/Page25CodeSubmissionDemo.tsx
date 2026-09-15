import React, { useState } from 'react';
import { UploadCloud, Code2, Play, CheckCircle2, History, ArrowRight, FileText, AlertCircle } from 'lucide-react';

interface Page25CodeSubmissionDemoProps {
  onNavigate: (slug: string) => void;
}

export const Page25CodeSubmissionDemo: React.FC<Page25CodeSubmissionDemoProps> = ({ onNavigate }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java' | 'cpp'>('python');
  const [code, setCode] = useState<string>(`# Assignment 6: Graph Traversal & Cycle Detection
# Student: Alex Sharma (CS-2026-STU48)

def find_cycles_in_dependency_graph(adjacency_list):
    """Detect cycles using Tarjan's strongly connected components algorithm."""
    visited_nodes = set()
    recursion_stack = set()
    detected_cycles = []

    def dfs(node, current_path):
        visited_nodes.add(node)
        recursion_stack.add(node)
        current_path.append(node)

        for neighbor in adjacency_list.get(node, []):
            if neighbor not in visited_nodes:
                dfs(neighbor, current_path)
            elif neighbor in recursion_stack:
                # Cycle detected
                cycle_slice = current_path[current_path.index(neighbor):]
                detected_cycles.append(cycle_slice)

        recursion_stack.remove(node)
        current_path.pop()

    for vertex in list(adjacency_list.keys()):
        if vertex not in visited_nodes:
            dfs(vertex, [])

    return detected_cycles
`);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisDone, setAnalysisDone] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setAnalysisDone(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisDone(true);
    }, 1200);
  };

  return (
    <div className="space-y-8" id="code-submission-demo">
      {/* Interactive Prototype Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-amber-900">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <strong className="font-semibold">Interactive Prototype:</strong> Code Submission Interface (Page 25 of 35)
        </div>
        <button
          onClick={() => onNavigate('demo-analysis-report')}
          className="text-amber-800 hover:text-amber-950 underline font-medium flex items-center gap-1"
        >
          <span>View Analysis Report Demo</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Assignment Ingestion & Editor</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Paste or edit code below, or drag a source file directly into the editor area.
            </p>
          </div>

          {/* Language selector tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setSelectedLanguage('python')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedLanguage === 'python' ? 'bg-white text-indigo-600 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Python 3.11
            </button>
            <button
              onClick={() => setSelectedLanguage('java')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedLanguage === 'java' ? 'bg-white text-indigo-600 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Java 17
            </button>
            <button
              onClick={() => setSelectedLanguage('cpp')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedLanguage === 'cpp' ? 'bg-white text-indigo-600 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              C++20
            </button>
          </div>
        </div>

        {/* Code Editor Mock */}
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-inner font-mono text-xs">
          <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-slate-400">
            <div className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>solution_graph_cycles.py</span>
              <span className="text-[10px] text-slate-500">• 28 lines • 864 bytes</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">AST Grammar Valid</span>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={14}
            className="w-full bg-transparent text-slate-200 p-4 font-mono text-xs focus:outline-none resize-none leading-relaxed"
            placeholder="Paste your source code here..."
          />
        </div>

        {/* Action button bar */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <UploadCloud className="w-4 h-4 text-slate-400" />
            <span>Drop <code>.py</code>, <code>.java</code>, or <code>.cpp</code> files to replace</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all"
            >
              {isAnalyzing ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Parsing AST & Metrics...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Run Habit Analysis</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Post-analysis result trigger */}
        {analysisDone && (
          <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-emerald-950">
                  AST Parsed Successfully (Submission SUB-1086 Created)
                </h4>
                <p className="text-[11px] text-emerald-800">
                  Computed 7 metrics. Overall Quality Score: <strong>88/100</strong>.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('demo-analysis-report')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <span>View Analysis Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
