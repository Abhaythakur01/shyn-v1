import React, { useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * A component that creates a custom circular cursor that follows the mouse.
 * This is designed to be layered on top of the existing mouse trail.
 */
const CustomCursor: React.FC = () => {
  useEffect(() => {
    // Early exit if on a touch device, as there is no cursor
    if ('ontouchstart' in window) {
      return;
    }

    // Create the cursor element
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    // Use GSAP for smooth, high-performance animation
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2; // You can adjust this value for faster/slower tracking

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // --- Cleanup function ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  // This component does not render any JSX itself
  return null;
};

export default CustomCursor;
