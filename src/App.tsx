// src/App.tsx
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


// --- 1. IMPORT THE AUTH PROVIDER ---
import { AuthProvider } from './hooks/useAuth.tsx';
// Styles & Utils
import './styles/scrollbar.css';
import { isMobileDevice } from './utils/deviceDetection';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MouseTrail from './components/MouseTrail';

// --- Page Imports ---
import HomePage from './pages/HomePage';
import WhoAreYouPage from './pages/WhoAreYouPage';
import MembershipPage from './pages/MembershipPage';
import ExpertsPage from './pages/ExpertsPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import VideoRecordingServicesPage from './components/VideoRecordingServices';

// Art Form Pages
const StandUpComedyPage = lazy(() => import('./pages/art-forms/StandUpComedyPage'));
const PoetryPage = lazy(() => import('./pages/art-forms/PoetryPage'));
const StorytellingPage = lazy(() => import('./pages/art-forms/StorytellingPage'));
const SingingPage = lazy(() => import('./pages/art-forms/SingingPage'));
const DancingPage = lazy(() => import('./pages/art-forms/DancingPage'));
const RapPage = lazy(() => import('./pages/art-forms/RapPage'));


// Import Settings Pages
// --- Import ALL Settings Pages ---
import SettingsLayout from './pages/portfolio/settings/SettingsLayout';
import ProfileSettingsPage from './pages/portfolio/settings/ProfileSettingsPage';
import NotificationSettingsPage from './pages/portfolio/settings/NotificationSettingsPage';
import PrivacySettingsPage from './pages/portfolio/settings/PrivacySettingsPage';
import AccountSettingsPage from './pages/portfolio/settings/AccountSettingsPage';
import AppearanceSettingsPage from './pages/portfolio/settings/AppearanceSettingsPage';
import BillingSettingsPage from './pages/portfolio/settings/BillingSettingsPage';
// --- NEW ---
import SharingSettingsPage from './pages/portfolio/settings/SharingSettingsPage';
import WatermarkingSettingsPage from './pages/portfolio/settings/WatermarkingSettingsPage';
import BlockedUsersSettingsPage from './pages/portfolio/settings/BlockedUsersSettingsPage';
import SecuritySettingsPage from './pages/portfolio/settings/SecuritySettingsPage';
import DataManagementSettingsPage from './pages/portfolio/settings/DataManagementSettingsPage';
import AccessibilitySettingsPage from './pages/portfolio/settings/AccessibilitySettingsPage';
import LanguageSettingsPage from './pages/portfolio/settings/LanguageSettingsPage';
import IntegrationsSettingsPage from './pages/portfolio/settings/IntegrationsSettingsPage';
import VerificationSettingsPage from './pages/portfolio/settings/VerificationSettingsPage';
import ReferralsSettingsPage from './pages/portfolio/settings/ReferralsSettingsPage';



// Info & Legal Pages
const AboutUsPage = lazy(() => import('./pages/info/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/info/ContactPage'));
const HelpCenterPage = lazy(() => import('./pages/info/HelpCenterPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/info/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/info/TermsOfServicePage'));
const CommunityGuidelinesPage = lazy(() => import('./pages/info/CommunityGuidelinesPage'));

// --- NEW: Lazy Load Upcoming Events Page ---
// Note the corrected path based on your file structure
const UpcomingEventsPage = lazy(() => import('./pages/info/UpcomingEventsPage'));


const PageRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes location={location} key={location.pathname}>
          {/* Main Routes */}
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

          {/* Info & Legal Routes */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/community-guidelines" element={<CommunityGuidelinesPage />} />

          {/* --- NEW: Route for Upcoming Events --- */}
          <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
          {/* Settings Routes */}
          {/* --- UPDATED: All Settings Routes are now defined --- */}
          <Route path="/settings" element={<SettingsLayout />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<ProfileSettingsPage />} />
            <Route path="account" element={<AccountSettingsPage />} />
            <Route path="notifications" element={<NotificationSettingsPage />} />
            <Route path="appearance" element={<AppearanceSettingsPage />} />
            <Route path="privacy"  element={<PrivacySettingsPage />} />
            <Route path="billing" element={<BillingSettingsPage />} />
            <Route path="sharing" element={<SharingSettingsPage />} />
            <Route path="watermarking" element={<WatermarkingSettingsPage />} />
            <Route path="blocked-users" element={<BlockedUsersSettingsPage />} />
            <Route path="security" element={<SecuritySettingsPage />} />
            <Route path="data" element={<DataManagementSettingsPage />} />
            <Route path="accessibility" element={<AccessibilitySettingsPage />} />
            <Route path="language" element={<LanguageSettingsPage />} />
            <Route path="integrations" element={<IntegrationsSettingsPage />} />
            <Route path="verification" element={<VerificationSettingsPage />} />
            <Route path="referrals" element={<ReferralsSettingsPage />} />
          </Route>
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
  <AuthProvider>

  
  <Router>
    <AppContent />
  </Router>
  </AuthProvider>
);

export default App;