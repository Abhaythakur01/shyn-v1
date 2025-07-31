import React, { useState } from 'react';
import { X, EyeOff } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onModeChange: (mode: 'login' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onModeChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signIn, signUp } = useAuth();

  const handleClose = () => {
    setError('');
    onClose();
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const result = mode === 'login' 
      ? await signIn(email, password) 
      : await signUp(email, password, fullName);

    if (result.error) {
      setError(result.error.message || 'An error occurred.');
    } else {
      handleClose();
    }
    
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-md rounded-2xl bg-gray-900/50 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-purple-500/10"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
              <X size={20} />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white">{mode === 'login' ? 'Welcome Back' : 'Join SHYN'}</h2>
                <p className="text-gray-400 mt-2">{mode === 'login' ? 'Sign in to continue your journey.' : 'Start your creative transformation.'}</p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                {mode === 'signup' && (
                  <div className="relative">
                    <input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-white outline-none focus:border-purple-500 transition-colors" placeholder=" " />
                    <label htmlFor="fullName" className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-purple-400">Full Name</label>
                  </div>
                )}
                <div className="relative">
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-white outline-none focus:border-purple-500 transition-colors" placeholder=" " />
                  <label htmlFor="email" className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-purple-400">Email Address</label>
                </div>
                <div className="relative">
                  <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-white outline-none focus:border-purple-500 transition-colors" placeholder=" " />
                  <label htmlFor="password" className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-purple-400">Password</label>
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 text-gray-400 hover:text-gray-300"><EyeOff size={20} /></button>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all disabled:opacity-50">{loading ? 'Working...' : mode === 'login' ? 'Sign In' : 'Create Account'}</button>
              </form>

              {error && <div className="mt-4 text-center bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-2 rounded-lg text-sm">{error}</div>}

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                  <button onClick={() => onModeChange(mode === 'login' ? 'signup' : 'login')} className="text-purple-400 font-semibold hover:text-purple-300">
                    {mode === 'login' ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;