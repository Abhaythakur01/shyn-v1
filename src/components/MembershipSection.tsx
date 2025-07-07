import React from 'react';
import { Boxes } from '../components/ui/background-boxes';
import { cn } from '../lib/utils';
import { Camera, Users, Award, Mic } from 'lucide-react';
import { useDeviceDetection } from '../utils/deviceDetection'; // Make sure this hook is available

const MembershipSection: React.FC = () => {
  const { isMobile } = useDeviceDetection();

  const features = [
    {
      icon: <Award size={20} className="text-purple-400" />,
      text: "Receive free, expert guidance for your content creation journey.",
    },
    {
      icon: <Camera size={20} className="text-pink-400" />,
      text: "Get exclusive discounts when recording and editing your next video with us.",
    },
    {
      icon: <Users size={20} className="text-sky-400" />,
      text: "Attend workshops hosted by well-known industry faces and creative leaders.",
    },
    {
      icon: <Mic size={20} className="text-green-400" />,
      text: "Discuss your content with experts and get personalized feedback to enhance its quality.",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587593202952-328602e1c073?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div id="membership" className="min-h-screen w-full overflow-hidden bg-black py-20 md:py-24">
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Conditionally render the heavy Boxes component */}
        {!isMobile && (
          <>
            <div className="absolute inset-0 h-full w-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
          </>
        )}

        <div className={cn("relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8")}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Column: Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                SHYN{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  with Us
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-300 md:text-xl mx-auto lg:mx-0">
                Unlock your creative potential. Our membership is more than a service; it's a partnership dedicated to helping you shine.
              </p>

              <div className="mt-8 space-y-4 text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <p className="text-slate-300">{feature.text}</p>
                  </div>
                ))}
              </div>

              <button className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105">
                Become a Member
              </button>
            </div>

            {/* Right Column: Image Gallery (Fallback for mobile) */}
            <div className="relative w-full h-80 lg:h-[500px]">
              <img
                src={images[0]}
                alt="Workshop with artists"
                className="absolute left-0 top-0 h-2/3 w-2/3 rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:rotate-[-3deg] hover:scale-105"
              />
              <img
                src={images[1]}
                alt="Creative collaboration meeting"
                className="absolute bottom-0 right-0 h-1/2 w-3/5 rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:rotate-[2deg] hover:scale-105"
              />
               <img
                src={images[2]}
                alt="Video editing suite"
                className="absolute left-1/4 top-1/2 h-auto w-1/2 rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:rotate-[5deg] hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;