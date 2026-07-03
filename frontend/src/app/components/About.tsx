import { Link } from "react-router";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "16+", label: "Dokter Spesialis" },
  { value: "8", label: "Spesialisasi" },
  { value: "120.000+", label: "Pasien per Tahun" },
  { value: "3", label: "Akreditasi Nasional & Internasional" },
];

const highlights = [
  "RS Umum Tipe A dengan pelayanan kesehatan terpadu",
  "Terakreditasi KARS Paripurna & JCI Internasional",
  "Melayani lebih dari 10.000 pasien rawat jalan per bulan",
  "Didukung lebih dari 500 tenaga medis dan non-medis",
  "Layanan IGD 24 jam, 7 hari seminggu tanpa henti",
  "Fasilitas kamar perawatan Kelas III hingga VIP",
];

export function About() {
  return (
    <section id="profil" className="py-16 bg-white" style={{ fontFamily: "'Karla', sans-serif" }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-[rgba(59,156,165,0.06)] rounded-2xl py-8 px-4 hover:bg-[rgba(59,156,165,0.1)] transition-colors">
              <div className="text-[#3b9ca5] text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-[#006370] text-sm font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#3b9ca5] font-semibold text-sm mb-2 uppercase tracking-wider">Tentang Kami</p>
            <h2 className="text-[#006370] text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Rumah Sakit Utama Demo
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              RS Utama Demo merupakan rumah sakit umum bertipe A yang berfokus pada penyelenggaraan pelayanan kesehatan terpadu dengan standar internasional. Didirikan pada tahun 2005, kami berawal dari sebuah klinik kecil yang berkembang menjadi pusat rujukan unggulan di kawasan ini.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Kami percaya bahwa teknologi medis mutakhir dan dokter spesialis berpengalaman, dipadukan dengan rasa empati yang tulus, menghasilkan pengalaman penyembuhan yang sesungguhnya bagi setiap pasien.
            </p>
            <ul className="space-y-3 mb-6">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#3b9ca5] mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">{h}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/profil/tentang-kami"
              className="inline-block bg-[#3b9ca5] hover:bg-[#006370] text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Profil Lengkap
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1615770922480-0b9ae80afeba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="RS Utama Demo"
              className="rounded-2xl w-full h-80 object-cover shadow-lg"
            />
            <div className="absolute -bottom-5 -left-5 bg-[#3b9ca5] text-white rounded-2xl p-4 shadow-xl hidden md:block">
              <div className="text-xl font-extrabold">KARS Paripurna</div>
              <div className="text-sm opacity-90">& JCI Internasional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
