import React from 'react';
import { PageInfo } from '../../types';
import { PAGES_DATA } from '../../data/pagesData';
import { ChevronRight, ArrowRight, Share2, Sparkles, BookOpen, Layers } from 'lucide-react';

interface PageHeaderProps {
  page: PageInfo;
  onNavigate: (slug: string) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ page, onNavigate }) => {
  return (
    <div className="bg-white border-b border-slate-200 py-8 px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumbs & Page Counter */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 mb-4">
          <nav className="flex items-center space-x-1.5" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-indigo-600 transition-colors font-medium"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-600 font-medium">{page.clusterName}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px]">
              {page.shortTitle}
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              Page {page.num} of 35
            </span>
            <span className="text-[11px] font-mono text-slate-400 uppercase">
              {page.cluster.toUpperCase()}
            </span>
          </div>
        </div>

        {/* H1 Heading and intro */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {page.title}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          {page.description}
        </p>

        {/* Cross-linking related pages */}
        {page.relatedPages && page.relatedPages.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Related Project Views:
            </span>
            {page.relatedPages.map((relatedSlug) => {
              const relPage = PAGES_DATA.find((p) => p.slug === relatedSlug);
              if (!relPage) return null;
              return (
                <button
                  key={relatedSlug}
                  onClick={() => onNavigate(relatedSlug)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 transition-colors border border-slate-200 hover:border-indigo-200"
                >
                  <span>{relPage.shortTitle}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
