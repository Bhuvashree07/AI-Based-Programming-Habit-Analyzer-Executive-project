import React from 'react';
import { Code2, UploadCloud, History, FileCheck, ArrowRight, ExternalLink } from 'lucide-react';

interface Page13CodeSubmissionProps {
  onNavigate: (slug: string) => void;
}

export const Page13CodeSubmission: React.FC<Page13CodeSubmissionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Module 2: Code Submission</h2>
            <p className="text-xs text-slate-500">Assignment Ingestion, Multi-File Handling, and History Log</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Code Submission module provides the ingestion interface where students submit laboratory exercises, homework problems, and capstone source files. It maintains immutable, timestamped version snapshots essential for longitudinal tracking.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <UploadCloud className="w-4 h-4 text-indigo-600" />
            1. Multi-Modal Ingestion
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Supports direct drag-and-drop file upload (`.py`, `.java`, `.cpp`), raw source code paste in an embedded code editor, or single-branch Git repository synchronization.
          </p>
          <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
            <li>Syntactic integrity check before database storage</li>
            <li>Automatic encoding normalization (UTF-8)</li>
            <li>Zero execution — code is parsed strictly in memory</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <History className="w-4 h-4 text-indigo-600" />
            2. Chronological Submission Ledger
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every submission receives a unique cryptographic identifier (`SUB-1081`, `SUB-1082`, etc.) linking the code artifact to assignment criteria, line counts, and timestamped AST metadata.
          </p>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs font-mono text-slate-700">
            SHA-256 Checksum: e3b0c44298fc1c149afbf4c8996fb92427ae41e4...
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-indigo-950">Try the submission playground</h4>
          <p className="text-xs text-slate-600 mt-0.5">Explore the live Code Submission Demo with sample code snippets (Page 25).</p>
        </div>
        <button
          onClick={() => onNavigate('demo-code-submission')}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <span>Open Code Submission Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
