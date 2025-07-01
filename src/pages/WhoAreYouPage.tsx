import React from 'react';
import WhoAreYouSection from '../components/WhoAreYouSection';
import Footer from '../components/Footer';

const WhoAreYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
        <WhoAreYouSection />
        <Footer/>
    </div>
  );
};

export default WhoAreYouPage;
