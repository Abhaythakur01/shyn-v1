import React from 'react';
import ComedyLegendsLoop from './ComedyLegendsLoop';
// When you create a loop for poets, you would import it here:
// import PoetryIconsLoop from './PoetryIconsLoop';

interface ArtFormLoopRendererProps {
  artFormId: string;
}

const ArtFormLoopRenderer: React.FC<ArtFormLoopRendererProps> = ({ artFormId }) => {
  switch (artFormId) {
    case 'stand-up-comedy':
      return <ComedyLegendsLoop />;
    
    // Example for a future "Poetry" loop
    // case 'poetry':
    //   return <PoetryIconsLoop />;

    // Return null if no specific loop exists for the current art form
    default:
      return null;
  }
};

export default ArtFormLoopRenderer;