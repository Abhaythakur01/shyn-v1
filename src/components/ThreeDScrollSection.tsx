import React, { useLayoutEffect, useRef, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Users, Layers, ShieldCheck, Award, Rocket, ArrowRight } from 'lucide-react';
import { useDeviceDetection } from '../utils/deviceDetection';
import RobotChat from './RobotChat'; //ROBOT CHAT SECTION
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
  const canvasContainerRef = useRef(null);
  const { isMobile } = useDeviceDetection();

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.content-card-3d', sectionRef.current);

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
      // Entry: fades & rises smoothly
      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'expo.out',
      });

      // Exit: starts before next fully completes, creates elegant overlap
      if (i !== cards.length - 1) {
        tl.to(card, {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: 'expo.in',
        }, '-=0.5'); // starts 0.5s before previous finishes
      }
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} className="three-d-scroll-section">
      <div className="three-d-sticky-container">
        <div className="background-grid-3d"></div>

        {!isMobile && (
          <div ref={canvasContainerRef} className="three-d-canvas-container">
            <Suspense fallback={<div className="text-white">Loading 3D Model...</div>}>
              <Spline scene="https://prod.spline.design/OYsp6cAhimYDZz5D/scene.splinecode" />
            </Suspense>
           
          </div>
        )}

        <div className="three-d-content-container">
          {contentData.map((item, index) => (
            <div key={index} className="content-card-3d">
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
        {/* ✅ This ensures your chat box stays _below_ the robot */}
      {!isMobile && <RobotChat />}
      </div>
      
    </section>
  );
};

export default ThreeDScrollSection;
