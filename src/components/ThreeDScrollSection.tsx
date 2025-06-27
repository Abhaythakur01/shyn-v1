import React, { useLayoutEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Import icons for the cards
import { Compass, Users, Layers, ShieldCheck, Award, Rocket, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// UPDATED: Content data now includes an image for each card
const contentData = [
  {
    icon: Compass,
    title: 'Discover Your Passion',
    description: 'Explore a universe of art forms. Find the path that truly resonates with your creative spirit.',
    image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Users,
    title: 'Learn from Experts',
    description: 'Connect with world-class artists and instructors. Our curated courses provide you with the tools to elevate your skills.',
    image: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Layers,
    title: 'Build Your Portfolio',
    description: 'Showcase your work in a stunning, professional portfolio and let your unique talent shine for the world to see.',
    image: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: ShieldCheck,
    title: 'Join a Safe Community',
    description: 'Become part of a vibrant, supportive community of fellow artists. Collaborate, get feedback, and find inspiration.',
    image: 'https://images.pexels.com/photos/714701/pexels-photo-714701.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Award,
    title: 'Gain Recognition',
    description: 'Participate in challenges, earn badges, and get your work featured to a global audience.',
    image: 'https://images.pexels.com/photos/111131/peacock-feathers-macaw-feathers-peacock-111131.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Rocket,
    title: 'Launch Your Career',
    description: 'Access resources on marketing, sales, and business to turn your passion into a profession.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const ThreeDScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // --- Desktop Animation Setup ---
    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>('.content-card-3d');
      const dots = gsap.utils.toArray<HTMLElement>('.guiding-line-dot');

      gsap.set(cards, { y: 100, opacity: 0 }); 

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
          pin: true,
          pinSpacing: true,
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

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="three-d-scroll-section">
      <div className="three-d-sticky-container">
        <div className="background-grid-3d"></div>
        <div ref={canvasContainerRef} className="three-d-canvas-container">
          <Spline scene="https://prod.spline.design/OYsp6cAhimYDZz5D/scene.splinecode" />
        </div>
        <div className="three-d-content-container">
          <div className="guiding-line-container">
            <div className="guiding-line"></div>
            {contentData.map((_, index) => (
              <div key={index} className="guiding-line-dot"></div>
            ))}
            <div className="guiding-line"></div>
          </div>
          {contentData.map((item, index) => (
            // UPDATED: The card now has a new internal structure with an image and button
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