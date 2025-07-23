import React from 'react';

const PrivacySettingsPage: React.FC = () => {
  const Toggle = ({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) => (
    <div className="flex justify-between items-center bg-gray-700/50 p-4 rounded-lg">
      <label className="font-medium">{label}</label>
      <input type="checkbox" className="toggle-checkbox" defaultChecked={defaultChecked} />
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Privacy Settings</h2>
      <div className="space-y-4">
        <Toggle label="Make Portfolio Private" />
        <Toggle label="Allow Others to Tag You in Artwork" defaultChecked={true} />
        <Toggle label="Show Follower Count Publicly" defaultChecked={true} />
        <Toggle label="Allow DMs from Non-Followers" />
      </div>
    </div>
  );
};

export default PrivacySettingsPage;