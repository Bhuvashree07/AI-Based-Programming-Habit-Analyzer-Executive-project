import React from 'react';
import { Users, GraduationCap, BookOpen, ExternalLink, Award, FileText, CheckCircle2 } from 'lucide-react';

interface Page35TeamReferencesProps {
  onNavigate: (slug: string) => void;
}

export const Page35TeamReferences: React.FC<Page35TeamReferencesProps> = ({ onNavigate }) => {
  const teamMembers = [
    {
      role: 'Team Lead & Full-Stack Architect',
      name: '[Student Name Placeholder 1]',
      regNo: '[Register Number Placeholder 1]',
      dept: 'Department of Computer Science & Engineering',
      college: '[College / University Name Placeholder]',
      email: 'student1@university.placeholder.edu',
    },
    {
      role: 'AST Analysis & Metric Engine Specialist',
      name: '[Student Name Placeholder 2]',
      regNo: '[Register Number Placeholder 2]',
      dept: 'Department of Computer Science & Engineering',
      college: '[College / University Name Placeholder]',
      email: 'student2@university.placeholder.edu',
    },
    {
      role: 'AI Model Integration & Prompt Engineer',
      name: '[Student Name Placeholder 3]',
      regNo: '[Register Number Placeholder 3]',
      dept: 'Department of Computer Science & Engineering',
      college: '[College / University Name Placeholder]',
      email: 'student3@university.placeholder.edu',
    },
    {
      role: 'UI/UX Designer & Data Visualization Engineer',
      name: '[Student Name Placeholder 4]',
      regNo: '[Register Number Placeholder 4]',
      dept: 'Department of Computer Science & Engineering',
      college: '[College / University Name Placeholder]',
      email: 'student4@university.placeholder.edu',
    },
  ];

  const academicReferences = [
    {
      title: 'A Complexity Measure',
      authors: 'McCabe, T. J. (1976)',
      publication: 'IEEE Transactions on Software Engineering, SE-2(4), 308-320.',
      topic: 'Cyclomatic Complexity Formulation & Graph-Theoretic Path Analysis',
    },
    {
      title: 'Elements of Software Science',
      authors: 'Halstead, M. H. (1977)',
      publication: 'Elsevier North-Holland, New York.',
      topic: 'Static Software Metric Formulations & Program Volume',
    },
    {
      title: 'Refactoring: Improving the Design of Existing Code',
      authors: 'Fowler, M. (1999)',
      publication: 'Addison-Wesley Professional.',
      topic: 'Code Smells, Guard Clauses, and Duplication Elimination',
    },
    {
      title: 'Using Large Language Models for Formative Feedback in Novice Programming Education',
      authors: 'Sarsa, S., Denny, P., Hellas, A., & Leinonen, J. (2022)',
      publication: 'ACM Conference on International Computing Education Research (ICER).',
      topic: 'AI-Generated Pedagogical Code Explanations & Error Scaffolding',
    },
    {
      title: 'Longitudinal Analysis of Novice Programmer Behavior in Automated Assessment Systems',
      authors: 'Ihantola, P., Ahoniemi, E., Karavirta, V., & Seppälä, O. (2010)',
      publication: 'ACM Inroads, 1(3), 86-93.',
      topic: 'Cross-Submission Behavioral Mining in Computer Science Curricula',
    },
  ];

  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Project Team & Academic References</h2>
            <p className="text-xs text-slate-500">Cap-Stone Project Submission Details • Academic Year 2025–2026</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Submitted in partial fulfillment of the requirements for the degree of Bachelor of Engineering / Technology in Computer Science & Engineering.
        </p>
      </section>

      {/* Project Supervisor Card */}
      <section className="bg-white rounded-2xl border border-indigo-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold text-lg shrink-0">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600">
              Project Guide & Supervisor
            </span>
            <h3 className="text-lg font-bold text-slate-900">[Project Guide Name Placeholder]</h3>
            <p className="text-xs text-slate-500">[Designation / Professor Placeholder]</p>
            <p className="text-xs text-slate-600 mt-0.5">[Department & Institution Name Placeholder]</p>
          </div>
        </div>

        <div className="text-xs text-slate-500 md:text-right">
          <div>Approved for Final Submission</div>
          <div className="font-semibold text-slate-800">Academic Year: 2025–2026</div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-4 h-4 text-indigo-600" />
          Student Investigators
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {member.role}
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-1">{member.name}</h4>
              <div className="text-xs text-slate-600 space-y-1 font-mono">
                <div>Reg No: <strong>{member.regNo}</strong></div>
                <div className="font-sans text-slate-500">{member.dept}</div>
                <div className="font-sans text-slate-500">{member.college}</div>
                <div className="text-indigo-600 pt-1">{member.email}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Citations and References */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Academic & Technical References</h3>
            <p className="text-xs text-slate-500">Foundational literature in static software metrics, automated assessment, and AI tutoring</p>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {academicReferences.map((ref, idx) => (
            <div key={idx} className="py-3.5 space-y-1 text-xs">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-slate-400 shrink-0 mt-0.5">[{idx + 1}]</span>
                <div>
                  <span className="font-bold text-slate-900">{ref.authors}. </span>
                  <span className="italic text-slate-800">"{ref.title}." </span>
                  <span className="text-slate-600">{ref.publication}</span>
                  <div className="mt-1">
                    <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full">
                      Focus: {ref.topic}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
