import React from 'react';
import ArtFormPage from '../../components/ArtFormPage';
import { ArtFormContent } from '../../types';

const storytellingContent: ArtFormContent = {
  id: 'storytelling',
  name: 'Storytelling',
  description: 'Captivate listeners with compelling narratives, characters, and plot.',
  image: '/images/storytelling.jpeg',
  color: 'from-red-500 to-orange-500',
  
  introduction: {
    title: "Become a Master Narrator",
    body1: "Storytelling is the oldest form of entertainment and education, the thread that connects humanity. This course will teach you how to craft compelling narratives that can move, persuade, and inspire any audience, whether on stage, in a boardroom, or across a campfire.",
    body2: "From classic story arcs to modern narrative techniques, our expert storytellers will guide you in developing unforgettable characters, building suspense, and delivering your tales with charisma and impact. Learn to harness the power that has shaped cultures for millennia."
  },

  featuredWorkshop: {
    title: "Workshop: The Hero's Journey",
    videoPlaceholder: {
      image: '/images/storytelling.jpeg',
      alt: 'Storytelling workshop'
    },
    description: "Learn to structure your narrative for maximum emotional impact."
  },

  whatYouWillLearn: [
    'The Three-Act Structure',
    'Character Archetypes and Development',
    'Pacing, Tension, and Release',
    'Vocal Delivery and Body Language',
    'Finding and Adapting Stories',
    'Engaging an Audience of Any Size'
  ],

  courseInfo: {
    students: '2,980 active narrators',
    modules: '35 captivating modules',
    certification: 'Master Storyteller Certificate'
  },

  cta: {
    title: "Ready to Tell Your Tale?",
    description: "Unleash the power of narrative and learn to captivate any audience.",
    buttonText: "Start My Story"
  }
};

const StorytellingPage: React.FC = () => {
  return <ArtFormPage content={storytellingContent} />;
};

export default StorytellingPage;
