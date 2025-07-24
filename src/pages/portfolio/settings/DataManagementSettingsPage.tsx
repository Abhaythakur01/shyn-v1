import React from 'react';

const DataManagementSettingsPage: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-6">Data Management</h2>
    <div className="space-y-6">
      <div className="bg-gray-700/50 p-4 rounded-lg">
        <h3 className="font-semibold text-white mb-2">Export Your Data</h3>
        <p className="text-gray-400 mb-3">Download a copy of all your portfolio data, comments, and account information.</p>
        <button className="px-5 py-2 bg-purple-600 rounded-lg text-white font-semibold">Request Data Export</button>
      </div>
    </div>
  </div>
);

export default DataManagementSettingsPage;