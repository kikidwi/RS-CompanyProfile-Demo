import { Users, FileText, Bed, Tag } from "lucide-react";
import { Link } from "react-router";

export default function Dashboard() {
  const stats = [
    { name: 'Total Dokter', value: '42', icon: Users, color: 'bg-blue-500', path: '/admin/dokter' },
    { name: 'Artikel Publikasi', value: '18', icon: FileText, color: 'bg-green-500', path: '/admin/informasi' },
    { name: 'Kamar Tersedia', value: '124', icon: Bed, color: 'bg-purple-500', path: '/admin/layanan' },
    { name: 'Promo Aktif', value: '3', icon: Tag, color: 'bg-orange-500', path: '/admin/promosi' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Selamat Datang di Admin Panel</h1>
        <p className="text-gray-600 mt-1">Kelola konten website Rumah Sakit Utama dengan mudah melalui dashboard ini.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.name} 
              to={item.path}
              className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 rounded-md p-3 ${item.color}`}>
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd>
                        <div className="text-2xl font-semibold text-gray-900">
                          {item.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
                <div className="text-sm text-primary-600 font-medium hover:text-primary-800">
                  Lihat selengkapnya
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      
      {/* Empty State placeholder for recent activities */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Aktivitas Terakhir</h3>
        </div>
        <div className="p-6 text-center text-gray-500 py-12">
          Belum ada data yang ditampilkan pada modul ini.
        </div>
      </div>
    </div>
  );
}
