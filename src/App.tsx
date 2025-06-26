import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ArtFormPage from './pages/ArtFormPage';
import PortfolioPage from './pages/PortfolioPage';
import PatternDemo from './components/PatternDemo';
import ScrollbarDemo from './components/ScrollbarDemo';
import GlassmorphicTilesDemo from './components/GlassmorphicTilesDemo';

/**
 * A new component that contains the logic to conditionally show the header.
 * This keeps the main App component clean.
 */
const AppContent: React.FC = () => {
  const location = useLocation();
  // Define the paths where the header should NOT be displayed.
  const noHeaderPaths = ['/tiles-demo'];
  // Check if the current path is in the noHeaderPaths array.
  const showHeader = !noHeaderPaths.includes(location.pathname);

  return (
    <div className="min-h-screen">
      {/* The Header is now rendered only if showHeader is true */}
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<HomePage />} />
        <Route path="/who-are-you" element={<HomePage />} />
        <Route path="/membership" element={<HomePage />} />
        <Route path="/experts" element={<HomePage />} />
        <Route path="/art-form/:id" element={<ArtFormPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/pattern-demo" element={<PatternDemo />} />
        <Route path="/scrollbar-demo" element={<ScrollbarDemo />} />
        {/* The route for the new demo page */}
        <Route path="/tiles-demo" element={<GlassmorphicTilesDemo />} />
      </Routes>
    </div>
  );
};

/**
 * The main App component now wraps everything in the Router 
 * and renders the AppContent which handles the conditional logic.
 */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
