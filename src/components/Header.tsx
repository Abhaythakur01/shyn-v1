import React, { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import {
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './AuthModal';
import ProfileDropdown from './ProfileDropdown'; // Import the profile dropdown

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth(); // Added loading state
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
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Discover', path: '/who-are-you' },
    { name: 'Experts', path: '/experts' },
    { name: 'Membership', path: '/membership' },
    { name: 'Blog', path: '/blogs' },
  ];

  if (user) {
    navItems.push({ name: 'Portfolio', path: '/portfolio' });
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`
            nav-wrapper 
            mt-4 w-full max-w-7xl
            bg-black/15 backdrop-blur-xl
            px-4 sm:px-8 py-3 sm:py-4
            transition-all duration-500 ease-in-out 
            ${isScrolled
              ? 'shadow-2xl bg-black/25 backdrop-blur-2xl'
              : 'shadow-xl'
            }
          `}
          style={{
            borderRadius: '40px',
            boxShadow: isScrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              : '0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo - Left Section */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 ease-in-out"
                style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  padding: '10px 16px'
                }}
              >
                SHYN
              </Link>
            </div>

            {/* Navigation Items - Center Section */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                 <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Authentication - Right Section */}
            <div className="hidden lg:flex items-center" style={{ gap: '12px' }}>
              {loading ? (
                 <div className="w-24 h-10 bg-gray-700 rounded-full animate-pulse"></div>
              ) : user ? (
                <ProfileDropdown />
              ) : (
                <>
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="text-white hover:text-purple-200 hover:bg-white/10 transition-all duration-300 ease-in-out font-medium backdrop-blur-sm px-5 py-2.5 rounded-full border border-transparent hover:border-white/20"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 hover:from-purple-500 hover:to-pink-500 hover:shadow-2xl transition-all duration-300 ease-in-out font-semibold backdrop-blur-sm px-6 py-2.5 rounded-full shadow-lg"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 text-white hover:opacity-80 hover:bg-white/10 transition-all duration-300 ease-in-out rounded-full"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="lg:hidden mt-4 pt-4 border-t border-white/20"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => `
                      text-white text-left hover:bg-white/10 transition-all duration-300 ease-in-out p-4 rounded-xl
                      ${isActive ? 'font-bold bg-purple-500/20' : 'font-medium'}
                    `}
                  >
                    {item.name}
                  </NavLink>
                ))}

                <div className="pt-4 border-t border-white/20 flex flex-col space-y-3">
                  {loading ? (
                     <div className="w-full h-12 bg-gray-700 rounded-md animate-pulse"></div>
                  ) : user ? (
                    <div className="flex items-center justify-between p-2">
                       <div>
                         <p className="text-white font-semibold">{user.email?.split('@')[0]}</p>
                         <p className="text-xs text-gray-400">View your profile</p>
                       </div>
                       <ProfileDropdown />
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => handleAuthClick('login')}
                        className="text-white hover:bg-white/10 transition-all duration-300 ease-in-out font-medium text-left p-4 rounded-xl"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => handleAuthClick('signup')}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transition-all duration-300 ease-in-out font-semibold text-center p-4 rounded-xl"
                      >
                        Get Started
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

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
