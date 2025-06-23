import React from 'react';
import { Check, Star } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { membershipPlans } from '../data/constants';

const MembershipSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation('.membership-card');

  return (
    <section id="membership" ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SHYN <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">with Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to unlock your creative potential and join a community of passionate artists
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {membershipPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`membership-card relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                plan.recommended ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={16} fill="currentColor" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.recommended ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you?
          </p>
          <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200">
            Compare All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;