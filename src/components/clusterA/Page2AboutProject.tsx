import React from 'react';
import { Award, User, BookOpen, GraduationCap, Building2, Calendar, Target, CheckCircle2 } from 'lucide-react';

interface Page2AboutProjectProps {
  onNavigate: (slug: string) => void;
}

export const Page2AboutProject: React.FC<Page2AboutProjectProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      {/* Background & Context */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          Project Background & Motivation
        </h2>
        <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-3">
          <p>
            In modern computer science education, automated grading systems have become the standard tool for evaluating programming assignments. Platforms such as Gradescope, HackerRank, LeetCode, and custom auto-graders run automated test suites against submitted code to determine binary functional correctness (pass/fail).
          </p>
          <p>
            While these platforms successfully scale grading for large classrooms, they create a major educational blind spot: <strong>they treat every assignment as an isolated snapshot</strong>. A student who repeatedly writes monolithic 200-line functions, deeply nested 5-level for-loops, and cryptic single-letter variables receives full marks if their test cases pass. Because these habits are never flagged, students carry anti-patterns into advanced courses and industry software roles.
          </p>
          <p>
            The <strong>AI-Based Programming Habit Analyzer</strong> was conceived to solve this fundamental gap. By analyzing source code through static Abstract Syntax Tree (AST) inspection across sequential submissions, the system detects chronic behavioral habits. It then leverages AI to contextualize these findings into compassionate, personalized pedagogical coaching.
          </p>
        </div>
      </section>

      {/* Target Stakeholders */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-3">
            <User className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">For Computer Science Students</h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Gain immediate metacognitive awareness of personal coding habits, understand why complex constructs hinder maintainability, and receive tailored micro-exercises to improve incrementally.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mb-3">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">For University Instructors</h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Discover class-wide habit distributions (e.g. 64% of students struggle with recursion depth or boundary tests) to dynamically adjust lecture examples and tutorial sessions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">For Academic Institutions</h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Establish longitudinal software engineering quality benchmarks that measure true student programming maturity across entire multi-semester degree programs.
          </p>
        </div>
      </section>

      {/* Academic Submission Metadata Placeholders */}
      <section className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 rounded-2xl border border-indigo-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-indigo-100">
          <Award className="w-6 h-6 text-indigo-600" />
          <div>
            <h3 className="text-base font-bold text-slate-950">Academic Project Submission Record</h3>
            <p className="text-xs text-slate-500">Official college capstone / degree submission metadata placeholder card</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-3.5 bg-white rounded-lg border border-slate-200">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Student Presenter</div>
            <div className="text-sm font-semibold text-indigo-900 mt-1">[Enter Student Name]</div>
            <div className="text-[11px] text-slate-500">Lead Developer / Researcher</div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-slate-200">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Register / Roll Number</div>
            <div className="text-sm font-semibold text-indigo-900 mt-1">[Enter Register Number]</div>
            <div className="text-[11px] text-slate-500">Academic Identification</div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-slate-200">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Degree & Department</div>
            <div className="text-sm font-semibold text-indigo-900 mt-1">[Department of Computer Science & Engineering]</div>
            <div className="text-[11px] text-slate-500">Bachelor of Engineering / Technology</div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-slate-200">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">College / University</div>
            <div className="text-sm font-semibold text-indigo-900 mt-1">[Enter College / University Name]</div>
            <div className="text-[11px] text-slate-500">Affiliated Campus Institution</div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-slate-200">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Project Guide / Supervisor</div>
            <div className="text-sm font-semibold text-indigo-900 mt-1">[Enter Faculty Guide Name & Designation]</div>
            <div className="text-[11px] text-slate-500">Internal Academic Advisor</div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-slate-200">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Academic Year / Semester</div>
            <div className="text-sm font-semibold text-indigo-900 mt-1">[2026 Academic Year • Final Semester]</div>
            <div className="text-[11px] text-slate-500">Major Capstone Phase</div>
          </div>
        </div>
      </section>

      {/* Scope and Deliverables summary */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-3">Project Deliverables & Verification Scope</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Complete multi-language AST parser extracting 7 structural code-quality metrics.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Cross-submission sliding-window habit classifier for strength and weakness identification.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>LLM-powered pedagogical explanation engine providing friendly refactoring suggestions.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Student and faculty dashboards visualizing longitudinal progress curves.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
