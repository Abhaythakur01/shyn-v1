import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import Fluid from './Fluid'; // Import the new Fluid component

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (!title || !subtitle || !cta) return;

    // Initial animation timeline for text content
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo(subtitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .fromTo(cta, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3');
  }, []);

  const scrollToContent = () => {
    const blogsSection = document.getElementById('blogs');
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="hero-section" // ID added to target with IntersectionObserver
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0c001f' }} // Set a base background color
    >
      {/* The Fluid component is now used as the interactive background */}
      <Fluid />
      
      {/* The rest of the content is placed on top with a higher z-index */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <Sparkles className="text-yellow-400" size={48} />
        </div>
        
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          SHYN Your
          <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent block">
            Inner Artist
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Discover your creative potential, learn from world-class experts, and transform your artistic vision into reality.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105">
            Start Your Journey
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200">
            Explore Art Forms
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-purple-300 transition-colors duration-200 animate-bounce z-10"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  );
};

export default Hero;
