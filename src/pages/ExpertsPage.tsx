import React from 'react';
import ExpertsSection from '../components/ExpertsSection';
import Footer from '../components/Footer';

const ExpertsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <ExpertsSection />
      <Footer />
    </div>
  );
};

export default ExpertsPage;
