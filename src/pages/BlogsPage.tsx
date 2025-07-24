import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/constants';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Calendar, Clock } from 'lucide-react';


const BlogsPage: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useStaggerAnimation('.blog-card');

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            The <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SHYN</span> Journal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, inspiration, and stories from the world of art and creativity.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden group transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/30">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300 h-14">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden text-ellipsis">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-xs font-medium">
                     <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                     </div>
                     <div className="flex items-center space-x-2">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                     </div>
                  </div>
                   <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
                        <span className="text-sm text-gray-300">By {post.author}</span>
                        <div className="flex items-center text-purple-400 group-hover:text-pink-400 transition-colors">
                            Read More <ArrowRight size={16} className="ml-1" />
                        </div>
                   </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default BlogsPage;
