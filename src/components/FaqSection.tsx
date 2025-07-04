// src/components/FaqSection.tsx
import React, { useState } from 'react';
import { faqItems } from '../data/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';

const FaqSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've got answers. Here are some of the most common questions we get from our community.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={faq.id} className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left p-6"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown
                  className={`text-purple-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-6 pt-0">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;