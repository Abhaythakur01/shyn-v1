// src/components/HowItWorksSection.tsx
import React from 'react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { Compass, Users, Sparkles, TrendingUp } from 'lucide-react';
import CursorDancingBars from './CursorDancingBars';
import { useDeviceDetection } from '../utils/deviceDetection'; // Import the device detection hook

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

const HowItWorksSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation('.step-card');
  const { isMobile } = useDeviceDetection(); // Check if the device is mobile

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A clear path to unlocking your creative potential is just a few steps away.
          </p>
        </div>

        {/* The main grid now adapts based on whether the canvas is present */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: 2x2 Grid of Step Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.title} className="step-card bg-gray-900/50 p-6 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gray-800/80 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Interactive Canvas (Only rendered on non-mobile devices) */}
          {!isMobile && (
            <div className="flex justify-center lg:justify-end">
              <CursorDancingBars />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;