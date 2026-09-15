import React from 'react';
import {
  Sparkles,
  ArrowRight,
  LayoutDashboard,
  CheckCircle2,
  GitBranch,
  Activity,
  BrainCircuit,
  TrendingUp,
  BarChart3,
  SearchCode,
  ShieldAlert,
  Code2,
  Terminal,
  Layers,
  Award,
  ChevronRight,
} from 'lucide-react';
import { CLUSTERS } from '../../data/pagesData';

interface Page1HomeProps {
  onNavigate: (slug: string) => void;
}

export const Page1Home: React.FC<Page1HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/60 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100/80 text-indigo-800 border border-indigo-200">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Academic Research & Capstone Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            AI-Based Programming <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-teal-600">
              Habit Analyzer
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Analyzing Student Coding Behavior and Providing Personalized Improvement
          </p>

          {/* Core Problem / Solution Snapshot Pill */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-3xl mx-auto text-left flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              <strong className="text-slate-900">The Problem with Auto-Graders:</strong> Traditional platforms only check whether code is correct. Our system studies how a student writes code longitudinally across multiple assignments—identifying recurring anti-patterns and applying AI to turn static metrics into humanized learning advice.
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('demo-student-dashboard')}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md hover:shadow-indigo-500/20 transition-all flex items-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Launch Interactive Demo</span>
            </button>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-xs transition-all flex items-center gap-2"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('problem-statement')}
              className="px-6 py-3 rounded-xl text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 text-sm font-semibold transition-all"
            >
              Read Problem Statement
            </button>
          </div>

          {/* Closing Philosophy Highlight */}
          <div className="pt-6">
            <div className="inline-block p-4 rounded-xl bg-slate-900 text-slate-200 text-xs sm:text-sm italic border border-slate-800 shadow-inner max-w-2xl">
              "Instead of only asking whether a student's code is correct, the system helps answer: <strong className="text-indigo-400 not-italic font-bold">How is the student improving as a programmer?</strong>"
            </div>
          </div>
        </div>
      </section>

      {/* 4 Key Pillar Highlights */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl font-extrabold text-indigo-600">7</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Metrics Tracked</div>
            <p className="text-xs text-slate-600 mt-2">Complexity, duplication, nesting, naming, docs, testing, and functions.</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl font-extrabold text-teal-600">6</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Core Modules</div>
            <p className="text-xs text-slate-600 mt-2">End-to-end pipeline from ingestion to AST extraction and progress tracking.</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl font-extrabold text-amber-600">8</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">System Objectives</div>
            <p className="text-xs text-slate-600 mt-2">Targeting longitudinal habit change rather than punitive single-test grading.</p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl font-extrabold text-indigo-600">AI</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Pedagogical Synthesis</div>
            <p className="text-xs text-slate-600 mt-2">Static analysis gathers raw facts; AI converts them into actionable coaching.</p>
          </div>
        </div>
      </section>

      {/* System Flow Diagram Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-indigo-600" />
                End-to-End System Pipeline
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Linear processing sequence transforming student code into pedagogical insights
              </p>
            </div>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Detailed Pipeline</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {[
              { step: '01', title: 'Student Submission', desc: 'Code files uploaded & indexed', icon: Code2, color: 'text-blue-600 bg-blue-50 border-blue-200' },
              { step: '02', title: 'Code Analysis', desc: 'AST parsing & 7 metric extraction', icon: SearchCode, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
              { step: '03', title: 'Habit Detection', desc: 'Longitudinal pattern matching', icon: Activity, color: 'text-amber-600 bg-amber-50 border-amber-200' },
              { step: '04', title: 'AI Analysis', desc: 'Gemini pedagogical reasoning', icon: BrainCircuit, color: 'text-purple-600 bg-purple-50 border-purple-200' },
              { step: '05', title: 'Personal Feedback', desc: 'Plain-language coaching & drills', icon: Sparkles, color: 'text-teal-600 bg-teal-50 border-teal-200' },
              { step: '06', title: 'Progress Tracking', desc: 'Longitudinal dashboard trends', icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
            ].map((node, i) => (
              <div key={node.step} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col items-center">
                <span className="text-[10px] font-mono font-bold text-slate-400 mb-1">{node.step}</span>
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center mb-2 ${node.color}`}>
                  <node.icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-tight">{node.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 6 System Modules Preview Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">The 6 Core System Modules</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Click any module to inspect technical specifications, schemas, and live prototypes.
            </p>
          </div>
          <button
            onClick={() => onNavigate('modules-overview')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 hidden sm:flex items-center gap-1"
          >
            <span>View All Modules</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              slug: 'module-student-management',
              title: 'Student Management',
              num: 'Module 1',
              desc: 'Registration, authentication, user profiling, and multi-language preference selection.',
              icon: Terminal,
              color: 'text-blue-600 bg-blue-50',
            },
            {
              slug: 'module-code-submission',
              title: 'Code Submission',
              num: 'Module 2',
              desc: 'Assignment file upload, syntax validation, language detection, and timestamped history tracking.',
              icon: Code2,
              color: 'text-indigo-600 bg-indigo-50',
            },
            {
              slug: 'module-code-analysis',
              title: 'Code Analysis',
              num: 'Module 3',
              desc: 'Structural AST parsing, cyclomatic complexity calculations, duplication scans, and quality metrics.',
              icon: SearchCode,
              color: 'text-teal-600 bg-teal-50',
            },
            {
              slug: 'module-habit-detection',
              title: 'Habit Detection',
              num: 'Module 4',
              desc: 'Cross-submission comparative engine classifying recurring coding strengths vs persistent weaknesses.',
              icon: Activity,
              color: 'text-amber-600 bg-amber-50',
            },
            {
              slug: 'module-ai-feedback',
              title: 'AI Feedback',
              num: 'Module 5',
              desc: 'Large language model translation converting metric numbers into accessible, personalized advice.',
              icon: BrainCircuit,
              color: 'text-purple-600 bg-purple-50',
            },
            {
              slug: 'module-progress-tracking',
              title: 'Progress Tracking',
              num: 'Module 6',
              desc: 'Longitudinal dashboards visualizing student growth, metric improvements, and resolved anti-patterns.',
              icon: TrendingUp,
              color: 'text-emerald-600 bg-emerald-50',
            },
          ].map((mod) => (
            <div
              key={mod.slug}
              onClick={() => onNavigate(mod.slug)}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {mod.num}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${mod.color}`}>
                  <mod.icon className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {mod.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {mod.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                <span>Inspect Module</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation into Clusters */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                Full 35-Page Project Structure
              </span>
              <h2 className="text-xl font-bold mt-0.5">Explore by Project Cluster</h2>
            </div>
            <button
              onClick={() => onNavigate('about-project')}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors self-start sm:self-auto"
            >
              Start Guided Tour
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            {CLUSTERS.map((c) => (
              <div
                key={c.id}
                onClick={() => {
                  const firstPage = c.id === 'overview' ? 'home' : c.id === 'system' ? 'proposed-system' : c.id === 'modules' ? 'modules-overview' : c.id === 'ai-metrics' ? 'role-of-ai' : c.id === 'demo' ? 'demo-student-dashboard' : c.id === 'impact' ? 'benefits-students' : 'team-project-info';
                  onNavigate(firstPage);
                }}
                className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-400/40 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between text-indigo-400 font-bold mb-1">
                  <span>{c.name}</span>
                  <span className="text-[10px] text-slate-400">{c.range}</span>
                </div>
                <p className="text-slate-400 text-[11px] line-clamp-1">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
