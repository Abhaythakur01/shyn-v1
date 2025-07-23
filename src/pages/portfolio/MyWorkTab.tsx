import React from 'react';
import { Plus, Grid, List, Search, Filter, Youtube, Link as LinkIcon, Play, X } from 'lucide-react';

interface YouTubeVideo {
  id: string;
  thumbnailUrl: string;
}

interface MyWorkTabProps {
  youtubeLinks: YouTubeVideo[];
  setPlayingVideoId: (id: string | null) => void;
  handleDeleteLink: (id: string) => void;
  newLink: string;
  setNewLink: (link: string) => void;
  linkError: string;
  handleAddLink: () => void;
}

const MyWorkTab: React.FC<MyWorkTabProps> = ({
  youtubeLinks,
  setPlayingVideoId,
  handleDeleteLink,
  newLink,
  setNewLink,
  linkError,
  handleAddLink,
}) => (
  <div className="mt-8">
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
              <button
                onClick={(e) => {
                  e.stopPropagation();
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
  </div>
);

export default MyWorkTab;