import React from 'react';

interface DotGridBackgroundProps {
  className?: string;
  opacity?: number;
}

const DotGridBackground: React.FC<DotGridBackgroundProps> = ({ 
  className = '', 
  opacity = 0.15 
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <div 
        className="w-full h-full"
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: `radial-gradient(circle at center, #F5F5F5 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0',
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  );
};

export default DotGridBackground;