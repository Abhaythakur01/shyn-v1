import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, Menu, X, Home, Compass, User, Zap } from 'lucide-react'; // Added more icons for menu
import { useAuth } from '../hooks/useAuth';
import AuthModal from './AuthModal';
import { useDeviceDetection } from '../utils/deviceDetection'; // Import device detection hook
import { AnimatePresence, motion } from 'framer-motion';

const Header: React.FC = () => {
    const { isMobile } = useDeviceDetection();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, signOut } = useAuth();
    const location = useLocation();

    // Scroll detection for desktop header
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        if (!isMobile) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [isMobile]);

    const handleAuthClick = (mode: 'login' | 'signup') => {
        setAuthMode(mode);
        setShowAuthModal(true);
        setIsMobileMenuOpen(false); // Close menu when auth modal opens
    };

    const handleSignOut = async () => {
        await signOut();
        setIsMobileMenuOpen(false); // Close menu on sign out
    };

    const navItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Who Are You?', path: '/who-are-you', icon: Compass },
        { name: 'Experts', path: '/experts', icon: User },
        { name: 'Membership', path: '/membership', icon: Zap },
    ];
    
    if (user) {
        navItems.push({ name: 'Portfolio', path: '/portfolio', icon: User });
    }

    // ====================================================================
    // Mobile Header: Floating Button + Full-Screen Menu
    // ====================================================================
    if (isMobile) {
        return (
            <>
                {/* --- Floating Menu Button --- */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="fixed top-4 right-4 z-[100] w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full shadow-lg flex items-center justify-center"
                    aria-label="Open menu"
                >
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={isMobileMenuOpen ? 'x' : 'menu'}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </motion.div>
                    </AnimatePresence>
                </button>

                {/* --- Full-Screen Menu Overlay --- */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[99] bg-black/70 backdrop-blur-lg"
                        >
                            <motion.div 
                                initial={{ y: '-100%' }}
                                animate={{ y: '0%' }}
                                exit={{ y: '-100%' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="w-full h-full flex flex-col justify-between p-8 pt-24"
                            >
                                {/* --- Logo --- */}
                                <div className="absolute top-6 left-1/2 -translate-x-1/2">
                                    <Link 
                                        to="/" 
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                                    >
                                        SHYN
                                    </Link>
                                </div>
                                
                                {/* --- Navigation Links --- */}
                                <nav className="flex-grow flex flex-col items-center justify-center space-y-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-3"
                                        >
                                            <item.icon size={24} className="text-purple-400" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>

                                {/* --- Auth/User actions --- */}
                                <div className="flex flex-col space-y-4">
                                    {user ? (
                                        <button onClick={handleSignOut} className="flex items-center justify-center gap-2 text-red-400 font-semibold p-3 rounded-xl bg-red-500/10">
                                            <LogOut size={20} /> Logout
                                        </button>
                                    ) : (
                                        <>
                                            <button onClick={() => handleAuthClick('login')} className="font-semibold p-3 rounded-xl bg-white/10 text-white">
                                                Login
                                            </button>
                                            <button onClick={() => handleAuthClick('signup')} className="font-semibold p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                                Get Started
                                            </button>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} mode={authMode} onModeChange={setAuthMode} />
            </>
        );
    }

    // ====================================================================
    // Original Desktop Header
    // ====================================================================
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
          <nav 
            className={`nav-wrapper mt-4 max-w-7xl w-full bg-black/15 backdrop-blur-xl px-8 py-5 transition-all duration-500 ease-in-out ${isScrolled ? 'shadow-2xl bg-black/25' : 'shadow-xl'}`}
            style={{ borderRadius: '40px', marginLeft: '1rem', marginRight: '1rem' }}
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SHYN
              </Link>
              <div className="hidden lg:flex items-center gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="hidden lg:flex items-center gap-4">
                {user ? (
                  <>
                    <span className="text-sm text-gray-300">Welcome, {user.email?.split('@')[0]}</span>
                    <button onClick={handleSignOut} className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300">
                      <LogOut size={16} /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleAuthClick('login')} className="text-sm text-gray-300 hover:text-white">Login</button>
                    <button onClick={() => handleAuthClick('signup')} className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full">
                      Get Started
                    </button>
                  </>
                )}
              </div>
              <div className="lg:hidden">
                {/* This part is now handled by the mobile-specific header */}
              </div>
            </div>
          </nav>
        </header>
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} mode={authMode} onModeChange={setAuthMode} />
      </>
    );
};

export default Header;