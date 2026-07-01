import { Outlet, Link, useLocation } from "react-router";
import { FileText, Eye, Users, Shield } from "lucide-react";

export default function ProfilLayout() {
  const location = useLocation();

  const tabs = [
    { name: "Tentang Kami", path: "/admin/profil", icon: FileText },
    { name: "Visi & Misi", path: "/admin/profil/visi-misi", icon: Eye },
    { name: "Jajaran Direksi", path: "/admin/profil/direksi", icon: Users },
    { name: "Dewan Pengawas", path: "/admin/profil/dewan-pengawas", icon: Shield },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Manajemen Profil</h1>
        <p className="text-gray-600 mt-1">Kelola informasi profil rumah sakit yang ditampilkan di website.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-200 overflow-x-auto">
          <nav className="-mb-px flex space-x-6 px-6" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.name}
                  to={tab.path}
                  className={`
                    group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                    ${isActive
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  <Icon
                    className={`
                      -ml-0.5 mr-2 h-5 w-5
                      ${isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"}
                    `}
                  />
                  {tab.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
