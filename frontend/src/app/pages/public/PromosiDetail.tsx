import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { doc, getDoc, collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { ChevronRight, Phone } from "lucide-react";
import { defaultPromos, Promo } from "./Promosi";

export default function PromosiDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [promo, setPromo] = useState<Promo | null>(null);
  const [otherPromos, setOtherPromos] = useState<Promo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetailAndOthers = async () => {
      setLoading(true);
      window.scrollTo(0, 0);

      try {
        let currentPromo: Promo | null = null;
        
        // 1. Fetch current promo
        if (id) {
          // If ID is numeric (from fallback index in Promosi.tsx)
          if (!isNaN(Number(id)) && id.length < 5) {
            const index = parseInt(id, 10);
            if (defaultPromos[index]) {
              currentPromo = { ...defaultPromos[index], id: index.toString() };
            }
          } else {
            // Fetch from Firebase
            const docRef = doc(db, "promosi", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              currentPromo = { id: docSnap.id, ...docSnap.data() } as Promo;
            }
          }
        }
        
        if (!currentPromo) {
          setLoading(false);
          return;
        }

        setPromo(currentPromo);

        // 2. Fetch other promos
        const promosRef = collection(db, "promosi");
        const q = query(promosRef, limit(4)); // fetch 4 in case one of them is the current
        const querySnapshot = await getDocs(q);
        
        let others: Promo[] = [];
        if (!querySnapshot.empty) {
          querySnapshot.forEach(docSnap => {
            if (docSnap.id !== id) {
              others.push({ id: docSnap.id, ...docSnap.data() } as Promo);
            }
          });
        } else {
          // fallback to defaults
          others = defaultPromos.filter((_, i) => i.toString() !== id);
        }
        
        setOtherPromos(others.slice(0, 3)); // Keep exactly 3
        
      } catch (err) {
        console.error("Gagal memuat detail promosi:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetailAndOthers();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center font-medium text-gray-500">Memuat detail promosi...</div>;
  }

  if (!promo) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center font-medium text-gray-500 p-6">
        <p className="mb-4">Promosi tidak ditemukan atau telah dihapus.</p>
        <Link to="/promosi" className="text-[#3b9ca5] font-bold hover:underline">Kembali ke Daftar Promo</Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── Breadcrumb ── */}
      <div className="bg-[#f0fdfa] py-3 px-4 md:px-16 border-b border-[#ccfbf1]">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-sm">
          <Link to="/" className="text-[#0f766e] hover:text-[#0d9488] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#99f6e4]" />
          <Link to="/promosi" className="text-[#0f766e] hover:text-[#0d9488] transition-colors">Promo</Link>
          <ChevronRight size={14} className="text-[#99f6e4]" />
          <span className="text-[#115e59] font-medium truncate">{promo.title}</span>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-16 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
          {/* Left Column: Image */}
          <div className="w-full">
            <img 
              src={promo.image} 
              alt={promo.title} 
              className="w-full h-auto aspect-square object-cover rounded-lg shadow-sm border border-gray-100"
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-[#006370] mb-2 leading-snug">
              {promo.title}
            </h1>
            {promo.category && (
              <h2 className="text-lg text-gray-500 font-medium mb-6">{promo.category}</h2>
            )}

            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed mb-8">
              <p className="whitespace-pre-line">{promo.desc}</p>
            </div>

            <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="text-gray-800 font-medium mb-4">Daftar sekarang ke nomor berikut:</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} className="text-[#b1295b]" />
                  <span className="font-medium">15000 34</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} className="text-[#b1295b]" />
                  <span className="font-medium">0811 911 5045</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} className="text-[#b1295b]" />
                  <span className="font-medium">0812 1000 4370</span>
                </li>
              </ul>

              <div className="text-sm text-gray-500 mb-6 font-medium">
                #PemeriksaanJantung #MCU #Kesehatan #PromoRumahSakit
              </div>

              <button 
                onClick={() => alert("Membuka WhatsApp/Aplikasi Telepon untuk pendaftaran...")}
                className="bg-[#4fb1b3] hover:bg-[#3d9698] text-white font-bold py-3 px-8 rounded-lg transition-colors w-fit shadow-md"
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>

        {/* ── Promo Lainnya ── */}
        {otherPromos.length > 0 && (
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-[#3b9ca5] mb-8">Promo Lainnya Untuk Anda</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {otherPromos.map((otherPromo, i) => (
                <div key={otherPromo.id || i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow flex flex-col">
                  <div 
                    className="w-full aspect-square overflow-hidden bg-gray-50 flex items-center justify-center cursor-pointer" 
                    onClick={() => navigate(`/promosi/${otherPromo.id || i}`)}
                  >
                    <img
                      src={otherPromo.image}
                      alt={otherPromo.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-4 flex flex-col flex-1">
                    <h4 className="text-center font-bold text-gray-900 text-[15px] leading-snug min-h-[44px] mb-4 flex items-center justify-center line-clamp-2">
                      {otherPromo.title}
                    </h4>

                    <button 
                      onClick={() => navigate(`/promosi/${otherPromo.id || i}`)}
                      className="w-full py-2.5 bg-[#4fb1b3] hover:bg-[#3d9698] text-white text-sm font-bold rounded-lg transition-colors mt-auto"
                    >
                      Lihat Promo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
