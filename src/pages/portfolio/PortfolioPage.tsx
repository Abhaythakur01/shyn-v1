import React, { useState, useEffect } from 'react'; // <<< IMPORT useEffect
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Star, Plus, X, Award, Crown, Loader2 } from 'lucide-react'; // <<< IMPORT Loader2
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

import MyWorkTab from './MyWorkTab';
import StatisticsTab from './StatisticsTab';
import FollowersTab from './FollowersTab';

// We will fetch real data, so we can remove the mock data imports for portfolio items
import { videoStats, videoLikes, improvementTips, userProfileStats } from '../../data/constants';

// --- (Helper functions like getUserLevel and getThemeClasses remain the same) ---
const getUserLevel = (followers: number): { level: number; name: string; icon: React.ElementType } => {
  if (followers > 1000) return { level: 3, name: 'Community Leader', icon: Crown };
  if (followers > 100) return { level: 2, name: 'Rising Star', icon: Award };
  return { level: 1, name: 'Newcomer', icon: Star };
};

const getThemeClasses = (level: number) => {
  switch (level) {
    case 3:
      return {
        gradient: 'from-amber-500 to-yellow-300', text: 'text-yellow-400', bg: 'bg-yellow-400/10',
        border: 'border-yellow-500', button: 'from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600',
      };
    case 2:
      return {
        gradient: 'from-sky-400 to-cyan-300', text: 'text-cyan-300', bg: 'bg-cyan-400/10',
        border: 'border-cyan-400', button: 'from-sky-600 to-cyan-500 hover:from-sky-700 hover:to-cyan-600',
      };
    default:
      return {
        gradient: 'from-purple-500 to-pink-500', text: 'text-purple-400', bg: 'bg-purple-500/10',
        border: 'border-purple-500', button: 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      };
  }
};


// <<< DEFINE AN INTERFACE for our Portfolio data
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  item_type: 'youtube' | 'artwork';
  media_url: string;
  thumbnail_url: string;
}

// Helper to extract YouTube ID
const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|watch\?v=)|(?:v=))([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[1]?.length === 11) ? match[1] : null;
};


