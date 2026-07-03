import { Outlet, Link, useLocation } from "react-router";
import { Activity, BedDouble, FileText, LayoutDashboard } from "lucide-react";

export default function LayananLayout() {
  const location = useLocation();

  const tabs = [
    { name: "Medical Check-Up", path: "/admin/layanan", icon: Activity },
    { name: "Kamar Perawatan", path: "/admin/layanan/kamar", icon: BedDouble },
    { name: "Maklumat Pelayanan", path: "/admin/layanan/maklumat", icon: FileText },
    { name: "Ketersediaan Kamar", path: "/admin/layanan/ketersediaan", icon: LayoutDashboard },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Manajemen Layanan</h1>
        <p className="text-gray-600 mt-1">Kelola data layanan unggulan dan fasilitas rumah sakit.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-200 overflow-x-auto">
          <nav className="-mb-px flex space-x-6 px-6" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path || (location.pathname === "/admin/layanan/" && tab.path === "/admin/layanan");
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
