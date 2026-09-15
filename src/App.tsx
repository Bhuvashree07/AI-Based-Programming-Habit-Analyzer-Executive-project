import React, { useState, useEffect } from 'react';
import { PAGES_DATA, getPageBySlug, getPageByIndex } from './data/pagesData';
import { PageMeta } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { PageHeader } from './components/common/PageHeader';
import { Pagination } from './components/common/Pagination';
import { SearchModal } from './components/common/SearchModal';

// Cluster A
import { Page1Home } from './components/clusterA/Page1Home';
import { Page2AboutProject } from './components/clusterA/Page2AboutProject';
import { Page3Introduction } from './components/clusterA/Page3Introduction';
import { Page4ProblemStatement } from './components/clusterA/Page4ProblemStatement';
import { Page5Objectives } from './components/clusterA/Page5Objectives';

// Cluster B
import { Page6ProposedSystem } from './components/clusterB/Page6ProposedSystem';
import { Page7SystemArchitecture } from './components/clusterB/Page7SystemArchitecture';
import { Page8HowItWorks } from './components/clusterB/Page8HowItWorks';
import { Page9TechnologyStack } from './components/clusterB/Page9TechnologyStack';
import { Page10DatabaseDesign } from './components/clusterB/Page10DatabaseDesign';

// Cluster C
import { Page11ModulesOverview } from './components/clusterC/Page11ModulesOverview';
import { Page12StudentManagement } from './components/clusterC/Page12StudentManagement';
import { Page13CodeSubmission } from './components/clusterC/Page13CodeSubmission';
import { Page14CodeAnalysis } from './components/clusterC/Page14CodeAnalysis';
import { Page15HabitDetection } from './components/clusterC/Page15HabitDetection';
import { Page16AIFeedback } from './components/clusterC/Page16AIFeedback';
import { Page17ProgressTracking } from './components/clusterC/Page17ProgressTracking';

// Cluster D
import { Page18RoleOfAI } from './components/clusterD/Page18RoleOfAI';
import { Page19MetricsExplained } from './components/clusterD/Page19MetricsExplained';
import { Page20HabitDetectionLogic } from './components/clusterD/Page20HabitDetectionLogic';
import { Page21AIFeedbackExamples } from './components/clusterD/Page21AIFeedbackExamples';
import { Page22RecommendationEngine } from './components/clusterD/Page22RecommendationEngine';
import { Page23SampleAnalysisReport } from './components/clusterD/Page23SampleAnalysisReport';

// Cluster E (Demos)
import { Page24StudentDashboardDemo } from './components/clusterE/Page24StudentDashboardDemo';
import { Page25CodeSubmissionDemo } from './components/clusterE/Page25CodeSubmissionDemo';
import { Page26AnalysisReportDemo } from './components/clusterE/Page26AnalysisReportDemo';
import { Page27HabitDetectionDemo } from './components/clusterE/Page27HabitDetectionDemo';
import { Page28ProgressDashboardDemo } from './components/clusterE/Page28ProgressDashboardDemo';
import { Page29TeacherDashboardDemo } from './components/clusterE/Page29TeacherDashboardDemo';

// Cluster F
import { Page30TestingResults } from './components/clusterF/Page30TestingResults';
import { Page31PerformanceMetrics } from './components/clusterF/Page31PerformanceMetrics';
import { Page32CaseStudies } from './components/clusterF/Page32CaseStudies';

// Cluster G
import { Page33Limitations } from './components/clusterG/Page33Limitations';
import { Page34Conclusion } from './components/clusterG/Page34Conclusion';
import { Page35TeamReferences } from './components/clusterG/Page35TeamReferences';

