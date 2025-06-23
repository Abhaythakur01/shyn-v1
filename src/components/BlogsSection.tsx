import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { blogPosts } from '../data/constants';

const BlogsSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation('.blog-card');

  return (
    <section id="blogs" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Artistic <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover inspiration, techniques, and stories from the creative world
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="blog-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    By {post.author}
                  </span>
                  <div className="flex items-center text-purple-600 group-hover:text-pink-600 transition-colors duration-200">
                    <span className="text-sm font-medium mr-1">Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;