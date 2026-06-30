import { Link, Outlet, useLocation } from "react-router";
import { ChevronRight } from "lucide-react";

export default function ProfileLayout() {
  const location = useLocation();
  
  const tabs = [
    { label: "Tentang Kami", path: "/profil/tentang-kami" },
    { label: "Visi & Misi", path: "/profil/visi-misi" },
    { label: "Jajaran Direksi", path: "/profil/jajaran-direksi" },
    { label: "Dewan Pengawas", path: "/profil/dewan-pengawas" },
    { label: "Struktur Organisasi", path: "/profil/struktur-organisasi" },
    { label: "Aksesibilitas RS", path: "/profil/map-aksesibilitas" },
  ];

  return (
    <div className="w-full bg-[#f8fafc] font-inter min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#f0fdfa] py-3 px-4 md:px-16 border-b border-[#ccfbf1]">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-sm">
          <Link to="/" className="text-[#0f766e] hover:text-[#0d9488] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#99f6e4]" />
          <span className="text-[#115e59] font-medium">Profil</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[250px] md:h-[350px] bg-[#006370] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1580615631392-aeb060d526e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzgyNDYwMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Hospital Building" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#006370]/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center px-4 md:px-16">
          <div className="max-w-screen-xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Rumah Sakit Utama Demo</h1>
            <p className="text-[#ccfbf1] text-lg max-w-xl">
              Pusat Pelayanan Kesehatan Terpadu dan Rujukan Nasional yang mengedepankan inovasi dan keselamatan pasien.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white sticky top-[104px] z-40 border-b border-gray-200 shadow-sm overflow-x-auto">
        <div className="max-w-screen-xl mx-auto px-4 md:px-16">
          <div className="flex w-max md:w-full">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-4 ${
                    isActive
                      ? "border-[#3b9ca5] text-[#006370] bg-[#f0f9fa]"
                      : "border-transparent text-gray-500 hover:text-[#3b9ca5] hover:bg-[#f0f9fa]"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 py-12">
        <Outlet />
      </div>
    </div>
  );
}
