import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { artForms } from '../data/constants';

const ImageCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [emblaApi, setScrollProgress]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', onScroll).on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla-carousel-container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {artForms.map((artForm) => (
            <div className="embla__slide" key={artForm.id}>
              <img
                src={artForm.image}
                alt={artForm.name}
                className="embla__slide__img"
              />
              <div className="embla__slide__content">
                <h3 className="embla__slide__title">{artForm.name}</h3>
                <p className="embla__slide__description">{artForm.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <button className="embla__button embla__button--prev" onClick={scrollPrev}>
          <ArrowLeft size={24} />
        </button>
        <div className="embla__dots">
            {artForms.map((_, index) => (
                <button
                key={index}
                onClick={() => scrollTo(index)}
                className={"embla__dot".concat(
                    index === (emblaApi && emblaApi.selectedScrollSnap()) ? " embla__dot--selected" : ""
                )}
                />
            ))}
        </div>
        <button className="embla__button embla__button--next" onClick={scrollNext}>
          <ArrowRight size={24} />
        </button>
      </div>

       <div className="embla__progress">
        <div
          className="embla__progress__bar"
          style={{ transform: `translateX(${scrollProgress}%)` }}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;