import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ArtFormPage from './pages/ArtFormPage';
import PortfolioPage from './pages/PortfolioPage';
import MouseTrail from './components/MouseTrail';
import CustomCursor from './components/CustomCursor';
import { useDeviceDetection } from './utils/deviceDetection';

// Import the new pages
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import WhoAreYouPage from './pages/WhoAreYouPage';
import MembershipPage from './pages/MembershipPage';
import ExpertsPage from './pages/ExpertsPage';


const AppContent: React.FC = () => {
  const location = useLocation();
  const { isMobile } = useDeviceDetection();

  const noHeaderPaths = ['/tiles-demo'];
  const showHeader = !noHeaderPaths.includes(location.pathname);

  return (
    <div className="min-h-screen">
      {!isMobile && (
        <>
          <MouseTrail />
          <CustomCursor />
        </>
      )}
      
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Corrected Routes to point to the new dedicated pages */}
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/who-are-you" element={<WhoAreYouPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/experts" element={<ExpertsPage />} />
        
        {/* Existing Routes */}
        <Route path="/art-form/:id" element={<ArtFormPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
