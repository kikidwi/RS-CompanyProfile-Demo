import { MapPin, Phone, Bus, Train, Car, Clock, Navigation } from "lucide-react";

const routes = [
  {
    icon: Bus,
    mode: "TransJakarta",
    detail: "Koridor 1 — Turun di Halte \"Kesehatan Raya\", berjalan ±100 meter ke arah utara menuju pintu masuk utama.",
  },
  {
    icon: Train,
    mode: "MRT / KRL",
    detail: "Stasiun MRT Blok M (terdekat). Lanjutkan dengan angkutan feeder atau ojek daring, estimasi ±5 menit perjalanan.",
  },
  {
    icon: Car,
    mode: "Kendaraan Pribadi",
    detail: "Akses via Jalan Tol Dalam Kota — keluar di Gerbang Tol Senayan. Gedung parkir 5 lantai tersedia dengan kapasitas >500 kendaraan.",
  },
  {
    icon: Navigation,
    mode: "Ojek / Taksi Online",
    detail: "Tersedia area penjemputan dan pengantaran (drop-off zone) khusus di sisi barat gedung utama, dekat pintu IGD.",
  },
];

const operasional = [
  { label: "Poli Rawat Jalan", jam: "Senin – Jumat, 07.00 – 15.00 WIB" },
  { label: "IGD (Gawat Darurat)", jam: "24 Jam / 7 Hari" },
  { label: "Rawat Inap", jam: "24 Jam / 7 Hari" },
  { label: "Administrasi & Pendaftaran", jam: "Senin – Sabtu, 07.00 – 20.00 WIB" },
  { label: "Apotek", jam: "Senin – Sabtu, 07.00 – 21.00 WIB" },
];

export default function MapAksesibilitas() {
  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Aksesibilitas RS</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-8 rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* LEFT — Map + Address */}
        <div className="lg:col-span-3 flex flex-col gap-6">

          {/* Embedded Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Lokasi Rumah Sakit"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6!2d106.79!3d-6.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDcnMjQuMCJF!5e0!3m2!1sen!2sid!4v1609459200000"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address Block */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex gap-3 items-start bg-[#f0f9fa] border border-[#3b9ca5]/20 rounded-xl p-4">
              <MapPin size={20} className="text-[#3b9ca5] mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-gray-800 text-sm mb-0.5">Alamat</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Jl. Kesehatan Raya No. 123, Kec. Kebayoran Baru,<br />
                  Jakarta Selatan, DKI Jakarta 12345
                </p>
              </div>
            </div>
            <div className="flex-1 flex gap-3 items-start bg-[#f0f9fa] border border-[#3b9ca5]/20 rounded-xl p-4">
              <Phone size={20} className="text-[#3b9ca5] mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-gray-800 text-sm mb-0.5">Kontak Darurat</p>
                <p className="text-gray-600 text-sm">Contact Center: <span className="font-semibold text-[#006370]">1500 123</span></p>
                <p className="text-gray-600 text-sm">IGD: <span className="font-semibold text-[#006370]">(021) 123 4567</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Transport + Hours */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          {/* Transportation */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Cara Menuju RS</h3>
            <div className="flex flex-col gap-4">
              {routes.map(({ icon: Icon, mode, detail }) => (
                <div key={mode} className="flex gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-[#006370] flex items-center justify-center">
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{mode}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Jam Operasional */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock size={18} className="text-[#3b9ca5]" />
              <h3 className="text-lg font-bold text-gray-800">Jam Operasional</h3>
            </div>
            <div className="flex flex-col gap-2">
              {operasional.map(({ label, jam }) => (
                <div key={label} className="flex justify-between items-start gap-4 py-2 border-b border-gray-50 last:border-0">
                  <p className="text-gray-700 text-sm font-medium">{label}</p>
                  <p className="text-[#006370] text-sm font-semibold text-right shrink-0">{jam}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
