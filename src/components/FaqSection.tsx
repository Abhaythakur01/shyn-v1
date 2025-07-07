// src/components/FaqSection.tsx
import React, { useState } from 'react';
import { faqItems } from '../data/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useDeviceDetection } from '../utils/deviceDetection';
import { ChevronDown } from 'lucide-react';


// ====================================================================
// NEW: Mobile-Specific Fallback Component
// This is a simple, stable accordion with NO animation hooks.
// ====================================================================
const MobileFaqFallback: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq-mobile" className="py-16 bg-black px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white leading-tight">
                    Have Questions?
                </h2>
                <p className="text-lg text-gray-400 mt-3 max-w-md mx-auto">
                    We've got answers. Here are our most common questions.
                </p>
            </div>
            <div className="space-y-3">
                {faqItems.map((faq, index) => (
                    <div key={faq.id} className="bg-gray-900 border border-gray-800 rounded-lg">
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center text-left p-4"
                        >
                            <span className="text-base font-semibold text-white">{faq.question}</span>
                            <ChevronDown
                                className={`text-purple-400 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                                size={20}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="p-4 pt-0">
                                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};


// ====================================================================
// Main Component with Mobile Detection
// ====================================================================
const FaqSection: React.FC = () => {
    const { isMobile } = useDeviceDetection();
    const sectionRef = useScrollAnimation(); // For desktop
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (isMobile) {
        return <MobileFaqFallback />;
    }

    // --- Original Desktop View ---
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