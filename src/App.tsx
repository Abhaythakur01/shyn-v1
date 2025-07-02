// src/App.tsx
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Styles
import './styles/scrollbar.css'; // 👈 Make sure this file exists

//components
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MouseTrail from './components/MouseTrail';

// --- Utils ---
import { isMobileDevice } from './utils/deviceDetection';

// Pages
import HomePage from './pages/HomePage';
import WhoAreYouPage from './pages/WhoAreYouPage';
import MembershipPage from './pages/MembershipPage';
import ExpertsPage from './pages/ExpertsPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import PortfolioPage from './pages/PortfolioPage';

// Lazy Load Art Form Pages
const StandUpComedyPage = lazy(() => import('./pages/art-forms/StandUpComedyPage'));
const PoetryPage = lazy(() => import('./pages/art-forms/PoetryPage'));
const StorytellingPage = lazy(() => import('./pages/art-forms/StorytellingPage'));
const SingingPage = lazy(() => import('./pages/art-forms/SingingPage'));
const DancingPage = lazy(() => import('./pages/art-forms/DancingPage'));
const RapPage = lazy(() => import('./pages/art-forms/RapPage'));

const PageRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-are-you" element={<WhoAreYouPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/experts" element={<ExpertsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />

          {/* Art Form Routes */}
          <Route path="/art-form/stand-up-comedy" element={<StandUpComedyPage />} />
          <Route path="/art-form/poetry" element={<PoetryPage />} />
          <Route path="/art-form/storytelling" element={<StorytellingPage />} />
          <Route path="/art-form/singing" element={<SingingPage />} />
          <Route path="/art-form/dancing" element={<DancingPage />} />
          <Route path="/art-form/rap" element={<RapPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const showDesktopEnhancements = !isMobileDevice();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const onScroll = () => {
      document.body.classList.add('scrolling');
      document.documentElement.classList.add('scrolling');

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
        document.documentElement.classList.remove('scrolling');
      }, 500); // Timeout to hide thumb
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Router>
      {showDesktopEnhancements && (
        <>
          <CustomCursor />
          <MouseTrail />
        </>
      )}
      <Header />
      <main>
        <PageRoutes />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
