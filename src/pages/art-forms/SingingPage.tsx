import React from 'react';
import ArtFormPage from '../../components/ArtFormPage';
import { ArtFormContent } from '../../types';

const singingContent: ArtFormContent = {
  id: 'singing',
  name: 'Singing',
  description: 'Train your voice to hit every note with passion and precision.',
  image: '/images/singing.jpeg',
  color: 'from-sky-400 to-blue-500',
  
  introduction: {
    title: "Unleash Your Inner Voice",
    body1: "Singing is a universal language of emotion. Whether you dream of commanding a stage or simply want to sing with confidence, this course will provide the foundation you need. We focus on building a healthy, sustainable technique that will serve you for years to come.",
    body2: "Our vocal coaches are seasoned performers and educators who will guide you through breath control, pitch accuracy, and vocal dynamics. Discover your unique tone and learn to express yourself through song with power and artistry."
  },

  featuredWorkshop: {
    title: "Workshop: The Power of Breath",
    videoPlaceholder: {
      image: '/images/singing.jpeg',
      alt: 'Singing workshop'
    },
    description: "Master the core of all great singing: proper breath support and control."
  },

  whatYouWillLearn: [
    'Proper Breathing Techniques and Support',
    'Pitch Accuracy and Ear Training',
    'Understanding Your Vocal Range and Registers',
    'Vocal Health and Maintenance',
    'Song Interpretation and Performance',
    'Harmonizing and Blending with Others'
  ],

  courseInfo: {
    students: '6,245 active vocalists',
    modules: '50 comprehensive modules',
    certification: 'Certified Vocalist Diploma'
  },

  cta: {
    title: "Ready to Find Your Voice?",
    description: "Start your vocal training today and learn to sing with confidence and skill.",
    buttonText: "Start Singing Now"
  }
};

const SingingPage: React.FC = () => {
  return <ArtFormPage content={singingContent} />;
};

export default SingingPage;
