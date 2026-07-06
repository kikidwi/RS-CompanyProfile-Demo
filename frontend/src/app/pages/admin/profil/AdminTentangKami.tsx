import { useState, useEffect } from "react";
import api from "../../../../lib/api";

export default function AdminTentangKami() {
  const defaultData = {
    paragraf1: "",
    paragraf2: "",
    paragraf3: "",
    keunggulan: [
      { title: "", desc: "" },
      { title: "", desc: "" },
      { title: "", desc: "" },
    ],
    akreditasi: "",
  };

  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [dbId, setDbId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/about-us');
        if (response.data) {
          const data = response.data;
          setDbId(data.id);
          setFormData({
            paragraf1: data.paragraph_1 || "",
            paragraf2: data.paragraph_2 || "",
            paragraf3: data.paragraph_3 || "",
            keunggulan: data.strengths?.length ? data.strengths.map((s: any) => ({ title: s.title, desc: s.description })) : defaultData.keunggulan,
            akreditasi: data.accreditation || "",
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
      const payload = {
        paragraph_1: formData.paragraf1,
        paragraph_2: formData.paragraf2,
        paragraph_3: formData.paragraf3,
        accreditation: formData.akreditasi,
        strengths: formData.keunggulan.map(k => ({ title: k.title, description: k.desc }))
      };
      
      const res = await api.post('/about-us', payload);
      setDbId(res.data.id);
      
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
