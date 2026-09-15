import React from 'react';
import { CLUSTERS, PAGES_DATA } from '../../data/pagesData';
import { Terminal, ArrowUp, Quote, Sparkles, BookOpen, ExternalLink, Layers, GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigate: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800" id="project-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Closing Core Philosophical Statement Card */}
        <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0 mt-1">
                <Quote className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                  Core Project Philosophy
                </p>
                <blockquote className="text-lg sm:text-xl font-medium text-white italic leading-relaxed">
                  "Instead of only asking whether a student's code is correct, the system helps answer: How is the student improving as a programmer?"
                </blockquote>
                <p className="text-xs text-slate-400 mt-2">
                  Longitudinal coding habit analysis across sequential submissions, combining AST metrics with AI pedagogical feedback.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('demo-student-dashboard')}
                className="px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Launch Interactive Demo
              </button>
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 35-Page Complete Sitemap Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                Complete 35-Page Project Index & Sitemap
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Every page is reachable in 2 clicks or fewer.
              </p>
            </div>
            <span className="text-xs font-mono text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded border border-indigo-800/40">
              35 Routes Registered
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8">
            {CLUSTERS.map((cluster) => {
              const clusterPages = PAGES_DATA.filter((p) => p.cluster === cluster.id);
              return (
                <div key={cluster.id} className="space-y-3">
                  <div className="border-b border-slate-800 pb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block">
                      {cluster.badge}
                    </span>
                    <h4 className="text-xs font-bold text-white mt-0.5">{cluster.name}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {clusterPages.map((page) => (
                      <li key={page.id}>
                        <button
                          onClick={() => onNavigate(page.slug)}
                          className="text-left text-xs text-slate-400 hover:text-white transition-colors group flex items-start gap-1.5"
                        >
                          <span className="text-[10px] font-mono text-slate-600 group-hover:text-indigo-400 shrink-0 mt-0.5">
                            {page.num < 10 ? `0${page.num}` : page.num}.
                          </span>
                          <span className="group-hover:underline underline-offset-2 line-clamp-1">
                            {page.shortTitle}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom meta & credits bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              HA
            </div>
            <span>
              <strong>AI-Based Programming Habit Analyzer</strong> — Academic Project & Portfolio Showcase
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => onNavigate('team-project-info')}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Project Team & Guide</span>
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('conclusion-contact')}
              className="hover:text-white transition-colors"
            >
              Contact & Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
