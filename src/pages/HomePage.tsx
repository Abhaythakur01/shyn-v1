import React from 'react';
import Hero from '../components/Hero';
import BlogsSection from '../components/BlogsSection';
import WhoAreYouSection from '../components/WhoAreYouSection';
import MembershipSection from '../components/MembershipSection';
import ExpertsSection from '../components/ExpertsSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BlogsSection />
      <WhoAreYouSection />
      <MembershipSection />
      <ExpertsSection />
      <Footer />
    </div>
  );
};

export default HomePage;