const PortfolioPage: React.FC = () => {
  // <<< GET THE TOKEN from our auth hook
  const { user, token } = useAuth();
  const sectionRef = useScrollAnimation();
  const [activeTab, setActiveTab] = useState('work');

  // <<< MANAGE STATE for portfolio items and loading status
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [newLink, setNewLink] = useState('');
  const [linkError, setLinkError] = useState('');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const { level, name: levelName, icon: LevelIcon } = getUserLevel(userProfileStats.followers);
  const theme = getThemeClasses(level);
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  // <<< FETCH PORTFOLIO ITEMS from the backend on component mount
  useEffect(() => {
    const fetchPortfolioItems = async () => {
      if (!token) return;
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/api/portfolio`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setPortfolioItems(data);
        } else {
          console.error("Failed to fetch portfolio items");
        }
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioItems();
  }, [token, API_URL]);

  // <<< UPDATE handleAddLink to call the backend API
  const handleAddLink = async () => {
    const videoId = getYouTubeId(newLink);
    if (!videoId) {
      setLinkError('Invalid YouTube URL. Please enter a valid link.');
      return;
    }
    if (!token) {
      setLinkError('You must be logged in to add items.');
      return;
    }

    // A placeholder for the title - in a real app you might fetch this from YouTube's API
    const title = `YouTube Video: ${videoId}`;
    const newItemData = {
      title: title,
      description: 'A video from YouTube.',
      item_type: 'youtube',
      media_url: `https://www.youtube.com/watch?v=${videoId}`,
      thumbnail_url: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    };

    try {
      const response = await fetch(`${API_URL}/api/portfolio`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newItemData)
      });

      if (response.ok) {
        const addedItem = await response.json();
        setPortfolioItems(prevItems => [addedItem, ...prevItems]);
        setNewLink('');
        setLinkError('');
      } else {
        const errorData = await response.json();
        setLinkError(errorData.message || 'Failed to add video.');
      }
    } catch (error) {
      setLinkError('An error occurred. Please try again.');
    }
  };

  // <<< UPDATE handleDeleteLink to call the backend API
  const handleDeleteLink = async (idToDelete: number) => {
    if (!token) return;
    try {
      const response = await fetch(`${API_URL}/api/portfolio/${idToDelete}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        setPortfolioItems(currentItems => currentItems.filter(item => item.id !== idToDelete));
      } else {
        alert('Failed to delete item.');
      }
    } catch (error) {
      alert('An error occurred while deleting the item.');
    }
  };


  if (!user) {
    // This part remains the same
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        {/* ... Access Denied JSX ... */}
      </div>
    );
  }

  // Filter only youtube items to pass to MyWorkTab for now
  const youtubeLinks = portfolioItems
    .filter(item => item.item_type === 'youtube')
    .map(item => ({
      id: String(item.id), // MyWorkTab expects string ID
      videoId: getYouTubeId(item.media_url) || '',
      thumbnailUrl: item.thumbnail_url,
    }));


  return (
    <>
      <div className="min-h-screen bg-gray-900 pt-32">
        <div
          ref={sectionRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
        >
          {/* Header */}
          <header className={`bg-gray-800/50 border ${theme.border} rounded-2xl p-6 mb-8 flex items-center gap-6 shadow-lg`}>
            <div className="w-24 h-24 bg-gray-700 rounded-full flex-shrink-0"></div>
            <div className="flex-grow">
                 <div className="flex items-center gap-4 mb-2">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white">
                        {/* <<< USE DYNAMIC USER NAME */}
                        {user.full_name || 'Artist'}
                    </h1>
                    <div className={`flex items-center gap-2 ${theme.bg} ${theme.text} px-3 py-1 rounded-full text-sm font-semibold`}>
                        <LevelIcon size={16} />
                        <span>{levelName}</span>
                    </div>
                </div>
                <div className="flex items-center gap-6 text-gray-400">
                    <span><span className="font-bold text-white">{userProfileStats.followers.toLocaleString()}</span> Followers</span>
                    <span><span className="font-bold text-white">{userProfileStats.following.toLocaleString()}</span> Following</span>
                </div>
            </div>
             <button className={`ml-auto inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r ${theme.button} text-white rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-xl`}>
                <Plus size={20} />
                <span>Add Artwork</span>
              </button>
          </header>

          {/* Tab Navigation (remains the same) */}
          <div className="border-b border-gray-700 mb-8">
              {/* ... nav buttons ... */}
          </div>

          {/* Tab Content */}
          <div>
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-10 h-10 text-purple-400 animate-spin" />
              </div>
            ) : (
              <>
                {activeTab === 'work' && <MyWorkTab 
                  youtubeLinks={youtubeLinks.map(link => ({ id: link.videoId, thumbnailUrl: link.thumbnailUrl }))} 
                  setPlayingVideoId={setPlayingVideoId}
                  handleDeleteLink={(videoIdToDelete) => {
                    const itemToDelete = youtubeLinks.find(link => link.videoId === videoIdToDelete);
                    if (itemToDelete) {
                      handleDeleteLink(Number(itemToDelete.id));
                    }
                  }}
                  newLink={newLink}
                  setNewLink={setNewLink}
                  linkError={linkError}
                  handleAddLink={handleAddLink}
                />}
                {activeTab === 'stats' && <StatisticsTab 
                    videoStats={videoStats} 
                    videoLikes={videoLikes} 
                    improvementTips={improvementTips} 
                />}
                {activeTab === 'followers' && <FollowersTab />}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Video Player Modal (remains the same) */}
      <AnimatePresence>
        {playingVideoId && (
            <motion.div
              // ... modal JSX
            />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioPage;