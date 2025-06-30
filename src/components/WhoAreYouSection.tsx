import React from 'react';
import ModernCarousel from './ModernCarousel';
import '@/styles/ModernCarousel.css';

const WhoAreYouSection: React.FC = () => {
  return (
    <section className="who-section-wrapper min-h-screen flex items-center bg-black relative overflow-hidden">
   
      <div className="w-full h-full">
        <ModernCarousel />
      </div>

      {/* Optional guiding line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 opacity-30 pointer-events-none" />
    </section>
  );
};

export default WhoAreYouSection;
