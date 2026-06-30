import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Calendar, Heart, BedDouble, Stethoscope, Megaphone } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1580615631392-aeb060d526e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Pelayanan Kesehatan Terpadu & Berstandar Internasional",
    subtitle: "RS Utama Demo — Pusat Rujukan Kesehatan Unggulan dengan Akreditasi KARS Paripurna & JCI",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "50+ Dokter Spesialis Berpengalaman Siap Melayani Anda",
    subtitle: "Dari Kardiologi, Bedah Toraks, Penyakit Dalam, Kebidanan, hingga Saraf — lengkap dalam satu atap",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Fasilitas Modern & Kamar Perawatan Kelas Dunia",
    subtitle: "Tersedia Kelas III, II, I, hingga VIP — dengan peralatan medis mutakhir dan lingkungan nyaman",
  },
];

const quickActions = [
  {
    icon: <Calendar size={26} className="text-white" />,
    label: "Buat Janji Dokter",
    href: "/dokter",
  },
  {
    icon: <Heart size={26} className="text-white" />,
    label: "Medical Checkup",
    href: "/layanan/medical-checkup",
  },
  {
    icon: <BedDouble size={26} className="text-white" />,
    label: "Ketersediaan Kamar",
    href: "/layanan/ketersediaan-kamar",
  },
  {
    icon: <Megaphone size={26} className="text-white" />,
    label: "Promo & Event",
    href: "/promosi",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      {/* Carousel */}
      <div className="relative w-full h-[420px] md:h-[580px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,99,112,0.82)] to-[rgba(0,0,0,0.15)]" />
            <div className="absolute inset-0 flex items-center px-8 md:px-20">
              <div className="max-w-2xl">
                <span className="inline-block bg-[#3b9ca5]/30 border border-[#3b9ca5]/60 text-[#ccfbf1] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  RS Utama Demo
                </span>
                <h1 className="text-white text-2xl md:text-4xl font-extrabold leading-tight mb-3">
                  {slide.title}
                </h1>
                <p className="text-white/85 text-base md:text-lg leading-relaxed mb-6">
                  {slide.subtitle}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    to="/layanan/medical-checkup"
                    className="inline-block bg-[#3b9ca5] hover:bg-white hover:text-[#006370] text-white font-bold px-6 py-3 rounded-xl transition-all"
                  >
                    Lihat Layanan Kami
                  </Link>
                  <Link
                    to="/informasi/alur-pendaftaran"
                    className="inline-block border-2 border-white/50 hover:border-white text-white font-bold px-6 py-3 rounded-xl transition-all"
                  >
                    Cara Daftar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Arrow buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${i === current ? "w-6 h-3 bg-[#3b9ca5]" : "w-3 h-3 bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8 -mt-12">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                to={action.href}
                className="flex items-center gap-3 bg-[#3b9ca5] hover:bg-[#006370] rounded-xl p-3 md:p-4 transition-colors group"
              >
                <div className="shrink-0">{action.icon}</div>
                <span className="text-white font-bold text-sm">{action.label}</span>
                <ChevronRight size={15} className="text-white ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
