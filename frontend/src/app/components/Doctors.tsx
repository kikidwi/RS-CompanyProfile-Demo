import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Calendar } from "lucide-react";
import api from "../../lib/api";

const specialtyColors: Record<string, string> = {
  Kardiologi: "#006370",
  "Bedah Toraks": "#b45309",
  "Penyakit Dalam": "#6d28d9",
  "Kebidanan & Kandungan": "#be185d",
  "Bedah Umum": "#0369a1",
  Anak: "#0d9488",
  Saraf: "#7c3aed",
};

export function Doctors() {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await api.get('/doctors');
        if (response.data && response.data.length > 0) {
          const items = response.data.slice(0, 4).map((d: any) => ({
            id: d.id,
            name: d.name,
            title: d.title,
            specialty: d.specialty,
            polyclinic: d.polyclinic,
            image: d.image,
            schedule: d.schedules ? d.schedules.map((s: any) => s.day).join(', ') : "Senin - Jumat",
            experience: d.experience || "10+ tahun",
          }));
          setDoctors(items);
        }
      } catch (err) {
        console.error("Gagal memuat dokter:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <section id="dokter" className="py-16 bg-[rgba(59,156,165,0.06)]" style={{ fontFamily: "'Karla', sans-serif" }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#3b9ca5] font-semibold text-sm mb-1 uppercase tracking-wider">Tim Medis</p>
            <h2 className="text-[#006370] text-2xl md:text-3xl font-bold">Dokter Spesialis Kami</h2>
          </div>
          <Link
            to="/dokter"
            className="hidden md:flex items-center gap-2 text-[#3b9ca5] font-semibold text-sm hover:gap-3 transition-all"
          >
            Lihat semua dokter <ArrowRight size={16} />
          </Link>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-4 text-center py-10 text-gray-400">Memuat dokter...</div>
          ) : doctors.map((doc) => {
            const color = specialtyColors[doc.specialty] ?? "#006370";
            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span
                    className="absolute bottom-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: color }}
                  >
                    {doc.specialty}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-gray-900 font-bold text-[15px] leading-snug">
                    {doc.name}, <span style={{ color }}>{doc.title}</span>
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5 mb-3">{doc.polyclinic}</p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
                    <Calendar size={11} className="shrink-0" />
                    <span className="truncate">{doc.schedule}</span>
                  </div>
                  <Link
                    to="/dokter"
                    className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between text-xs font-bold transition-colors group-hover:gap-2"
                    style={{ color }}
                  >
                    Lihat Profil <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Link
            to="/dokter"
            className="flex items-center gap-2 text-[#3b9ca5] font-semibold text-sm border border-[#3b9ca5] rounded-xl px-5 py-2 hover:bg-[#3b9ca5] hover:text-white transition-colors"
          >
            Lihat semua dokter <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
