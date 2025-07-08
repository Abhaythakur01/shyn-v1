import React, { useLayoutEffect, useRef, Suspense, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Users, Layers, ShieldCheck, Award, Rocket, ArrowRight, ArrowLeft } from 'lucide-react';
import { useDeviceDetection } from '../utils/deviceDetection';
import RobotChat from './RobotChat';
// Lazy load Spline to improve initial page load
const Spline = React.lazy(() => import('@splinetool/react-spline'));

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  { icon: Compass, title: 'Discover Your Passion', description: 'Explore a universe of art forms. Find the path that truly resonates with your creative spirit.', image: '/images/discover.jpeg' },
  { icon: Users, title: 'Learn from Experts', description: 'Connect with world-class artists and instructors.', image: '/images/experts.jpeg' },
  { icon: Layers, title: 'Build Your Portfolio', description: 'Showcase your work in a stunning portfolio.', image: '/images/portfolio.jpeg' },
  { icon: ShieldCheck, title: 'Join a Safe Community', description: 'Be part of a vibrant, supportive community.', image: '/images/community.jpeg' },
  { icon: Award, title: 'Gain Recognition', description: 'Participate in challenges and get featured.', image: '/images/recognition.jpeg' },
  { icon: Rocket, title: 'Launch Your Career', description: 'Turn your passion into a profession.', image: '/images/career.jpeg' },
];

const ThreeDScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useDeviceDetection();
  
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    if (isMobile || !sectionRef.current) return;

    // Use a GSAP context for safe cleanup
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.content-card-3d');
      
      // Ensure there are cards to animate
      if (cards.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${cards.length * 100}%`, // Dynamic end based on number of cards
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate each card
      cards.forEach((card, i) => {
        // Fade in the card
        tl.fromTo(card, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );

        // If it's not the last card, fade it out to reveal the next one
        if (i < cards.length - 1) {
          tl.to(card, 
            { opacity: 0, y: -50, duration: 1, ease: 'power2.in' },
            '+=1' // Add a delay before fading out
          );
        }
      });
    }, sectionRef);

    // Cleanup function to revert animations
    return () => ctx.revert();
  }, [isMobile]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + contentData.length) % contentData.length);
  };

  // --- Mobile Fallback Section ---
  if (isMobile) {
    return (
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">How SHYN Works</h2>
            <p className="text-lg text-gray-400 mt-2">Your journey to creativity, simplified.</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {contentData.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-900 rounded-2xl p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <item.icon size={32} className="text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={handlePrev} className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
              <ArrowLeft className="text-white" size={20} />
            </button>
            <div className="flex gap-2">
              {contentData.map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-purple-400' : 'bg-gray-600'}`}></div>
              ))}
            </div>
            <button onClick={handleNext} className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
              <ArrowRight className="text-white" size={20} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  // --- Desktop Version ---
  return (
    <section ref={sectionRef} className="three-d-scroll-section h-[500vh]">
      <div className="three-d-sticky-container">
        <div className="background-grid-3d"></div>

        <div className="three-d-canvas-container">
          {/* Suspense provides a fallback while the 3D model is loading */}
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white">Loading 3D Model...</div>}>
            <Spline scene="https://prod.spline.design/OYsp6cAhimYDZz5D/scene.splinecode" />
          </Suspense>
        </div>

        <div className="three-d-content-container">
          {contentData.map((item, index) => (
            <div key={index} className="content-card-3d" style={{ zIndex: index + 1 }}>
              <img src={item.image} alt={item.title} className="card-bg-image" />
              <div className="overlay-gradient"></div>
              <div className="card-overlay-text">
                <item.icon size={32} className="text-purple-400 mb-4" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="card-explore-button">
                  Explore <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <RobotChat />
      </div>
    </section>
  );
};

export default ThreeDScrollSection;
