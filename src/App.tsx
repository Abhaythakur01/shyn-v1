import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ArtFormPage from './pages/ArtFormPage';
import PortfolioPage from './pages/PortfolioPage';
// import MouseTrail from './components/MouseTrail'; // FIX: Removed the heavier mouse trail component
import CustomCursor from './components/CustomCursor';
import { useDeviceDetection } from './utils/deviceDetection'; // Import the device detection hook

/**
 * A component that contains the logic for the main app layout.
 * This keeps the main App component clean.
 */
const AppContent: React.FC = () => {
  const location = useLocation();
  const { isMobile } = useDeviceDetection(); // Check if the device is mobile

  // Define the paths where the header should NOT be displayed.
  const noHeaderPaths = ['/tiles-demo'];
  // Check if the current path is in the noHeaderPaths array.
  const showHeader = !noHeaderPaths.includes(location.pathname);

  return (
    <div className="min-h-screen">
      {/* FIX: The redundant MouseTrail component has been removed. 
          We only render the CustomCursor on non-mobile devices.
      */}
      {!isMobile && <CustomCursor />}
      
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
