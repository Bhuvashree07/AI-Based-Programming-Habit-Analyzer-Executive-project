import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Layers,
  Boxes,
  BarChart3,
  LayoutDashboard,
  Rocket,
  Award,
  Terminal,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { CLUSTERS, PAGES_DATA } from '../../data/pagesData';
import { ClusterId } from '../../types';

interface NavbarProps {
  currentPageSlug: string;
  onNavigate: (slug: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPageSlug, onNavigate, onOpenSearch }) => {
  const [openDropdown, setOpenDropdown] = useState<ClusterId | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCluster, setMobileExpandedCluster] = useState<ClusterId | null>('overview');
  const navRef = useRef<HTMLDivElement>(null);

  const currentPage = PAGES_DATA.find((p) => p.slug === currentPageSlug);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const clusterIcons: Record<ClusterId, React.ReactNode> = {
    overview: <Sparkles className="w-4 h-4 text-indigo-500" />,
    system: <Layers className="w-4 h-4 text-indigo-500" />,
    modules: <Boxes className="w-4 h-4 text-indigo-500" />,
    'ai-metrics': <BarChart3 className="w-4 h-4 text-indigo-500" />,
    demo: <LayoutDashboard className="w-4 h-4 text-amber-500" />,
    impact: <Rocket className="w-4 h-4 text-teal-500" />,
    about: <Award className="w-4 h-4 text-slate-500" />,
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand logo & title */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm group-hover:bg-indigo-700 transition-colors">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base">
                  HabitAnalyzer
                </span>
                <span className="hidden md:inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Academic Project
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block truncate max-w-[240px]">
                AI-Based Programming Habit Analyzer
              </p>
            </div>
          </div>

          {/* Desktop Navigation Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-1">
            {CLUSTERS.map((cluster) => {
              const isOpen = openDropdown === cluster.id;
              const isClusterActive = currentPage?.cluster === cluster.id;
              const clusterPages = PAGES_DATA.filter((p) => p.cluster === cluster.id);

              return (
                <div key={cluster.id} className="relative">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : cluster.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      isClusterActive
                        ? 'text-indigo-600 bg-indigo-50 font-semibold'
                        : isOpen
                        ? 'text-slate-900 bg-slate-100'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{cluster.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Mega dropdown menu */}
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-3.5 py-2 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {clusterIcons[cluster.id]}
                          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                            {cluster.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium">{cluster.range}</span>
                      </div>

                      <div className="max-h-[380px] overflow-y-auto py-1">
                        {clusterPages.map((page) => {
                          const isPageActive = currentPageSlug === page.slug;
                          return (
                            <button
                              key={page.id}
                              onClick={() => {
                                onNavigate(page.slug);
                                setOpenDropdown(null);
                              }}
                              className={`w-full text-left px-3.5 py-2 flex items-start gap-2.5 transition-colors ${
                                isPageActive
                                  ? 'bg-indigo-50 text-indigo-950 font-medium'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span
                                className={`shrink-0 w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold mt-0.5 ${
                                  isPageActive
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-slate-100 text-slate-500'
                                }`}
                              >
                                {page.num}
                              </span>
                              <div className="min-w-0">
                                <div className="text-xs font-medium truncate">{page.title}</div>
                                <div className="text-[11px] text-slate-400 line-clamp-1">
                                  {page.description}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right actions: Search + Demo Portal Button */}
          <div className="flex items-center gap-2">
            {/* Quick search button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-lg border border-slate-200 transition-colors"
              title="Search all 35 pages (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Search site...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-semibold text-slate-400 bg-white border border-slate-200 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Quick jump to Demo Portal */}
            <button
              onClick={() => onNavigate('demo-student-dashboard')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Launch Demo</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Project Navigation (35 Pages)
            </span>
            <button
              onClick={() => {
                onNavigate('demo-student-dashboard');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-md"
            >
              Launch Demo
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {CLUSTERS.map((cluster) => {
              const isExpanded = mobileExpandedCluster === cluster.id;
              const clusterPages = PAGES_DATA.filter((p) => p.cluster === cluster.id);

              return (
                <div key={cluster.id} className="py-1">
                  <button
                    onClick={() =>
                      setMobileExpandedCluster(isExpanded ? null : cluster.id)
                    }
                    className="w-full px-4 py-2.5 flex items-center justify-between text-left text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-2">
                      {clusterIcons[cluster.id]}
                      <span>{cluster.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{cluster.range}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="bg-slate-50/60 px-4 py-1.5 space-y-1">
                      {clusterPages.map((page) => (
                        <button
                          key={page.id}
                          onClick={() => {
                            onNavigate(page.slug);
                            setMobileMenuOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-md text-xs flex items-center gap-2.5 ${
                            currentPageSlug === page.slug
                              ? 'bg-indigo-100/70 text-indigo-900 font-bold'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <span className="w-5 h-5 rounded flex items-center justify-center bg-white border border-slate-200 text-[10px] font-bold text-slate-700">
                            {page.num}
                          </span>
                          <span className="truncate">{page.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
