// src/components/CursorDancingBars.tsx
import React, { useEffect, useRef, useState } from 'react';

const CursorDancingBars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollPositionRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 275, y: 275 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = 550;
    canvas.height = 550;
    
    const numLines = 60;
    const lineSpacing = canvas.width / numLines;
    
    const createPattern = (offset: number, mouseInfluence = 0) => {
      const pattern: { y: number; height: number; width: number; }[][] = [];
      for (let i = 0; i < numLines; i++) {
        const bars = [];
        const lineX = i * lineSpacing + lineSpacing / 2;
        const distanceFromMouse = Math.abs(lineX - mousePos.x) / canvas.width;
        const mouseEffect = Math.exp(-distanceFromMouse * 3) * mouseInfluence;
        
        const numBars = 10 + Math.sin(i * 0.3 + offset) * 5 + mouseEffect * 8;
        for (let j = 0; j < numBars; j++) {
          const barY = (j / numBars) * canvas.height + Math.sin(i * 0.5 + j * 0.3 + offset) * 30;
          const distanceFromMouseY = Math.abs(barY - mousePos.y) / canvas.height;
          const yMouseEffect = Math.exp(-distanceFromMouseY * 4) * mouseInfluence;
          
          bars.push({
            y: barY + yMouseEffect * 20 * Math.sin(offset * 2),
            height: 5 + Math.sin(i * 0.2 + j * 0.4) * 3 + yMouseEffect * 10,
            width: 2 + Math.cos(i * 0.3) * 2 + mouseEffect * 6
          });
        }
        pattern.push(bars);
      }
      return pattern;
    };
    
    const animate = () => {
      scrollPositionRef.current += 0.0025;
      const scrollFactor = (Math.sin(scrollPositionRef.current) + 1) / 2;
      const mouseInfluence = Math.sin(scrollPositionRef.current * 2) * 0.5 + 0.5;
      
      const pattern1 = createPattern(0, mouseInfluence);
      const pattern2 = createPattern(Math.PI, mouseInfluence * 0.7);
      
      // --- CHANGE: Set background to solid black ---
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < numLines; i++) {
        const x = i * lineSpacing + lineSpacing / 2;
        const distanceFromMouse = Math.abs(x - mousePos.x) / canvas.width;
        const lineIntensity = Math.exp(-distanceFromMouse * 2);
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(102, 102, 102, ${0.1 + lineIntensity * 0.4})`;
        ctx.lineWidth = 1 + lineIntensity * 1.5;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
        
        const bars1 = pattern1[i];
        const bars2 = pattern2[i];
        const maxBars = Math.max(bars1.length, bars2.length);
        
        for (let j = 0; j < maxBars; j++) {
          const bar1 = bars1[j] || bars2[j];
          const bar2 = bars2[j] || bars1[j];
          
          const y = bar1.y + (bar2.y - bar1.y) * scrollFactor;
          const height = bar1.height + (bar2.height - bar1.height) * scrollFactor;
          const width = bar1.width + (bar2.width - bar1.width) * scrollFactor;
          
          const barDistanceFromMouse = Math.sqrt(
            Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2)
          ) / (canvas.width * 0.5);
          const colorIntensity = Math.exp(-barDistanceFromMouse);
          const hue = (scrollPositionRef.current * 20 + i * 5) % 360;
          
          ctx.fillStyle = `hsl(${hue}, ${60 + colorIntensity * 40}%, ${50 + colorIntensity * 30}%)`;
          ctx.fillRect(x - width/2, y - height/2, width, height);
        }
      }
      
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, 50, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + mouseInfluence * 0.1})`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
    }
  };

  const handleMouseEnter = () => {
    document.body.classList.add('hero-trail-hidden');
  };

  const handleMouseLeave = () => {
    document.body.classList.remove('hero-trail-hidden');
    setMousePos({ x: 275, y: 275 });
  };

  return (
    // --- CHANGE: Set container background to black ---
    <div className="w-[550px] h-[550px] bg-black rounded-2xl overflow-hidden border border-gray-800">
      <canvas 
        ref={canvasRef} 
        style={{ display: 'block', cursor: 'none' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default CursorDancingBars;