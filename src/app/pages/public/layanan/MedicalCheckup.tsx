import { useState, useEffect } from "react";
import { CheckCircle, Star, Users, Clock, Award } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

export const defaultMcuPackages = [
  {
    name: "MCU Basic",
    price: "Rp 350.000",
    color: "#3b9ca5",
    badge: null,
    description: "Pemeriksaan kesehatan dasar untuk deteksi dini kelainan umum.",
    items: [
      "Pemeriksaan fisik lengkap",
      "Darah rutin (Hb, Leukosit, Trombosit)",
      "Urine lengkap",
      "Gula darah puasa",
      "Tekanan darah & BMI",
      "Konsultasi dokter",
    ],
  },
  {
    name: "MCU Standard",
    price: "Rp 750.000",
    color: "#006370",
    badge: "Terpopuler",
    description: "Paket komprehensif untuk evaluasi menyeluruh kondisi kesehatan Anda.",
    items: [
      "Semua layanan MCU Basic",
      "Kolesterol total & HDL/LDL",
      "Fungsi hati (SGOT/SGPT)",
      "Fungsi ginjal (Ureum/Kreatinin)",
      "EKG / Rekam jantung",
      "Foto Rontgen dada",
      "Spirometri (fungsi paru)",
    ],
  },
  {
    name: "MCU Premium",
    price: "Rp 1.500.000",
    color: "#b45309",
    badge: "Lengkap",
    description: "Pemeriksaan total body check-up dengan teknologi diagnostik mutakhir.",
    items: [
      "Semua layanan MCU Standard",
      "Tumor marker (PSA / CA-125)",
      "USG Abdomen lengkap",
      "Tiroid (TSH, T3, T4)",
      "HbA1c (kontrol gula 3 bulan)",
      "Asam urat & profil lipid lengkap",
      "Konsultasi dokter spesialis",
    ],
  },
];

const stats = [
  { icon: Users, value: "50.000+", label: "Pasien MCU/tahun" },
  { icon: Star, value: "4.9/5", label: "Rating kepuasan" },
  { icon: Clock, value: "< 3 jam", label: "Durasi pemeriksaan" },
  { icon: Award, value: "Akreditasi A", label: "Laboratorium terakreditasi" },
];

export default function MedicalCheckup() {
  const [packages, setPackages] = useState(defaultMcuPackages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snap = await getDocs(collection(db, "layanan_mcu"));
        if (!snap.empty) {
          const items: any[] = [];
          snap.forEach((doc) => items.push({ id: doc.id, ...doc.data() }));
          items.sort((a, b) => (a.order || 0) - (b.order || 0));
          setPackages(items);
        }
      } catch (err) {
        console.error("Gagal memuat MCU dari Firebase:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      {/* Page Header */}
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Medical Check-Up (MCU)</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-3xl">
        Program Medical Check-Up kami dirancang untuk mendeteksi berbagai kondisi kesehatan secara dini. Dengan tenaga dokter berpengalaman dan peralatan laboratorium berstandar internasional, kami memastikan hasil yang akurat dan tepat waktu.
      </p>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-[#f0fdfa] flex items-center justify-center mb-3">
              <stat.icon size={22} className="text-[#3b9ca5]" />
            </div>
            <span className="text-2xl font-extrabold text-[#006370]">{stat.value}</span>
            <span className="text-xs text-gray-500 mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Packages */}
      <h3 className="text-xl font-bold text-gray-800 mb-6">Pilih Paket MCU Anda</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {loading ? (
          <div className="col-span-1 md:col-span-3 py-12 text-center text-gray-500">Memuat paket MCU...</div>
        ) : packages.map((pkg, i) => (
          <div
            key={i}
            className={`relative bg-white border-2 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 ${
              pkg.badge === "Terpopuler" ? "border-[#006370]" : "border-gray-100"
            }`}
          >
            {pkg.badge && (
              <div
                className="absolute top-0 right-0 text-white text-xs font-bold px-4 py-1 rounded-bl-xl"
                style={{ backgroundColor: pkg.color }}
              >
                {pkg.badge}
              </div>
            )}
            <div className="p-6 border-b border-gray-50">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ backgroundColor: `${pkg.color}18`, color: pkg.color }}
              >
                {pkg.name}
              </span>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{pkg.description}</p>
              <div className="text-3xl font-extrabold" style={{ color: pkg.color }}>
                {pkg.price}
              </div>
              <span className="text-gray-400 text-xs">per orang</span>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-3">
                {pkg.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: pkg.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 pt-0">
              <button
                className="w-full py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: pkg.color }}
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-[#006370] to-[#3b9ca5] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white text-xl font-bold mb-1">Butuh Paket MCU untuk Perusahaan?</h3>
          <p className="text-[#ccfbf1] text-sm max-w-md">
            Kami menyediakan layanan MCU korporasi dengan harga khusus, penjadwalan fleksibel, dan laporan kesehatan kolektif untuk karyawan Anda.
          </p>
        </div>
        <button className="shrink-0 bg-white text-[#006370] font-bold text-sm px-7 py-3 rounded-xl hover:bg-[#f0fdfa] transition-colors shadow">
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}
