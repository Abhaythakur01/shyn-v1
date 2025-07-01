import React from 'react';
import MembershipSection from '../components/MembershipSection';
import Footer from '../components/Footer';

const MembershipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <MembershipSection />
      <Footer />
    </div>
  );
};

export default MembershipPage;
