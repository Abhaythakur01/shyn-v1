// src/components/HowItWorksSection.tsx
import React from 'react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { Compass, Users, Sparkles, TrendingUp } from 'lucide-react';
import CursorDancingBars from './CursorDancingBars';
import { useDeviceDetection } from '../utils/deviceDetection';

const steps = [
  {
    icon: <Compass size={32} className="text-purple-400" />,
    title: '1. Explore & Discover',
    description: 'Find your passion. Browse through dozens of art forms and disciplines taught by the best in their fields.',
  },
  {
    icon: <Users size={32} className="text-pink-400" />,
    title: '2. Learn From the Best',
    description: 'Enroll in premium courses, join interactive workshops, and get personalized guidance from world-class experts.',
  },
  {
    icon: <Sparkles size={32} className="text-amber-400" />,
    title: '3. Create & Showcase',
    description: 'Apply your new skills to create amazing work and build a stunning portfolio to share your talent with the world.',
  },
  {
    icon: <TrendingUp size={32} className="text-emerald-400" />,
    title: '4. Connect & Grow',
    description: 'Join a vibrant community, collaborate on projects, and find opportunities to take your creative career to the next level.',
  },
];

// ====================================================================
// NEW: Mobile-Specific Fallback Component
// This is a simple, stable component with NO animation hooks or heavy canvas elements.
// ====================================================================
const MobileHowItWorksFallback: React.FC = () => {
    return (
        <section id="how-it-works-mobile" className="py-16 bg-black text-white px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold leading-tight">
                    How It Works
                </h2>
                <p className="text-lg text-gray-400 mt-3 max-w-md mx-auto">
                    A clear path to unlocking your creative potential.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
                {steps.map((step) => (
                    <div key={step.title} className="text-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 mx-auto mb-4">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-base text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// ====================================================================
// Main Component with Mobile Detection
// ====================================================================
const HowItWorksSection: React.FC = () => {
  const { isMobile } = useDeviceDetection();
  const sectionRef = useScrollAnimation(); // For desktop
  const cardsRef = useStaggerAnimation('.step-card'); // For desktop

  if (isMobile) {
      return <MobileHowItWorksFallback />;
  }

  // --- Original Desktop View ---
  return (
    <section ref={sectionRef} className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A clear path to unlocking your creative potential is just a few steps away.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div 
                key={step.title} 
                className="step-card bg-gray-900/50 p-6 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gray-800/80 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex justify-center lg:justify-end">
            <CursorDancingBars />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;