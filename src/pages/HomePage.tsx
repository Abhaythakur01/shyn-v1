import React, { useState } from 'react';
import Hero from '../components/Hero';
import WhoAreYouSection from '../components/WhoAreYouSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BlogPreviewSection from '../components/BlogPreviewSection';
import ExpertsSection from '../components/ExpertsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import MembershipSection from '../components/MembershipSection';
import FaqSection from '../components/FaqSection';
import HorizontalScrollSection from '../components/HorizontalScrollSection';
import ThreeDScrollSection from '../components/ThreeDScrollSection';
import { useDeviceDetection } from '../utils/deviceDetection';

// --- ADDITIONS: Import authentication tools ---
import AuthModal from '../components/AuthModal';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

// ====================================================================
// Mobile Fallback Component - NOW AUTHENTICATION AWARE
// ====================================================================
const MobileHorizontalFallback: React.FC<{ onAuthRequest: () => void }> = ({ onAuthRequest }) => {
  const { user } = useAuth();

  const handlePortfolioClick = () => {
    if (!user) {
      onAuthRequest();
    }
  };

  return (
    <div className="bg-black text-white py-16 px-4 space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">Get Your Video Recorded</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-6">Explore a universe of creativity and find the path that speaks to you.</p>
        <Link to="/video-recording-services" className="cta-button inline-block">Explore Now</Link>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">Join The Community</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-6">Connect with experts, share your journey, and grow together.</p>
        <a href="https://chat.whatsapp.com/IOdJjxp5pbZ7YRYh9wyfTI" target="_blank" rel="noopener noreferrer" className="cta-button inline-block">SHYN Community</a>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">Showcase Your Talent</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-6">Build a stunning portfolio and let your art SHYN.</p>
        {user ? (
          <Link to="/portfolio" className="cta-button inline-block">Start Your Portfolio</Link>
        ) : (
          <button onClick={handlePortfolioClick} className="cta-button">Start Your Portfolio</button>
        )}
      </div>
    </div>
  );
};


const Mobile3DFallback: React.FC = () => {
    const contentData = [
        { title: 'Discover Your Passion', description: 'Explore a universe of art forms.' },
        { title: 'Learn from Experts', description: 'Connect with world-class artists.' },
        { title: 'Build Your Portfolio', description: 'Showcase your work in a stunning portfolio.' },
        { title: 'Join a Safe Community', description: 'Be part of a vibrant, supportive community.' },
    ];
    return (
        <div className="bg-black py-16 px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white">How SHYN Works</h2>
                <p className="text-gray-400 mt-2">Your journey to creativity, simplified.</p>
            </div>
            <div className="space-y-8">
                {contentData.map((item, index) => (
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-gray-400 mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


// ====================================================================
// The Main HomePage Component - NOW CONTROLLING THE MODAL
// ====================================================================

const HomePage: React.FC = () => {
  const { isMobile } = useDeviceDetection();

  // --- State for the modal is now managed here, in the parent component ---
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const handleAuthRequest = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* The Modal is rendered here, outside of the animated components */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />

      <Hero />

      {/* Conditional Rendering Logic passes the handler function down */}
      {isMobile ? (
        <>
          <MobileHorizontalFallback onAuthRequest={handleAuthRequest} />
          <Mobile3DFallback />
        </>
      ) : (
        <>
          {/* The handler is passed as a prop */}
          <HorizontalScrollSection onAuthRequest={handleAuthRequest} />
          <ThreeDScrollSection />
        </>
      )}

      <WhoAreYouSection />
      <HowItWorksSection />
      <BlogPreviewSection />
      <ExpertsSection />
      <TestimonialsSection />
      <MembershipSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
