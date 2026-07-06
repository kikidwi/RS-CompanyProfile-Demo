import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import api from "../../../lib/api";
import { ChevronRight, ChevronLeft } from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
export type Category = "Semua" | "Paket Kesehatan" | "Diskon" | "Layanan Baru" | "Event";

export const categories: Category[] = [
  "Semua",
  "Paket Kesehatan",
  "Diskon",
  "Layanan Baru",
  "Event",
];

export type Promo = {
  id?: string;
  title: string;
  category: Category;
  badge?: string;
  badgeColor?: string;
  image: string;
  validUntil?: string;
  discount?: string;
  originalPrice?: string;
  finalPrice?: string;
  desc: string;
  isHot?: boolean;
  isFeatured?: boolean;
  order?: number;
};

export const defaultPromos: Promo[] = [
  {
    title: "Promo Medical Checkup Jantung",
    category: "Paket Kesehatan",
    badge: "Diskon",
    badgeColor: "#006370",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "31 Juli 2026",
    originalPrice: "Rp 2.500.000",
    finalPrice: "Rp 1.750.000",
    discount: "30%",
    desc: "Paket MCU jantung lengkap meliputi EKG, ekokardiografi, tes treadmill, laboratorium, dan konsultasi dokter spesialis jantung.\n\nInvestasi terbaik adalah menjaga kesehatan jantungmu hari ini.",
  },
  {
    title: "HeartFit Clinic",
    category: "Layanan Baru",
    badge: "Baru",
    badgeColor: "#006370",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "Tersedia setiap hari",
    desc: "Program rehabilitasi jantung dan kebugaran kardiovaskular terpadu untuk pasien penyakit jantung dan masyarakat umum.",
  },
  {
    title: "Layanan Genomik",
    category: "Layanan Baru",
    badge: "Baru",
    badgeColor: "#006370",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "Mulai tersedia Juli 2026",
    desc: "Pemeriksaan genetik untuk mendeteksi risiko penyakit jantung bawaan dan herediter menggunakan teknologi genomik terkini.",
  },
  {
    title: "Paket Gymnasium",
    category: "Event",
    badge: "Event",
    badgeColor: "#006370",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "20 Juli 2026",
    desc: "Program kebugaran khusus di bawah pengawasan dokter rehabilitasi medik dan instruktur terlatih.",
  },
  {
    title: "Medical Check Up - Paket Eksekutif",
    category: "Paket Kesehatan",
    badge: "Paket",
    badgeColor: "#006370",
    image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "31 Desember 2026",
    originalPrice: "Rp 8.000.000",
    finalPrice: "Rp 6.500.000",
    discount: "19%",
    desc: "Pemeriksaan kesehatan menyeluruh dengan layanan VIP dan hasil yang cepat.",
  },
  {
    title: "Medical Check Up - Cardiac Executive",
    category: "Paket Kesehatan",
    badge: "Terpopuler",
    badgeColor: "#006370",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    validUntil: "Tersedia setiap hari",
    originalPrice: "Rp 6.000.000",
    finalPrice: "Rp 5.200.000",
    discount: "10%",
    desc: "Pemeriksaan kesehatan kardiovaskular secara detail untuk para eksekutif dengan kesibukan tinggi.",
  }
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function PromoCard({ promo, onClick }: { promo: Promo; onClick: () => void }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow flex flex-col">
      {/* Image Container */}
      <div className="w-full aspect-square overflow-hidden bg-gray-50 flex items-center justify-center cursor-pointer" onClick={onClick}>
        <img
          src={promo.image}
          alt={promo.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-center font-bold text-gray-900 text-[15px] leading-snug min-h-[44px] mb-4 flex items-center justify-center line-clamp-2">
          {promo.title}
        </h3>

        {/* Button */}
        <button 
          onClick={onClick}
          className="w-full py-2.5 bg-[#4fb1b3] hover:bg-[#3d9698] text-white text-sm font-bold rounded-lg transition-colors mt-auto"
        >
          Lihat Promo
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Promosi() {
  const [promos, setPromos] = useState<Promo[]>(defaultPromos);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/promotions');
        if (response.data && response.data.length > 0) {
          const items = response.data.map((d: any) => ({
            id: d.id.toString(),
            title: d.title,
            category: d.category,
            badge: d.badge,
            badgeColor: d.badge_color,
            image: d.image,
            validUntil: d.valid_until,
            discount: d.discount,
            originalPrice: d.original_price,
            finalPrice: d.final_price,
            desc: d.description || "",
            isHot: d.is_hot,
            isFeatured: d.is_featured,
            order: d.sort_order || 0
          }));
          items.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
          setPromos(items);
        }
      } catch (err) {
        console.error("Gagal memuat promosi dari API:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(promos.length / itemsPerPage) || 1;
  const currentPromos = promos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-20" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── Breadcrumb ── */}
      <div className="bg-[#f0fdfa] py-3 px-4 md:px-16 border-b border-[#ccfbf1]">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-sm">
          <Link to="/" className="text-[#0f766e] hover:text-[#0d9488] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-[#99f6e4]" />
          <span className="text-[#115e59] font-medium">Promo</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="relative w-full h-[240px] md:h-[340px] overflow-hidden bg-[#006370]">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Promosi"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#006370]/95 to-[#3b9ca5]/60" />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16">
          <div className="max-w-screen-xl mx-auto w-full">
            <p className="text-[#99f6e4] text-sm font-semibold uppercase tracking-widest mb-2">
              Penawaran Spesial
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Promo &amp; Penawaran<br className="hidden md:block" /> Menarik RS Kami
            </h1>
            <p className="text-[#ccfbf1] text-sm md:text-base max-w-xl">
              Dapatkan paket layanan kesehatan terbaik dengan harga spesial. Jangan lewatkan penawaran terbatas dari kami!
            </p>
          </div>
        </div>
      </div>

      {/* ── Promos Grid ── */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 pt-12">
        {loading ? (
           <div className="text-center py-20 text-gray-400 font-medium">Memuat promosi...</div>
        ) : promos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentPromos.map((promo, i) => (
                <PromoCard 
                  key={promo.id || i} 
                  promo={promo} 
                  onClick={() => navigate(`/promosi/${promo.id || i}`)} 
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 gap-2">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#3b9ca5] hover:text-[#3b9ca5] disabled:opacity-50 disabled:hover:border-gray-300 disabled:hover:text-gray-500"
                >
                  <ChevronLeft size={16} />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 flex items-center justify-center rounded border text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-[#3b9ca5] text-white border-[#3b9ca5]"
                        : "border-gray-300 text-gray-600 hover:border-[#3b9ca5] hover:text-[#3b9ca5]"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#3b9ca5] hover:text-[#3b9ca5] disabled:opacity-50 disabled:hover:border-gray-300 disabled:hover:text-gray-500"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-sm font-medium">Belum ada promo tersedia saat ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}
