import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { Calendar, Clock, Tag, ChevronRight, ArrowLeft, Share2, User, Check } from "lucide-react";
import { articles as defaultArticles, categoryConfig, type Article } from "./articlesData";

export default function BeritaArtikelDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [copyDone, setCopyDone] = useState(false);

  const [article, setArticle] = useState<Article | null>(null);
  const [related, setRelated] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      window.scrollTo(0, 0);

      try {
        const q = query(collection(db, "informasi_berita"), where("slug", "==", slug), limit(1));
        const snap = await getDocs(q);
        
        let currentArticle: Article | undefined;

        if (!snap.empty) {
          currentArticle = snap.docs[0].data() as Article;
        } else {
          currentArticle = defaultArticles.find((a) => a.slug === slug);
        }

        if (currentArticle) {
          setArticle(currentArticle);
          
          // Fetch related
          const allSnap = await getDocs(collection(db, "informasi_berita"));
          const allArticles: Article[] = [];
          if (!allSnap.empty) {
            allSnap.forEach(d => allArticles.push(d.data() as Article));
          } else {
            allArticles.push(...defaultArticles);
          }
          
          setRelated(
            allArticles
              .filter((a) => a.slug !== slug && a.category === currentArticle?.category)
              .slice(0, 3)
          );
        }
      } catch (err) {
        console.error("Gagal memuat detail berita:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center font-medium text-gray-500">Memuat artikel...</div>;
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center font-medium text-gray-500 p-6">
        <p className="mb-4">Artikel tidak ditemukan atau telah dihapus.</p>
        <Link to="/informasi/berita-artikel" className="text-[#3b9ca5] font-bold hover:underline">Kembali ke Berita</Link>
      </div>
    );
  }

  const cfg = categoryConfig[article.category] || categoryConfig["Berita"];

  // ── Share handler ──────────────────────────────────
  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url,
    };

    // Try native share sheet (works on mobile & some desktop browsers)
    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // User cancelled — don't fall through to copy
        return;
      }
    }

    // Fallback: copy URL to clipboard
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Final fallback for very old browsers
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    setCopyDone(true);
    setTimeout(() => setCopyDone(false), 2500);
  };

  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      {/* Back breadcrumb inside content area */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <Link
          to="/informasi/berita-artikel"
          className="flex items-center gap-1.5 text-[#0f766e] hover:text-[#006370] transition-colors font-medium"
        >
          <ArrowLeft size={14} />
          Kembali ke Daftar
        </Link>
        <ChevronRight size={13} className="text-gray-300" />
        <span className="text-gray-400 truncate max-w-xs">{article.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ── Main Article ── */}
        <article className="lg:col-span-2">
          {/* Category badge */}
          <span
            className="inline-flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: cfg.color }}
          >
            <cfg.icon size={12} />
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug mb-4">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              <span className="font-medium text-gray-700">{article.author}</span>
              <span className="text-gray-300 hidden sm:inline">·</span>
              <span className="text-xs hidden sm:inline">{article.authorRole}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {article.readTime} baca
            </span>
            <button
              onClick={handleShare}
              className={`flex items-center gap-1.5 text-xs font-semibold transition-all border rounded-lg px-3 py-1.5 ${
                copyDone
                  ? "text-emerald-600 border-emerald-300 bg-emerald-50"
                  : "text-gray-500 border-gray-200 hover:text-[#006370] hover:border-[#006370]"
              }`}
            >
              {copyDone ? (
                <>
                  <Check size={13} />
                  Link disalin!
                </>
              ) : (
                <>
                  <Share2 size={13} />
                  Bagikan
                </>
              )}
            </button>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-8 shadow-sm">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>

          {/* Excerpt / lead */}
          <p className="text-base text-gray-700 leading-relaxed font-medium border-l-4 pl-4 mb-8 italic"
            style={{ borderColor: cfg.color }}>
            {article.excerpt}
          </p>

          {/* Content paragraphs */}
          <div className="space-y-5">
            {article.content.map((para, i) => (
              <p key={i} className="text-gray-700 text-[15px] leading-[1.85]">
                {para}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-gray-100">
            <Tag size={14} className="text-gray-400" />
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full border"
                style={{
                  color: cfg.color,
                  borderColor: `${cfg.color}40`,
                  backgroundColor: `${cfg.color}10`,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author card */}
          <div
            className="mt-8 rounded-2xl p-5 flex items-center gap-4"
            style={{ backgroundColor: `${cfg.color}08`, border: `1px solid ${cfg.color}20` }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-white text-lg font-extrabold"
              style={{ backgroundColor: cfg.color }}
            >
              {article.author.replace("dr. ", "").charAt(0)}
            </div>
            <div>
              <p className="font-bold text-gray-900">{article.author}</p>
              <p className="text-sm text-gray-500">{article.authorRole}</p>
              <p className="text-xs text-gray-400 mt-0.5">Diterbitkan: {article.date}</p>
            </div>
          </div>
        </article>

        {/* ── Sidebar ── */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Related articles */}
          {related.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span
                  className="w-1 h-4 rounded-full inline-block"
                  style={{ backgroundColor: cfg.color }}
                />
                Artikel Terkait
              </h3>
              <div className="space-y-4">
                {related.map((rel) => {
                  const relCfg = categoryConfig[rel.category];
                  return (
                    <Link
                      key={rel.id}
                      to={`/informasi/berita-artikel/${rel.slug}`}
                      className="group flex gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={rel.image}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider"
                          style={{ color: relCfg.color }}
                        >
                          {rel.category}
                        </span>
                        <p className="text-sm font-semibold text-gray-800 leading-snug mt-0.5 line-clamp-3 group-hover:text-[#006370] transition-colors">
                          {rel.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{rel.date}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* All articles button */}
          <div>
            <h3 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full inline-block bg-gray-300" />
              Semua Artikel
            </h3>
            <div className="space-y-2">
              {defaultArticles
                .filter((a: Article) => a.slug !== slug)
                .slice(0, 5)
                .map((a: Article) => {
                  const aCfg = categoryConfig[a.category];
                  return (
                    <Link
                      key={a.id}
                      to={`/informasi/berita-artikel/${a.slug}`}
                      className="group flex items-start gap-2 py-2 text-sm text-gray-700 hover:text-[#006370] transition-colors border-b border-gray-50 last:border-0"
                    >
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: aCfg.color }}
                      />
                      <span className="line-clamp-2 leading-snug group-hover:underline">
                        {a.title}
                      </span>
                    </Link>
                  );
                })}
              <Link
                to="/informasi/berita-artikel"
                className="flex items-center gap-1.5 text-xs font-bold mt-3 transition-colors"
                style={{ color: cfg.color }}
              >
                Lihat semua artikel <ChevronRight size={13} />
              </Link>
            </div>
          </div>

          {/* CTA Box */}
          <div
            className="rounded-2xl p-5 text-white"
            style={{ background: `linear-gradient(135deg, #006370, #3b9ca5)` }}
          >
            <p className="font-bold text-base mb-1">Butuh Konsultasi?</p>
            <p className="text-white/80 text-xs leading-relaxed mb-4">
              Konsultasikan kondisi kesehatan Anda dengan dokter spesialis kami.
            </p>
            <Link
              to="/dokter"
              className="block text-center bg-white text-[#006370] font-bold text-sm py-2 rounded-xl hover:bg-[#f0fdfa] transition-colors"
            >
              Cari Dokter
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
