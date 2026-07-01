import { useState, useEffect } from "react";
import { Link } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { Calendar, Clock, ArrowRight, Search, X, BookOpen } from "lucide-react";
import { articles as defaultArticles, categoryConfig, type ArticleCategory, type Article } from "./articlesData";

const categories = ["Semua", "Berita", "Edukasi", "Pengumuman"] as const;
type FilterCategory = (typeof categories)[number];

function ArticleCard({ article }: { article: Article }) {
  const cfg = categoryConfig[article.category];
  return (
    <Link
      to={`/informasi/berita-artikel/${article.slug}`}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className="absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: cfg.color }}
        >
          {article.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {article.readTime} baca
          </span>
        </div>

        <h3 className="text-gray-900 font-bold text-[15px] leading-snug mb-2 flex-1 group-hover:text-[#006370] transition-colors line-clamp-3">
          {article.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${cfg.color}15`, color: cfg.color }}
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-50 mt-auto">
          <span className="text-xs text-gray-400 truncate max-w-[60%]">{article.author}</span>
          <span
            className="text-xs font-bold flex items-center gap-1 transition-colors group-hover:gap-2"
            style={{ color: cfg.color }}
          >
            Baca <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BeritaArtikel() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("Semua");
  const [articlesData, setArticlesData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snap = await getDocs(collection(db, "informasi_berita"));
        if (!snap.empty) {
          const items: Article[] = [];
          snap.forEach(doc => items.push({ ...doc.data() } as Article));
          items.sort((a, b) => b.id - a.id);
          setArticlesData(items);
        } else {
          setArticlesData(defaultArticles);
        }
      } catch (err) {
        console.error("Gagal memuat berita:", err);
        setArticlesData(defaultArticles);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredArticles = articlesData.filter((a) => {
    const matchSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      a.author.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "Semua" || a.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      {/* Section header */}
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Berita &amp; Artikel</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-3xl">
        Ikuti perkembangan terbaru dari RS Utama Demo — berita kelembagaan, artikel edukasi
        kesehatan, serta pengumuman resmi untuk pasien dan keluarga.
      </p>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        {/* Search */}
        <div className="flex items-center gap-2 flex-1 bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5">
          <Search size={14} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Cari judul, penulis, atau kata kunci..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1"
          />
          {search && (
            <button onClick={() => setSearch("")}>
              <X size={13} className="text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => {
            const cfg = cat !== "Semua" ? categoryConfig[cat as ArticleCategory] : null;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                  isActive
                    ? "text-white border-transparent shadow"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                }`}
                style={
                  isActive
                    ? { backgroundColor: cfg?.color ?? "#006370" }
                    : {}
                }
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Result count */}
      <p className="text-gray-400 text-sm mb-6">
        Menampilkan{" "}
        <span className="font-bold text-gray-700">{filteredArticles.length}</span> artikel
        {activeCategory !== "Semua" && (
          <>
            {" "}dalam kategori{" "}
            <span
              className="font-bold"
              style={{ color: categoryConfig[activeCategory as ArticleCategory]?.color }}
            >
              {activeCategory}
            </span>
          </>
        )}
      </p>

      {/* Grid */}
      {loading ? (
        <div className="text-center py-20 text-gray-500 font-medium">Memuat berita...</div>
      ) : filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <BookOpen size={40} className="mx-auto mb-3 opacity-20" />
          <p className="text-sm font-semibold text-gray-500">Tidak ada artikel ditemukan</p>
          <p className="text-xs mt-1">Coba ubah kata kunci atau pilih kategori lain.</p>
        </div>
      )}
    </div>
  );
}
