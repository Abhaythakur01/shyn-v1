import React from 'react';
import ArtFormPage from '../../components/ArtFormPage';
import { ArtFormContent } from '../../types';


const standUpComedyContent: ArtFormContent = {
  id: 'stand-up-comedy',
  name: 'Stand-up Comedy',
  description: 'Master the art of timing, wit, and public speaking to make audiences laugh.',
  image: '/images/stand-up-comedy.jpeg',
  color: 'from-yellow-400 to-orange-500',
  
  introduction: {
    title: "Find Your Funny Bone",
    body1: "Stand-up comedy is a unique and challenging art form that combines storytelling, performance, and sharp wit. It's about finding the humor in everyday life and connecting with an audience on a personal level. Our course is designed to take you from open-mic hopeful to a confident stage performer.",
    body2: "Led by seasoned comedians, you'll learn how to write jokes, structure a set, handle a crowd, and develop your own unique comedic voice. We believe anyone can be funny, and we'll give you the tools to prove it."
  },

  featuredWorkshop: {
    title: "Workshop: From Punchline to Headliner",
    videoPlaceholder: {
      image: '/images/stand-up-comedy.jpeg',
      alt: 'Stand-up comedy workshop'
    },
    description: "An inside look at joke writing and performance techniques from a pro."
  },

  whatYouWillLearn: [
    'Joke writing structures (Setup/Punchline)',
    'The art of storytelling and misdirection',
    'Developing a stage persona',
    'Microphone technique and stage presence',
    'Handling hecklers and difficult crowds',
    'Building a 5, 10, and 15-minute set'
  ],

  courseInfo: {
    students: '3,102 active comedians',
    modules: '32 joke-packed modules',
    certification: 'Certificate of Hilarity'
  },

  cta: {
    title: "Ready to Get Laughs?",
    description: "Enroll now and start your journey to becoming a stand-up comedian.",
    buttonText: "Start My Comedy Career"
  }
};

const StandUpComedyPage: React.FC = () => {
  return <ArtFormPage content={standUpComedyContent} />;
};

export default StandUpComedyPage;
