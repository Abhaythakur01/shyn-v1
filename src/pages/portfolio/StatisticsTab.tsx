import React from 'react';
import { BarChart2, Eye, Heart, MessageSquare, Users, ThumbsUp, TrendingUp, Sparkles } from 'lucide-react';
import { VideoStat, Like, ImprovementTip } from '../../types';

interface StatisticsTabProps {
    videoStats: VideoStat[];
    videoLikes: Like[];
    improvementTips: ImprovementTip[];
}

const StatisticsTab: React.FC<StatisticsTabProps> = ({ videoStats, videoLikes, improvementTips }) => {
    // Calculate totals for the overview
    const totalViews = videoStats.reduce((sum, stat) => sum + stat.views, 0);
    const totalLikes = videoStats.reduce((sum, stat) => sum + stat.likes, 0);
    const followers = 1200; // Mock data
    const engagementRate = ((totalLikes / totalViews) * 100).toFixed(2);

    return (
        <div className="mt-8 text-white">
            {/* Overview Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                    <div className="flex items-center gap-4">
                        <Eye className="text-purple-400" size={28} />
                        <div>
                            <p className="text-gray-400 text-sm">Total Views</p>
                            <p className="text-2xl font-bold">{totalViews.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                    <div className="flex items-center gap-4">
                        <Heart className="text-pink-400" size={28} />
                        <div>
                            <p className="text-gray-400 text-sm">Total Likes</p>
                            <p className="text-2xl font-bold">{totalLikes.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                    <div className="flex items-center gap-4">
                        <Users className="text-blue-400" size={28} />
                        <div>
                            <p className="text-gray-400 text-sm">Followers</p>
                            <p className="text-2xl font-bold">{followers.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                 <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                    <div className="flex items-center gap-4">
                        <TrendingUp className="text-emerald-400" size={28} />
                        <div>
                            <p className="text-gray-400 text-sm">Engagement Rate</p>
                            <p className="text-2xl font-bold">{engagementRate}%</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Performance & Chart */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Performance Breakdown */}
                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><BarChart2 size={20}/> Performance Breakdown</h3>
                        <div className="space-y-4">
                            {videoStats.map(stat => (
                                <div key={stat.videoId} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                                    <p className="font-semibold">{stat.title}</p>
                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="flex items-center gap-1"><Eye size={14}/> {stat.views.toLocaleString()}</span>
                                        <span className="flex items-center gap-1"><Heart size={14}/> {stat.likes.toLocaleString()}</span>
                                        <span className="flex items-center gap-1"><MessageSquare size={14}/> {stat.comments.toLocaleString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Chart Placeholder */}
                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <h3 className="text-xl font-bold mb-4">View Trends</h3>
                        <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">A beautiful chart will live here soon!</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Likes & Improvement Tips */}
                <div className="space-y-8">
                    {/* Recent Likes */}
                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ThumbsUp size={20} /> Recent Likes</h3>
                        <div className="space-y-3">
                            {videoLikes.map(like => (
                                <div key={like.userId} className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                    <p><span className="font-bold">{like.userName}</span> liked your video</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Areas for Improvement */}
                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                         <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Sparkles size={20}/> Areas for Improvement</h3>
                         <div className="space-y-4">
                             {improvementTips.map(tip => (
                                 <div key={tip.id} className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-purple-500">
                                     <h4 className="font-bold">{tip.title}</h4>
                                     <p className="text-sm text-gray-400">{tip.description}</p>
                                 </div>
                             ))}
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsTab;