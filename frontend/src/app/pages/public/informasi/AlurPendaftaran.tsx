import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import {
  ClipboardList,
  MonitorSmartphone,
  Ambulance,
  BedDouble,
  CheckCircle2,
  ChevronDown,
  FileText,
  AlertCircle,
} from "lucide-react";

type RegistrationType = "rawat-jalan" | "rawat-inap" | "igd" | "online";

type RegistrationFlow = {
  id: RegistrationType;
  label: string;
  icon?: React.ElementType; // Optional because firestore doesn't have it
  color?: string; // Optional
  description: string;
  steps: { title: string; detail: string }[];
  requirements: string[];
};

export const defaultFlows: RegistrationFlow[] = [
  {
    id: "rawat-jalan",
    label: "Rawat Jalan",
    icon: ClipboardList,
    color: "#006370",
    description:
      "Proses pendaftaran untuk pasien yang memerlukan pemeriksaan dan pengobatan tanpa rawat inap. Pendaftaran dapat dilakukan di loket atau secara online.",
    steps: [
      {
        title: "Ambil Nomor Antrian",
        detail:
          "Ambil nomor antrian di mesin antrian otomatis (ADM) di lantai 1 atau melalui aplikasi RS Digital sebelum datang.",
      },
      {
        title: "Daftar di Loket Admisi",
        detail:
          "Serahkan KTP, Kartu BPJS/Asuransi, dan surat rujukan (jika ada) kepada petugas admisi. Pasien baru wajib mengisi formulir data diri.",
      },
      {
        title: "Verifikasi & Pembayaran",
        detail:
          "Petugas memverifikasi data dan jenis jaminan. Pasien umum menyelesaikan pembayaran administrasi awal. Pasien BPJS/Asuransi mengikuti prosedur verifikasi.",
      },
      {
        title: "Menuju Poliklinik",
        detail:
          "Setelah mendapat SIM-RS (Surat Identitas Masuk), pasien menuju poliklinik yang dituju dan menunggu panggilan dokter.",
      },
      {
        title: "Pemeriksaan Dokter",
        detail:
          "Dokter melakukan anamnesis, pemeriksaan fisik, dan memberikan resep/penanganan. Jika dibutuhkan pemeriksaan lanjutan, dokter akan memberikan surat pengantar.",
      },
      {
        title: "Penyelesaian Administrasi",
        detail:
          "Ambil resep di apotek RS atau jalani pemeriksaan penunjang (lab/radiologi) jika diinstruksikan. Selesaikan pembayaran final di kasir sebelum pulang.",
      },
    ],
    requirements: [
      "KTP / Kartu Identitas yang masih berlaku",
      "Kartu BPJS Kesehatan (jika menggunakan BPJS)",
      "Kartu anggota asuransi swasta (jika ada)",
      "Surat rujukan dari Faskes Tingkat 1 (khusus BPJS non-emergency)",
      "Hasil pemeriksaan sebelumnya (jika ada, untuk kunjungan lanjutan)",
    ],
  },
  {
    id: "rawat-inap",
    label: "Rawat Inap",
    icon: BedDouble,
    color: "#3b9ca5",
    description:
      "Pasien rawat inap adalah pasien yang memerlukan perawatan dan observasi minimal 24 jam di rumah sakit atas rekomendasi dokter.",
    steps: [
      {
        title: "Rekomendasi Dokter",
        detail:
          "Keputusan rawat inap diberikan oleh dokter IGD, dokter spesialis rawat jalan, atau dokter yang merujuk. Dokter menerbitkan surat perintah rawat inap (SPRI).",
      },
      {
        title: "Pendaftaran di Admisi Rawat Inap",
        detail:
          "Keluarga/pendamping mendaftarkan pasien di loket Admisi Rawat Inap dengan membawa SPRI dan dokumen identitas. Pilih kelas kamar yang tersedia dan sesuai jaminan.",
      },
      {
        title: "Verifikasi Jaminan",
        detail:
          "Petugas memverifikasi jenis jaminan (umum, BPJS, atau asuransi swasta) dan ketersediaan kamar. Pasien umum diwajibkan membayar uang muka perawatan.",
      },
      {
        title: "Transfer ke Ruang Perawatan",
        detail:
          "Pasien dipindahkan ke bangsal/kamar perawatan yang telah ditentukan oleh petugas. Tim perawat melakukan serah terima dan orientasi kamar kepada pasien dan keluarga.",
      },
      {
        title: "Perawatan & Observasi",
        detail:
          "Dokter DPJP (Dokter Penanggung Jawab Pasien) melakukan visite setiap hari. Tim perawat memantau kondisi pasien 24 jam dan memberikan obat serta tindakan sesuai instruksi.",
      },
      {
        title: "Proses Pulang (Discharge)",
        detail:
          "Dokter DPJP memberikan instruksi pulang. Keluarga menyelesaikan administrasi di kasir dan menerima resume medis, resep obat pulang, serta jadwal kontrol.",
      },
    ],
    requirements: [
      "KTP Pasien dan Penanggung Jawab",
      "Kartu BPJS / Asuransi yang berlaku",
      "Surat Perintah Rawat Inap (SPRI) dari dokter",
      "Surat Rujukan (untuk pasien BPJS dari Faskes 1)",
      "Uang muka rawat inap (untuk pasien umum)",
      "Formulir persetujuan tindakan medis (ditandatangani di RS)",
    ],
  },
  {
    id: "igd",
    label: "IGD / Darurat",
    icon: Ambulance,
    color: "#dc2626",
    description:
      "Instalasi Gawat Darurat (IGD) melayani pasien 24 jam tanpa henti untuk kondisi yang mengancam jiwa atau memerlukan penanganan segera.",
    steps: [
      {
        title: "Tiba di IGD",
        detail:
          "Pasien tiba di IGD, baik mandiri maupun diantar ambulans. Jangan menunggu di loket pendaftaran — langsung masuk ke area IGD dan beritahu petugas.",
      },
      {
        title: "Triase (Klasifikasi Kegawatan)",
        detail:
          "Perawat triase menilai kondisi pasien dalam waktu ≤ 5 menit menggunakan sistem triase 5 level (P1: kritis, P2: gawat, P3: urgent, P4: tidak urgent, P5: non-urgent).",
      },
      {
        title: "Penanganan Medis Segera",
        detail:
          "Pasien prioritas P1/P2 langsung ditangani di ruang resusitasi. Dokter IGD memberikan terapi awal, pemeriksaan penunjang (lab, EKG, Rontgen), dan konsultasi spesialis.",
      },
      {
        title: "Pendaftaran Administratif",
        detail:
          "Setelah kondisi terstabilkan, keluarga/pendamping melengkapi administrasi pendaftaran IGD. Dokumen dapat dilengkapi menyusul dalam kondisi darurat.",
      },
      {
        title: "Keputusan: Pulang / Rawat Inap / Rujuk",
        detail:
          "Dokter IGD menentukan disposisi: pasien boleh pulang, perlu rawat inap, diobservasi di HCU/ICU, atau dirujuk ke RS yang lebih mampu.",
      },
    ],
    requirements: [
      "KTP / identitas (dapat dilengkapi kemudian dalam kondisi darurat)",
      "Kartu BPJS / Asuransi (jika ada)",
      "Penanganan medis TIDAK PERNAH ditolak karena alasan administrasi",
      "IGD BUKA 24 JAM, 7 HARI SEMINGGU",
    ],
  },
  {
    id: "online",
    label: "Pendaftaran Online",
    icon: MonitorSmartphone,
    color: "#6d28d9",
    description:
      "Daftarkan kunjungan rawat jalan Anda secara online melalui website atau aplikasi RS. Hemat waktu dan hindari antrean panjang.",
    steps: [
      {
        title: "Buka Portal / Aplikasi",
        detail:
          "Kunjungi website pendaftaran online di pendaftaran.rsutemademo.id atau unduh aplikasi 'RS Utama Digital' di App Store / Google Play.",
      },
      {
        title: "Login / Buat Akun",
        detail:
          "Pasien baru wajib membuat akun dengan NIK dan nomor handphone. Pasien lama dapat langsung login menggunakan akun yang sudah terdaftar.",
      },
      {
        title: "Pilih Dokter & Jadwal",
        detail:
          "Pilih spesialisasi, dokter yang diinginkan, dan tanggal kunjungan yang tersedia. Sistem menampilkan ketersediaan slot secara real-time.",
      },
      {
        title: "Isi Data & Keluhan",
        detail:
          "Isi formulir keluhan singkat, unggah dokumen jaminan, dan konfirmasi pemesanan. Anda akan menerima nomor booking dan estimasi waktu kunjungan.",
      },
      {
        title: "Datang ke RS Sesuai Jadwal",
        detail:
          "Tunjukkan nomor booking / QR Code kepada petugas loket pendaftaran online (Desk E). Pastikan datang 30 menit sebelum jadwal.",
      },
    ],
    requirements: [
      "KTP / NIK yang valid",
      "Nomor HP aktif (untuk OTP dan notifikasi)",
      "Kartu BPJS / Asuransi (foto/scan untuk diunggah)",
      "Surat rujukan digital (khusus pasien BPJS)",
      "Nomor rekam medis (untuk pasien yang pernah berobat sebelumnya)",
    ],
  },
];

