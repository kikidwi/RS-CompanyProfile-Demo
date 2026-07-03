import { Link } from "react-router";
import { ArrowRight, ChevronRight, ClipboardList, BedDouble, FileCheck, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: <ClipboardList size={32} className="text-[#3b9ca5]" />,
    title: "Medical Checkup (MCU)",
    description: "Paket MCU Basic, Standard, hingga Premium dengan laboratorium terakreditasi. Cepat, akurat, dan terjangkau.",
    href: "/layanan/medical-checkup",
    badge: "Terpopuler",
  },
  {
    icon: <BedDouble size={32} className="text-[#3b9ca5]" />,
    title: "Kamar Perawatan",
    description: "Tersedia Kelas III, II, I, hingga VIP dengan fasilitas lengkap. Kamar bersih, nyaman, dan terawat.",
    href: "/layanan/kamar-perawatan",
    badge: null,
  },
  {
    icon: <LayoutGrid size={32} className="text-[#3b9ca5]" />,
    title: "Ketersediaan Kamar",
    description: "Pantau ketersediaan kamar rawat inap secara real-time. Cari per ruangan atau filter berdasarkan kelas.",
    href: "/layanan/ketersediaan-kamar",
    badge: "Live",
  },
  {
    icon: <FileCheck size={32} className="text-[#3b9ca5]" />,
    title: "Maklumat Pelayanan",
    description: "Standar keselamatan pasien, waktu tunggu, hak & kewajiban pasien, serta mutu layanan kami secara transparan.",
    href: "/layanan/maklumat-pelayanan",
    badge: null,
  },
];

export function Services() {
  return (
    <section id="layanan" className="py-16 bg-white" style={{ fontFamily: "'Karla', sans-serif" }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#3b9ca5] font-semibold text-sm mb-1 uppercase tracking-wider">Layanan Kami</p>
            <h2 className="text-[#006370] text-2xl md:text-3xl font-bold">Layanan Unggulan</h2>
          </div>
          <Link
            to="/layanan/medical-checkup"
            className="hidden md:flex items-center gap-2 text-[#3b9ca5] font-semibold text-sm hover:gap-3 transition-all"
          >
            Lihat semua layanan <ArrowRight size={16} />
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="relative border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#3b9ca5]/40 transition-all group cursor-pointer flex flex-col"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#3b9ca5] text-white">
                  {service.badge}
                </span>
              )}
              <div className="w-14 h-14 bg-[rgba(59,156,165,0.1)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[rgba(59,156,165,0.18)] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-[#161616] font-bold text-base mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
              <div className="flex items-center gap-1 mt-4 text-[#3b9ca5] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Selengkapnya <ChevronRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Link
            to="/layanan/medical-checkup"
            className="flex items-center gap-2 text-[#3b9ca5] font-semibold text-sm border border-[#3b9ca5] rounded-xl px-5 py-2 hover:bg-[#3b9ca5] hover:text-white transition-colors"
          >
            Lihat semua layanan <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
