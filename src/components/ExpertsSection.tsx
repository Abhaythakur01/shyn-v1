// src/components/ExpertsSection.tsx
import React from 'react';
import { Star, Award, Clock } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { useDeviceDetection } from '../utils/deviceDetection';
import { experts } from '../data/constants';

// ====================================================================
// NEW: Mobile-Specific Fallback Component
// This is a simple, stable component with NO animation hooks.
// ====================================================================
const MobileExpertsFallback: React.FC = () => {
    const renderStars = (rating: number) => (
        Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={16} className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'} />
        ))
    );

    return (
        <section id="experts-mobile" className="py-16 bg-black px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white leading-tight">
                    Learn from <span className="text-purple-400">Experts</span>
                </h2>
                <p className="text-lg text-gray-400 mt-3 max-w-md mx-auto">
                    Master your craft with guidance from the best in the field.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {experts.slice(0, 2).map((expert) => ( // Showing only 2 for a cleaner mobile view
                    <div key={expert.id} className="bg-gray-900 rounded-xl border border-gray-800 p-1">
                        <img src={expert.image} alt={expert.name} className="w-full h-56 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-white">{expert.name}</h3>
                            <p className="text-purple-300 font-semibold text-sm mt-1">{expert.specialty}</p>
                            <div className="flex items-center justify-between mt-3 text-sm">
                                <div className="flex items-center space-x-1">{renderStars(expert.rating)}</div>
                                <span className="text-gray-300 font-medium">{expert.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <button className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-full">
                    View All Experts
                </button>
            </div>
        </section>
    );
};

// ====================================================================
// Main Component with Mobile Detection
// ====================================================================
const ExpertsSection: React.FC = () => {
    const { isMobile } = useDeviceDetection();
    const sectionRef = useScrollAnimation(); // For desktop
    const cardsRef = useStaggerAnimation('.expert-card'); // For desktop

    if (isMobile) {
        return <MobileExpertsFallback />;
    }

    // --- Original Desktop View ---
    const renderStars = (rating: number) => (
        Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={16} className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'} />
        ))
    );
    
    return (
        <section id="experts" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 opacity-16">
                <div className="w-full h-full" style={{ backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.14) 1px, transparent 1px), linear-gradient(rgba(236, 72, 153, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(236, 72, 153, 0.10) 1px, transparent 1px)`, backgroundSize: '20px 20px, 20px 20px, 60px 60px, 60px 60px', backgroundPosition: '0 0, 0 0, 10px 10px, 10px 10px' }} ></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-pink-900/25 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        SHYN with <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experts</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Learn from world-class artists and master teachers who will guide you on your creative journey
                    </p>
                </div>
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map((expert) => (
                        <div key={expert.id} className="expert-card bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group cursor-pointer border border-gray-700/50 hover:border-purple-500/30">
                            <div className="relative overflow-hidden rounded-t-3xl">
                                <img src={expert.image} alt={expert.name} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-1">{renderStars(expert.rating)}</div>
                                    <span className="text-sm font-bold text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full">{expert.rating}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">{expert.name}</h3>
                                <div className="flex items-center space-x-2 mb-4">
                                    <Award size={16} className="text-purple-400" />
                                    <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{expert.specialty}</span>
                                </div>
                                <p className="text-gray-300 text-sm mb-5 line-clamp-3 leading-relaxed">{expert.bio}</p>
                                <div className="flex items-center text-sm text-gray-400 bg-gray-700/30 px-3 py-2 rounded-full">
                                    <Clock size={14} className="mr-2" />
                                    <span>{expert.experience}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                        View All Experts
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExpertsSection;