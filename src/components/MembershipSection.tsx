import React from 'react';
import { Check, Star } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { membershipPlans } from '../data/constants';

const MembershipSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation('.membership-card');

  return (
    <section id="membership" ref={sectionRef} className="py-24 bg-gray-900 relative">
      {/* Seamless gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-800 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            SHYN <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">with Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan to unlock your creative potential and join a community of passionate artists
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`membership-card relative bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-700/50 ${
                plan.recommended ? 'ring-2 ring-purple-500/50 scale-105 shadow-purple-500/20' : 'hover:border-purple-500/30'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center space-x-2 shadow-xl">
                    <Star size={16} fill="currentColor" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-10">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-3 text-lg">/month</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 text-lg ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl hover:scale-105'
                      : 'bg-gray-700/80 text-white hover:bg-gray-600 border border-gray-600/50 hover:border-purple-500/50 backdrop-blur-sm'
                  }`}
                >
                  {plan.recommended ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Not sure which plan is right for you?
          </p>
          <button className="px-8 py-3 border-2 border-purple-500/50 text-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 backdrop-blur-sm">
            Compare All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;