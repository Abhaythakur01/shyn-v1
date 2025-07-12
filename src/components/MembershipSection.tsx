// src/components/MembershipSection.tsx

import React from 'react';
import { Boxes } from '../components/ui/background-boxes';
import { cn } from '../lib/utils';
import { Camera, Users, Award, Mic } from 'lucide-react';
import { useDeviceDetection } from '../utils/deviceDetection';

const features = [
  { icon: <Award size={20} className="text-purple-400" />, text: "Receive free, expert guidance for your content creation journey." },
  { icon: <Camera size={20} className="text-pink-400" />, text: "Get exclusive discounts when recording and editing your next video with us." },
  { icon: <Users size={20} className="text-sky-400" />, text: "Attend workshops hosted by well-known industry faces and creative leaders." },
  { icon: <Mic size={20} className="text-green-400" />, text: "Discuss your content with experts and get personalized feedback to enhance its quality." },
];

// Updated to use local image assets
const images = [
  "/assets/membership/1.jpeg",
  "/assets/membership/2.jpeg",
  "/assets/membership/3.jpeg",
  "/assets/membership/4.jpg",
  "/assets/membership/5.jpg",
];


const MembershipSection: React.FC = () => {
  const { isMobile } = useDeviceDetection();

  if (isMobile) {
    return (
      <div id="membership" className="w-full bg-black py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            SHYN <span className="text-purple-400">with Us</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Unlock your creative potential. Our membership is a partnership dedicated to helping you shine.
          </p>

          <div className="mt-10 space-y-5 text-left">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1">{feature.icon}</div>
                <p className="text-slate-300">{feature.text}</p>
              </div>
            ))}
          </div>

          <button className="mt-10 inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white">
            Become a Member
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="membership" className="min-h-screen w-full overflow-hidden bg-black">
      <div className="relative flex h-full w-full items-center justify-center py-24">
        <div className="absolute inset-0 h-full w-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <div className={cn("relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8")}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Column: Content */}
            <div className="text-left">
              <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl">
                SHYN{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  with Us
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300 md:text-xl">
                Unlock your creative potential. Our membership is more than a service; it's a partnership dedicated to helping you shine.
              </p>
              <div className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <p className="text-slate-300">{feature.text}</p>
                  </div>
                ))}
              </div>
              <button className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105">
                Become a Member
              </button>
            </div>

            {/* Right Column: Image Gallery */}
            <div className="relative hidden w-full lg:flex lg:justify-center lg:items-center">
            <div className="grid grid-cols-3 gap-6 p-2">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:brightness-110 ${
                  index === 1 || index === 3 ? 'translate-y-6' : ''
                }`}
                style={{ width: '220px', height: '220px' }}
              >
                <img
                  src={img}
                  alt={`Membership visual ${index + 1}`}
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
            ))}
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;
