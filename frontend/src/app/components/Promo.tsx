import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import api from "../../lib/api";

const categoryColors: Record<string, string> = {
  Berita: "#006370",
  Edukasi: "#0d9488",
  Pengumuman: "#b45309",
};

export function Promo() {
  const [promos, setPromos] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [loadingPromos, setLoadingPromos] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const response = await api.get('/promotions');
        if (response.data && response.data.length > 0) {
          const items = response.data.slice(0, 3).map((d: any) => {
            const desc = d.terms && d.terms.length > 0 ? d.terms.map((t:any) => t.term).join('. ') : "Penawaran spesial untuk Anda.";
            return {
              id: d.id,
              title: d.title,
              image: d.image,
              badge: "Promo",
              badgeColor: "#006370",
              validUntil: d.valid_until,
              desc: desc,
            };
          });
          setPromos(items);
        }
      } catch (err) {
        console.error("Gagal memuat promosi:", err);
      } finally {
        setLoadingPromos(false);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await api.get('/articles');
        if (response.data && response.data.length > 0) {
          const items = response.data.slice(0, 3).map((d: any) => ({
            id: d.id,
            slug: d.slug,
            title: d.title,
            date: d.date,
            category: d.category,
            image: d.image,
          }));
          setNews(items);
        }
      } catch (err) {
        console.error("Gagal memuat berita:", err);
      } finally {
        setLoadingNews(false);
      }
    };

    fetchPromos();
    fetchNews();
  }, []);

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
            {loadingPromos ? (
              <div className="col-span-3 text-center py-10 text-gray-400">Memuat promosi...</div>
            ) : promos.map((promo) => (
              <Link
                key={promo.id}
                to={`/promosi/${promo.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden shrink-0">
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
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                    <Calendar size={11} />
                    <span>Berlaku hingga {new Date(promo.validUntil).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm mb-1 group-hover:text-[#006370] transition-colors">{promo.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">{promo.desc}</p>
                  
                  <div className="w-full text-center bg-[#3b9ca5] group-hover:bg-[#006370] text-white text-sm font-bold py-2 rounded-xl transition-colors mt-auto">
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
            {loadingNews ? (
              <div className="col-span-3 text-center py-10 text-gray-400">Memuat berita...</div>
            ) : news.map((item) => {
              const color = categoryColors[item.category] || "#64748b";
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
