import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Plus, Grid, List, Search, Filter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PortfolioPage: React.FC = () => {
  const { user } = useAuth();
  const sectionRef = useScrollAnimation();

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
    <div className="min-h-screen bg-gray-900">
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

        {/* Filters */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-5 sm:p-6 mb-8 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center flex-wrap gap-3">
              <div className="relative w-full sm:w-auto">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search your artworks..."
                  className="w-full sm:w-auto pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition">
                <Filter size={16} />
                <span>Filter</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-purple-600 text-white rounded-lg">
                <Grid size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:bg-gray-700 rounded-lg transition">
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Upload Card */}
          <div className="bg-gray-800 rounded-2xl shadow-lg border-2 border-dashed border-gray-600 hover:border-purple-500 transition-colors group cursor-pointer">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition">
                <Plus size={32} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Add New Artwork</h3>
              <p className="text-gray-400 text-sm">Upload your latest creation</p>
            </div>
          </div>

          {/* Sample Artwork Cards */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer border border-gray-700"
            >
              <div className="relative aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                  <p className="font-semibold">Artwork Title</p>
                  <p className="text-sm text-gray-200">Category</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">Sample Artwork {item}</h3>
                <p className="text-sm text-gray-400 mb-2">Created on Jan {item + 10}, 2024</p>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">Painting</span>
                  <span className="text-xs text-gray-500">1.2k views</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Artworks', value: '12', color: 'text-purple-400' },
            { label: 'Total Views', value: '3.2k', color: 'text-pink-400' },
            { label: 'Likes Received', value: '147', color: 'text-indigo-400' },
            { label: 'Comments', value: '23', color: 'text-emerald-400' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center border border-gray-700"
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
