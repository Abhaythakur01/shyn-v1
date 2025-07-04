// src/components/TestimonialsSection.tsx
import React from 'react';
import { testimonials } from '../data/constants';
import Marquee from "react-fast-marquee";
import { Testimonial } from '../types';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex flex-col bg-gray-900/50 p-8 rounded-3xl border border-gray-800 w-[400px] h-[250px] mx-4">
      <div className="flex-grow">
        <p className="text-lg text-gray-300 leading-relaxed">"{testimonial.quote}"</p>
      </div>
      <div className="flex items-center mt-6 pt-6 border-t border-gray-800">
        <img src={testimonial.avatar} alt={testimonial.authorName} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <p className="font-bold text-white">{testimonial.authorName}</p>
          <p className="text-sm text-purple-400">{testimonial.authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Hear From Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Community</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Discover how SHYN has helped artists just like you find their voice and launch their careers.
        </p>
      </div>

      <div className="space-y-8">
        <Marquee
          speed={40} // Increased speed
          pauseOnHover={true}
          gradient={true}
          gradientColor="#000000"
          gradientWidth={100}
        >
          {/* Duplicated the content to ensure a seamless loop */}
          {firstRow.map((testimonial) => (
            <TestimonialCard key={`${testimonial.id}-1`} testimonial={testimonial} />
          ))}
          {firstRow.map((testimonial) => (
            <TestimonialCard key={`${testimonial.id}-2`} testimonial={testimonial} />
          ))}
        </Marquee>

        <Marquee
          speed={40} // Increased speed
          pauseOnHover={true}
          direction="right"
          gradient={true}
          gradientColor="#000000"
          gradientWidth={100}
        >
          {/* Duplicated the content to ensure a seamless loop */}
          {secondRow.map((testimonial) => (
            <TestimonialCard key={`${testimonial.id}-1`} testimonial={testimonial} />
          ))}
          {secondRow.map((testimonial) => (
            <TestimonialCard key={`${testimonial.id}-2`} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;