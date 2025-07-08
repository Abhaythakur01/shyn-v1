// src/App.tsx
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Styles
import './styles/scrollbar.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MouseTrail from './components/MouseTrail';
import { isMobileDevice } from './utils/deviceDetection';

// --- Page Imports ---
// Main Pages
import HomePage from './pages/HomePage';
import WhoAreYouPage from './pages/WhoAreYouPage';
import MembershipPage from './pages/MembershipPage';
import ExpertsPage from './pages/ExpertsPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import VideoRecordingServicesPage from './components/VideoRecordingServices';

// Art Form Pages (already lazy-loaded)
const StandUpComedyPage = lazy(() => import('./pages/art-forms/StandUpComedyPage'));
const PoetryPage = lazy(() => import('./pages/art-forms/PoetryPage'));
const StorytellingPage = lazy(() => import('./pages/art-forms/StorytellingPage'));
const SingingPage = lazy(() => import('./pages/art-forms/SingingPage'));
const DancingPage = lazy(() => import('./pages/art-forms/DancingPage'));
const RapPage = lazy(() => import('./pages/art-forms/RapPage'));

// --- NEW: Lazy Load Info & Legal Pages ---
const AboutUsPage = lazy(() => import('./pages/info/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/info/ContactPage'));
const HelpCenterPage = lazy(() => import('./pages/info/HelpCenterPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/info/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/info/TermsOfServicePage'));
const CommunityGuidelinesPage = lazy(() => import('./pages/info/CommunityGuidelinesPage'));


const PageRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes location={location} key={location.pathname}>
          {/* Existing Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/who-are-you" element={<WhoAreYouPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/experts" element={<ExpertsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/video-recording-services" element={<VideoRecordingServicesPage />} />
          
          {/* Art Form Routes */}
          <Route path="/art-form/stand-up-comedy" element={<StandUpComedyPage />} />
          <Route path="/art-form/poetry" element={<PoetryPage />} />
          <Route path="/art-form/storytelling" element={<StorytellingPage />} />
          <Route path="/art-form/singing" element={<SingingPage />} />
          <Route path="/art-form/dancing" element={<DancingPage />} />
          <Route path="/art-form/rap" element={<RapPage />} />

          {/* --- NEW: Info & Legal Routes --- */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/community-guidelines" element={<CommunityGuidelinesPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const showDesktopEnhancements = !isMobileDevice();
  const shouldShowMouseTrail = showDesktopEnhancements && location.pathname !== '/membership';

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const onScroll = () => {
      document.body.classList.add('scrolling');
      clearTimeout(timeout);
      timeout = setTimeout(() => document.body.classList.remove('scrolling'), 500);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {showDesktopEnhancements && <CustomCursor />}
      {shouldShowMouseTrail && <MouseTrail />}
      <Header />
      <main>
        <PageRoutes />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
