import { Users, FileText, Bed, Tag, Plus, Edit2, Trash2, Settings, Clock } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import api from "../../../lib/api";
import type { ActivityAction } from "../../../lib/activity";

interface Activity {
  id: string;
  action: ActivityAction;
  moduleName: string;
  detail: string;
  timestamp: any;
}

export default function Dashboard() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await api.get('/activity-logs');
        setActivities(response.data.slice(0, 10));
      } catch (err) {
        console.error(err);
      }
    };
    fetchActivities();
  }, []);

  const getActionIcon = (action: ActivityAction) => {
    switch(action) {
      case 'CREATE': return <Plus size={16} className="text-green-600" />;
      case 'UPDATE': return <Edit2 size={16} className="text-blue-600" />;
      case 'DELETE': return <Trash2 size={16} className="text-red-600" />;
      case 'SYSTEM': return <Settings size={16} className="text-gray-600" />;
      default: return <Clock size={16} className="text-gray-400" />;
    }
  };

  const getActionBadge = (action: ActivityAction) => {
    switch(action) {
      case 'CREATE': return <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded font-medium">Ditambah</span>;
      case 'UPDATE': return <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded font-medium">Diubah</span>;
      case 'DELETE': return <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded font-medium">Dihapus</span>;
      case 'SYSTEM': return <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded font-medium">Sistem</span>;
      default: return null;
    }
  };

  const formatTimeAgo = (timestamp: any) => {
    if (!timestamp) return "Baru saja";
    const date = new Date(timestamp);
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
    if (seconds < 60) return "Baru saja";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} menit yang lalu`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} jam yang lalu`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} hari yang lalu`;
    
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  };
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
      
      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Aktivitas Terakhir</h3>
        </div>
        
        {activities.length === 0 ? (
          <div className="p-6 text-center text-gray-500 py-12">
            Belum ada data aktivitas yang direkam.
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {activities.map((activity) => (
              <li key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full mt-1 ${
                    activity.action === 'CREATE' ? 'bg-green-50' : 
                    activity.action === 'UPDATE' ? 'bg-blue-50' : 
                    activity.action === 'DELETE' ? 'bg-red-50' : 'bg-gray-50'
                  }`}>
                    {getActionIcon(activity.action)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        Modul {activity.moduleName}
                      </p>
                      <div className="text-xs text-gray-500 whitespace-nowrap">
                        {formatTimeAgo(activity.timestamp)}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      {getActionBadge(activity.action)}
                      <p className="text-sm text-gray-600 truncate">
                        {activity.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
