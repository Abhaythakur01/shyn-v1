import React from 'react';

const ReferralsSettingsPage: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-6">Referrals & Credits</h2>
    <div className="bg-gray-700/50 p-6 rounded-lg">
      <h3 className="font-semibold text-white mb-2">Invite Friends, Earn Credits</h3>
      <p className="text-gray-400 mb-4">Share your unique link with friends. When they sign up for a membership, you both get SHYN credits!</p>
      <input type="text" readOnly value="https://shyn.com/join?ref=your-code" className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg mb-3" />
      <button className="px-5 py-2 bg-purple-600 rounded-lg text-white font-semibold">Copy Link</button>
    </div>
  </div>
);

export default ReferralsSettingsPage;