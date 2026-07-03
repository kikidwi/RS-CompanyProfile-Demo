import { useState, useEffect } from "react";
import api from "../../../../lib/api";
import {
  Clock,
  Phone,
  ShieldAlert,
  Coffee,
  ParkingCircle,
  Wifi,
  Baby,
  Utensils,
  ChevronDown,
  MapPin,
  AlertCircle,
  Ban,
  Heart,
  Info,
} from "lucide-react";

type InfoSection = {
  id: string;
  title: string;
  icon?: React.ElementType;
  color?: string;
  items: { label: string; value?: string; detail?: string; highlight?: boolean }[];
};

export const defaultSections: InfoSection[] = [
  {
    id: "jam-operasional",
    title: "Jam Operasional",
    icon: Clock,
    color: "#006370",
    items: [
      { label: "IGD (Instalasi Gawat Darurat)", value: "24 Jam / 7 Hari", highlight: true },
      { label: "Rawat Jalan (Poliklinik)", value: "Senin – Jumat: 07:30 – 20:00 WIB" },
      { label: "Rawat Jalan Sabtu", value: "Sabtu: 07:30 – 14:00 WIB" },
      { label: "Laboratorium Klinik", value: "Senin – Sabtu: 06:00 – 20:00 WIB" },
      { label: "Radiologi & Pencitraan", value: "Senin – Sabtu: 07:00 – 20:00 WIB" },
      { label: "Farmasi / Apotek RS", value: "24 Jam (IGD) | 07:00 – 21:00 WIB (Umum)" },
      { label: "Kasir & Administrasi", value: "Senin – Jumat: 07:00 – 20:00 WIB" },
      { label: "Medical Check-Up (MCU)", value: "Senin – Jumat: 07:00 – 12:00 WIB" },
    ],
  },
  {
    id: "kontak-darurat",
    title: "Kontak Darurat & Penting",
    icon: Phone,
    color: "#dc2626",
    items: [
      { label: "IGD / Emergency", value: "(021) 500 119", highlight: true },
      { label: "Contact Center RS", value: "1500 123" },
      { label: "WhatsApp CS", value: "0811 1234 5678" },
      { label: "Pendaftaran Online", value: "(021) 456 7890" },
      { label: "Bagian Rawat Inap", value: "(021) 456 7891" },
      { label: "Humas & Keluhan", value: "(021) 456 7892" },
      { label: "Email Resmi", value: "info@rsutemademo.id" },
      { label: "Alamat RS", value: "Jl. Kesehatan Raya No. 123, Jakarta Selatan 12345" },
    ],
  },
  {
    id: "kebijakan-pengunjung",
    title: "Kebijakan Pengunjung",
    icon: ShieldAlert,
    color: "#b45309",
    items: [
      { label: "Jam Besuk Pagi", value: "10:00 – 12:00 WIB", detail: "Maksimal 2 pengunjung per pasien" },
      { label: "Jam Besuk Sore", value: "17:00 – 19:00 WIB", detail: "Maksimal 2 pengunjung per pasien" },
      { label: "Anak-anak (< 12 tahun)", value: "Tidak diperkenankan masuk ke ruang rawat inap", highlight: true },
      { label: "Wajib Cuci Tangan", value: "Sebelum dan sesudah memasuki ruang pasien" },
      { label: "Masker", value: "Wajib digunakan di seluruh area klinik dan rawat inap" },
      { label: "Ruang ICU / ICCU / NICU", value: "Kunjungan terbatas — koordinasikan dengan perawat ruangan" },
      { label: "Hewan Peliharaan", value: "Dilarang dibawa masuk ke area rumah sakit" },
    ],
  },
  {
    id: "fasilitas-umum",
    title: "Fasilitas Umum",
    icon: Coffee,
    color: "#0d9488",
    items: [
      { label: "Wi-Fi Gratis", value: "Tersedia di seluruh area publik RS", detail: "SSID: RSUTama_Guest | Tanpa password" },
      { label: "Kafetaria & Kantin", value: "Lantai 1, buka 06:00 – 21:00 WIB" },
      { label: "ATM Center", value: "Lobby Utama Lantai 1 (BNI, BCA, Mandiri, BRI)" },
      { label: "Mushola", value: "Tersedia di setiap lantai (Lt. 1 – 6)" },
      { label: "Tempat Parkir", value: "Basement & Area Parkir Timur (kapasitas 500 kendaraan)" },
      { label: "Valet Parking", value: "Tersedia di pintu utama, 07:00 – 21:00 WIB" },
      { label: "Kios Kesehatan", value: "Lobby Utama Lt. 1 – buka 08:00 – 17:00 WIB" },
      { label: "Ruang Laktasi", value: "Tersedia di Poli Kebidanan (Lt. 3) dan Area Tunggu Utama" },
    ],
  },
  {
    id: "parkir",
    title: "Area Parkir & Aksesibilitas",
    icon: ParkingCircle,
    color: "#6d28d9",
    items: [
      { label: "Tarif Parkir Motor", value: "Rp 3.000 / jam pertama, Rp 2.000 / jam berikutnya" },
      { label: "Tarif Parkir Mobil", value: "Rp 5.000 / jam pertama, Rp 3.000 / jam berikutnya" },
      { label: "Parkir Disabilitas", value: "Tersedia 20 slot khusus dekat pintu masuk utama", highlight: true },
      { label: "Drop Zone Ambulans", value: "Akses khusus melalui Pintu Timur (Jl. Sehat Selatan)" },
      { label: "Kursi Roda", value: "Tersedia gratis di pintu masuk utama dan poli" },
      { label: "Lift Aksesibel", value: "Tersedia di semua lift dengan tombol Braille" },
      { label: "Ram / Jalur Kursi Roda", value: "Tersedia di semua area publik dan pintu masuk" },
    ],
  },
  {
    id: "larangan",
    title: "Larangan & Tata Tertib",
    icon: Ban,
    color: "#be185d",
    items: [
      { label: "Merokok", value: "Dilarang keras di seluruh area RS termasuk parkir", highlight: true },
      { label: "Membawa Senjata / Benda Berbahaya", value: "Dilarang tanpa izin dari Kepala Satpam" },
      { label: "Merekam / Memotret Pasien Lain", value: "Dilarang tanpa persetujuan — Pelanggaran privasi" },
      { label: "Keributan / Tindakan Kekerasan", value: "Dilarang — Pelanggar akan dilaporkan ke pihak berwajib" },
      { label: "Makan di Area Ruang Tunggu Poli", value: "Mohon menggunakan area kafetaria yang tersedia" },
      { label: "Berjualan / Berpromosi", value: "Dilarang tanpa izin manajemen RS" },
      { label: "Penggunaan HP di ICU", value: "Harap matikan HP atau mode pesawat di area ICU/ICCU" },
    ],
  },
];

