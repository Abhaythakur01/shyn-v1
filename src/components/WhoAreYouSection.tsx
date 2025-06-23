import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { artForms } from '../data/constants';

const WhoAreYouSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation('.art-form-card');

  return (
    <section id="who-are-you" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who Are <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">You?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different art forms and discover where your creative spirit truly belongs. Each path offers its own unique journey of self-expression.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artForms.map((artForm) => (
            <Link
              key={artForm.id}
              to={`/art-form/${artForm.id}`}
              className="art-form-card group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={artForm.image} 
                    alt={artForm.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 ${artForm.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-200">
                    {artForm.name}
                  </h3>
                  <p className="text-gray-200 mb-4 opacity-90">
                    {artForm.description}
                  </p>
                  <div className="flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors duration-200">
                    <span className="font-medium mr-2">Explore</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-200" />
                  </div>
                </div>

                {/* Decorative gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${artForm.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreYouSection;