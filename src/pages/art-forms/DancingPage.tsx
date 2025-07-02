import React from 'react';
import ArtFormPage from '../../components/ArtFormPage';
import { ArtFormContent } from '../../types';

const dancingContent: ArtFormContent = {
  id: 'dancing',
  name: 'Dancing',
  description: 'Express yourself through movement, rhythm, and grace.',
  image: '/images/dancing.jpeg',
  color: 'from-pink-500 to-rose-500',
  
  introduction: {
    title: "Move to Your Own Rhythm",
    body1: "Dance is storytelling with the body. It's a powerful form of self-expression that combines athleticism and artistry. Our courses cover a wide range of styles, focusing on building a strong technical foundation, musicality, and performance quality.",
    body2: "Led by professional choreographers and dancers, you will learn to connect with music on a deeper level. Whether you're a beginner finding your feet or an experienced dancer looking to refine your technique, our program will help you move with confidence and grace."
  },

  featuredWorkshop: {
    title: "Workshop: Foundations of Movement",
    videoPlaceholder: {
      image: '/images/dancing.jpeg',
      alt: 'Dancing workshop'
    },
    description: "Explore core principles of balance, control, and musicality."
  },

  whatYouWillLearn: [
    'Core Strength and Flexibility',
    'Understanding Rhythm and Timing',
    'Foundations of Various Dance Styles',
    'Choreography and Improvisation',
    'Stage Presence and Performance Skills',
    'Injury Prevention and Body Awareness'
  ],

  courseInfo: {
    students: '5,812 active dancers',
    modules: '45 dynamic modules',
    certification: 'Certificate in Dance Arts'
  },

  cta: {
    title: "Ready to Hit the Floor?",
    description: "Join our dance program and learn to express yourself through the art of movement.",
    buttonText: "Start Dancing Today"
  }
};

const DancingPage: React.FC = () => {
  return <ArtFormPage content={dancingContent} />;
};

export default DancingPage;
