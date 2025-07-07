// src/components/ExpertsSection.tsx
import React from 'react';
import { Star, Award, Clock } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { useDeviceDetection } from '../utils/deviceDetection';
import { experts } from '../data/constants';


const ExpertsSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation('.expert-card');
  const { isMobile } = useDeviceDetection();

  const renderStars = (rating: number) => (
    Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'} />
    ))
  );

  // --- Mobile Fallback View ---
  // A simpler card layout for mobile devices.
  if (isMobile) {
    return (
      <section id="experts" ref={sectionRef} className="py-20 bg-black px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            SHYN with <span className="text-purple-400">Experts</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Learn from world-class artists and master teachers.
          </p>
        </div>
        <div ref={cardsRef} className="mt-12 grid grid-cols-1 gap-8">
          {experts.slice(0, 2).map((expert) => ( // Show first 2 experts on mobile for brevity
            <div key={expert.id} className="expert-card bg-gray-900 rounded-2xl shadow-lg border border-gray-800">
              <img src={expert.image} alt={expert.name} className="w-full h-64 object-cover rounded-t-2xl" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{expert.name}</h3>
                <p className="text-purple-400 font-semibold mt-1">{expert.specialty}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-1">{renderStars(expert.rating)}</div>
                  <span className="font-semibold text-gray-300">{expert.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold">
            View All Experts
          </button>
        </div>
      </section>
    );
  }

  // --- Desktop View ---
  // The original, feature-rich component for larger screens.
  return (
    <section id="experts" ref={sectionRef} className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 opacity-16">
        <div className="w-full h-full" style={{ backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.14) 1px, transparent 1px), linear-gradient(rgba(236, 72, 153, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(236, 72, 153, 0.10) 1px, transparent 1px)`, backgroundSize: '20px 20px, 20px 20px, 60px 60px, 60px 60px', backgroundPosition: '0 0, 0 0, 10px 10px, 10px 10px' }} ></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-pink-900/25 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            SHYN with <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn from world-class artists and master teachers who will guide you on your creative journey
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div key={expert.id} className="expert-card bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group cursor-pointer border border-gray-700/50 hover:border-purple-500/30">
              <div className="relative overflow-hidden rounded-t-3xl">
                <img src={expert.image} alt={expert.name} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">{renderStars(expert.rating)}</div>
                  <span className="text-sm font-bold text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full">{expert.rating}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">{expert.name}</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Award size={16} className="text-purple-400" />
                  <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{expert.specialty}</span>
                </div>
                <p className="text-gray-300 text-sm mb-5 line-clamp-3 leading-relaxed">{expert.bio}</p>
                <div className="flex items-center text-sm text-gray-400 bg-gray-700/30 px-3 py-2 rounded-full">
                  <Clock size={14} className="mr-2" />
                  <span>{expert.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            View All Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;