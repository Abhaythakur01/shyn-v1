import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { 
  User, Bell, EyeOff, KeyRound, Palette, CreditCard, Search, Share2, Droplet, UserX,
  Shield, Database, Accessibility, Globe, Code, BadgeCheck, Gift
} from 'lucide-react';

// --- UPDATED: All 16 settings pages are now included ---
const settingsNavItems = [
  { name: 'Profile', path: '/settings/profile', icon: User, keywords: 'name, bio, avatar, social media' },
  { name: 'Account', path: '/settings/account', icon: KeyRound, keywords: 'email, password, delete account' },
  { name: 'Notifications', path: '/settings/notifications', icon: Bell, keywords: 'email, push, alerts, messages' },
  { name: 'Appearance', path: '/settings/appearance', icon: Palette, keywords: 'theme, dark mode, light mode, color' },
  { name: 'Privacy', path: '/settings/privacy', icon: EyeOff, keywords: 'private, public, followers, tagging' },
  { name: 'Billing', path: '/settings/billing', icon: CreditCard, keywords: 'subscription, payment, invoice, membership' },
  { name: 'Content & Sharing', path: '/settings/sharing', icon: Share2, keywords: 'uploads, social, connect, license' },
  { name: 'Watermarking', path: '/settings/watermarking', icon: Droplet, keywords: 'image, video, protect, signature' },
  { name: 'Blocked Users', path: '/settings/blocked-users', icon: UserX, keywords: 'block, restrict, mute' },
  { name: 'Login & Security', path: '/settings/security', icon: Shield, keywords: 'session, history, 2fa, authentication' },
  { name: 'Data Management', path: '/settings/data', icon: Database, keywords: 'export, download, cookies, data' },
  { name: 'Accessibility', path: '/settings/accessibility', icon: Accessibility, keywords: 'vision, motion, screen reader, font size' },
  { name: 'Language & Region', path: '/settings/language', icon: Globe, keywords: 'translate, local, country' },
  { name: 'API & Integrations', path: '/settings/integrations', icon: Code, keywords: 'developer, api, keys, webhook' },
  { name: 'Verification', path: '/settings/verification', icon: BadgeCheck, keywords: 'verified, badge, pro' },
  { name: 'Referrals & Credits', path: '/settings/referrals', icon: Gift, keywords: 'invite, friends, credit, rewards' },
];

const SettingsLayout: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredNavItems = searchTerm.trim() === '' 
    ? [] 
    : settingsNavItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.keywords.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold">Account Settings</h1>
          <p className="text-gray-400 mt-2">Manage your profile, account, and preferences.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          <aside className="md:w-1/4">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search settings..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg"
              />
              {filteredNavItems.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg z-10 p-2 max-h-60 overflow-y-auto">
                  {filteredNavItems.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setSearchTerm('')}
                      className="flex items-center gap-3 p-2 hover:bg-purple-600/20 rounded-md"
                    >
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-col gap-2">
              {settingsNavItems.map(item => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                      isActive ? 'bg-purple-600 text-white' : 'hover:bg-gray-800'
                    }`
                  }
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </aside>
          <main className="flex-1">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 min-h-[500px]">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;