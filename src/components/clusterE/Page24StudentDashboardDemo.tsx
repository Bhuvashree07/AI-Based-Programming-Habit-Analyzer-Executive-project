import React, { useState } from 'react';
import {
  User,
  Activity,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Code2,
  Flame,
  LineChart,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { SAMPLE_SUBMISSIONS, DETECTED_HABITS, CORE_METRICS } from '../../data/mockData';

interface Page24StudentDashboardDemoProps {
  onNavigate: (slug: string) => void;
}

export const Page24StudentDashboardDemo: React.FC<Page24StudentDashboardDemoProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'submissions' | 'habits'>('overview');

  return (
    <div className="space-y-8" id="student-dashboard-demo">
      {/* Top Interactive Demo Indicator Bar */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-amber-900">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <strong className="font-semibold">Interactive Prototype:</strong> Student Habit Dashboard (Page 24 of 35)
        </div>
        <button
          onClick={() => onNavigate('demo-code-submission')}
          className="text-amber-800 hover:text-amber-950 underline font-medium flex items-center gap-1"
        >
          <span>Go to Submission Demo</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Student Profile Header Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-800 flex items-center justify-center text-white text-2xl font-bold shadow-md">
            AS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">Alex Sharma</h2>
              <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold">
                CS-2026-STU48
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              B.E. Computer Science • Semester VI • Algorithms & Data Structures
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5 text-indigo-500" /> Track: Python 3.11
              </span>
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" /> 5 Submissions Analyzed
              </span>
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <TrendingUp className="w-3.5 h-3.5" /> +26% Growth This Month
              </span>
            </div>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('demo-code-submission')}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center gap-1.5"
          >
            <Code2 className="w-4 h-4" />
            <span>Submit New Program</span>
          </button>
          <button
            onClick={() => onNavigate('demo-progress-tracking')}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <LineChart className="w-4 h-4" />
            <span>Progress Analytics</span>
          </button>
        </div>
      </div>

      {/* 4 Summary Metric Gauges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Overall Habit Index</div>
          <div className="text-2xl font-black text-indigo-600 mt-1">84 / 100</div>
          <div className="text-[11px] text-emerald-600 mt-1 flex items-center gap-1 font-semibold">
            <TrendingUp className="w-3 h-3" /> Up from 58 (Assignment 1)
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Active Weaknesses</div>
          <div className="text-2xl font-black text-rose-600 mt-1">1 Remaining</div>
          <div className="text-[11px] text-slate-500 mt-1">
            2 Previously Resolved
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Confirmed Strengths</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">2 Verified</div>
          <div className="text-[11px] text-slate-500 mt-1">
            Modularity & Low Duplication
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Earned Habit Badges</div>
          <div className="text-2xl font-black text-amber-600 mt-1">4 Badges</div>
          <div className="text-[11px] text-amber-700 mt-1 font-medium">
            🏆 Clean Code Apprentice
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors ${
            activeTab === 'overview'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Habit Coaching Overview
        </button>
        <button
          onClick={() => setActiveTab('submissions')}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors ${
            activeTab === 'submissions'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Recent Submissions (5)
        </button>
        <button
          onClick={() => setActiveTab('habits')}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors ${
            activeTab === 'habits'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Active Strengths & Weaknesses
        </button>
      </div>

      {/* Tab content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main advice panel */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  Gemini AI Personalized Habit Coach
                </h3>
                <span className="text-[10px] text-slate-400">Updated after Assignment 5</span>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-xs text-slate-700 leading-relaxed space-y-2">
                <p>
                  "Great work, Alex! Your function modularity has improved significantly. In Assignment 1, you averaged 54 lines per function; now in Assignment 5, you've dropped to an elegant 16 lines per method."
                </p>
                <p className="font-semibold text-purple-900">
                  Current Priority: We noticed you still under-test boundary conditions in 80% of your submissions. Before your next assignment, tackle the 'Boundary Testing Arsenal' kata!
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">Recommended Micro-Drill:</span>
                <button
                  onClick={() => onNavigate('recommendation-engine')}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
                >
                  <span>Boundary Testing Arsenal (20 min)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Recent Submissions mini-table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-slate-900">Recent Assignment Evaluations</h3>
                <button
                  onClick={() => setActiveTab('submissions')}
                  className="text-xs text-indigo-600 hover:underline font-semibold"
                >
                  View All History
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {SAMPLE_SUBMISSIONS.slice(-3).reverse().map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => onNavigate('demo-analysis-report')}
                    className="py-3 flex items-center justify-between gap-3 hover:bg-slate-50 p-2 rounded-lg cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{sub.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                          {sub.id}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {sub.timestamp} • {sub.loc} LOC • {sub.language}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-sm font-black text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
                        {sub.overallScore}/100
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Active habits widget */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Habit Focus Summary
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
                  <div className="flex items-center gap-1.5 font-bold text-rose-800 mb-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                    Active Weakness (Needs Focus)
                  </div>
                  <div className="font-semibold text-slate-900">Under-Testing Boundary Cases</div>
                  <p className="text-[11px] text-slate-600 mt-1">Present in 4 of 5 submissions (80%)</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Confirmed Strength
                  </div>
                  <div className="font-semibold text-slate-900">Modular Function Decomposition</div>
                  <p className="text-[11px] text-slate-600 mt-1">Sustained across all 5 assignments</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Confirmed Strength
                  </div>
                  <div className="font-semibold text-slate-900">Zero Duplicate Utility Logic</div>
                  <p className="text-[11px] text-slate-600 mt-1">&lt; 3% duplication maintained</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'submissions' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-4">Complete Student Submission History</h3>
          <div className="divide-y divide-slate-100">
            {SAMPLE_SUBMISSIONS.map((sub) => (
              <div
                key={sub.id}
                onClick={() => onNavigate('demo-analysis-report')}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 p-3 rounded-lg cursor-pointer transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{sub.title}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {sub.id}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Submitted: {sub.timestamp} • {sub.language} • {sub.loc} lines of code
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <div className="text-base font-bold text-indigo-600">{sub.overallScore}/100</div>
                    <div className="text-[10px] text-slate-400">Quality Score</div>
                  </div>
                  <button className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg">
                    Inspect Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'habits' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-rose-800 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              Active Tracked Weaknesses
            </h3>
            <div className="space-y-3">
              {DETECTED_HABITS.filter((h) => h.type === 'weakness').map((h) => (
                <div key={h.id} className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{h.title}</span>
                    <span className="text-[10px] uppercase font-bold text-rose-700">{h.frequency}% freq</span>
                  </div>
                  <p className="text-xs text-slate-600">{h.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Confirmed Verified Strengths
            </h3>
            <div className="space-y-3">
              {DETECTED_HABITS.filter((h) => h.type === 'strength').map((h) => (
                <div key={h.id} className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{h.title}</span>
                    <span className="text-[10px] uppercase font-bold text-emerald-700">{h.frequency}% consistency</span>
                  </div>
                  <p className="text-xs text-slate-600">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
