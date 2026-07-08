import { createContext, useContext, useEffect, useState } from 'react';
import api from '../lib/api';
import { canAccess, type AdminModule } from '../lib/permissions';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  currentUser: User | null;
  userRole: string | null;
  loading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  checkAccess: (module: AdminModule) => boolean;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  userRole: null,
  loading: true,
  login: () => {},
  logout: () => {},
  checkAccess: () => false,
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
          setUserRole(response.data.role || 'admin');
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
    setUserRole(user.role || 'admin');
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setCurrentUser(null);
    setUserRole(null);
  };

  const checkAccess = (module: AdminModule): boolean => {
    return canAccess(userRole, module);
  };

  const value = {
    currentUser,
    userRole,
    loading,
    login,
    logout,
    checkAccess,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

