import React from 'react';

const VerificationSettingsPage: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-6">Artist Verification</h2>
    <div className="bg-gray-700/50 p-6 rounded-lg">
        <h3 className="font-semibold text-white mb-2">Get Verified</h3>
        <p className="text-gray-400 mb-4">Verified artists get a badge on their profile. This helps the community know you're authentic.</p>
        <button className="px-5 py-2 bg-purple-600 rounded-lg text-white font-semibold">Apply for Verification</button>
      </div>
  </div>
);

export default VerificationSettingsPage;