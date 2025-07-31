import React, { useState, useEffect } from 'react'; // <<< IMPORT useState & useEffect
import { useParams, Link } from 'react-router-dom';
// import { blogPosts } from '../data/constants'; // <<< REMOVE static import
import { ArrowLeft, Calendar, Clock, User, Loader2 } from 'lucide-react'; // <<< IMPORT Loader2 icon
import Footer from '../components/Footer';

// <<< DEFINE INTERFACE for a single blog post
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // The full content of the post
  image_url: string;
  author_id: string;
  created_at: string;
  read_time_minutes: number;
}

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // <<< SET UP STATE for the post, loading, and error handling
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  // <<< USE EFFECT to fetch the specific blog post by its ID
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog post not found');
        }
        const data: BlogPost = await response.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, API_URL]);

  // <<< RENDER a loading state
  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-900">
        <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
      </div>
    );
  }

  // <<< RENDER an error or "Not Found" state
  if (error || !post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{error || 'Post Not Found'}</h1>
          <Link to="/blogs" className="text-purple-400 hover:text-purple-300 flex items-center justify-center">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // <<< RENDER the fetched blog post data
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
                {/* Placeholder for author name */}
                <span>By SHYN Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={14} />
                <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>{post.read_time_minutes} min read</span>
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none mx-auto">
            <img src={post.image_url} alt={post.title} className="rounded-2xl mb-8 w-full" />
            <p className="lead">{post.excerpt}</p>
            {/* Render the full blog content from the database */}
            <div dangerouslySetInnerHTML={{ __html: post.content || "<p>This post has no content yet.</p>" }} />
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;