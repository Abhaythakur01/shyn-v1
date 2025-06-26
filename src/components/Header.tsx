import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: 'Blogs', path: '/blogs' },
    { name: 'Who Are You?', path: '/who-are-you' },
    { name: 'SHYN with Us', path: '/membership' },
    { name: 'SHYN with Experts', path: '/experts' },
  ];

  if (user) {
    navItems.push({ name: 'Portfolio', path: '/portfolio' });
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        {/* The nav-wrapper class is added here to enable the glowing border style */}
        <nav 
          className={`
            nav-wrapper 
            mt-4 max-w-7xl
            bg-black/15 backdrop-blur-xl
            px-8 py-5
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
            marginLeft: '2rem',
            marginRight: '2rem',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            // The border style is removed from here and will be handled by CSS
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo - Left Section */}
            <div className="flex items-center" style={{ paddingLeft: '24px' }}>
              <Link 
                to="/" 
                className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 ease-in-out"
                style={{ 
                  fontSize: '22px', 
                  fontWeight: '700',
                  borderRadius: '20px',
                  padding: '10px 16px'
                }}
              >
                SHYN
              </Link>
            </div>

            {/* Navigation Items - Center Section */}
            <div className="hidden lg:flex items-center" style={{ gap: '36px' }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      text-white hover:opacity-90 hover:bg-white/10 transition-all duration-300 ease-in-out
                      ${isActive 
                        ? 'font-bold text-purple-300 bg-purple-500/20 shadow-lg' 
                        : 'font-medium hover:text-purple-200'
                      }
                    `}
                    style={{ 
                      fontSize: '16px', 
                      fontWeight: isActive ? '700' : '500',
                      padding: '12px 20px',
                      borderRadius: '25px',
                      borderBottom: isActive ? '2px solid #a855f7' : 'none',
                      backdropFilter: isActive ? 'blur(10px)' : 'none'
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Authentication - Right Section */}
            <div className="hidden lg:flex items-center" style={{ gap: '20px' }}>
              {user ? (
                <div className="flex items-center" style={{ gap: '20px' }}>
                  <span 
                    className="text-sm font-medium text-white bg-white/10 transition-all duration-300 ease-in-out backdrop-blur-sm"
                    style={{
                      padding: '10px 16px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    Welcome, {user.email?.split('@')[0]}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 text-red-300 hover:text-red-200 hover:bg-red-500/20 transition-all duration-300 ease-in-out font-medium backdrop-blur-sm"
                    style={{ 
                      fontSize: '14px', 
                      fontWeight: '500',
                      padding: '10px 16px',
                      borderRadius: '20px',
                      border: '1px solid rgba(239, 68, 68, 0.2)'
                    }}
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="text-white hover:text-purple-200 hover:bg-white/10 transition-all duration-300 ease-in-out font-medium backdrop-blur-sm"
                    style={{ 
                      fontSize: '16px', 
                      fontWeight: '500',
                      padding: '12px 20px',
                      borderRadius: '25px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 hover:from-purple-500 hover:to-pink-500 hover:shadow-2xl transition-all duration-300 ease-in-out font-semibold backdrop-blur-sm"
                    style={{ 
                      padding: '14px 28px',
                      fontSize: '15px',
                      fontWeight: '600',
                      borderRadius: '25px',
                      boxShadow: '0 4px 15px rgba(147, 51, 234, 0.4)'
                    }}
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
                className="p-3 text-white hover:opacity-80 hover:bg-white/10 transition-all duration-300 ease-in-out"
                style={{ borderRadius: '20px' }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div 
              className="lg:hidden mt-6 pt-6 border-t border-white/20 bg-black/30 backdrop-blur-xl transition-all duration-300 ease-in-out"
              style={{
                borderRadius: '25px',
                margin: '24px -32px -20px -32px',
                padding: '20px 32px',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)'
              }}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        text-white hover:opacity-90 hover:bg-white/10 transition-all duration-300 ease-in-out
                        ${isActive 
                          ? 'font-bold text-purple-300 bg-purple-500/20' 
                          : 'font-medium'
                        }
                      `}
                      style={{ 
                        fontSize: '16px', 
                        fontWeight: isActive ? '700' : '500',
                        padding: '14px 20px',
                        borderRadius: '20px'
                      }}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
                <div 
                  className="pt-4 border-t border-white/20 flex flex-col space-y-4"
                  style={{ marginTop: '20px', paddingTop: '20px' }}
                >
                  {user ? (
                    <button
                      onClick={handleSignOut}
                      className="flex items-center space-x-2 text-red-300 hover:text-red-200 hover:bg-red-500/20 transition-all duration-300 ease-in-out font-medium"
                      style={{ 
                        fontSize: '14px', 
                        fontWeight: '500',
                        padding: '14px 20px',
                        borderRadius: '20px'
                      }}
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => { handleAuthClick('login'); setIsMobileMenuOpen(false); }}
                        className="text-white hover:opacity-90 hover:bg-white/10 transition-all duration-300 ease-in-out font-medium text-left"
                        style={{ fontSize: '16px', fontWeight: '500', padding: '14px 20px', borderRadius: '20px' }}
                      >
                        Login
                      </button>
                      <button
                        onClick={() => { handleAuthClick('signup'); setIsMobileMenuOpen(false); }}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 hover:from-purple-500 hover:to-pink-500 hover:shadow-xl transition-all duration-300 ease-in-out font-semibold text-center"
                        style={{ padding: '14px 28px', fontSize: '15px', fontWeight: '600', borderRadius: '20px' }}
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
