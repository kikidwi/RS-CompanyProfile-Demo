import { Link } from "react-router";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

// Promo data matches /promosi
const promos = [
  {
    id: 1,
    title: "Paket MCU Jantung Komprehensif",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    badge: "Terpopuler",
    badgeColor: "#006370",
    validUntil: "31 Juli 2026",
    finalPrice: "Rp 1.750.000",
    originalPrice: "Rp 2.500.000",
    discount: "30%",
    desc: "EKG, ekokardiografi, tes treadmill, laboratorium, dan konsultasi dokter spesialis jantung.",
  },
  {
    id: 2,
    title: "Diskon 25% USG Kandungan",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    badge: "Diskon",
    badgeColor: "#b45309",
    validUntil: "15 Agustus 2026",
    finalPrice: "Rp 300.000",
    originalPrice: "Rp 400.000",
    discount: "25%",
    desc: "USG kandungan 2D dan 3D untuk pasien umum dan peserta asuransi tertentu.",
  },
  {
    id: 3,
    title: "Paket Persalinan Normal & Cesar",
    image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    badge: "Paket",
    badgeColor: "#be185d",
    validUntil: "31 Desember 2026",
    finalPrice: "Rp 6.500.000",
    originalPrice: "Rp 8.000.000",
    discount: "19%",
    desc: "All-in: biaya dokter, kamar rawat inap 2 malam Kelas I, laboratorium bayi, dan konsultasi laktasi.",
  },
];

// News data matches /informasi/berita-artikel (first 3)
const news = [
  {
    id: 1,
    slug: "akreditasi-kars-paripurna",
    title: "RS Utama Demo Raih Akreditasi Paripurna dari KARS untuk Ketiga Kalinya",
    date: "25 Juni 2026",
    category: "Berita",
    image: "https://images.unsplash.com/photo-1615770922480-0b9ae80afeba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    slug: "tanda-serangan-jantung",
    title: "Mengenal Tanda-Tanda Serangan Jantung dan Cara Pertolongan Pertama",
    date: "20 Juni 2026",
    category: "Edukasi",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    slug: "layanan-genomik-kardiovaskular",
    title: "Peluncuran Program Layanan Genomik Kardiovaskular: Inovasi Deteksi Dini Berbasis DNA",
    date: "10 Juni 2026",
    category: "Berita",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

const categoryColors: Record<string, string> = {
  Berita: "#006370",
  Edukasi: "#0d9488",
  Pengumuman: "#b45309",
};

export function Promo() {
  return (
    <>
      {/* ── Promos ── */}
      <section id="promosi" className="py-16 bg-[rgba(59,156,165,0.06)]" style={{ fontFamily: "'Karla', sans-serif" }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#3b9ca5] font-semibold text-sm mb-1 uppercase tracking-wider">Penawaran</p>
              <h2 className="text-[#006370] text-2xl md:text-3xl font-bold">Promo & Penawaran Terbaru</h2>
            </div>
            <Link
              to="/promosi"
              className="hidden md:flex items-center gap-2 text-[#3b9ca5] font-semibold text-sm hover:gap-3 transition-all"
            >
              Lihat semua promo <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((promo) => (
              <Link
                key={promo.id}
                to="/promosi"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: promo.badgeColor }}
                  >
                    {promo.badge}
                  </span>
                  {promo.discount && (
                    <div className="absolute top-3 right-3 w-11 h-11 rounded-full bg-red-500 text-white flex flex-col items-center justify-center text-[9px] font-extrabold shadow">
                      <span>OFF</span>
                      <span>{promo.discount}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                    <Calendar size={11} />
                    <span>Berlaku hingga {promo.validUntil}</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm mb-1 group-hover:text-[#006370] transition-colors">{promo.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{promo.desc}</p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg font-extrabold text-[#006370]">{promo.finalPrice}</span>
                    <span className="text-xs text-gray-400 line-through">{promo.originalPrice}</span>
                  </div>
                  <div className="w-full text-center bg-[#3b9ca5] group-hover:bg-[#006370] text-white text-sm font-bold py-2 rounded-xl transition-colors">
                    Selengkapnya
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── News ── */}
      <section id="informasi" className="py-16 bg-white" style={{ fontFamily: "'Karla', sans-serif" }}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#3b9ca5] font-semibold text-sm mb-1 uppercase tracking-wider">Informasi</p>
              <h2 className="text-[#006370] text-2xl md:text-3xl font-bold">Berita &amp; Edukasi</h2>
            </div>
            <Link
              to="/informasi/berita-artikel"
              className="hidden md:flex items-center gap-2 text-[#3b9ca5] font-semibold text-sm hover:gap-3 transition-all"
            >
              Lihat semua <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => {
              const color = categoryColors[item.category] ?? "#006370";
              return (
                <Link
                  key={item.id}
                  to={`/informasi/berita-artikel/${item.slug}`}
                  className="group block"
                >
                  <div className="rounded-2xl overflow-hidden h-44 mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded"
                      style={{ backgroundColor: `${color}15`, color }}
                    >
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Clock size={10} />{item.date}
                    </span>
                  </div>
                  <h3 className="text-[#161616] font-bold text-sm leading-snug group-hover:text-[#3b9ca5] transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center mt-8 md:hidden">
            <Link
              to="/informasi/berita-artikel"
              className="flex items-center gap-2 text-[#3b9ca5] font-semibold text-sm border border-[#3b9ca5] rounded-xl px-5 py-2 hover:bg-[#3b9ca5] hover:text-white transition-colors"
            >
              Lihat semua berita <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
