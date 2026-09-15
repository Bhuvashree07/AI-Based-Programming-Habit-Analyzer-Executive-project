import React from 'react';
import { UserCheck, Key, Globe, Shield, User, ArrowRight, ExternalLink } from 'lucide-react';

interface Page12StudentManagementProps {
  onNavigate: (slug: string) => void;
}

export const Page12StudentManagement: React.FC<Page12StudentManagementProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Module 1: Student Management</h2>
            <p className="text-xs text-slate-500">Registration, Authentication, Profile, and Language Preferences</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Student Management module serves as the authentication gateway and profile manager for learners. It tracks each student’s academic credentials, course affiliations, preferred programming languages, and historical portfolio context.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Key className="w-4 h-4 text-indigo-600" />
            1. Registration & Secure Authentication
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Students sign up using their university register/roll numbers and institutional emails. Sessions use secure JSON Web Tokens (JWT) to ensure strict data privacy and isolation between classmates.
          </p>
          <div className="text-xs font-mono bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-700">
            POST /api/auth/register &#123; student_id, register_no, email, course_id &#125;
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Globe className="w-4 h-4 text-indigo-600" />
            2. Multi-Language Preference Engine
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Students can designate their primary programming track (e.g. Python 3, Java, C/C++), which sets the default AST syntax parser and language-specific convention benchmarks (e.g. PEP 8 for Python, camelCase for Java).
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded text-xs font-medium">Python 3.11</span>
            <span className="px-2 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded text-xs font-medium">Java 17</span>
            <span className="px-2 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded text-xs font-medium">C++20</span>
          </div>
        </div>
      </div>

      {/* Demo Link Banner */}
      <div className="p-6 rounded-xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-indigo-950">See this module in action</h4>
          <p className="text-xs text-slate-600 mt-0.5">Explore the live interactive Student Dashboard prototype (Page 24).</p>
        </div>
        <button
          onClick={() => onNavigate('demo-student-dashboard')}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <span>Launch Student Dashboard Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
