import React from 'react';

const AppearanceSettingsPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Appearance</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Theme</h3>
          <p className="text-gray-400 mb-4">Choose how SHYN looks to you. Select a theme from the options below.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Dark Theme */}
            <div className="border-2 border-purple-500 rounded-lg p-4">
              <div className="w-full h-16 bg-gray-900 rounded mb-2"></div>
              <p className="font-semibold text-center">SHYN Dark (Default)</p>
            </div>
            {/* Light Theme */}
            <div className="border-2 border-gray-600 rounded-lg p-4">
              <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
              <p className="font-semibold text-center">SHYN Light</p>
            </div>
             {/* High Contrast Theme */}
            <div className="border-2 border-gray-600 rounded-lg p-4">
              <div className="w-full h-16 bg-black rounded mb-2 border border-white"></div>
              <p className="font-semibold text-center">High Contrast</p>
            </div>
          </div>
        </div>

        <div>
            <h3 className="text-lg font-semibold text-white mb-2">Portfolio Layout</h3>
            <p className="text-gray-400 mb-4">Select the default layout for your public portfolio.</p>
            <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg">
                <option>Grid View</option>
                <option>List View</option>
                <option>Gallery View</option>
            </select>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettingsPage;