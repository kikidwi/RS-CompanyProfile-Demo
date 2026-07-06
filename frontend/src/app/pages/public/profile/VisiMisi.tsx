import { useState, useEffect } from "react";
import api from "../../../../lib/api";

const defaultData = {
  visi: "Menjadi Rumah Sakit Rujukan Nasional Terdepan yang Mengedepankan Pelayanan Medis Paripurna, Inovatif, dan Berkeadilan bagi Seluruh Lapisan Masyarakat di Tahun 2030.",
  misi: [
    "Memberikan pelayanan kesehatan yang aman, bermutu tinggi, dan berfokus pada keselamatan serta kepuasan pasien.",
    "Mengembangkan profesionalisme sumber daya manusia melalui program pendidikan, pelatihan, dan penelitian kesehatan yang berkelanjutan.",
    "Menyediakan fasilitas dan peralatan medis mutakhir yang ramah lingkungan dan memenuhi standar keamanan internasional.",
    "Melaksanakan tata kelola rumah sakit yang baik (Good Corporate Governance) secara transparan, akuntabel, dan bertanggung jawab.",
    "Membangun jejaring kemitraan strategis dengan institusi kesehatan, pendidikan, dan pemerintah untuk memperluas jangkauan layanan.",
  ],
  nilaiBudaya: [
    { label: "Berorientasi Pelayanan", desc: "Memahami kebutuhan masyarakat dan memberikan layanan yang ramah serta dapat diandalkan." },
    { label: "Akuntabel", desc: "Menyelesaikan tugas dengan jujur, bertanggung jawab, dan penuh integritas." },
    { label: "Kompeten", desc: "Terus meningkatkan kemampuan untuk menghadapi setiap tantangan." },
    { label: "Harmonis", desc: "Menghargai setiap orang tanpa memandang latar belakang." },
    { label: "Loyalitas", desc: "Menjaga nama baik institusi, pimpinan, dan negara." },
    { label: "Adaptif", desc: "Cepat menyesuaikan diri dengan perubahan dan terus berinovasi." },
    { label: "Kolaboratif", desc: "Bekerja sama dengan berbagai pihak untuk menghasilkan nilai tambah bersama." },
  ],
  tagline: "Health for All — Sehat untuk Semua",
};

export default function VisiMisi() {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/vision-missions');
        if (response.data) {
          const d = response.data;
          setData({
            visi: d.vision || defaultData.visi,
            misi: d.mission_items?.map((m: any) => m.description) || defaultData.misi,
            nilaiBudaya: d.cultural_values?.map((v: any) => ({ label: v.label, desc: v.description })) || defaultData.nilaiBudaya,
            tagline: d.tagline || defaultData.tagline,
          });
        }
      } catch (err) {
        console.error("Gagal memuat visi misi:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="w-full"
      style={{ fontFamily: "'Karla', sans-serif" }}
    >
      {/* Visi */}
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Visi</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full"></div>

      <div className="bg-[#006370] text-white rounded-xl px-8 py-6 mb-12">
        <p className="text-lg md:text-xl font-semibold leading-relaxed italic">
          "{data.visi}"
        </p>
      </div>

      {/* Misi */}
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Misi</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full"></div>

      <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
        Untuk mewujudkan visi tersebut, Rumah Sakit Utama Demo menetapkan misi-misi strategis sebagai berikut:
      </p>

      <ol className="space-y-4 mb-12">
        {data.misi.map((item, i) => (
          <li key={i} className="flex gap-4 text-gray-700 text-[15px] leading-relaxed">
            <span className="shrink-0 w-7 h-7 rounded-full bg-[#3b9ca5] text-white text-sm font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>

      <hr className="border-gray-100 mb-10" />

      {/* Nilai Budaya */}
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Nilai-Nilai Budaya Kerja</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full"></div>

      <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
        Seluruh aktivitas dan keputusan di Rumah Sakit Utama Demo dilandasi oleh nilai-nilai budaya kerja yang kami junjung tinggi:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-6">
        {data.nilaiBudaya.map((item) => (
          <div key={item.label} className="border-l-2 border-[#3b9ca5] pl-4 py-1">
            <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <hr className="border-gray-100 mb-8" />

      {/* Tagline */}
      <p className="text-gray-500 text-sm">
        <span className="font-semibold text-[#006370]">Tagline:</span>{" "}
        <em>"{data.tagline}"</em>
      </p>
    </div>
  );
}
