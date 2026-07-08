import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { currentUser, userRole, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!currentUser) {
    // Redirect to login but save the attempted url
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // Check role-based access
  if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
}

