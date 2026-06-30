import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronRight,
  Calendar,
  Tag,
  Clock,
  ArrowRight,
  Sparkles,
  BadgePercent,
  Star,
  Share2,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
type Category = "Semua" | "Paket Kesehatan" | "Diskon" | "Layanan Baru" | "Event";

const categories: Category[] = [
  "Semua",
  "Paket Kesehatan",
  "Diskon",
  "Layanan Baru",
  "Event",
];

type Promo = {
  id: number;
  title: string;
  category: Category;
  badge: string;
  badgeColor: string;
  image: string;
  validUntil: string;
  discount?: string;
  originalPrice?: string;
  finalPrice?: string;
  desc: string;
  isHot?: boolean;
  isFeatured?: boolean;
};

const promos: Promo[] = [
  {
    id: 1,
    title: "Paket MCU Jantung Komprehensif",
    category: "Paket Kesehatan",
    badge: "Terpopuler",
    badgeColor: "#006370",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "31 Juli 2026",
    originalPrice: "Rp 2.500.000",
    finalPrice: "Rp 1.750.000",
    discount: "30%",
    desc: "Paket MCU jantung lengkap meliputi EKG, ekokardiografi, tes treadmill, laboratorium, dan konsultasi dokter spesialis jantung.",
    isHot: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "HeartFit Clinic – Rehabilitasi Kardiovaskular",
    category: "Layanan Baru",
    badge: "Baru",
    badgeColor: "#0d9488",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "Tersedia setiap hari",
    desc: "Program rehabilitasi jantung dan kebugaran kardiovaskular terpadu untuk pasien penyakit jantung dan masyarakat umum.",
  },
  {
    id: 3,
    title: "Diskon 25% USG Kandungan",
    category: "Diskon",
    badge: "Diskon",
    badgeColor: "#b45309",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "15 Agustus 2026",
    originalPrice: "Rp 400.000",
    finalPrice: "Rp 300.000",
    discount: "25%",
    desc: "Diskon spesial untuk pemeriksaan USG kandungan 2D dan 3D. Tersedia untuk pasien umum dan peserta asuransi tertentu.",
  },
  {
    id: 4,
    title: "Seminar Kesehatan Jantung Nasional 2026",
    category: "Event",
    badge: "Event",
    badgeColor: "#6d28d9",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "20 Juli 2026",
    desc: "Seminar nasional dengan pembicara dokter spesialis terkemuka. Gratis untuk masyarakat umum, tersedia sesi Q&A dan konsultasi mini.",
  },
  {
    id: 5,
    title: "Paket Persalinan Normal & Cesar",
    category: "Paket Kesehatan",
    badge: "Paket",
    badgeColor: "#be185d",
    image:
      "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "31 Desember 2026",
    originalPrice: "Rp 8.000.000",
    finalPrice: "Rp 6.500.000",
    discount: "19%",
    desc: "Paket persalinan all-in termasuk biaya dokter, kamar rawat inap 2 malam kelas I, laboratorium bayi baru lahir, dan konsultasi laktasi.",
  },
  {
    id: 6,
    title: "Layanan Genomik Kardiovaskular",
    category: "Layanan Baru",
    badge: "Inovatif",
    badgeColor: "#0369a1",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "Mulai tersedia Juli 2026",
    desc: "Pemeriksaan genetik untuk mendeteksi risiko penyakit jantung bawaan dan herediter menggunakan teknologi genomik terkini.",
  },
  {
    id: 7,
    title: "Promo Ramadan: Paket Cek Kesehatan Keluarga",
    category: "Diskon",
    badge: "Spesial",
    badgeColor: "#b45309",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "Sudah berakhir",
    originalPrice: "Rp 1.800.000",
    finalPrice: "Rp 1.200.000",
    discount: "33%",
    desc: "Paket pemeriksaan gula darah, kolesterol, asam urat, dan tensi untuk seluruh anggota keluarga (maks. 4 orang).",
    isHot: false,
  },
  {
    id: 8,
    title: "Workshop Sehat: Pengelolaan Diabetes",
    category: "Event",
    badge: "Workshop",
    badgeColor: "#6d28d9",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "5 Agustus 2026",
    desc: "Workshop interaktif bersama dokter spesialis penyakit dalam. Materi meliputi diet, olahraga, dan pemantauan gula darah mandiri.",
  },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function PromoCard({ promo }: { promo: Promo }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={promo.image}
          alt={promo.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className="text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow"
            style={{ backgroundColor: promo.badgeColor }}
          >
            {promo.badge}
          </span>
          {promo.isHot && (
            <span className="bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
              <Sparkles size={10} /> Hot
            </span>
          )}
        </div>
        {/* Discount bubble */}
        {promo.discount && (
          <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-red-500 text-white flex flex-col items-center justify-center shadow-lg">
            <span className="text-[10px] font-bold leading-tight">OFF</span>
            <span className="text-xs font-extrabold leading-tight">{promo.discount}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
          <Calendar size={12} />
          <span>Berlaku hingga {promo.validUntil}</span>
        </div>

        <h3 className="text-gray-900 font-bold text-[15px] leading-snug mb-2 group-hover:text-[#006370] transition-colors">
          {promo.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{promo.desc}</p>

        {/* Pricing */}
        {promo.finalPrice && (
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xl font-extrabold text-[#006370]">{promo.finalPrice}</span>
            {promo.originalPrice && (
              <span className="text-sm text-gray-400 line-through">{promo.originalPrice}</span>
            )}
          </div>
        )}

        <div className="flex gap-2 mt-auto">
          <button className="flex-1 py-2.5 bg-[#006370] hover:bg-[#3b9ca5] text-white text-sm font-bold rounded-xl transition-colors">
            Selengkapnya
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl text-gray-400 hover:text-[#3b9ca5] hover:border-[#3b9ca5] transition-colors">
            <Share2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Promosi() {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");

  const filtered =
    activeCategory === "Semua"
      ? promos
      : promos.filter((p) => p.category === activeCategory);

  const featured = promos.find((p) => p.isFeatured);

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen" style={{ fontFamily: "'Karla', sans-serif" }}>
      {/* ── Breadcrumb ── */}
      <div className="bg-[#f0fdfa] py-3 px-4 md:px-16 border-b border-[#ccfbf1]">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-sm">
          <Link to="/" className="text-[#0f766e] hover:text-[#0d9488] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-[#99f6e4]" />
          <span className="text-[#115e59] font-medium">Promosi</span>
        </div>
      </div>

      {/* ── Hero Banner ── */}
      <div className="relative w-full h-[260px] md:h-[380px] overflow-hidden bg-[#006370]">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Promosi"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#006370] via-[#006370]/80 to-[#3b9ca5]/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <Tag size={12} /> Penawaran Spesial
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
            Promo &amp; Penawaran<br className="hidden md:block" /> Menarik RS Kami
          </h1>
          <p className="text-[#ccfbf1] text-base md:text-lg max-w-xl">
            Dapatkan paket layanan kesehatan terbaik dengan harga spesial. Jangan lewatkan penawaran terbatas dari kami!
          </p>
        </div>
      </div>

      {/* ── Featured Promo Banner ── */}
      {featured && (
        <div className="max-w-screen-xl mx-auto px-4 md:px-16 -mt-12 relative z-10 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2 bg-white border border-gray-100">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                <Star size={11} /> Featured
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit"
                style={{ backgroundColor: "#006370", color: "#fff" }}
              >
                {featured.badge}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 leading-snug">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.desc}</p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-extrabold text-[#006370]">{featured.finalPrice}</span>
                <span className="text-base text-gray-400 line-through">{featured.originalPrice}</span>
                <span className="bg-red-100 text-red-600 text-sm font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <BadgePercent size={13} /> Hemat {featured.discount}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs mb-6">
                <Clock size={13} />
                Berlaku hingga {featured.validUntil}
              </div>
              <button className="bg-[#006370] hover:bg-[#3b9ca5] text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 w-fit transition-colors">
                Daftar Sekarang <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── All Promos Grid ── */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 pb-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-[#3b9ca5] font-semibold text-sm uppercase tracking-wider mb-1">
              Penawaran Terkini
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#006370]">
              Semua Promosi &amp; Event
            </h2>
          </div>
          <span className="text-gray-400 text-sm">{filtered.length} promo ditemukan</span>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? "bg-[#006370] text-white border-[#006370] shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#3b9ca5] hover:text-[#3b9ca5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((promo) => (
              <PromoCard key={promo.id} promo={promo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <Tag size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">Tidak ada promo dalam kategori ini.</p>
          </div>
        )}
      </div>

      {/* ── Newsletter CTA ── */}
      <div className="bg-gradient-to-r from-[#006370] to-[#3b9ca5] py-14 px-4 md:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">
              Jangan Lewatkan Promo Terbaru!
            </h3>
            <p className="text-[#ccfbf1] text-sm max-w-md">
              Daftarkan email Anda dan dapatkan notifikasi langsung setiap ada promo atau event kesehatan terbaru dari kami.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda..."
              className="flex-1 md:w-72 bg-white/15 border border-white/30 text-white placeholder-white/60 text-sm rounded-xl px-4 py-3 outline-none focus:border-white transition-colors backdrop-blur-sm"
            />
            <button className="shrink-0 bg-white text-[#006370] font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#f0fdfa] transition-colors shadow">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
