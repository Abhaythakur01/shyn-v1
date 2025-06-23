import React from 'react';
import { Star, Award, Clock } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { experts } from '../data/constants';

const ExpertsSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation('.expert-card');

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
      />
    ));
  };

  return (
    <section id="experts" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SHYN with <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from world-class artists and master teachers who will guide you on your creative journey
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div 
              key={expert.id}
              className="expert-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={expert.image} 
                  alt={expert.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {renderStars(expert.rating)}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{expert.rating}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  {expert.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Award size={16} className="text-purple-600" />
                  <span className="text-sm font-medium text-purple-600">{expert.specialty}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {expert.bio}
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>{expert.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            View All Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;