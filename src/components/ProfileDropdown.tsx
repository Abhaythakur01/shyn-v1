import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  User,
  Settings,
  Bell,
  BarChart2,
  Calendar,
  Briefcase,
  FileText,
  Target,
  HelpCircle,
  Shield,
  LogOut,
} from 'lucide-react';

// Helper function to get user initials
const getInitials = (name?: string, email?: string): string => {
  if (name) {
    const nameParts = name.split(' ');
    if (nameParts.length > 1 && nameParts[0] && nameParts[nameParts.length - 1]) {
      return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  if (email) {
    return email.substring(0, 2).toUpperCase();
  }
  return '??';
};

const ProfileDropdown: React.FC = () => {
  const { user, signOut, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on 'Escape' key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSignOut = async () => {
    setIsOpen(false);
    await signOut();
  };

  type MenuItem = {
    icon: React.ComponentType<any>;
    label: string;
    href: string;
    badge?: number;
  };

  const menuItems: {
    primary: MenuItem[];
    enhanced: MenuItem[];
    support: MenuItem[];
  } = {
    primary: [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
      { icon: User, label: 'Your Profile', href: '/profile' },
      { icon: Settings, label: 'Settings', href: '/settings' },
      { icon: Bell, label: 'Notifications', href: '/notifications', badge: 3 },
      { icon: BarChart2, label: 'SHYN Analytics', href: '/analytics' },
      { icon: Calendar, label: 'Upcoming Events', href: '/events' },
    ],
    enhanced: [
      { icon: Briefcase, label: 'Workspace', href: '/workspace' },
      { icon: FileText, label: 'Reports', href: '/reports' },
      { icon: Target, label: 'Goals & Achievements', href: '/goals' },
    ],
    support: [
      { icon: HelpCircle, label: 'Support & Feedback', href: '/support' },
      { icon: Shield, label: 'Privacy & Security', href: '/privacy' },
    ],
  };

  if (loading) {
    return <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse"></div>;
  }

  if (!user) {
    return null;
  }

  const userInitials = getInitials(user.user_metadata?.full_name, user.email);
  const userFullName = user.user_metadata?.full_name || 'Artist';
  const userEmail = user.email || 'No email provided';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center justify-center w-10 h-10 bg-gray-800 border-2 border-gray-700 rounded-full text-purple-300 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 transition-all duration-200 hover:border-purple-500"
      >
        {user.user_metadata?.avatar_url ? (
          <img src={user.user_metadata.avatar_url} alt="User Avatar" className="w-full h-full rounded-full object-cover" />
        ) : (
          <span>{userInitials}</span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-80 bg-gray-800/90 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl z-50 overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
          >
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-700 border-2 border-gray-600 rounded-full text-purple-300 font-bold">
                    {user.user_metadata?.avatar_url ? (
                      <img src={user.user_metadata.avatar_url} alt="User Avatar" className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <span>{userInitials}</span>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-white truncate">{userFullName}</p>
                  <p className="text-sm text-gray-400 truncate">{userEmail}</p>
                </div>
              </div>
            </div>

            <div className="py-2 max-h-[calc(100vh-200px)] overflow-y-auto">
              {Object.entries(menuItems).map(([key, items]) => (
                <div key={key} className="px-2 py-2">
                  {items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-2.5 text-sm text-gray-300 rounded-lg hover:bg-purple-500/10 hover:text-white transition-all duration-200 group"
                      role="menuitem"
                    >
                      <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-purple-400 transition-colors duration-200" />
                      <span className="flex-grow">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto bg-purple-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ))}
              
              <div className="px-2 pt-2 mt-2 border-t border-gray-700">
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center px-4 py-2.5 text-sm text-gray-300 rounded-lg hover:bg-red-500/10 hover:text-white transition-all duration-200 group"
                  role="menuitem"
                >
                  <LogOut className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-400 transition-colors duration-200" />
                  Sign Out
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
