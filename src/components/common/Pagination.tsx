import React from 'react';
import { PageInfo } from '../../types';
import { getAdjacentPages } from '../../data/pagesData';
import { ArrowLeft, ArrowRight, ListFilter, Compass } from 'lucide-react';

interface PaginationProps {
  currentPage: PageInfo;
  onNavigate: (slug: string) => void;
  onOpenSearch: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onNavigate, onOpenSearch }) => {
  const { prev, next } = getAdjacentPages(currentPage.num);

  return (
    <div className="mt-16 pt-8 border-t border-slate-200">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous page button */}
        {prev ? (
          <button
            onClick={() => onNavigate(prev.slug)}
            className="w-full sm:w-auto flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30 text-left transition-all group shadow-xs"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center text-slate-600 group-hover:text-indigo-600 shrink-0 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Previous • Page {prev.num}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-indigo-900 line-clamp-1">
                {prev.shortTitle}
              </div>
            </div>
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Middle quick search / index trigger */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
        >
          <Compass className="w-3.5 h-3.5 text-indigo-600" />
          <span>All 35 Pages Index</span>
        </button>

        {/* Next page button */}
        {next ? (
          <button
            onClick={() => onNavigate(next.slug)}
            className="w-full sm:w-auto flex items-center justify-end gap-3 p-3.5 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30 text-right transition-all group shadow-xs"
          >
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Next • Page {next.num}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-indigo-900 line-clamp-1">
                {next.shortTitle}
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-indigo-600 flex items-center justify-center text-indigo-600 group-hover:text-white shrink-0 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </div>
  );
};
