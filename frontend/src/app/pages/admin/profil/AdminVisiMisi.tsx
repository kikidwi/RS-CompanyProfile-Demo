import { useState, useEffect } from "react";
import api from "../../../../lib/api";

export default function AdminVisiMisi() {
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

  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [dbId, setDbId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/profiles?type=visi-misi');
        if (response.data && response.data.length > 0) {
          const item = response.data[0];
          setDbId(item.id);
          if (item.content) {
            const data = item.content;
            setFormData({
              visi: data.visi || "",
              misi: data.misi || ["", "", "", "", ""],
              nilaiBudaya: data.nilaiBudaya || formData.nilaiBudaya,
              tagline: data.tagline || "",
            });
          }
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
      const payload = { type: 'visi-misi', content: formData };
      if (dbId) {
        await api.put(`/profiles/${dbId}`, payload);
      } else {
        const res = await api.post('/profiles', payload);
        setDbId(res.data.id);
      }
      setMessage({ type: "success", text: "Data Visi & Misi berhasil disimpan!" });
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Gagal menyimpan data." });
    } finally {
      setSaving(false);
    }
  };

  const handleMisiChange = (index: number, value: string) => {
    const updated = [...formData.misi];
    updated[index] = value;
    setFormData({ ...formData, misi: updated });
  };

  const handleNilaiChange = (index: number, field: "label" | "desc", value: string) => {
    const updated = [...formData.nilaiBudaya];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, nilaiBudaya: updated });
  };

  const addMisi = () => {
    const newIndex = formData.misi.length;
    setFormData({ ...formData, misi: [...formData.misi, ""] });
    setTimeout(() => {
      const el = document.getElementById(`misi-${newIndex}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.querySelector("textarea")?.focus();
      }
    }, 100);
  };
  const removeMisi = (index: number) => {
    const updated = formData.misi.filter((_, i) => i !== index);
    setFormData({ ...formData, misi: updated });
  };

  const addNilai = () => {
    const newIndex = formData.nilaiBudaya.length;
    setFormData({ ...formData, nilaiBudaya: [...formData.nilaiBudaya, { label: "", desc: "" }] });
    setTimeout(() => {
      const el = document.getElementById(`nilai-${newIndex}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.querySelector("input")?.focus();
      }
    }, 100);
  };
  const removeNilai = (index: number) => {
    const updated = formData.nilaiBudaya.filter((_, i) => i !== index);
    setFormData({ ...formData, nilaiBudaya: updated });
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

      {/* Visi */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Visi</h3>
        <p className="text-sm text-gray-500 mb-3">Pernyataan visi rumah sakit.</p>
        <textarea rows={3} value={formData.visi} onChange={(e) => setFormData({ ...formData, visi: e.target.value })} className="block w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>

      {/* Misi */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Misi</h3>
            <p className="text-sm text-gray-500">Daftar poin-poin misi rumah sakit.</p>
          </div>
          <button type="button" onClick={addMisi} className="text-sm text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 font-medium px-3 py-1.5 rounded-md transition-colors">+ Tambah Misi</button>
        </div>
        <div className="space-y-3">
          {formData.misi.map((item, i) => (
            <div key={i} id={`misi-${i}`} className="flex gap-2 items-start">
              <span className="shrink-0 w-7 h-7 rounded-full bg-gray-200 text-gray-600 text-xs font-bold flex items-center justify-center mt-1">{i + 1}</span>
              <textarea rows={2} value={item} onChange={(e) => handleMisiChange(i, e.target.value)} className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
              {formData.misi.length > 1 && (
                <button type="button" onClick={() => removeMisi(i)} className="text-red-400 hover:text-red-600 text-sm mt-1">✕</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Nilai Budaya */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Nilai-Nilai Budaya Kerja</h3>
            <p className="text-sm text-gray-500">Nilai budaya kerja beserta deskripsinya.</p>
          </div>
          <button type="button" onClick={addNilai} className="text-sm text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 font-medium px-3 py-1.5 rounded-md transition-colors">+ Tambah Nilai</button>
        </div>
        <div className="space-y-3">
          {formData.nilaiBudaya.map((item, i) => (
            <div key={i} id={`nilai-${i}`} className="border border-gray-200 rounded-lg p-4 space-y-2 transition-all">
              <div className="flex justify-between items-center">
                <p className="text-xs font-semibold text-gray-400 uppercase">Nilai {i + 1}</p>
                {formData.nilaiBudaya.length > 1 && (
                  <button type="button" onClick={() => removeNilai(i)} className="text-red-400 hover:text-red-600 text-xs">Hapus</button>
                )}
              </div>
              <input type="text" placeholder="Nama Nilai (misal: Kompeten)" value={item.label} onChange={(e) => handleNilaiChange(i, "label", e.target.value)} className="block w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
              <input type="text" placeholder="Deskripsi singkat..." value={item.desc} onChange={(e) => handleNilaiChange(i, "desc", e.target.value)} className="block w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-1">Tagline</h3>
        <input type="text" value={formData.tagline} onChange={(e) => setFormData({ ...formData, tagline: e.target.value })} className="block w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder='misal: "Health for All — Sehat untuk Semua"' />
      </div>

      <div className="flex justify-end pt-4">
        <button type="submit" disabled={saving} className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none">
          {saving ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </form>
  );
}
