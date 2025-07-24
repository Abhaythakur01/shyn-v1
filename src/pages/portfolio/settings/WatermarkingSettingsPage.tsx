import React from 'react';

const WatermarkingSettingsPage: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-6">Watermarking</h2>
    <p className="text-gray-400 mb-6">Automatically add a watermark to your uploaded images and videos to protect your work.</p>
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-gray-700/50 p-4 rounded-lg">
        <label className="font-medium">Enable Watermark by Default</label>
        <input type="checkbox" className="toggle-checkbox" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Watermark Text</label>
        <input type="text" placeholder="© Your Name" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg" />
      </div>
    </div>
  </div>
);

export default WatermarkingSettingsPage;