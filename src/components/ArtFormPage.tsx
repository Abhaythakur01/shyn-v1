import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Users, BookOpen, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { artForms } from '../data/constants';
import { ArtFormContent } from '../types'; ///art-forms/dancing


interface ArtFormPageProps {
  content: ArtFormContent;
}

const ArtFormPage: React.FC<ArtFormPageProps> = ({ content: artForm }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
              <h2 className="text-3xl font-bold text-white mb-6">{artForm.introduction.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {artForm.introduction.body1}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {artForm.introduction.body2}
              </p>
            </div>

            {/* Video Section */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">{artForm.featuredWorkshop.title}</h3>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-200">
                    <Play size={32} className="text-white ml-1" fill="currentColor" />
                  </button>
                </div>
                <img 
                  src={artForm.featuredWorkshop.videoPlaceholder.image} 
                  alt={artForm.featuredWorkshop.videoPlaceholder.alt}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <p className="text-gray-400 mt-4">
                {artForm.featuredWorkshop.description}
              </p>
            </div>

            {/* Techniques */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {artForm.whatYouWillLearn.map((technique, index) => (
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
                    <p className="text-sm text-gray-400">{artForm.courseInfo.students}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen size={20} className="text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Lessons</p>
                    <p className="text-sm text-gray-400">{artForm.courseInfo.modules}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award size={20} className="text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Certification</p>
                    <p className="text-sm text-gray-400">{artForm.courseInfo.certification}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={`bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center`}>
              <h3 className="text-xl font-bold text-white mb-3">{artForm.cta.title}</h3>
              <p className="text-gray-300 mb-6">
                {artForm.cta.description}
              </p>
              <button className={`w-full bg-gradient-to-r ${artForm.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200`}>
                {artForm.cta.buttonText}
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
