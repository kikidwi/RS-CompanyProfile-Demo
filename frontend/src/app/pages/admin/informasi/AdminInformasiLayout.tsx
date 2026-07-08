import { Outlet, Link, useLocation } from "react-router";
import { Megaphone, GitBranch, AlertCircle } from "lucide-react";
import { useAuth } from "../../../../context/AuthContext";
import type { AdminModule } from "../../../../lib/permissions";

export default function AdminInformasiLayout() {
  const location = useLocation();
  const { checkAccess } = useAuth();

  const allTabs: { name: string; path: string; icon: any; module: AdminModule }[] = [
    { name: "Berita & Artikel", path: "/admin/informasi/berita", icon: Megaphone, module: 'informasi.berita' },
    { name: "Alur Pendaftaran", path: "/admin/informasi/alur", icon: GitBranch, module: 'informasi.alur' },
    { name: "Informasi Penting", path: "/admin/informasi/penting", icon: AlertCircle, module: 'informasi.penting' },
  ];

  const tabs = allTabs.filter(tab => checkAccess(tab.module));

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manajemen Informasi</h1>
        <p className="text-gray-600 mt-1">Kelola publikasi berita, panduan alur pendaftaran, dan informasi penting lainnya.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = location.pathname.startsWith(tab.path);
            const Icon = tab.icon;
            
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  isActive 
                    ? "border-[#006370] text-[#006370]" 
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {tab.name}
              </Link>
            );
          })}
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

