import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Users, BookOpen, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { artForms } from '../data/constants';

const ArtFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const artForm = artForms.find(form => form.id === id);

  useEffect(() => {
    if (!artForm) return;

    // Animate page entrance
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );
  }, [artForm]);

  if (!artForm) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Art Form Not Found</h1>
          <Link to="/who-are-you" className="text-purple-400 hover:text-purple-300">
            ← Back to Art Forms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative h-96 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${artForm.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <Link 
              to="/who-are-you" 
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span>Back to Art Forms</span>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{artForm.name}</h1>
            <p className="text-xl md:text-2xl text-gray-200">{artForm.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Discover the Art of {artForm.name}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {artForm.name} is a profound form of artistic expression that allows you to communicate emotions, 
                ideas, and perspectives through unique mediums and techniques. Whether you're a complete beginner 
                or looking to refine your skills, our comprehensive approach will guide you through every step 
                of your creative journey.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our expert instructors bring years of professional experience and a passion for teaching that 
                will inspire and challenge you to reach new heights in your artistic development. Join thousands 
                of artists who have discovered their creative potential through our structured learning programs.
              </p>
            </div>

            {/* Video Section */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Featured Workshop</h3>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-200">
                    <Play size={32} className="text-white ml-1" fill="currentColor" />
                  </button>
                </div>
                <img 
                  src={artForm.image} 
                  alt={`${artForm.name} workshop`}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <p className="text-gray-400 mt-4">
                Introduction to {artForm.name}: Fundamentals and Techniques
              </p>
            </div>

            {/* Techniques */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Fundamental principles and theory',
                  'Essential tools and materials',
                  'Basic to advanced techniques',
                  'Style development and personal expression',
                  'Composition and design principles',
                  'Professional presentation methods'
                ].map((technique, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${artForm.color} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-300">{technique}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Course Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users size={20} className="text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Students Enrolled</p>
                    <p className="text-sm text-gray-400">2,847 active learners</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen size={20} className="text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Lessons</p>
                    <p className="text-sm text-gray-400">24 comprehensive modules</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award size={20} className="text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Certification</p>
                    <p className="text-sm text-gray-400">Upon completion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={`bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center`}>
              <h3 className="text-xl font-bold text-white mb-3">Ready to Begin?</h3>
              <p className="text-gray-300 mb-6">
                Start your {artForm.name.toLowerCase()} journey today with our expert-led courses
              </p>
              <button className={`w-full bg-gradient-to-r ${artForm.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200`}>
                Enroll Now
              </button>
            </div>

            {/* Related Art Forms */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Explore More</h3>
              <div className="space-y-3">
                {artForms.filter(form => form.id !== artForm.id).slice(0, 3).map((relatedForm) => (
                  <Link
                    key={relatedForm.id}
                    to={`/art-form/${relatedForm.id}`}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <img 
                      src={relatedForm.image} 
                      alt={relatedForm.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-white">{relatedForm.name}</p>
                      <p className="text-sm text-gray-400 truncate">{relatedForm.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtFormPage;