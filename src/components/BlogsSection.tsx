import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { blogPosts } from '../data/constants';

const BlogsSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation('.blog-card');

  return (
    <section id="blogs" ref={sectionRef} className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Seamless gradient transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-indigo-900/50 to-transparent pointer-events-none"></div>
      
      {/* Sophisticated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 0 0'
          }}
        ></div>
      </div>

      {/* Theme Color Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/15 to-indigo-900/20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Artistic <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover inspiration, techniques, and stories from the creative world
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="blog-card bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-700/50 hover:border-purple-500/30"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-300">
                    By {post.author}
                  </span>
                  <div className="flex items-center text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    <span className="text-sm font-medium mr-2">Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;