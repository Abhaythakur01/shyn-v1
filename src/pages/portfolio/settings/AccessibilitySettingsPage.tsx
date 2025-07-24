import React from 'react';

const AccessibilitySettingsPage: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-6">Accessibility</h2>
    <p className="text-gray-400 mb-6">Manage settings to enhance your experience on SHYN.</p>
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-gray-700/50 p-4 rounded-lg">
        <label className="font-medium">Reduce Motion</label>
        <input type="checkbox" className="toggle-checkbox" />
      </div>
      <div className="flex justify-between items-center bg-gray-700/50 p-4 rounded-lg">
        <label className="font-medium">High Contrast Mode</label>
        <input type="checkbox" className="toggle-checkbox" />
      </div>
    </div>
  </div>
);

export default AccessibilitySettingsPage;