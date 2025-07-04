import React from 'react';
import Hero from '../components/Hero';
import HorizontalScrollSection from '../components/HorizontalScrollSection';
import ThreeDScrollSection from '../components/ThreeDScrollSection';
import MembershipSection from '../components/MembershipSection';
import ExpertsSection from '../components/ExpertsSection';
import BlogPreviewSection from '../components/BlogPreviewSection';
import HowItWorksSection from '../components/HowItWorksSection';
import WhoAreYouSection from '../components/WhoAreYouSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HorizontalScrollSection />
      <ThreeDScrollSection />
      <WhoAreYouSection />
      <HowItWorksSection />
      <BlogPreviewSection />
      <ExpertsSection />
      <TestimonialsSection /> {/* Add the new section here */}
      <MembershipSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;