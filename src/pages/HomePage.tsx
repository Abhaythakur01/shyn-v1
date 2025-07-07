import React from 'react';
import Hero from '../components/Hero';
import WhoAreYouSection from '../components/WhoAreYouSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BlogPreviewSection from '../components/BlogPreviewSection';
import ExpertsSection from '../components/ExpertsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import MembershipSection from '../components/MembershipSection';
import FaqSection from '../components/FaqSection';

// Import the original complex sections and the device detection hook
import HorizontalScrollSection from '../components/HorizontalScrollSection';
import ThreeDScrollSection from '../components/ThreeDScrollSection';
import { useDeviceDetection } from '../utils/deviceDetection';

// ====================================================================
// NEW: Mobile-Specific Fallback Components
// These are simple, static components that will replace the complex
// animated sections on mobile devices.
// ====================================================================

const MobileHorizontalFallback: React.FC = () => (
  <div className="bg-black text-white py-16 px-4 space-y-12">
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-3">Get Your Video Recorded</h2>
      <p className="text-gray-400 max-w-md mx-auto mb-6">Explore a universe of creativity and find the path that speaks to you.</p>
      <button className="bg-purple-600 px-6 py-3 rounded-full font-semibold">Explore Now</button>
    </div>
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-3">Join The Community</h2>
      <p className="text-gray-400 max-w-md mx-auto mb-6">Connect with experts, share your journey, and grow together.</p>
      <button className="bg-purple-600 px-6 py-3 rounded-full font-semibold">SHYN Community</button>
    </div>
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-3">Showcase Your Talent</h2>
      <p className="text-gray-400 max-w-md mx-auto mb-6">Build a stunning portfolio and let your art SHYN.</p>
      <button className="bg-purple-600 px-6 py-3 rounded-full font-semibold">Start Your Portfolio</button>
    </div>
  </div>
);

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
// The Main HomePage Component
// It now uses the hook to decide which sections to render.
// ====================================================================

const HomePage: React.FC = () => {
  const { isMobile } = useDeviceDetection();

  return (
    <div className="min-h-screen bg-black">
      <Hero />

      {/* Conditional Rendering Logic */}
      {isMobile ? (
        <>
          <MobileHorizontalFallback />
          <Mobile3DFallback />
        </>
      ) : (
        <>
          <HorizontalScrollSection />
          <ThreeDScrollSection />
        </>
      )}

      {/* The rest of the sections are stable and can be rendered normally */}
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