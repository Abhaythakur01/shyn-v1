import React from 'react';

const FollowersTab: React.FC = () => (
    <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-800 rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
                    <div>
                        <h4 className="font-bold text-white">Follower Name</h4>
                        <p className="text-sm text-gray-400">Following since 2024</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default FollowersTab;