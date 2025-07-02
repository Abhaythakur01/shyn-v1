import React from 'react';
import ArtFormPage from '../../components/ArtFormPage';
import { ArtFormContent } from '../../types';

const rapContent: ArtFormContent = {
  id: 'rap',
  name: 'Rap',
  description: 'Master flow, rhyme, and lyricism to become a powerful MC.',
  image: '/images/rap.jpeg',
  color: 'from-teal-400 to-cyan-500',
  
  introduction: {
    title: "Master the Mic",
    body1: "Rap is rhythm and poetry, a powerful voice for storytelling and social commentary. This course dives deep into the art of lyricism, the mechanics of flow, and the history of the culture. We'll equip you with the skills to write, record, and perform compelling rap music.",
    body2: "Learn from established MCs and producers who will guide you through everything from basic rhyme schemes to complex rhythmic patterns. Find your unique voice, perfect your delivery, and learn how to command a track with confidence."
  },

  featuredWorkshop: {
    title: "Workshop: Finding Your Flow",
    videoPlaceholder: {
      image: '/images/rap.jpeg',
      alt: 'Rap workshop'
    },
    description: "A deep dive into cadence, rhythm, and delivery techniques."
  },

  whatYouWillLearn: [
    'Lyric Writing and Storytelling',
    'Rhyme Schemes and Wordplay',
    'Developing Rhythmic Flows and Cadences',
    'Breath Control and Delivery',
    'Recording Techniques for Vocals',
    'Understanding Song Structure and Ad-libs'
  ],

  courseInfo: {
    students: '4,150 active MCs',
    modules: '42 hard-hitting modules',
    certification: 'Certified MC Diploma'
  },

  cta: {
    title: "Ready to Spit Fire?",
    description: "Step up to the mic and start your journey to becoming a skilled lyricist.",
    buttonText: "Start My Rap Career"
  }
};

const RapPage: React.FC = () => {
  return <ArtFormPage content={rapContent} />;
};

export default RapPage;
