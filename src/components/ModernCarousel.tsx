import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/ModernCarousel.css';
import { useSwipe } from '../hooks/useSwipe';

interface Slide {
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  path: string;
  video?: string; // Added video property
}

interface CarouselConfig {
  transitionSpeed?: number;
  autoScroll?: boolean;
  autoScrollInterval?: number;
  showThumbnails?: boolean;
  onSlideChange?: (index: number) => void;
}

interface CarouselProps {
  slides: Slide[];
  config?: CarouselConfig;
}

const ModernCarousel: React.FC<CarouselProps> = ({
  slides,
  config = {
    transitionSpeed: 800,
    autoScroll: true,
    autoScrollInterval: 7000,
    showThumbnails: true,
  },
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevActiveIndex, setPrevActiveIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const swipeHandlers = useSwipe({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;
    setPrevActiveIndex(activeIndex);
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  };

  useEffect(() => {
    if (config.autoScroll) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(nextSlide, config.autoScrollInterval);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, config.autoScroll, config.autoScrollInterval]);

  useEffect(() => {
    if(config.onSlideChange) {
        config.onSlideChange(activeIndex);
    }
  }, [activeIndex, config.onSlideChange]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex]);

  const handleMouseEnter = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
    }
  };

  return (
    <div className="carousel-wrapper full-screen" {...swipeHandlers}>
      <div className="main-slider">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const isPrevActive = index === prevActiveIndex;
          let className = 'slide';
          if (isActive) className += ' active';
          if (isPrevActive) className += ' prev-active';

          return (
            <div
              key={index}
              className={className}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {slide.video ? (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={slide.video}
                  className="main-image"
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img src={slide.image} className="main-image" alt={slide.title} loading="lazy" />
              )}
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link to={slide.path} className="btn-explore">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {config.showThumbnails && (
        <div className="preview-thumbnails gallery-style">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`thumbnail-wrapper ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              tabIndex={0}
              role="button"
              aria-label={`Slide ${index + 1}: ${slide.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') goToSlide(index);
              }}
            >
              <img
                src={slide.thumbnail}
                alt={slide.title}
                className="thumbnail rounded-thumbnail"
                loading="lazy"
              />
              <div className="thumb-label">
                <div className="title">{slide.title}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="carousel-controls">
        <button onClick={prevSlide} aria-label="Previous slide"><ArrowLeft /></button>
        <button onClick={nextSlide} aria-label="Next slide"><ArrowRight /></button>
      </div>
    </div>
  );
};

export default ModernCarousel;