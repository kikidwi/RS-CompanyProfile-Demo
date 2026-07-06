import { Users, FileText, Bed, Tag, Plus, Edit2, Trash2, Settings, Clock, Activity as ActivityIcon, ArrowRight } from "lucide-react";
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
  const [statsData, setStatsData] = useState({
    doctors: 0,
    articles: 0,
    rooms: 0,
    promos: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [actRes, docRes, artRes, roomRes, promoRes] = await Promise.all([
          api.get('/activity-logs'),
          api.get('/doctors'),
          api.get('/articles'),
          api.get('/room-availabilities'),
          api.get('/promotions')
        ]);
        
        setActivities(actRes.data.slice(0, 10));
        setStatsData({
          doctors: docRes.data.length || 0,
          articles: artRes.data.length || 0,
          rooms: roomRes.data.reduce((acc: number, curr: any) => acc + (curr.available || 0), 0) || roomRes.data.length || 0,
          promos: promoRes.data.length || 0,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
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
      case 'CREATE': return <span className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded font-bold">Ditambah</span>;
      case 'UPDATE': return <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded font-bold">Diubah</span>;
      case 'DELETE': return <span className="bg-red-100 text-red-800 text-xs px-2.5 py-1 rounded font-bold">Dihapus</span>;
      case 'SYSTEM': return <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded font-bold">Sistem</span>;
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
    { name: 'Total Dokter', value: statsData.doctors, icon: Users, bg: 'bg-[#e0f2fe]', text: 'text-[#0284c7]', path: '/admin/dokter' },
    { name: 'Artikel Publikasi', value: statsData.articles, icon: FileText, bg: 'bg-[#dcfce7]', text: 'text-[#16a34a]', path: '/admin/informasi' },
    { name: 'Kamar Tersedia', value: statsData.rooms, icon: Bed, bg: 'bg-[#f3e8ff]', text: 'text-[#9333ea]', path: '/admin/ketersediaan' },
    { name: 'Promo Aktif', value: statsData.promos, icon: Tag, bg: 'bg-[#ffedd5]', text: 'text-[#ea580c]', path: '/admin/promosi' },
  ];

  return (
    <div className="space-y-8" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── Welcome Banner ── */}
      <div className="relative bg-[#006370] rounded-2xl p-8 overflow-hidden shadow-lg border border-[#00515b]">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="relative z-10 flex items-center gap-5">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-sm">
            <ActivityIcon className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Dashboard Admin</h1>
            <p className="text-[#ccfbf1] mt-1 text-sm font-medium opacity-90">
              Kelola seluruh konten website Rumah Sakit Utama Demo dengan cepat dan mudah.
            </p>
          </div>
        </div>
      </div>

      {/* ── Statistics Grid ── */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.name} 
              to={item.path}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-xl rounded-2xl border border-gray-100 transition-all hover:-translate-y-1 relative"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}>
                    <Icon className={`h-6 w-6 ${item.text}`} aria-hidden="true" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#3b9ca5] group-hover:text-white text-gray-400 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-1">
                    {loading ? "..." : item.value}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    {item.name}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent group-hover:from-[#006370] group-hover:to-[#3b9ca5] transition-all"></div>
            </Link>
          );
        })}
      </div>
      
      {/* ── Recent Activities ── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-50 flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-gray-900">Aktivitas Terakhir</h3>
          <span className="text-xs font-semibold text-[#006370] bg-[#e6f0f1] px-3 py-1 rounded-full">10 Terbaru</span>
        </div>
        
        {loading ? (
          <div className="p-10 text-center text-gray-400 font-medium">Memuat aktivitas...</div>
        ) : activities.length === 0 ? (
          <div className="p-10 text-center text-gray-400 font-medium">
            Belum ada data aktivitas yang direkam.
          </div>
        ) : (
          <ul className="divide-y divide-gray-50">
            {activities.map((activity) => (
              <li key={activity.id} className="p-6 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl shadow-sm border ${
                    activity.action === 'CREATE' ? 'bg-green-50 border-green-100' : 
                    activity.action === 'UPDATE' ? 'bg-blue-50 border-blue-100' : 
                    activity.action === 'DELETE' ? 'bg-red-50 border-red-100' : 'bg-gray-50 border-gray-100'
                  }`}>
                    {getActionIcon(activity.action)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-sm font-extrabold text-gray-900 truncate">
                        Modul {activity.moduleName}
                      </p>
                      <div className="text-xs font-medium text-gray-400 whitespace-nowrap bg-gray-100 px-2.5 py-0.5 rounded-full">
                        {formatTimeAgo(activity.timestamp)}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getActionBadge(activity.action)}
                      <p className="text-sm text-gray-500 font-medium truncate">
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
