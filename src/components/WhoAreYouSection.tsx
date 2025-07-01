import React from 'react';
import ModernCarousel from './ModernCarousel';

// --- Slides Data for the Carousel ---
const slides = [
  {
    title: 'Stand-up Comedy',
    description: 'Master the art of timing, wit, and public speaking to make audiences laugh.',
    image: 'https://images.pexels.com/photos/2691463/pexels-photo-2691463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/2691463/pexels-photo-2691463.jpeg?auto=compress&cs=tinysrgb&w=400',
    path: '/art-form/stand-up-comedy'
  },
  {
    title: 'Poetry',
    description: 'Weave words into powerful verses that evoke emotion and tell a story.',
    image: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=400',
    path: '/art-form/poetry'
  },
  {
    title: 'Storytelling',
    description: 'Captivate listeners with compelling narratives, characters, and plot.',
    image: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=400',
    path: '/art-form/storytelling'
  },
  {
    title: 'Singing',
    description: 'Train your voice to hit every note with passion and precision.',
    image: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=400',
    path: '/art-form/singing'
  },
  {
    title: 'Dancing',
    description: 'Express yourself through movement, rhythm, and grace.',
    image: 'https://images.pexels.com/photos/1700809/pexels-photo-1700809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/1700809/pexels-photo-1700809.jpeg?auto=compress&cs=tinysrgb&w=400',
    path: '/art-form/dancing'
  },
  {
    title: 'Rap',
    description: 'Master flow, rhyme, and lyricism to become a powerful MC.',
    image: 'https://images.pexels.com/photos/8745919/pexels-photo-8745919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/8745919/pexels-photo-8745919.jpeg?auto=compress&cs=tinysrgb&w=400',
    path: '/art-form/rap'
  }
];

const WhoAreYouSection: React.FC = () => {
  return (
    // The section now directly wraps the carousel, which is styled to be full-screen.
    <section className="who-are-you-section">
      <ModernCarousel slides={slides} />
    </section>
  );
};

export default WhoAreYouSection;
