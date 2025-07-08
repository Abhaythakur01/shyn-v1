import React, { useState, useEffect } from 'react';
import { X, Eye, EyeOff, Smartphone, Chrome } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onModeChange: (mode: 'login' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onModeChange }) => {
  const [authMethod, setAuthMethod] = useState<'email' | 'mobile'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  // --- ADDITION: State for the countdown timer ---
  const [countdown, setCountdown] = useState(60);

  const { signIn, signUp, signInWithGoogle, signInWithOtp, verifyOtp } = useAuth();

  // --- ADDITION: useEffect to handle the countdown ---
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (otpSent && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      if (timer) clearInterval(timer);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [otpSent, countdown]);

  const handleClose = () => {
    setError('');
    setOtpSent(false);
    setPhone('');
    setOtp('');
    setCountdown(60); // Reset timer on close
    onClose();
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signInWithGoogle();
    setLoading(false);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { error } = mode === 'login' ? await signIn(email, password) : await signUp(email, password);
      if (error) throw error;
      handleClose();
    } catch (err: any) {
      setError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };
  
  const sendOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const { error } = await signInWithOtp(phone);
      if (error) throw error;
      setOtpSent(true);
      setCountdown(60); // Start timer
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP.');
    } finally {
      setLoading(false);
    }
  }

  const handleMobileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpSent) {
      sendOtp();
    } else {
      setLoading(true);
      setError('');
      try {
        const { error } = await verifyOtp(phone, otp);
        if (error) throw error;
        handleClose();
      } catch (err: any) {
        setError(err.message || 'Invalid OTP.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleResendOtp = () => {
    if (countdown > 0) return;
    setOtp(''); // Clear previous OTP input
    sendOtp();
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
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white">{mode === 'login' ? 'Welcome Back' : 'Join SHYN'}</h2>
                <p className="text-gray-400 mt-2">{mode === 'login' ? 'Sign in to continue your journey.' : 'Start your creative transformation.'}</p>
              </div>

              <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-2 py-3 mb-6 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
                <Chrome size={18} /> Continue with Google
              </button>

              <div className="flex items-center my-4">
                <hr className="w-full border-gray-700" />
                <span className="px-4 text-gray-500 text-sm">OR</span>
                <hr className="w-full border-gray-700" />
              </div>

              <div className="flex w-full bg-gray-800/60 rounded-lg p-1 mb-6">
                <button
                  onClick={() => setAuthMethod('email')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${authMethod === 'email' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-white/5'}`}
                >
                  Email
                </button>
                <button
                  onClick={() => setAuthMethod('mobile')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${authMethod === 'mobile' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-white/5'}`}
                >
                  Mobile
                </button>
              </div>

              {authMethod === 'email' ? (
                <form onSubmit={handleEmailSubmit} className="space-y-6">
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
              ) : (
                <form onSubmit={handleMobileSubmit} className="space-y-4">
                  {!otpSent ? (
                    <div className="relative">
                      <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-white outline-none focus:border-purple-500 transition-colors" placeholder=" " />
                      <label htmlFor="phone" className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-purple-400">Mobile Number</label>
                    </div>
                  ) : (
                    <div className="relative">
                      <input id="otp" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required className="peer w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-white outline-none focus:border-purple-500 transition-colors" placeholder=" " />
                      <label htmlFor="otp" className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-purple-400">Enter OTP</label>
                    </div>
                  )}
                  {/* --- ADDITION: Timer and Resend button UI --- */}
                  {otpSent && (
                    <div className="text-center text-sm">
                        {countdown > 0 ? (
                            <p className="text-gray-400">Resend OTP in {countdown}s</p>
                        ) : (
                            <button
                                type="button"
                                onClick={handleResendOtp}
                                className="text-purple-400 font-semibold hover:text-purple-300 disabled:text-gray-500"
                                disabled={loading}
                            >
                                Resend OTP
                            </button>
                        )}
                    </div>
                  )}
                  <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all disabled:opacity-50">{loading ? 'Working...' : !otpSent ? 'Send OTP' : 'Verify & Sign In'}</button>
                </form>
              )}

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
