import { createContext, useContext, useEffect, useState } from 'react';
import api from '../lib/api';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  currentUser: User | null;
  userRole: string | null;
  loading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  userRole: null,
  loading: true,
  login: () => {},
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('adminToken');
      if (token) {
        try {
          const response = await api.get('/user');
          setCurrentUser(response.data);
          setUserRole('admin'); // Atur role default jika diperlukan
        } catch (error) {
          console.error("Error fetching user:", error);
          localStorage.removeItem('adminToken');
          setCurrentUser(null);
          setUserRole(null);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const login = (token: string, user: User) => {
    localStorage.setItem('adminToken', token);
    setCurrentUser(user);
    setUserRole('admin');
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setCurrentUser(null);
    setUserRole(null);
  };

  const value = {
    currentUser,
    userRole,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
