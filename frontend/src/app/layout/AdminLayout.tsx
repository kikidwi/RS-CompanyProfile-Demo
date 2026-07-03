import { Outlet, Link, useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import api from "../../lib/api";
import { 
  LayoutDashboard, 
  Users, 
  Stethoscope, 
  Bed, 
  Tag, 
  FileText, 
  Settings, 
  LogOut, 
  Menu
} from "lucide-react";
import { useState } from "react";

export default function AdminLayout() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await api.post('/logout');
      logout();
      navigate("/admin/login");
    } catch (error) {
      console.error("Gagal logout:", error);
      // Fallback local logout
      logout();
      navigate("/admin/login");
    }
  };

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Profil", path: "/admin/profil", icon: Users },
    { name: "Dokter", path: "/admin/dokter", icon: Stethoscope },
    { name: "Layanan", path: "/admin/layanan", icon: Bed },
    { name: "Promosi", path: "/admin/promosi", icon: Tag },
    { name: "Informasi", path: "/admin/informasi", icon: FileText },
    { name: "Pengaturan", path: "/admin/pengaturan", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar untuk Desktop */}
      <aside className={`bg-primary-900 text-white w-64 flex-shrink-0 hidden md:flex flex-col`}>
        <div className="h-16 flex items-center px-6 font-bold text-xl border-b border-primary-800">
          Admin Panel RS
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-primary-800 text-white" 
                      : "text-primary-100 hover:bg-primary-800 hover:text-white"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="p-4 border-t border-primary-800">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-200 rounded-md hover:bg-primary-800 hover:text-red-100 transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Keluar
          </button>
        </div>
      </aside>

      {/* Sidebar Mobile (Overlay) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <aside className="relative flex-1 flex flex-col max-w-xs w-full bg-primary-900 text-white">
            <div className="h-16 flex items-center px-6 font-bold text-xl border-b border-primary-800">
              Admin Panel
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <nav className="space-y-1 px-3">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        isActive 
                          ? "bg-primary-800 text-white" 
                          : "text-primary-100 hover:bg-primary-800"
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="p-4 border-t border-primary-800">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-200 rounded-md hover:bg-primary-800"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Keluar
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white shadow-sm h-16 flex-shrink-0 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <button
              className="md:hidden text-gray-500 hover:text-gray-700 p-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h2 className="ml-4 md:ml-0 text-xl font-semibold text-gray-800 hidden sm:block">
              {navItems.find(item => location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path)))?.name || "Dashboard"}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium text-gray-700">
              {currentUser?.email}
            </div>
            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
              {currentUser?.email?.[0].toUpperCase() || "A"}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