function RequirementAccordion({ requirements }: { requirements: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden mt-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <span className="flex items-center gap-2">
          <FileText size={15} className="text-[#3b9ca5]" /> Persyaratan Dokumen
        </span>
        <ChevronDown size={15} className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="px-5 py-4 space-y-2 bg-white">
          {requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 size={15} className="text-[#3b9ca5] shrink-0 mt-0.5" />
              {req}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function AlurPendaftaran() {
  const [active, setActive] = useState<RegistrationType>("rawat-jalan");
  const [flowsData, setFlowsData] = useState<RegistrationFlow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snap = await getDocs(collection(db, "informasi_alur"));
        if (!snap.empty) {
          const items: RegistrationFlow[] = [];
          snap.forEach(doc => {
            const data = doc.data() as RegistrationFlow;
            // Merge with default to get icon and color
            const def = defaultFlows.find(f => f.id === data.id);
            items.push({
              ...data,
              icon: def?.icon || ClipboardList,
              color: def?.color || "#006370",
            });
          });
          
          // Sort to match defaultFlows order
          const orderMap = new Map(defaultFlows.map((f, i) => [f.id, i]));
          items.sort((a, b) => (orderMap.get(a.id) || 0) - (orderMap.get(b.id) || 0));
          
          setFlowsData(items);
        } else {
          setFlowsData(defaultFlows);
        }
      } catch (err) {
        console.error("Gagal memuat alur:", err);
        setFlowsData(defaultFlows);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Memuat data...</div>;
  }

  const flow = flowsData.find((f) => f.id === active) || flowsData[0];
  const FlowIcon = flow.icon as React.ElementType;

  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Alur Pendaftaran Pasien</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-3xl">
        Kami menyediakan berbagai jalur pendaftaran untuk memudahkan akses pasien mendapatkan layanan kesehatan. Pilih jenis pendaftaran sesuai kebutuhan Anda.
      </p>

      {/* Type Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {flowsData.map((f) => {
          const IconComp = f.icon as React.ElementType;
          return (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                active === f.id
                  ? "border-transparent text-white shadow-lg scale-105"
                  : "bg-white border-gray-100 text-gray-600 hover:border-gray-200 hover:shadow"
              }`}
              style={active === f.id ? { backgroundColor: f.color } : {}}
            >
              {IconComp && <IconComp size={24} style={active === f.id ? { color: "#fff" } : { color: f.color }} />}
              <span className="text-sm font-bold">{f.label}</span>
            </button>
          );
        })}
      </div>

      {/* Flow Detail */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center gap-4"
          style={{ backgroundColor: `${flow.color}10`, borderBottom: `2px solid ${flow.color}20` }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: flow.color }}
          >
            {FlowIcon && <FlowIcon size={22} className="text-white" />}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{flow.label}</h3>
            <p className="text-sm text-gray-500 max-w-2xl">{flow.description}</p>
          </div>
        </div>

        {/* Steps */}
        <div className="p-6">
          {flow.id === "igd" && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-6">
              <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-700 leading-relaxed">
                <strong>Penting:</strong> Dalam kondisi darurat, <strong>utamakan keselamatan jiwa</strong>. Administrasi dapat diselesaikan kemudian. IGD kami buka <strong>24 jam</strong>, setiap hari.
              </p>
            </div>
          )}

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-5 bottom-5 w-0.5"
              style={{ backgroundColor: `${flow.color}25` }}
            />
            <div className="space-y-6">
              {flow.steps.map((step, i) => (
                <div key={i} className="flex gap-5 relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-extrabold shrink-0 z-10"
                    style={{ backgroundColor: flow.color }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 pb-2">
                    <h4 className="font-bold text-gray-900 text-[15px] mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <RequirementAccordion requirements={flow.requirements} />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#006370] to-[#3b9ca5] p-7 flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <h3 className="text-white font-bold text-lg mb-1">Ada pertanyaan tentang proses pendaftaran?</h3>
          <p className="text-[#ccfbf1] text-sm">Hubungi tim Customer Care kami yang siap membantu 24 jam.</p>
        </div>
        <button className="shrink-0 bg-white text-[#006370] font-bold text-sm px-7 py-3 rounded-xl hover:bg-[#f0fdfa] transition-colors shadow">
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}
