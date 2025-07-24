import React from 'react';
import ModernCarousel from './ModernCarousel';

// --- Slides Data for the Carousel ---
const slides = [
  {
    title: 'Stand-up Comedy',
    description: 'Master the art of timing, wit, and public speaking to make audiences laugh.',
    image: '/images/stand-up-comedy.jpeg',
    thumbnail: '/images/thumbnails/stand-up-comedy.jpeg',
    path: '/art-form/stand-up-comedy',
    video: '/videos/stand-up-comedy.mp4' // Added video path
  },
  {
    title: 'Poetry',
    description: 'Weave words into powerful verses that evoke emotion and tell a story.',
    image: '/images/poetry.jpeg',
    thumbnail: '/images/thumbnails/poetry.jpeg',
    path: '/art-form/poetry',
    video: '/videos/poetry.mp4' // Added video path
  },
  {
    title: 'Storytelling',
    description: 'Captivate listeners with compelling narratives, characters, and plot.',
    image: '/images/storytelling.jpeg',
    thumbnail: '/images/thumbnails/storytelling.jpeg',
    path: '/art-form/storytelling',
    video: '/videos/storytelling.mp4' // Added video path
  },
  {
    title: 'Singing',
    description: 'Train your voice to hit every note with passion and precision.',
    image: '/images/singing.jpeg',
    thumbnail: '/images/thumbnails/singing.jpeg',
    path: '/art-form/singing',
    video: '/videos/singing.mp4' // Added video path
  },
  {
    title: 'Dancing',
    description: 'Express yourself through movement, rhythm, and grace.',
    image: '/images/dancing.jpeg',
    thumbnail: '/images/thumbnails/dancing.jpeg',
    path: '/art-form/dancing',
    video: '/videos/dancing.mp4' // Added video path
  },
  {
    title: 'Rap',
    description: 'Master flow, rhyme, and lyricism to become a powerful MC.',
    image: '/images/rap.jpeg',
    thumbnail: '/images/thumbnails/rap.jpeg',
    path: '/art-form/rap',
    video: '/videos/rap.mp4' // Added video path
  }
];

const WhoAreYouSection: React.FC = () => {
  return (
    <section className="who-are-you-section">
      <ModernCarousel slides={slides} />
    </section>
  );
};

export default WhoAreYouSection;