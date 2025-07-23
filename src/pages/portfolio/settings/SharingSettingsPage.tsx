import React from 'react';

const SharingSettingsPage: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-6">Content & Sharing</h2>
    <p className="text-gray-400 mb-6">Manage how your content is shared and licensed.</p>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Default Content License</label>
        <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg">
          <option>All Rights Reserved</option>
          <option>Creative Commons (CC BY-NC-SA)</option>
          <option>Public Domain</option>
        </select>
      </div>
      <div className="flex justify-between items-center bg-gray-700/50 p-4 rounded-lg">
        <label className="font-medium">Allow others to embed your work</label>
        <input type="checkbox" className="toggle-checkbox" defaultChecked />
      </div>
    </div>
  </div>
);

export default SharingSettingsPage;