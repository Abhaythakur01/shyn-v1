import React from 'react';

const AccountSettingsPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Account</h2>
      
      {/* Change Email */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-2">Email Address</h3>
        <p className="text-gray-400 mb-4">Your current email is user@example.com</p>
        <div className="flex items-center gap-4">
            <input type="email" placeholder="New email address" className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-lg" />
            <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700">Update Email</button>
        </div>
      </div>

      {/* Change Password */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-2">Change Password</h3>
         <div className="space-y-4">
            <input type="password" placeholder="Current Password" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg" />
            <input type="password" placeholder="New Password" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg" />
            <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700">Update Password</button>
         </div>
      </div>

      {/* Delete Account */}
      <div className="border-t border-red-500/30 pt-6">
        <h3 className="text-lg font-semibold text-red-400">Delete Account</h3>
        <p className="text-gray-400 mt-2 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default AccountSettingsPage;