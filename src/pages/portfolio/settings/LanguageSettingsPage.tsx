import React from 'react';

const LanguageSettingsPage: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-6">Language & Region</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
        <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg">
          <option>English (India)</option>
          <option>English (US)</option>
          <option>हिन्दी</option>
        </select>
      </div>
       <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Region</label>
        <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg">
          <option>India</option>
          <option>United States</option>
          <option>United Kingdom</option>
        </select>
      </div>
    </div>
  </div>
);

export default LanguageSettingsPage;