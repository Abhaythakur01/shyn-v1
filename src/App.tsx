import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ArtFormPage from './pages/ArtFormPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
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
    </Router>
  );
}

export default App;