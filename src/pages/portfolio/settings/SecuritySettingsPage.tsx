import React from 'react';

const SecuritySettingsPage: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-6">Login & Security</h2>
    <div className="space-y-6">
      <div className="bg-gray-700/50 p-4 rounded-lg">
        <h3 className="font-semibold text-white mb-2">Two-Factor Authentication (2FA)</h3>
        <p className="text-gray-400 mb-3">Add an extra layer of security to your account.</p>
        <button className="px-5 py-2 bg-purple-600 rounded-lg text-white font-semibold">Enable 2FA</button>
      </div>
      <div className="bg-gray-700/50 p-4 rounded-lg">
        <h3 className="font-semibold text-white mb-2">Active Sessions</h3>
        <p className="text-gray-400">Chrome on Windows - Mumbai, India</p>
      </div>
    </div>
  </div>
);

export default SecuritySettingsPage;