export default function App() {
  const [currentSlug, setCurrentSlug] = useState<string>('home');
  const [searchOpen, setSearchOpen] = useState(false);

  // Initialize from URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash && getPageBySlug(hash)) {
        setCurrentSlug(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (slug: string) => {
    const targetPage = getPageBySlug(slug);
    if (targetPage) {
      setCurrentSlug(slug);
      window.location.hash = `#${slug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentPage: PageMeta = getPageBySlug(currentSlug) || PAGES_DATA[0];
  const currentIndex = PAGES_DATA.findIndex((p) => p.slug === currentPage.slug);
  const prevPage = currentIndex > 0 ? PAGES_DATA[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES_DATA.length - 1 ? PAGES_DATA[currentIndex + 1] : null;

  // Render the active page component
  const renderPageComponent = () => {
    switch (currentPage.slug) {
      case 'home':
        return <Page1Home onNavigate={navigateTo} />;
      case 'about-project':
        return <Page2AboutProject onNavigate={navigateTo} />;
      case 'introduction':
        return <Page3Introduction onNavigate={navigateTo} />;
      case 'problem-statement':
        return <Page4ProblemStatement onNavigate={navigateTo} />;
      case 'objectives':
        return <Page5Objectives onNavigate={navigateTo} />;
      case 'proposed-system':
        return <Page6ProposedSystem onNavigate={navigateTo} />;
      case 'system-architecture':
        return <Page7SystemArchitecture onNavigate={navigateTo} />;
      case 'how-it-works':
        return <Page8HowItWorks onNavigate={navigateTo} />;
      case 'technology-stack':
        return <Page9TechnologyStack onNavigate={navigateTo} />;
      case 'database-design':
        return <Page10DatabaseDesign onNavigate={navigateTo} />;
      case 'modules-overview':
        return <Page11ModulesOverview onNavigate={navigateTo} />;
      case 'module-student-management':
        return <Page12StudentManagement onNavigate={navigateTo} />;
      case 'module-code-submission':
        return <Page13CodeSubmission onNavigate={navigateTo} />;
      case 'module-code-analysis':
        return <Page14CodeAnalysis onNavigate={navigateTo} />;
      case 'module-habit-detection':
        return <Page15HabitDetection onNavigate={navigateTo} />;
      case 'module-ai-feedback':
        return <Page16AIFeedback onNavigate={navigateTo} />;
      case 'module-progress-tracking':
        return <Page17ProgressTracking onNavigate={navigateTo} />;
      case 'role-of-ai':
        return <Page18RoleOfAI onNavigate={navigateTo} />;
      case 'metrics-explained':
        return <Page19MetricsExplained onNavigate={navigateTo} />;
      case 'habit-detection-logic':
        return <Page20HabitDetectionLogic onNavigate={navigateTo} />;
      case 'ai-feedback-examples':
        return <Page21AIFeedbackExamples onNavigate={navigateTo} />;
      case 'recommendation-engine':
        return <Page22RecommendationEngine onNavigate={navigateTo} />;
      case 'sample-analysis-report':
        return <Page23SampleAnalysisReport onNavigate={navigateTo} />;
      case 'demo-student-dashboard':
        return <Page24StudentDashboardDemo onNavigate={navigateTo} />;
      case 'demo-code-submission':
        return <Page25CodeSubmissionDemo onNavigate={navigateTo} />;
      case 'demo-analysis-report':
        return <Page26AnalysisReportDemo onNavigate={navigateTo} />;
      case 'demo-habit-detection':
        return <Page27HabitDetectionDemo onNavigate={navigateTo} />;
      case 'demo-progress-tracking':
        return <Page28ProgressDashboardDemo onNavigate={navigateTo} />;
      case 'demo-teacher-dashboard':
        return <Page29TeacherDashboardDemo onNavigate={navigateTo} />;
      case 'testing-results':
        return <Page30TestingResults onNavigate={navigateTo} />;
      case 'performance-metrics':
        return <Page31PerformanceMetrics onNavigate={navigateTo} />;
      case 'case-studies':
        return <Page32CaseStudies onNavigate={navigateTo} />;
      case 'limitations':
        return <Page33Limitations onNavigate={navigateTo} />;
      case 'conclusion':
        return <Page34Conclusion onNavigate={navigateTo} />;
      case 'team-references':
        return <Page35TeamReferences onNavigate={navigateTo} />;
      default:
        return <Page1Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Global Navigation Header */}
      <Navbar
        currentSlug={currentSlug}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 space-y-8">
        {/* Top page title and cluster indicator */}
        <PageHeader page={currentPage} onNavigate={navigateTo} />

        {/* Dynamic page component */}
        <div className="transition-opacity duration-200">
          {renderPageComponent()}
        </div>

        {/* Bottom previous / next navigation and jump picker */}
        <Pagination
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          onNavigate={navigateTo}
        />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Command/Search Palette (Cmd+K / Ctrl+K) */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
}
