// src/components/ThreeDScrollSection.tsx
import React, { useLayoutEffect, useRef, Suspense, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Users, Layers, ShieldCheck, Award, Rocket, ArrowRight, ArrowLeft } from 'lucide-react';
import { useDeviceDetection } from '../utils/deviceDetection';
import RobotChat from './RobotChat';
import { cn } from '../lib/utils';
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
  const sectionRef = useRef(null);
  const { isMobile } = useDeviceDetection();
  
  // State for mobile carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // GSAP animation for desktop only
  useLayoutEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.content-card-3d');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${cards.length * 100}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        tl.to(card, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'expo.out',
        });

        if (i !== cards.length - 1) {
          tl.to(card, {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'expo.in',
          }, '-=0.5');
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Handlers for mobile navigation
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + contentData.length) % contentData.length);
  };

  return (
    <section ref={sectionRef} className="three-d-scroll-section">
      <div className="three-d-sticky-container">
        <div className="background-grid-3d"></div>

        {!isMobile && (
          <div className="three-d-canvas-container">
            <Suspense fallback={<div className="text-white">Loading 3D Model...</div>}>
              <Spline scene="https://prod.spline.design/OYsp6cAhimYDZz5D/scene.splinecode" />
            </Suspense>
          </div>
        )}

        <div className="three-d-content-container">
          {contentData.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "content-card-3d",
                // On mobile, control visibility with opacity based on activeIndex
                // On desktop, GSAP will control this, so we leave them semi-transparent initially
                isMobile
                  ? [
                      index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0',
                      'transition-opacity duration-700 ease-in-out'
                    ].join(' ')
                  : ''
              )}
            >
              <img src={item.image} alt={item.title} className="card-bg-image" />
              <div className="overlay-gradient"></div>
              <div className="card-overlay-text">
                <item.icon size={32} className="card-icon" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="card-explore-button">
                  Explore <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {!isMobile && <RobotChat />}

        {/* Mobile Navigation Buttons */}
        {isMobile && (
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
            <button onClick={handlePrev} className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20">
              <ArrowLeft className="text-white" size={20} />
            </button>
            <button onClick={handleNext} className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20">
              <ArrowRight className="text-white" size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ThreeDScrollSection;