import { useState, useEffect } from "react";
import * as lucideIcons from "lucide-react";
import { ShieldCheck, Clock, Star, ThumbsUp, AlertCircle } from "lucide-react";
import api from "../../../../lib/api";

export const defaultMaklumatItems = [
  {
    no: "01",
    title: "Standar Keselamatan Pasien",
    icon: ShieldCheck,
    color: "#006370",
    description:
      "Kami berkomitmen memberikan pelayanan yang aman bagi setiap pasien. Seluruh tenaga medis wajib mengikuti protokol keselamatan pasien yang ditetapkan oleh Komite Keselamatan Pasien Rumah Sakit (KKPRS) sesuai standar nasional.",
    points: [
      "Identifikasi pasien dengan minimal 2 identitas",
      "Komunikasi efektif antar tenaga kesehatan (SBAR)",
      "Ketepatan pemberian obat dan tindakan medis",
      "Pencegahan infeksi nosokomial (HAIs)",
      "Pencegahan risiko jatuh pada pasien",
    ],
  },
  {
    no: "02",
    title: "Standar Waktu Tunggu Pelayanan",
    icon: Clock,
    color: "#3b9ca5",
    description:
      "Kami berkomitmen memberikan pelayanan yang cepat dan tepat waktu. Berikut adalah standar waktu tunggu yang kami terapkan di seluruh unit pelayanan:",
    points: [
      "IGD: Triase & penanganan awal ≤ 5 menit",
      "Rawat Jalan: Waktu tunggu dokter ≤ 60 menit",
      "Radiologi: Hasil foto ≤ 3 jam (reguler)",
      "Laboratorium: Hasil pemeriksaan darah ≤ 2 jam",
      "Kamar Operasi Elektif: Waktu tunggu ≤ 2 hari",
    ],
  },
  {
    no: "03",
    title: "Standar Mutu & Kepuasan Pasien",
    icon: Star,
    color: "#b45309",
    description:
      "Pengukuran mutu pelayanan dilakukan secara berkala melalui survei kepuasan pasien dan audit klinis internal. Hasil pengukuran digunakan sebagai dasar peningkatan berkelanjutan.",
    points: [
      "Indeks Kepuasan Masyarakat (IKM) ≥ 80%",
      "Angka kematian pasien IGD ≤ 2,5‰",
      "Angka infeksi luka operasi ≤ 1,5%",
      "Audit rekam medis 100% kelengkapan",
      "Survei kepuasan dilakukan setiap 3 bulan",
    ],
  },
  {
    no: "04",
    title: "Hak & Kewajiban Pasien",
    icon: ThumbsUp,
    color: "#6d28d9",
    description:
      "Setiap pasien memiliki hak yang dilindungi oleh undang-undang dan wajib dipenuhi oleh rumah sakit. Pasien juga memiliki kewajiban yang harus dipahami selama proses perawatan.",
    points: [
      "Hak mendapatkan informasi diagnosis & tindakan",
      "Hak menolak tindakan medis setelah diberi informasi",
      "Hak mendapatkan rekam medis atas permintaan",
      "Kewajiban jujur tentang kondisi kesehatan",
      "Kewajiban mengikuti aturan dan prosedur RS",
    ],
  },
];

export default function MaklumatPelayanan() {
  const [maklumat, setMaklumat] = useState(defaultMaklumatItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/service-pledges');
        if (response.data && response.data.length > 0) {
          const items = response.data.map((d: any) => ({
            id: d.id.toString(),
            no: d.no,
            title: d.title,
            icon: (lucideIcons as any)[d.icon] || AlertCircle,
            color: d.color,
            description: d.description,
            points: d.points ? d.points.map((p: any) => p.point) : [],
            sort_order: d.sort_order || 0
          }));
          items.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
          setMaklumat(items);
        }
      } catch (err) {
        console.error("Gagal memuat Maklumat dari Firebase:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      {/* Header */}
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Maklumat Standar Pelayanan</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-4 max-w-3xl">
        Kami mempublikasikan standar pelayanan secara terbuka sebagai bentuk akuntabilitas dan transparansi kepada masyarakat. Maklumat ini disusun berdasarkan peraturan perundang-undangan yang berlaku dan akreditasi RS.
      </p>

      {/* Alert */}
      <div className="flex items-start gap-3 bg-[#fffbeb] border border-[#fde68a] rounded-xl px-5 py-4 mb-10 max-w-3xl">
        <AlertCircle size={18} className="text-[#b45309] shrink-0 mt-0.5" />
        <p className="text-[#92400e] text-sm leading-relaxed">
          Dokumen ini merupakan versi publik dari Maklumat Pelayanan. Untuk dokumen resmi dan lengkap, silakan menghubungi bagian <strong>Humas & Pemasaran</strong> RS atau mengakses dokumen di papan pengumuman resmi rumah sakit.
        </p>
      </div>

      {/* Maklumat Items */}
      <div className="space-y-8">
        {loading ? (
          <div className="py-12 text-center text-gray-500">Memuat maklumat pelayanan...</div>
        ) : maklumat.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
          >
            {/* Card Header */}
            <div
              className="px-6 py-4 flex items-center gap-4"
              style={{ backgroundColor: `${item.color}12`, borderBottom: `1px solid ${item.color}22` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: item.color }}
              >
                <item.icon size={22} className="text-white" />
              </div>
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: item.color }}
                >
                  Standar {item.no}
                </span>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              <ul className="space-y-2">
                {item.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center text-gray-400 text-sm border-t border-gray-100 pt-8">
        <p>Maklumat ini ditinjau dan diperbarui setiap tahun oleh Komite Mutu Rumah Sakit.</p>
        <p className="mt-1">Berlaku sejak: <strong className="text-gray-600">1 Januari 2025</strong> &nbsp;|&nbsp; Versi: <strong className="text-gray-600">3.2</strong></p>
      </div>
    </div>
  );
}
