import React, { useState } from 'react';
import { LifeBuoy, Search, ChevronDown, UserCircle, Briefcase, Star } from 'lucide-react';

// Sample FAQ data categorized
const helpTopics = {
  account: [
    {
      q: 'How do I reset my password?',
      a: 'You can reset your password by clicking the "Forgot Password" link on the login screen. An email will be sent to you with instructions.',
    },
    {
      q: 'How can I change my email address?',
      a: 'To change your email address, please navigate to your Account Settings page. You will find an option to update your email there.',
    },
  ],
  portfolio: [
    {
      q: 'What are the supported formats for uploading artwork?',
      a: 'We currently support JPG, PNG, GIF for images, and MP4 for videos. For YouTube links, simply paste the URL in the designated section.',
    },
    {
      q: 'How do I make my portfolio public?',
      a: 'In your Portfolio settings, you will find a visibility toggle. You can switch it to "Public" to make it viewable by everyone.',
    },
  ],
  membership: [
    {
      q: 'What are the benefits of a SHYN membership?',
      a: 'Our membership gives you access to exclusive workshops, expert guidance, discounts on video recording, and a vibrant community of fellow artists.',
    },
    {
      q: 'How can I cancel my membership?',
      a: 'You can manage or cancel your membership at any time from the "Billing" section in your Account Settings. There are no cancellation fees.',
    },
  ],
};

const HelpCenterPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <LifeBuoy className="mx-auto h-16 w-16 text-purple-400 mb-4" />
          <h1 className="text-5xl font-bold">Help Center</h1>
          <p className="text-lg text-gray-400 mt-2">How can we help you today?</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-16">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full pl-14 pr-6 py-4 bg-gray-800/70 border border-gray-700 rounded-full text-lg focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {/* Account Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <UserCircle className="h-8 w-8 text-purple-400" />
              <h2 className="text-3xl font-bold">Account & Profile</h2>
            </div>
            <div className="space-y-4">
              {helpTopics.account.map((item, index) => (
                <div key={`account-${index}`} className="bg-gray-800/50 rounded-lg border border-gray-700">
                  <button onClick={() => toggleFaq(`account-${index}`)} className="w-full flex justify-between items-center text-left p-5">
                    <span className="font-semibold text-lg">{item.q}</span>
                    <ChevronDown className={`transform transition-transform ${openIndex === `account-${index}` ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === `account-${index}` && <div className="px-5 pb-5 text-gray-300"><p>{item.a}</p></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="h-8 w-8 text-pink-400" />
              <h2 className="text-3xl font-bold">Portfolio & Showcase</h2>
            </div>
            <div className="space-y-4">
              {helpTopics.portfolio.map((item, index) => (
                <div key={`portfolio-${index}`} className="bg-gray-800/50 rounded-lg border border-gray-700">
                  <button onClick={() => toggleFaq(`portfolio-${index}`)} className="w-full flex justify-between items-center text-left p-5">
                    <span className="font-semibold text-lg">{item.q}</span>
                    <ChevronDown className={`transform transition-transform ${openIndex === `portfolio-${index}` ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === `portfolio-${index}` && <div className="px-5 pb-5 text-gray-300"><p>{item.a}</p></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Membership Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Star className="h-8 w-8 text-yellow-400" />
              <h2 className="text-3xl font-bold">Membership & Billing</h2>
            </div>
            <div className="space-y-4">
              {helpTopics.membership.map((item, index) => (
                <div key={`membership-${index}`} className="bg-gray-800/50 rounded-lg border border-gray-700">
                  <button onClick={() => toggleFaq(`membership-${index}`)} className="w-full flex justify-between items-center text-left p-5">
                    <span className="font-semibold text-lg">{item.q}</span>
                    <ChevronDown className={`transform transition-transform ${openIndex === `membership-${index}` ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === `membership-${index}` && <div className="px-5 pb-5 text-gray-300"><p>{item.a}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
