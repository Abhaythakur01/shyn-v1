import React, { useEffect } from 'react';

/**
 * A component that creates a connected, segmented mouse trail using an HTML5 Canvas.
 * It's designed to be performant and works by drawing lines between tracked points.
 */
const MouseTrail: React.FC = () => {
  // Effect for creating the trail animation
  useEffect(() => {
    if ('ontouchstart' in window) {
      return;
    }

    // --- Canvas Setup ---
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

    // --- Trail Logic ---
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const points: { x: number; y: number }[] = [];
    const trailLength = 25; // Number of points to track
    
    // Funny, vibrant colors for the trail segments
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
      // Add the current mouse position to the beginning of the array
      points.unshift({ x: mouse.x, y: mouse.y });

      // Remove the last point if the array is longer than the desired trail length
      if (points.length > trailLength) {
        points.pop();
      }

      // Clear the canvas for the new frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Drawing the Trail ---
      // Loop through the points to draw the connected segments
      for (let i = 0; i < points.length - 1; i++) {
        const startPoint = points[i];
        const endPoint = points[i + 1];

        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        
        // Style the line segment
        ctx.strokeStyle = colors[i % colors.length];
        ctx.lineWidth = 20; // The thickness of the trail
        ctx.lineCap = 'round'; // Creates the rounded ends
        ctx.lineJoin = 'round'; // Ensures smooth corners
        
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      document.body.removeChild(canvas);
    };
  }, []);

  // Effect for hiding the trail on the hero section
  useEffect(() => {
    let intersectionObserver: IntersectionObserver;

    const setupIntersectionObserver = (heroElement: HTMLElement) => {
      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          document.body.classList.toggle('hero-trail-hidden', entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      intersectionObserver.observe(heroElement);
    };

    const mutationObserver = new MutationObserver((mutations, obs) => {
      const heroElement = document.getElementById('hero-section');
      if (heroElement) {
        setupIntersectionObserver(heroElement);
        obs.disconnect();
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
      document.body.classList.remove('hero-trail-hidden');
    };
  }, []);

  return null;
};

export default MouseTrail;
