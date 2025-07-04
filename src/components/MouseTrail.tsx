// src/components/MouseTrail.tsx
import React, { useEffect } from 'react';

const MouseTrail: React.FC = () => {
  useEffect(() => {
    if ('ontouchstart' in window) {
      return;
    }
    const canvas = document.createElement('canvas');
    canvas.className = 'mouse-trail-canvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d')!;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const points: { x: number; y: number }[] = [];
    const trailLength = 25;
    const colors = [
      '#ff00ff', '#00ffff', '#ffff00', '#ff0000', '#00ff00',
      '#ff8c00', '#adff2f', '#da70d6', '#ff1493', '#4b0082',
      '#00ced1', '#ffa500'
    ];
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    let animationFrameId: number;
    const animate = () => {
      points.unshift({ x: mouse.x, y: mouse.y });
      if (points.length > trailLength) {
        points.pop();
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < points.length - 1; i++) {
        const startPoint = points[i];
        const endPoint = points[i + 1];
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.strokeStyle = colors[i % colors.length];
        ctx.lineWidth = 20;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      if (canvas.parentNode) {
        document.body.removeChild(canvas);
      }
    };
  }, []);

  useEffect(() => {
    const intersectingElements = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingElements.add(entry.target);
          } else {
            intersectingElements.delete(entry.target);
          }
        });
        document.body.classList.toggle('hero-trail-hidden', intersectingElements.size > 0);
      },
      { threshold: 0.1 }
    );

    const observeElements = () => {
      const heroElement = document.getElementById('hero-section');
      const membershipElement = document.getElementById('membership');
      if (heroElement) observer.observe(heroElement);
      if (membershipElement) observer.observe(membershipElement);
    };

    const mutationObserver = new MutationObserver(observeElements);
    observeElements();
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      document.body.classList.remove('hero-trail-hidden');
    };
  }, []);

  return null;
};

export default MouseTrail;