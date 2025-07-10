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
    title: "Find Your Funny",
    body1: "“The comic is the one who says ‘Wait a minute’ and says it with a laugh.” - Lenny Bruce. Stand-up is more than just telling jokes; it's about perspective, timing, and connecting with an audience through shared vulnerability and humor. It's the art of turning pain, observation, and absurdity into laughter.",
    body2: "“The hardest thing to do is to be true to yourself, especially when everybody is watching.” - Dave Chappelle. Our course is designed to help you discover your unique comedic voice, not just mimic others. We'll guide you from the spark of an idea to a polished, confident set."
  },

  featuredWorkshop: {
    title: "The Craft of Comedy: A Beginner's Guide",
    videoPlaceholder: {
      image: '/images/stand-up-comedy.jpeg',
      alt: 'Stand-up comedy workshop'
    },
    description: "An inside look at joke writing, stage presence, and performance techniques from a pro."
  },

  whatYouWillLearn: [
    'Joke Structures: Setup, Punchline, and Tags',
    'The Art of Storytelling & Misdirection',
    'Developing a Unique Stage Persona',
    'Microphone Technique and Stage Presence',
    'Handling Hecklers and Difficult Crowds',
    'Building a Killer 5-Minute Set'
  ],

  // --- NEW: Added sections for Open Mics and Recommended Reading ---
  customSections: [
    {
      title: "The Importance of Open Mics",
      content: "Open mics are the gym for comedians. It's where you test new material, bomb, succeed, and build resilience. It’s the most critical step in finding your voice and learning what makes people laugh. At SHYN, we provide a supportive environment for you to take that brave first step onto the stage."
    },
    {
      title: "Recommended Reading for Beginners",
      content: "To supplement your learning, we highly recommend 'The Comedy Bible' by Judy Carter. It's a fantastic resource that covers everything from writing jokes to landing an agent, providing a comprehensive roadmap for any aspiring comedian."
    }
  ],

  courseInfo: {
    students: '3,102 active comedians',
    modules: '32 joke-packed modules',
    certification: 'Certificate of Hilarity'
  },

  cta: {
    title: "Ready to Take the Stage?",
    description: "Your journey from the audience to the spotlight starts here. Find an open mic and sign up!",
    buttonText: "Participate in SHYN Open Mic",
    buttonLink: "/upcoming-events" // --- NEW: Link to the events page ---
  }
};

const StandUpComedyPage: React.FC = () => {
  return <ArtFormPage content={standUpComedyContent} />;
};

export default StandUpComedyPage;