const quickFacts = [
  { icon: Clock,  label: "IGD Aktif",    value: "24/7" },
  { icon: Heart,  label: "Dokter Spesialis", value: "50+" },
  { icon: MapPin, label: "Lantai",       value: "8 Lantai" },
  { icon: Wifi,   label: "Wi-Fi",        value: "Gratis" },
  { icon: Baby,   label: "NICU",         value: "Tersedia" },
  { icon: Utensils, label: "Kafetaria",  value: "3 Lokasi" },
];

function InfoAccordion({ section }: { section: InfoSection }) {
  const [open, setOpen] = useState(false);
  const color = section.color;
  const IconComp = section.icon as React.ElementType;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${color}15` }}
        >
          {IconComp && <IconComp size={20} style={{ color }} />}
        </div>
        <span className="flex-1 text-left text-base font-bold text-gray-800">{section.title}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="border-t border-gray-50 divide-y divide-gray-50">
          {section.items.map((item, i) => (
            <div
              key={i}
              className={`px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 ${
                item.highlight ? "bg-opacity-5" : ""
              }`}
              style={item.highlight ? { backgroundColor: `${color}08` } : {}}
            >
              <span className={`text-sm font-medium ${item.highlight ? "font-semibold" : "text-gray-600"}`}
                style={item.highlight ? { color } : {}}>
                {item.label}
              </span>
              <div className="sm:text-right">
                <p className={`text-sm ${item.highlight ? "font-bold" : "text-gray-800"}`}
                  style={item.highlight ? { color } : {}}>
                  {item.value}
                </p>
                {item.detail && (
                  <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function InformasiPenting() {
  const [sectionsData, setSectionsData] = useState<InfoSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/information?type=info-penting');
        if (response.data && response.data.length > 0) {
          const items: InfoSection[] = [];
          response.data.forEach((d: any) => {
            const data = { id: d.content.id || d.id.toString(), ...d.content } as InfoSection;
            const def = defaultSections.find(s => s.id === data.id);
            items.push({
              ...data,
              icon: def?.icon || Info,
              color: def?.color || "#006370",
            });
          });
          
          const orderMap = new Map(defaultSections.map((s, i) => [s.id, i]));
          items.sort((a, b) => (orderMap.get(a.id) || 0) - (orderMap.get(b.id) || 0));
          
          setSectionsData(items);
        } else {
          setSectionsData(defaultSections);
        }
      } catch (err) {
        console.error("Gagal memuat info penting:", err);
        setSectionsData(defaultSections);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Memuat data...</div>;
  }

  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Informasi Penting</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-3xl">
        Panduan lengkap tentang operasional, fasilitas, dan tata tertib di lingkungan RS Utama Demo. Informasi ini untuk membantu Anda dan keluarga mendapatkan pelayanan yang nyaman dan aman.
      </p>

      {/* Notice Banner */}
      <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 mb-8 max-w-3xl">
        <Info size={16} className="text-blue-500 shrink-0 mt-0.5" />
        <p className="text-blue-700 text-sm leading-relaxed">
          Informasi jam dan kebijakan dapat berubah sewaktu-waktu. Selalu konfirmasi ke petugas atau hubungi Contact Center kami di <strong>1500 123</strong> untuk informasi terkini.
        </p>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
        {quickFacts.map((fact, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-9 h-9 rounded-full bg-[#f0fdfa] flex items-center justify-center mb-2">
              <fact.icon size={17} className="text-[#3b9ca5]" />
            </div>
            <span className="text-base font-extrabold text-[#006370]">{fact.value}</span>
            <span className="text-[11px] text-gray-400 mt-0.5 leading-tight">{fact.label}</span>
          </div>
        ))}
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {sectionsData.map((section) => (
          <InfoAccordion key={section.id} section={section} />
        ))}
      </div>

      {/* Emergency CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 p-7 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
            <AlertCircle size={28} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-0.5">Darurat Medis?</h3>
            <p className="text-red-100 text-sm">Segera hubungi IGD kami yang beroperasi 24 jam tanpa henti.</p>
          </div>
        </div>
        <a
          href="tel:021500119"
          className="shrink-0 bg-white text-red-600 font-extrabold text-lg px-8 py-3 rounded-xl hover:bg-red-50 transition-colors shadow flex items-center gap-2"
        >
          <Phone size={18} /> (021) 500 119
        </a>
      </div>
    </div>
  );
}
