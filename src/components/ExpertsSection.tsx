import React from 'react';
import { Star, Award, Clock } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { useDeviceDetection } from '../utils/deviceDetection';


import { experts } from '../data/constants';

const ExpertsSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation('.expert-card');
  const { isMobile } = useDeviceDetection();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'}
      />
    ));
  };

  return (
    <section id="experts" ref={sectionRef} className="py-20 md:py-24 bg-black relative overflow-hidden">
      {/* Conditionally render heavy background effects */}
      {!isMobile && (
        <>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-pink-900/15 pointer-events-none"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            SHYN with <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experts</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn from world-class artists and master teachers who will guide you on your creative journey
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="expert-card bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 group cursor-pointer border border-gray-700/50"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {renderStars(expert.rating)}
                  </div>
                  <span className="text-sm font-semibold text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full">{expert.rating}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {expert.name}
                </h3>

                <div className="flex items-center space-x-2 mb-3">
                  <Award size={16} className="text-purple-400" />
                  <span className="text-xs font-semibold text-purple-300 bg-purple-500/10 px-2 py-1 rounded-full">{expert.specialty}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {expert.bio}
                </p>

                <div className="flex items-center text-sm text-gray-400 bg-gray-700/30 px-3 py-2 rounded-full">
                  <Clock size={14} className="mr-2" />
                  <span>{expert.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            View All Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;