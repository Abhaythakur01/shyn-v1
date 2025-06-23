import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Compass, 
  Users, 
  GraduationCap, 
  User, 
  LogIn, 
  UserPlus,
  LogOut,
  Palette
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { user, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const navItems = [
    { name: 'Blogs', icon: BookOpen, path: '/blogs' },
    { name: 'Who Are You?', icon: Compass, path: '/who-are-you' },
    { name: 'SHYN with Us', icon: Users, path: '/membership' },
    { name: 'SHYN with Experts', icon: GraduationCap, path: '/experts' },
  ];

  // Add Portfolio for logged-in users
  if (user) {
    navItems.push({ name: 'Portfolio', icon: Palette, path: '/portfolio' });
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              SHYN
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100 ${
                      isActive 
                        ? 'text-purple-600 bg-purple-50' 
                        : isScrolled 
                          ? 'text-gray-700 hover:text-purple-600' 
                          : 'text-white hover:text-purple-200'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    Welcome, {user.email?.split('@')[0]}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => handleAuthClick('login')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isScrolled
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <LogIn size={16} />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <UserPlus size={16} />
                    <span>Sign Up</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Header;