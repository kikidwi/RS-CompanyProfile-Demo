import { Link } from "react-router";
import { ArrowRight, Award, Calendar } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "dr. Ahmad Fauzi",
    title: "Sp.JP (K)",
    specialty: "Kardiologi",
    polyclinic: "Poli Jantung",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    schedule: "Senin, Rabu, Jumat",
    experience: "18 tahun",
  },
  {
    id: 2,
    name: "dr. Siti Rahayu",
    title: "Sp.JP (K)",
    specialty: "Kardiologi",
    polyclinic: "Poli Jantung",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    schedule: "Selasa, Kamis",
    experience: "14 tahun",
  },
  {
    id: 3,
    name: "dr. Bambang Suryanto",
    title: "SpBTKV",
    specialty: "Bedah Toraks",
    polyclinic: "Poli Bedah Kardiovaskular",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    schedule: "Senin, Selasa, Rabu",
    experience: "22 tahun",
  },
  {
    id: 4,
    name: "dr. Dewi Anggraini",
    title: "Sp.A",
    specialty: "Anak",
    polyclinic: "Poli Anak",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    schedule: "Senin, Rabu, Jumat",
    experience: "11 tahun",
  },
];

const specialtyColors: Record<string, string> = {
  Kardiologi: "#006370",
  "Bedah Toraks": "#b45309",
  Anak: "#0d9488",
};

export function Doctors() {
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
          {doctors.map((doc) => {
            const color = specialtyColors[doc.specialty] ?? "#006370";
            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
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
                  <p className="text-gray-400 text-xs mt-0.5 mb-2">{doc.polyclinic}</p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
                    <Calendar size={11} className="shrink-0" />
                    {doc.schedule}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
                    <Award size={11} className="shrink-0" />
                    Pengalaman {doc.experience}
                  </div>
                  <Link
                    to="/dokter"
                    className="mt-auto w-full block text-center text-white text-sm font-bold py-2.5 rounded-xl transition-colors hover:opacity-90"
                    style={{ backgroundColor: color }}
                  >
                    Lihat Jadwal
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/dokter"
            className="flex items-center gap-2 text-[#3b9ca5] font-semibold text-sm border border-[#3b9ca5] rounded-xl px-6 py-2.5 hover:bg-[#3b9ca5] hover:text-white transition-colors"
          >
            Lihat Direktori Dokter Lengkap <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
