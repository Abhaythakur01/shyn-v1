import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/constants';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Footer from '../components/Footer';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blogs" className="text-purple-400 hover:text-purple-300 flex items-center justify-center">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/blogs" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors duration-200">
          <ArrowLeft size={20} />
          <span>Back to All Articles</span>
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center text-gray-400 text-sm space-x-4">
              <div className="flex items-center space-x-2">
                <User size={14} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none mx-auto">
            <img src={post.image} alt={post.title} className="rounded-2xl mb-8 w-full" />
            <p className="lead">{post.excerpt}</p>
            <p>
              This is placeholder content for the blog post. In a real application, this would be fetched from a CMS or database. It would contain the full text of the article, exploring the topic in depth, offering insights, and engaging the reader with compelling narrative and visuals.
            </p>
            <h2>Exploring Deeper Concepts</h2>
            <p>
              Further paragraphs would elaborate on the main points, providing examples, case studies, or tutorials. The goal is to deliver value and establish authority on the subject matter, encouraging readers to return for more content.
            </p>
            <blockquote>
              "An inspiring quote can break up the text and provide a moment of reflection for the reader."
            </blockquote>
            <p>
              The conclusion would summarize the key takeaways and perhaps pose a question to the reader to encourage comments and community engagement. Building a community around your content is key to long-term success.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
