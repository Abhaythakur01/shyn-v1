import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// A simple, self-contained User interface
interface User {
  id: string;
  email: string;
  full_name: string;
}

// Define the shape of our Auth context
interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error?: Error }>;
  signIn: (email: string, password: string) => Promise<{ error?: Error }>;
  signOut: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('shyn-token'));
  const [loading, setLoading] = useState(true);

  // --- NEW: Use the environment variable for the API base URL ---
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const checkUser = async () => {
      if (token) {
        try {
          // --- UPDATED ---
          const response = await fetch(`${API_URL}/api/auth/profile`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (response.ok) {
            const userData: User = await response.json();
            setUser(userData);
          } else {
            localStorage.removeItem('shyn-token');
            setToken(null);
            setUser(null);
          }
        } catch (error) {
          console.error("Failed to verify user token:", error);
          localStorage.removeItem('shyn-token');
          setToken(null);
          setUser(null);
        }
      }
      setLoading(false);
    };
    checkUser();
  }, [token, API_URL]);

  const signUp = async (email: string, password: string, fullName: string) => {
    setLoading(true);
    try {
      // --- UPDATED ---
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullName }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Registration failed');

      localStorage.setItem('shyn-token', data.token);
      setToken(data.token);
      setUser(data.user);
      return {};
    } catch (error: any) {
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      // --- UPDATED ---
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');

      localStorage.setItem('shyn-token', data.token);
      setToken(data.token);
      setUser(data.user);
      return {};
    } catch (error: any) {
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem('shyn-token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};