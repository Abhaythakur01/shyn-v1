import React from 'react';

const BlockedUsersSettingsPage: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-6">Blocked Users</h2>
    <p className="text-gray-400 mb-6">Users you block will not be able to follow you, message you, or comment on your work.</p>
    <div className="bg-gray-700/30 p-8 rounded-lg text-center">
      <p className="text-gray-500">You haven't blocked anyone yet.</p>
    </div>
  </div>
);

export default BlockedUsersSettingsPage;