import { Outlet, Link, useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { canAccess, getRoleLabel, type AdminModule } from "../../lib/permissions";
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
  Menu,
  Activity,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

export default function AdminLayout() {
  const { currentUser, userRole, logout } = useAuth();
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

  const allNavItems: { name: string; path: string; icon: any; module: AdminModule }[] = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard, module: 'dashboard' },
    { name: "Profil", path: "/admin/profil", icon: Users, module: 'profil' },
    { name: "Dokter", path: "/admin/dokter", icon: Stethoscope, module: 'dokter' },
    { name: "Layanan", path: "/admin/layanan", icon: Bed, module: 'layanan' },
    { name: "Promosi", path: "/admin/promosi", icon: Tag, module: 'promosi' },
    { name: "Informasi", path: "/admin/informasi", icon: FileText, module: 'informasi' },
    { name: "Pengaturan", path: "/admin/pengaturan", icon: Settings, module: 'pengaturan' },
  ];

  const navItems = allNavItems.filter(item => canAccess(userRole, item.module));

  return (
    <div className="flex h-screen bg-gray-50 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── Sidebar Desktop ── */}
      <aside className="bg-[#006370] text-white w-72 flex-shrink-0 hidden md:flex flex-col relative overflow-hidden shadow-xl z-20">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-40 h-40 bg-white/10 rounded-full blur-3xl mix-blend-overlay pointer-events-none"></div>
        
        {/* Header */}
        <div className="h-20 flex items-center px-8 border-b border-[#00515b] relative z-10">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mr-3 shadow-inner">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <span className="font-extrabold text-xl tracking-tight">RS Utama Demo</span>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 relative z-10 px-4 custom-scrollbar">
          <p className="px-4 text-xs font-semibold text-[#66a3a9] uppercase tracking-wider mb-4">Menu Utama</p>
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? "bg-white/10 text-white shadow-inner backdrop-blur-sm" 
                      : "text-[#b2d3d6] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                  {item.name}
                  {isActive && <div className="ml-auto w-1.5 h-5 bg-white rounded-full"></div>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer / Logout */}
        <div className="p-4 border-t border-[#00515b] relative z-10">
          <button
            onClick={handleLogout}
            className="group flex items-center w-full px-4 py-3 text-sm font-medium text-red-300 rounded-xl hover:bg-red-500/10 hover:text-red-200 transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Keluar dari Sistem
          </button>
        </div>
      </aside>

      {/* ── Sidebar Mobile (Overlay) ── */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div 
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <aside className="relative flex-1 flex flex-col max-w-xs w-full bg-[#006370] text-white shadow-2xl">
            <div className="h-20 flex items-center px-6 border-b border-[#00515b]">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mr-3">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight">RS Utama Demo</span>
            </div>
            <div className="flex-1 overflow-y-auto py-6 px-3">
              <nav className="space-y-1.5">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive 
                          ? "bg-white/10 text-white" 
                          : "text-[#b2d3d6] hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="p-4 border-t border-[#00515b]">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-300 rounded-xl hover:bg-red-500/10 hover:text-red-200 transition-colors"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Keluar
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* ── Main Content Area ── */}
      <div className="flex-1 flex flex-col overflow-hidden w-full relative">
        {/* Topbar */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex-shrink-0 flex items-center justify-between px-6 md:px-10 z-10 sticky top-0">
          <div className="flex items-center">
            <button
              className="md:hidden text-gray-500 hover:text-[#006370] p-2 bg-gray-50 rounded-xl mr-4 transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden sm:block">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                {navItems.find(item => location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path)))?.name || "Dashboard"}
              </h2>
              <p className="text-xs font-semibold text-gray-400 mt-0.5">Sistem Manajemen Konten</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 py-2 px-3 rounded-2xl transition-colors border border-transparent hover:border-gray-100">
            <div className="hidden md:block text-right">
              <div className="text-sm font-bold text-gray-700">
                {currentUser?.email?.split('@')[0]}
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {getRoleLabel(userRole)}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-[#006370] flex items-center justify-center text-white font-extrabold shadow-md">
                {currentUser?.email?.[0].toUpperCase() || "A"}
              </div>
              <ChevronDown size={14} className="text-gray-400 hidden md:block" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#f8fafc]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
