import React, { useLayoutEffect, useRef, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Users, Layers, ShieldCheck, Award, Rocket, ArrowRight } from 'lucide-react';
import { useDeviceDetection } from '../utils/deviceDetection';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

gsap.registerPlugin(ScrollTrigger);

const contentData = [ 
  {
    icon: Compass,
    title: 'Discover Your Passion',
    description: 'Explore a universe of art forms. Find the path that truly resonates with your creative spirit.',
    image: '/images/discover.jpeg',
  },
  {
    icon: Users,
    title: 'Learn from Experts',
    description: 'Connect with world-class artists and instructors. Our curated courses provide you with the tools to elevate your skills.',
    image: '/images/experts.jpeg',
  },
  {
    icon: Layers,
    title: 'Build Your Portfolio',
    description: 'Showcase your work in a stunning, professional portfolio and let your unique talent shine for the world to see.',
    image: '/images/portfolio.jpeg',
  },
  {
    icon: ShieldCheck,
    title: 'Join a Safe Community',
    description: 'Become part of a vibrant, supportive community of fellow artists. Collaborate, get feedback, and find inspiration.',
    image: '/images/community.jpeg',
  },
  {
    icon: Award,
    title: 'Gain Recognition',
    description: 'Participate in challenges, earn badges, and get your work featured to a global audience.',
    image: '/images/recognition.jpeg',
  },
  {
    icon: Rocket,
    title: 'Launch Your Career',
    description: 'Access resources on marketing, sales, and business to turn your passion into a profession.',
    image: '/images/career.jpeg',
  },
];

const ThreeDScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useDeviceDetection();

  useLayoutEffect(() => {
    // Use GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // --- Desktop Animation Setup ---
      mm.add("(min-width: 768px)", () => {
        // --- FIX: Scoped the selectors to the component's ref to prevent "target not found" ---
        const cards = gsap.utils.toArray<HTMLElement>('.content-card-3d', sectionRef.current);
        const dots = gsap.utils.toArray<HTMLElement>('.guiding-line-dot', sectionRef.current);

        // This check prevents errors if the elements aren't found
        if (cards.length === 0 || dots.length === 0) return;
        
        gsap.set(cards, { y: 100, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
            pin: true,
            pinSpacing: false,
          },
        });

        tl.from(canvasContainerRef.current, {
          xPercent: 100,
          autoAlpha: 0,
          ease: 'power2.inOut',
        });

        cards.forEach((card, index) => {
          const cardTimeline = gsap.timeline();
          
          cardTimeline.fromTo(card,
            { y: 100, rotationX: -20, opacity: 0 },
            { 
              y: 0, 
              rotationX: 0, 
              opacity: 1, 
              duration: 1, 
              ease: 'power2.out',
              onStart: () => dots[index]?.classList.add('active'),
              onReverseComplete: () => dots[index]?.classList.remove('active'),
            }
          );

          if (index < cards.length - 1) {
            cardTimeline.to(card, {
              y: -100,
              rotationX: 20,
              opacity: 0,
              duration: 1,
              ease: 'power2.in',
            }, "+=1");
          }
          
          tl.add(cardTimeline, `-=${index === 0 ? 0 : 0.5}`);
        });
      });

      // --- Mobile Fallback Animation ---
      mm.add("(max-width: 768px)", () => {
        gsap.from('.content-card-3d', {
          autoAlpha: 0,
          y: 50,
          stagger: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        });
      });
    }, sectionRef); // Scope the context to the main section element

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <section ref={sectionRef} className="three-d-scroll-section">
      <div className="three-d-sticky-container">
        <div className="background-grid-3d"></div>

        {!isMobile ? (
          <div ref={canvasContainerRef} className="three-d-canvas-container">
            <Suspense fallback={<div className="text-white">Loading 3D Model...</div>}>
              <Spline scene="https://prod.spline.design/OYsp6cAhimYDZz5D/scene.splinecode" />
            </Suspense>
          </div>
        ) : (
          <div className="three-d-canvas-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.15 }}>
            <img src={contentData[0].image} alt="Art representation" style={{ width: '80%', borderRadius: '20px' }}/>
          </div>
        )}
        
        <div className="three-d-content-container">
          <div className="guiding-line-container">
            <div className="guiding-line"></div>
            {contentData.map((_, index) => (
              <div key={index} className="guiding-line-dot"></div>
            ))}
            <div className="guiding-line"></div>
          </div>
          {contentData.map((item, index) => (
            <div key={index} className="content-card-3d">
              <div className="card-image-container">
                <img src={item.image} alt={item.title} className="card-image" />
              </div>
              <div className="card-text-content">
                <item.icon size={28} className="card-icon" />
                <h3 className="content-card-title">{item.title}</h3>
                <p className="content-card-description">{item.description}</p>
                <button className="card-explore-button">
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeDScrollSection;
