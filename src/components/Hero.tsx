import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (!hero || !title || !subtitle || !cta) return;

    // Initial animation timeline
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(title, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(cta,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    );

    // Floating animation for sparkles
    gsap.to('.sparkle', {
      y: -20,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.2
    });

  }, []);

  const scrollToContent = () => {
    const blogsSection = document.getElementById('blogs');
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full sparkle opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full sparkle opacity-80"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-pink-300 rounded-full sparkle opacity-50"></div>
        <div className="absolute bottom-60 right-20 w-2 h-2 bg-blue-300 rounded-full sparkle opacity-70"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-yellow-300 rounded-full sparkle opacity-60"></div>
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-green-300 rounded-full sparkle opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-purple-300 transition-colors duration-200 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  );
};

export default Hero;