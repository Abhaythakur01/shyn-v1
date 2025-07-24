import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Film, Star, Zap } from 'lucide-react';
import '../styles/VideoRecordingServices.css'; // You will need to create and style this CSS file

const VideoRecordingServices: React.FC = () => {
  return (
    <div className="video-services-page">
      <header className="services-header">
        <div className="container">
          <h1 className="main-heading">Professional Video Recording, Simplified</h1>
          <p className="sub-heading">
            From stand-up sets to poetry slams, we provide a state-of-the-art recording environment to make your performance SHYN.
          </p>
        </div>
      </header>

      <main className="container">
        <section className="process-section">
          <h2 className="section-title">
            <Film className="icon" /> Our Seamless Process
          </h2>
          <p className="section-intro">
            We've streamlined the recording experience so you can focus on what you do best: performing. Here's how easy it is to get your video recorded with us.
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <h3>Step 1: Consultation & Planning</h3>
              <p>We start with a quick chat to understand your vision, style, and technical requirements for the perfect shoot.</p>
            </div>
            <div className="step-card">
              <h3>Step 2: Studio & Setup</h3>
              <p>You'll walk into a fully-equipped studio. Our team handles all the technicals—lighting, sound, and camera setup.</p>
            </div>
            <div className="step-card">
              <h3>Step 3: Record Your Performance</h3>
              <p>It's your time to shine. Perform with confidence while we capture it all in high-definition from multiple angles.</p>
            </div>
            <div className="step-card">
              <h3>Step 4: Professional Editing</h3>
              <p>Our expert editors will cut, color-grade, and master the audio of your footage to deliver a polished final product.</p>
            </div>
          </div>
        </section>

        <section className="membership-offer">
          <div className="offer-content">
            <h2 className="section-title">
              <Star className="icon" /> Exclusive Membership Discount
            </h2>
            <p className="section-intro">
              As a SHYN community member, you get more than just a platform—you get exclusive perks.
            </p>
            <div className="discount-details">
              <p>
                Take your membership to the next level and receive a <strong>significant discount</strong> on all our video recording and editing packages. It's our way of investing in your talent.
              </p>
            </div>
            <Link to="/membership" className="cta-button">
              <span>Explore Membership</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="offer-visual">
            <Zap size={100} className="zap-icon" />
            <p className="discount-text">Unlock Your Discount!</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VideoRecordingServices;