// src/components/ThreeDScrollSection.tsx

import React, { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';

// NOTE: GSAP and ScrollTrigger are loaded globally in this environment.
// We access them from the window object to avoid module resolution errors.

const contentData = [
  {
    title: 'Discover Your Passion',
    description: 'Our platform is designed to help you explore a universe of art forms. From painting and sculpture to digital art and music, find the path that truly resonates with your creative spirit.',
  },
  {
    title: 'Learn from Experts',
    description: 'Connect with world-class artists and instructors. Our curated courses and workshops provide you with the tools and techniques to elevate your skills and master your craft.',
  },
  {
    title: 'Build Your Portfolio',
    description: 'Showcase your work in a stunning, professional portfolio. Share your journey, connect with a global community, and let your unique talent shine for the world to see.',
  },
  {
    title: 'Join a Community',
    description: 'You are not alone. Become part of a vibrant community of fellow artists. Collaborate, get feedback, and find inspiration from creators just like you from all around the globe.',
  },
];

const ThreeDScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (!gsap || !ScrollTrigger || !canvasRef.current || !sectionRef.current) {
      console.error("Required libraries or elements are not available.");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // --- Three.js Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(500, 500);

    // --- 3D Model ---
    const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 100, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      metalness: 0.7,
      roughness: 0.2,
    });
    const model = new THREE.Mesh(geometry, material);
    scene.add(model);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // --- Animation Loop ---
    const animate = () => {
      renderer.render(scene, camera);
    };
    renderer.setAnimationLoop(animate);

    // --- GSAP Scroll-Triggered Animations ---
    const mm = gsap.matchMedia(sectionRef);

    mm.add("(min-width: 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=4000',
          scrub: 1,
          pin: true,
        },
      });

      // Set initial states explicitly
      gsap.set('.content-card-3d', { x: '100%', opacity: 0 });

      // Animate the 3D model's rotation
      tl.to(model.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 4,
        ease: 'none',
      }, 0); // Start at the beginning of the timeline

      // Animate the content cards
      const contentCards = gsap.utils.toArray('.content-card-3d') as HTMLElement[];
      contentCards.forEach((card, index) => {
        tl.to(
          card,
          { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' },
          index * 0.5 // Stagger the start time
        );
      });
    });
    
    mm.add("(max-width: 768px)", () => {
        // Simple fade-in for mobile
        gsap.from(canvasRef.current, { autoAlpha: 0, y: 50, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
        gsap.from(".content-card-3d", { autoAlpha: 0, y: 30, stagger: 0.3, scrollTrigger: { trigger: contentRef.current, start: 'top 70%' } });
    });


    return () => {
      renderer.dispose();
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="three-d-scroll-section">
      <div className="three-d-sticky-container">
        <div className="three-d-canvas-container">
          <canvas ref={canvasRef}></canvas>
        </div>
        <div ref={contentRef} className="three-d-content-container">
          {contentData.map((item, index) => (
            <div key={index} className="content-card-3d">
              <h3 className="content-card-title">{item.title}</h3>
              <p className="content-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeDScrollSection;
