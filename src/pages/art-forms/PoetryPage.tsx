import React from 'react';
import ArtFormPage from '../../components/ArtFormPage';
import { ArtFormContent } from '../../types';

const poetryContent: ArtFormContent = {
  id: 'poetry',
  name: 'Poetry',
  description: 'Weave words into powerful verses that evoke emotion and tell a story.',
  image: '/images/poetry.jpeg',
  color: 'from-indigo-400 to-purple-500',
  
  introduction: {
    title: "Craft Worlds with Words",
    body1: "Poetry is the art of distillation, where powerful feelings and ideas are expressed in a unique, musical language. It's a journey into the heart of human experience, using tools like metaphor, meter, and rhyme to create a lasting impact on the reader.",
    body2: "Our curriculum, guided by published poets, will help you master both classic forms and modern free verse. You'll learn to see the world through a poet's eyes, find your unique voice, and craft verses that resonate with truth and beauty."
  },

  featuredWorkshop: {
    title: "Workshop: The Anatomy of a Verse",
    videoPlaceholder: {
      image: '/images/poetry.jpeg',
      alt: 'Poetry workshop'
    },
    description: "Explore the power of imagery and rhythm in creating memorable poetry."
  },

  whatYouWillLearn: [
    'Metaphor, Simile, and Figurative Language',
    'Understanding Rhythm and Meter',
    'Free Verse vs. Formal Structures (Sonnets, Haikus)',
    'The power of Imagery and Symbolism',
    'Voice, Tone, and Mood',
    'Editing and Assembling a Collection'
  ],

  courseInfo: {
    students: '4,510 aspiring poets',
    modules: '40 lyrical modules',
    certification: 'Poet Laureate Certificate'
  },

  cta: {
    title: "Ready to Write Your Story?",
    description: "Begin your poetic journey and learn to express your inner world through verse.",
    buttonText: "Start Writing Verses"
  }
};

const PoetryPage: React.FC = () => {
  return <ArtFormPage content={poetryContent} />;
};

export default PoetryPage;
