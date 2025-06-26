import React, { useEffect, useState } from 'react';

const GlassmorphicTilesDemo: React.FC = () => {
  // State to hold the grid dimensions
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  // This effect calculates the number of tiles needed to fill the screen
  useEffect(() => {
    const calculateGrid = () => {
      const tileSize = 75; // Adjust this value to make tiles bigger or smaller
      const cols = Math.ceil(window.innerWidth / tileSize);
      const rows = Math.ceil(window.innerHeight / tileSize);
      setGrid({ cols, rows });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => {
      window.removeEventListener('resize', calculateGrid);
    };
  }, []);

  // This effect adds the mouse interaction listeners to the tiles
  useEffect(() => {
    const tiles = document.querySelectorAll('.interactive-tile');

    tiles.forEach(tile => {
      const handleMouseMove = (e: MouseEvent) => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const rect = tile.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 8; // Adjust divisor for more/less tilt
        const rotateY = (centerX - x) / 8;

        (tile as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      };

      const handleMouseLeave = () => {
        (tile as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      };

      tile.addEventListener('mousemove', handleMouseMove as EventListener);
      tile.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup function
      return () => {
        tile.removeEventListener('mousemove', handleMouseMove as EventListener);
        tile.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [grid]); // Rerun this effect if the grid size changes

  return (
    <div style={{
        backgroundColor: '#0c001f',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden', // Hide scrollbars
    }}>
        <div 
          className="glass-tiles-grid" 
          style={{
            gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
            gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
          }}
        >
          {Array.from({ length: grid.cols * grid.rows }).map((_, i) => (
            <div className="interactive-tile" key={i}>
              {/* The ::before pseudo-element handles the color shift, no content needed */}
            </div>
          ))}
        </div>
    </div>
  );
};

export default GlassmorphicTilesDemo;
