import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Plus, Grid, List, Search, Filter, Youtube, Link as LinkIcon, Play, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper function to extract YouTube Video ID from various URL formats ---
const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

interface YouTubeVideo {
  id: string;
  thumbnailUrl: string;
}

const PortfolioPage: React.FC = () => {
  const { user } = useAuth();
  const sectionRef = useScrollAnimation();

  // --- State for YouTube links ---
  const [youtubeLinks, setYoutubeLinks] = useState<YouTubeVideo[]>([]);
  const [newLink, setNewLink] = useState('');
  const [linkError, setLinkError] = useState('');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handleAddLink = () => {
    const videoId = getYouTubeId(newLink);
    if (videoId) {
      const newVideo: YouTubeVideo = {
        id: videoId,
        thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      };
      if (!youtubeLinks.some(link => link.id === newVideo.id)) {
        setYoutubeLinks([newVideo, ...youtubeLinks]);
      }
      setNewLink('');
      setLinkError('');
    } else {
      setLinkError('Invalid YouTube URL. Please enter a valid link.');
    }
  };

  // --- NEW: Function to handle deleting a video ---
  const handleDeleteLink = (idToDelete: string) => {
    setYoutubeLinks(currentLinks => currentLinks.filter(video => video.id !== idToDelete));
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-400 mb-6">Please log in to view your portfolio</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 pt-32">
        <div
          ref={sectionRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">My Portfolio</h1>
                <p className="text-gray-400">Showcase your artistic journey and creations</p>
              </div>
              <button className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-xl">
                <Plus size={20} />
                <span>Add Artwork</span>
              </button>
            </div>
          </div>

          {/* Add YouTube Link Section */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-5 sm:p-6 mb-8 border border-gray-700">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative flex-grow w-full">
                <LinkIcon size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  placeholder="Paste a YouTube link to showcase your video..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>
              <button onClick={handleAddLink} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                <Youtube size={20} />
                <span>Add Video</span>
              </button>
            </div>
            {linkError && <p className="text-red-400 text-sm mt-3">{linkError}</p>}
          </div>
          
          {/* YouTube Videos Grid */}
          {youtubeLinks.length > 0 && (
            <div className="mb-12">
               <h2 className="text-2xl font-bold text-white mb-6">Video Showcase</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {youtubeLinks.map((video) => (
                  <div key={video.id} onClick={() => setPlayingVideoId(video.id)} className="relative bg-gray-800 rounded-2xl shadow-lg overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                    {/* --- NEW: Delete Button --- */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents the video player from opening
                        handleDeleteLink(video.id);
                      }}
                      className="absolute top-2 right-2 z-10 bg-black/50 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 hover:bg-red-500 transition-all duration-200"
                      aria-label="Delete video"
                    >
                      <X size={16} />
                    </button>
                    <div className="relative aspect-video">
                      <img 
                        src={video.thumbnailUrl} 
                        alt="YouTube Thumbnail" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play size={48} className="text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                ))}
               </div>
            </div>
          )}

          <h2 className="text-2xl font-bold text-white mb-6">Uploaded Artwork</h2>
          {/* Filters */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-5 sm:p-6 mb-8 border border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center flex-wrap gap-3">
                <div className="relative w-full sm:w-auto">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Search your artworks..." className="w-full sm:w-auto pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                </div>
                <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-purple-600 text-white rounded-lg"><Grid size={20} /></button>
                <button className="p-2 text-gray-400 hover:bg-gray-700 rounded-lg transition"><List size={20} /></button>
              </div>
            </div>
          </div>

          {/* Existing Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-2xl shadow-lg border-2 border-dashed border-gray-600 hover:border-purple-500 transition-colors group cursor-pointer">
              <div className="p-8 text-center flex flex-col justify-center items-center h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition">
                  <Plus size={32} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Add New Artwork</h3>
                <p className="text-gray-400 text-sm">Upload your latest creation</p>
              </div>
            </div>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer border border-gray-700">
                <div className="relative aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition"><p className="font-semibold">Artwork Title</p><p className="text-sm text-gray-200">Category</p></div>
                </div>
                <div className="p-4"><h3 className="font-semibold text-white mb-1">Sample Artwork {item}</h3><p className="text-sm text-gray-400 mb-2">Created on Jan {item + 10}, 2024</p><div className="flex items-center justify-between"><span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">Painting</span><span className="text-xs text-gray-500">1.2k views</span></div></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[{ label: 'Total Artworks', value: '12', color: 'text-purple-400' }, { label: 'Total Views', value: '3.2k', color: 'text-pink-400' }, { label: 'Likes Received', value: '147', color: 'text-indigo-400' }, { label: 'Comments', value: '23', color: 'text-emerald-400' }].map((stat, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center border border-gray-700"><div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div><div className="text-gray-400">{stat.label}</div></div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {playingVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlayingVideoId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl shadow-2xl"
            >
              <button onClick={() => setPlayingVideoId(null)} className="absolute -top-3 -right-3 z-10 bg-white text-black rounded-full p-1.5 hover:scale-110 transition-transform">
                <X size={20} />
              </button>
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioPage;
