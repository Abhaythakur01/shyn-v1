import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import '../styles/ModernCarousel.css';
import { useSwipe } from '../hooks/useSwipe'; // Import the swipe hook


const slides = [
  {
    title: 'Explore New Mediums',
    description: 'Discover untapped potential in every brushstroke, click, or pose.',
    image: '/images/img1.jpeg',
    thumbnail: '/images/img1.jpeg'
  },
  {
    title: 'Meet the Mentors',
    description: 'Real stories from real artists. Learn from industry legends.',
    image: '/images/img2.jpeg',
    thumbnail: '/images/img2.jpeg'
  },
  {
    title: 'Level Up Your Skills',
    description: 'Workshops and bootcamps for every level. Let your art evolve.',
    image: '/images/img3.jpeg',
    thumbnail: '/images/img3.jpeg'
  },
  {
    title: 'Join a Global Community',
    description: 'Be part of something bigger. Share your art, get discovered.',
    image: '/images/img4.jpeg',
    thumbnail: '/images/img4.jpeg'
  }
];

const ModernCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const swipeHandlers = useSwipe({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % slides.length),
    onSwipedRight: () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length),
  });

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 7000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex]);

  return (
    <div className="carousel-wrapper full-screen" {...swipeHandlers}>
      <div className="main-slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === activeIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={slide.image} className="main-image" alt={slide.title} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="btn-explore">
                Explore <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="preview-thumbnails gallery-style">
          {slides.map((slide, index) => (
        <div
          key={index}
          className={`thumbnail-wrapper ${index === activeIndex ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
        >
          <img
            src={slide.thumbnail}
            alt={slide.title}
            className="thumbnail rounded-thumbnail"
          />
          <div className="thumb-label">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
            ))}
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide}><ArrowLeft /></button>
        <button onClick={nextSlide}><ArrowRight /></button>
      </div>
    </div>
  );
};

export default ModernCarousel;
