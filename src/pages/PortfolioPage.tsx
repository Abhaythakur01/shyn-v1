import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Plus, Grid, List, Search, Filter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PortfolioPage: React.FC = () => {
  const { user } = useAuth();
  const sectionRef = useScrollAnimation();

  if (!user) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">Please log in to view your portfolio</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">My Portfolio</h1>
              <p className="text-gray-600">Showcase your artistic journey and creations</p>
            </div>
            <button className="mt-4 md:mt-0 inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Plus size={20} />
              <span>Add Artwork</span>
            </button>
          </div>
        </div>

        {/* Filters and View Options */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your artworks..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Filter size={16} />
                <span>Filter</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                <Grid size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Upload Card */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 hover:border-purple-400 transition-colors duration-200 group cursor-pointer">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors duration-200">
                <Plus size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Add New Artwork</h3>
              <p className="text-gray-600 text-sm">Upload your latest creation</p>
            </div>
          </div>

          {/* Sample Artworks - In a real app, these would come from the database */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Artwork Title</p>
                  <p className="text-sm text-gray-200">Category</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Sample Artwork {item}</h3>
                <p className="text-sm text-gray-600 mb-2">Created on Jan {item + 10}, 2024</p>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">Painting</span>
                  <span className="text-xs text-gray-500">1.2k views</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
            <div className="text-gray-600">Total Artworks</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">3.2k</div>
            <div className="text-gray-600">Total Views</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">147</div>
            <div className="text-gray-600">Likes Received</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">23</div>
            <div className="text-gray-600">Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;