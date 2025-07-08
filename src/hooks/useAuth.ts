import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { data, error };
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  // --- ADDED: Google Sign-In Handler ---
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });
    if (error) console.error('Google Sign-In Error:', error);
    return { error };
  };

  // --- ADDED: Mobile OTP Sign-In Handlers ---
  const signInWithOtp = async (phone: string) => {
      // Note: For production, you would want a country code selector.
      // This example assumes an Indian number (+91).
      const { data, error } = await supabase.auth.signInWithOtp({
          phone: `+91${phone}`,
      });
      return { data, error };
  };

  const verifyOtp = async (phone: string, token: string) => {
      const { data, error } = await supabase.auth.verifyOtp({
          phone: `+91${phone}`,
          token,
          type: 'sms',
      });
      return { data, error };
  };


  return {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    // --- EXPORT NEW FUNCTIONS ---
    signInWithGoogle,
    signInWithOtp,
    verifyOtp,
  };
};
