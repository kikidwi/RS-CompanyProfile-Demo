import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

export default function AdminTentangKami() {
  const defaultData = {
    paragraf1: "Rumah Sakit Utama Demo merupakan rumah sakit umum bertipe A yang berfokus pada penyelenggaraan pelayanan kesehatan terpadu dengan standar internasional. Didirikan pada tahun 2005, kami berawal dari sebuah klinik kesehatan masyarakat kecil yang perlahan berkembang menjadi salah satu pusat rujukan unggulan di kawasan ini.",
    paragraf2: "Perjalanan panjang kami ditandai oleh semangat yang tidak pernah padam: memberikan perawatan medis terbaik dengan sentuhan kemanusiaan yang hangat. Kami percaya bahwa teknologi medis mutakhir dan dokter spesialis berpengalaman, apabila dipadukan dengan rasa empati yang tulus, akan menghasilkan pengalaman penyembuhan yang sesungguhnya bagi setiap pasien.",
    paragraf3: "Saat ini, Rumah Sakit Utama Demo melayani lebih dari 10.000 pasien rawat jalan dan 2.000 pasien rawat inap setiap bulannya, dengan dukungan lebih dari 500 tenaga medis dan non-medis yang terlatih dan berdedikasi tinggi.",
    keunggulan: [
      { title: "Empati", desc: "Kami melayani setiap pasien dengan kepedulian tulus, selayaknya merawat anggota keluarga sendiri. Pendekatan yang berpusat pada pasien (patient-centered care) menjadi fondasi dari setiap tindakan kami." },
      { title: "Profesionalisme", desc: "Seluruh tenaga medis kami menjunjung tinggi etika profesi dan terus memperbarui keilmuan melalui pelatihan dan sertifikasi internasional secara berkala." },
      { title: "Integritas", desc: "Kami berkomitmen untuk selalu transparan, jujur, dan mengutamakan keselamatan serta hak-hak setiap pasien di atas kepentingan lainnya." },
    ],
    akreditasi: "Komitmen kami terhadap mutu layanan telah diakui secara formal melalui berbagai proses akreditasi nasional dan internasional yang ketat. Rumah Sakit Utama Demo saat ini telah memperoleh status KARS Paripurna, KARS Internasional, serta akreditasi bergengsi dari Joint Commission International (JCI) — tiga standar tertinggi dalam dunia pelayanan kesehatan.",
  };

  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    async function fetchData() {
      try {
        const docSnap = await getDoc(doc(db, "profil", "tentang-kami"));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            paragraf1: data.paragraf1 || "",
            paragraf2: data.paragraf2 || "",
            paragraf3: data.paragraf3 || "",
            keunggulan: data.keunggulan || [
              { title: "", desc: "" },
              { title: "", desc: "" },
              { title: "", desc: "" },
            ],
            akreditasi: data.akreditasi || "",
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });
    try {
      await setDoc(doc(db, "profil", "tentang-kami"), formData);
      setMessage({ type: "success", text: "Data Tentang Kami berhasil disimpan!" });
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Gagal menyimpan data." });
    } finally {
      setSaving(false);
    }
  };

  const handleKeunggulanChange = (index: number, field: "title" | "desc", value: string) => {
    const updated = [...formData.keunggulan];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, keunggulan: updated });
  };

  if (loading) {
    return <div className="py-12 text-center text-gray-500">Memuat data...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
      {message.text && (
        <div className={`p-4 rounded-md ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {message.text}
        </div>
      )}

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Deskripsi Tentang Kami</h3>
        <p className="text-sm text-gray-500 mb-4">Teks yang ditampilkan di halaman Tentang Kami pada website publik.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Paragraf 1</label>
            <textarea rows={4} value={formData.paragraf1} onChange={(e) => setFormData({ ...formData, paragraf1: e.target.value })} className="block w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Paragraf 2</label>
            <textarea rows={4} value={formData.paragraf2} onChange={(e) => setFormData({ ...formData, paragraf2: e.target.value })} className="block w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Paragraf 3</label>
            <textarea rows={4} value={formData.paragraf3} onChange={(e) => setFormData({ ...formData, paragraf3: e.target.value })} className="block w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-1">Keunggulan Kami</h3>
        <p className="text-sm text-gray-500 mb-4">3 poin keunggulan yang ditampilkan di bawah deskripsi.</p>

        <div className="space-y-4">
          {formData.keunggulan.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 space-y-3">
              <p className="text-xs font-semibold text-gray-400 uppercase">Keunggulan {i + 1}</p>
              <input
                type="text"
                placeholder="Judul (misal: Empati)"
                value={item.title}
                onChange={(e) => handleKeunggulanChange(i, "title", e.target.value)}
                className="block w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <textarea
                rows={2}
                placeholder="Deskripsi singkat..."
                value={item.desc}
                onChange={(e) => handleKeunggulanChange(i, "desc", e.target.value)}
                className="block w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-1">Akreditasi & Penghargaan</h3>
        <textarea
          rows={4}
          value={formData.akreditasi}
          onChange={(e) => setFormData({ ...formData, akreditasi: e.target.value })}
          className="block w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex justify-end pt-4">
        <button type="submit" disabled={saving} className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none">
          {saving ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </form>
  );
}
