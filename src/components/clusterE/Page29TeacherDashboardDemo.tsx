import React, { useState } from 'react';
import { KeyMetricsChart } from '../common/KeyMetricsChart';
import { MetricItem } from '../../types';
import { Users, AlertTriangle, CheckCircle2, TrendingUp, ArrowRight, BookOpen, Search, Download } from 'lucide-react';

interface Page29TeacherDashboardDemoProps {
  onNavigate: (slug: string) => void;
}

export const Page29TeacherDashboardDemo: React.FC<Page29TeacherDashboardDemoProps> = ({ onNavigate }) => {
  // Cohort average metrics for CS-301 Section A (64 Students)
  const cohortMetrics: MetricItem[] = [
    {
      id: 'cm1',
      name: 'Cyclomatic Complexity',
      key: 'complexity',
      score: 72,
      benchmark: 80,
      status: 'warning',
      unit: 'v(G)',
      valueDisplay: '7.8 avg cohort',
      plainMeaning: 'Cohort average decision pathways.',
      whyItMatters: 'Identifies if an assignment was structured poorly.',
      recommendedAction: 'Dedicate next lab lecture to decomposing switch/case branches.',
    },
    {
      id: 'cm2',
      name: 'Code Duplication',
      key: 'duplication',
      score: 68,
      benchmark: 75,
      status: 'warning',
      unit: '% dup',
      valueDisplay: '14.2% cohort dup',
      plainMeaning: 'Repeated logic across student submissions.',
      whyItMatters: 'Signals lack of understanding in writing shared utility libraries.',
      recommendedAction: 'Run live demo on extracting DRY functions.',
    },
    {
      id: 'cm3',
      name: 'Nesting Level',
      key: 'nesting',
      score: 76,
      benchmark: 80,
      status: 'warning',
      unit: 'levels',
      valueDisplay: '3.4 max avg depth',
      plainMeaning: 'Nesting indentation depth.',
      whyItMatters: 'Indicates overuse of nested while/for blocks.',
      recommendedAction: 'Demonstrate guard return refactoring patterns in class.',
    },
    {
      id: 'cm4',
      name: 'Naming Quality',
      key: 'naming',
      score: 82,
      benchmark: 80,
      status: 'optimal',
      unit: 'rating',
      valueDisplay: '82 / 100 rating',
      plainMeaning: 'Cohort naming descriptiveness.',
      whyItMatters: 'Readability is solid across Section A.',
      recommendedAction: 'Commend class on clear semantic identifiers.',
    },
    {
      id: 'cm5',
      name: 'Documentation',
      key: 'documentation',
      score: 79,
      benchmark: 75,
      status: 'optimal',
      unit: '% covered',
      valueDisplay: '79% docstring ratio',
      plainMeaning: 'Docstring adherence.',
      whyItMatters: 'Docstring compliance remains high.',
      recommendedAction: 'Introduce typing annotations in next assignment.',
    },
    {
      id: 'cm6',
      name: 'Testing Practices',
      key: 'testing',
      score: 54,
      benchmark: 75,
      status: 'critical',
      unit: '% coverage',
      valueDisplay: '41% test coverage',
      plainMeaning: 'Cohort assertion density.',
      whyItMatters: 'Severe class-wide deficit in test writing.',
      recommendedAction: 'Mandate 3 unit test assertions per submission for next lab.',
    },
    {
      id: 'cm7',
      name: 'Function Modularity',
      key: 'functionUsage',
      score: 80,
      benchmark: 75,
      status: 'optimal',
      unit: 'LOC/fn',
      valueDisplay: '22 lines / func avg',
      plainMeaning: 'Cohort routine modularity.',
      whyItMatters: 'Most students write functions under 30 lines.',
      recommendedAction: 'Encourage students to decompose secondary helpers.',
    },
  ];

  return (
    <div className="space-y-8" id="teacher-dashboard-demo">
      {/* Interactive Prototype Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-amber-900">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <strong className="font-semibold">Interactive Prototype:</strong> Faculty & Instructor Cohort Portal (Page 29 of 35)
        </div>
        <button
          onClick={() => onNavigate('testing-results')}
          className="text-amber-800 hover:text-amber-950 underline font-medium flex items-center gap-1"
        >
          <span>Next: Empirical Testing Results</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Class Overview Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
              INSTRUCTOR PORTAL • CS-301 SECTION A
            </span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Data Structures & Algorithms Cohort Telemetry</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Faculty: Prof. [Faculty Name Placeholder] • Enrolled: 64 Students • 320 Total Submissions
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* 4 Summary Class Gauges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Cohort Average Index</div>
          <div className="text-2xl font-black text-indigo-600 mt-1">73.0 / 100</div>
          <div className="text-[11px] text-emerald-600 mt-1 flex items-center gap-1 font-semibold">
            <TrendingUp className="w-3 h-3" /> +14% Since Week 1
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Class-Wide Bottleneck</div>
          <div className="text-2xl font-black text-rose-600 mt-1">Testing (54)</div>
          <div className="text-[11px] text-rose-700 mt-1">
            62% lack unit assertions
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Students Needing Support</div>
          <div className="text-2xl font-black text-amber-600 mt-1">8 Students</div>
          <div className="text-[11px] text-slate-500 mt-1">
            Quality score &lt; 65/100
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Top Quality Achievers</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">19 Students</div>
          <div className="text-[11px] text-emerald-700 mt-1 font-medium">
            Sustained 90+ Score
          </div>
        </div>
      </div>

      {/* Reusable Key Metrics Chart Instance #4 */}
      <KeyMetricsChart
        metrics={cohortMetrics}
        title="Class-Wide Average vs Department Benchmark"
        subtitle="Aggregated across all 64 enrolled students in Section A"
      />

      {/* At-Risk Students Mini-Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            Students Requiring Targeted Habit Intervention
          </h3>
          <span className="text-xs text-slate-500">Flagged by heuristic threshold</span>
        </div>

        <div className="divide-y divide-slate-100">
          {[
            { id: 'CS-2026-STU12', name: 'Rohan Verma', primaryHabit: 'Nesting Depth 5+ in all 5 submissions', score: 56 },
            { id: 'CS-2026-STU29', name: 'Priya Patel', primaryHabit: 'Code Duplication 28% (no helper functions)', score: 61 },
            { id: 'CS-2026-STU41', name: 'Karan Nair', primaryHabit: 'Zero Unit Testing across all assignments', score: 62 },
          ].map((s) => (
            <div key={s.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">{s.name}</span>
                  <span className="text-[10px] font-mono text-slate-500">{s.id}</span>
                </div>
                <p className="text-[11px] text-rose-700 mt-0.5">{s.primaryHabit}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                  {s.score}/100
                </span>
                <button className="text-xs text-indigo-600 hover:underline font-semibold">
                  Send Drill Kata
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
