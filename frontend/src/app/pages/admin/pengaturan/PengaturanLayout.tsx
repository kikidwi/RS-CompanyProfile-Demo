import { Outlet, Link, useLocation } from "react-router";
import { useAuth } from "../../../../context/AuthContext";
import { Settings, Users } from "lucide-react";

export default function PengaturanLayout() {
  const { checkAccess } = useAuth();
  const location = useLocation();

  const tabs = [
    { name: "Umum", path: "/admin/pengaturan", icon: Settings },
  ];

  if (checkAccess('pengaturan.pengguna')) {
    tabs.push({ name: "Pengguna (Staf)", path: "/admin/pengaturan/pengguna", icon: Users });
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Pengaturan Sistem</h1>
        <p className="text-gray-600 mt-1">Kelola preferensi dan data dasar website.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.name}
                  to={tab.path}
                  className={`
                    group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm
                    ${isActive
                      ? "border-primary-500 text-primary-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  <Icon
                    className={`
                      -ml-0.5 mr-2 h-5 w-5
                      ${isActive ? "text-primary-500" : "text-gray-400 group-hover:text-gray-500"}
                    `}
                    aria-hidden="true"
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
