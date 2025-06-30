import React from 'react';
import Hero from '../components/Hero';
import HorizontalScrollSection from '../components/HorizontalScrollSection';
import ThreeDScrollSection from '../components/ThreeDScrollSection';
import MembershipSection from '../components/MembershipSection';
import ExpertsSection from '../components/ExpertsSection';
import Footer from '../components/Footer';
import WhoAreYouSection from '../components/WhoAreYouSection';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HorizontalScrollSection />
      <ThreeDScrollSection />
      <WhoAreYouSection />
      <MembershipSection />
      <ExpertsSection />
      <Footer />
    </div>
  );
};

export default HomePage;