import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <<< 1. IMPORT Link
import { useAuth } from '../../hooks/useAuth';
import { Star, Plus, X, Award, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

import MyWorkTab from './MyWorkTab';
import StatisticsTab from './StatisticsTab';
import FollowersTab from './FollowersTab';
// import SettingsTab from './SettingsTab'; // <<< 2. REMOVE the old SettingsTab import

import { videoStats, videoLikes, improvementTips, userProfileStats } from '../../data/constants';

// --- (The rest of the helper functions getUserLevel, getThemeClasses, etc. remain the same) ---
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

const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|watch\?v=)|(?:v=))([^#\&\?]*).*/;
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
  const [activeTab, setActiveTab] = useState('work');
  const [youtubeLinks, setYoutubeLinks] = useState<YouTubeVideo[]>([]);
  const [newLink, setNewLink] = useState('');
  const [linkError, setLinkError] = useState('');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const { level, name: levelName, icon: LevelIcon } = getUserLevel(userProfileStats.followers);
  const theme = getThemeClasses(level);

  const handleAddLink = () => {
    const videoId = getYouTubeId(newLink);
    if (videoId) {
      const newVideo = { id: videoId, thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` };
      if (!youtubeLinks.some(link => link.id === newVideo.id)) {
        setYoutubeLinks([newVideo, ...youtubeLinks]);
      }
      setNewLink('');
      setLinkError('');
    } else {
      setLinkError('Invalid YouTube URL. Please enter a valid link.');
    }
  };

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
          <header className={`bg-gray-800/50 border ${theme.border} rounded-2xl p-6 mb-8 flex items-center gap-6 shadow-lg`}>
            <div className="w-24 h-24 bg-gray-700 rounded-full flex-shrink-0">
                {/* User avatar would go here */}
            </div>
            <div className="flex-grow">
                 <div className="flex items-center gap-4 mb-2">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white">
                        {user.user_metadata?.full_name || user.email?.split('@')[0] || 'Artist'}
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

          {/* Featured Section */}
          {level >= 3 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Featured Showcase</h2>
              <div className="bg-gray-800 rounded-2xl p-6 h-64 flex items-center justify-center">
                <p className="text-gray-500">Users can select a piece of artwork to feature here.</p>
              </div>
            </div>
          )}
          
          {/* Tab Navigation */}
          <div className="border-b border-gray-700 mb-8">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button onClick={() => setActiveTab('work')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'work' ? `${theme.border} ${theme.text}` : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'}`}>
                      My Work
                  </button>
                  <button onClick={() => setActiveTab('stats')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'stats' ? `${theme.border} ${theme.text}` : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'}`}>
                      Statistics
                  </button>
                  <button onClick={() => setActiveTab('followers')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'followers' ? `${theme.border} ${theme.text}` : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'}`}>
                      Followers
                  </button>
                  {/* --- 3. CHANGE button to Link --- */}
                   <Link to="/settings" className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500`}>
                      Settings
                   </Link>
              </nav>
          </div>

          {/* Tab Content */}
          <div>
              {activeTab === 'work' && <MyWorkTab 
                youtubeLinks={youtubeLinks} 
                setPlayingVideoId={setPlayingVideoId}
                handleDeleteLink={handleDeleteLink}
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
              {/* --- 4. REMOVE the old rendering logic --- */}
              {/* {activeTab === 'settings' && <SettingsTab />} */}
          </div>
        </div>
      </div>
      {/* Video Player Modal */}
      <AnimatePresence>
        {playingVideoId && (
            {/* Modal JSX remains the same */}
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioPage;