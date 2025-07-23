import React from 'react';

const NotificationSettingsPage: React.FC = () => {
  // A simple toggle component for reuse
  const Toggle = ({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) => (
    <div className="flex justify-between items-center bg-gray-700/50 p-4 rounded-lg">
      <label className="font-medium">{label}</label>
      <input type="checkbox" className="toggle-checkbox" defaultChecked={defaultChecked} />
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Notification Settings</h2>
      <div className="space-y-4">
        <Toggle label="Email Notifications for New Likes" defaultChecked={true} />
        <Toggle label="Email Notifications for New Followers" defaultChecked={true} />
        <Toggle label="Push Notifications for Comments" />
        <Toggle label="Weekly SHYN Newsletter" />
      </div>
    </div>
  );
};

export default NotificationSettingsPage;