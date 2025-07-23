import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const ProfileSettingsPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Public Profile</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
            defaultValue="Your Name"
          />
        </div>
         <div>
           <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
           <textarea
             className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
             rows={4}
             placeholder="Tell everyone a little bit about yourself and your art."
           />
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-white mb-4">Social Links</h3>
          <div className="space-y-4">
              <div className="flex items-center gap-3">
                  <Instagram className="text-gray-400" />
                  <input type="text" placeholder="instagram.com/your-username" className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded-lg" />
              </div>
              <div className="flex items-center gap-3">
                  <Youtube className="text-gray-400" />
                  <input type="text" placeholder="youtube.com/your-channel" className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded-lg" />
              </div>
          </div>
        </div>

        <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;