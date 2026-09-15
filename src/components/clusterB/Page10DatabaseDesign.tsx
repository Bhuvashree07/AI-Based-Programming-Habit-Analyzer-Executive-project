import React from 'react';
import { Database, Key, ArrowRight, Table, Layers, Network } from 'lucide-react';

interface Page10DatabaseDesignProps {
  onNavigate: (slug: string) => void;
}

export const Page10DatabaseDesign: React.FC<Page10DatabaseDesignProps> = ({ onNavigate }) => {
  const entities = [
    {
      name: 'STUDENT',
      pk: 'student_id (UUID)',
      fields: [
        'full_name (VARCHAR)',
        'register_number (VARCHAR UNIQUE)',
        'email (VARCHAR UNIQUE)',
        'preferred_language (VARCHAR)',
        'enrolled_course_id (FK)',
        'created_at (TIMESTAMP)',
      ],
      relations: '1-to-Many with SUBMISSION, 1-to-Many with PROGRESS',
    },
    {
      name: 'SUBMISSION',
      pk: 'submission_id (UUID)',
      fields: [
        'student_id (FK -> STUDENT)',
        'assignment_title (VARCHAR)',
        'language (VARCHAR)',
        'source_code_hash (VARCHAR)',
        'lines_of_code (INT)',
        'submitted_at (TIMESTAMP)',
      ],
      relations: 'Many-to-1 with STUDENT, 1-to-1 with METRIC, 1-to-Many with HABIT_OCCURRENCE',
    },
    {
      name: 'METRIC',
      pk: 'metric_id (UUID)',
      fields: [
        'submission_id (FK -> SUBMISSION)',
        'cyclomatic_complexity (FLOAT)',
        'code_duplication_pct (FLOAT)',
        'max_nesting_depth (INT)',
        'naming_quality_score (FLOAT)',
        'documentation_pct (FLOAT)',
        'testing_ratio (FLOAT)',
        'function_usage_score (FLOAT)',
        'overall_quality_score (FLOAT)',
      ],
      relations: '1-to-1 with SUBMISSION',
    },
    {
      name: 'HABIT',
      pk: 'habit_id (VARCHAR)',
      fields: [
        'habit_name (VARCHAR)',
        'habit_type (ENUM: STRENGTH, WEAKNESS)',
        'target_metric (VARCHAR)',
        'severity (ENUM: LOW, MEDIUM, HIGH)',
        'standard_explanation (TEXT)',
      ],
      relations: '1-to-Many with HABIT_OCCURRENCE',
    },
    {
      name: 'FEEDBACK',
      pk: 'feedback_id (UUID)',
      fields: [
        'submission_id (FK -> SUBMISSION)',
        'ai_generated_explanation (TEXT)',
        'primary_weakness_focus (VARCHAR)',
        'recommended_exercises (JSONB)',
        'prompt_version (VARCHAR)',
        'generated_at (TIMESTAMP)',
      ],
      relations: '1-to-1 with SUBMISSION',
    },
    {
      name: 'PROGRESS',
      pk: 'progress_id (UUID)',
      fields: [
        'student_id (FK -> STUDENT)',
        'evaluation_date (DATE)',
        'active_habit_count (INT)',
        'resolved_habit_count (INT)',
        'moving_avg_complexity (FLOAT)',
        'moving_avg_quality (FLOAT)',
      ],
      relations: 'Many-to-1 with STUDENT',
    },
  ];

  return (
    <div className="space-y-10">
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Relational Database & Entity Relationship Model</h2>
            <p className="text-xs text-slate-500">Core Entities: Student, Submission, Metric, Habit, Feedback, Progress</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The relational schema is designed with high normalization to support rapid sliding-window time-series aggregation. Every student submission links directly to granular AST metrics and longitudinal habit observations.
        </p>
      </section>

      {/* ER Diagram Visual Representation */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <h3 className="text-base font-bold text-slate-100 mb-6 flex items-center gap-2">
          <Network className="w-4 h-4 text-indigo-400" />
          Entity-Relationship Diagram Architecture
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {entities.map((e) => (
            <div key={e.name} className="bg-slate-800/90 border border-slate-700 rounded-xl overflow-hidden text-xs">
              <div className="bg-indigo-950/80 px-4 py-2.5 border-b border-indigo-900/60 flex items-center justify-between">
                <span className="font-mono font-bold text-indigo-300 flex items-center gap-1.5">
                  <Table className="w-3.5 h-3.5" />
                  {e.name}
                </span>
                <span className="text-[10px] text-slate-400">TABLE</span>
              </div>

              <div className="p-4 space-y-2">
                <div className="text-[11px] font-mono text-amber-400 flex items-center gap-1">
                  <Key className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>PK: {e.pk}</span>
                </div>

                <div className="border-t border-slate-700/60 pt-2 space-y-1 font-mono text-[11px] text-slate-300">
                  {e.fields.map((f, i) => (
                    <div key={i} className="truncate">
                      {f}
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-700/60 pt-2 text-[10px] text-slate-400 italic">
                  Rel: {e.relations}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
