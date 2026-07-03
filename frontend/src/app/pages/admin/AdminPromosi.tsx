import { useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { logActivity } from "../../../lib/activity";
import { Plus, Trash2, Pencil, X, Upload, Image as ImageIcon } from "lucide-react";
import { defaultPromos, Promo, categories, Category } from "../public/Promosi";

export default function AdminPromosi() {
  const [data, setData] = useState<Promo[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Promo>({
    title: "",
    category: "Paket Kesehatan",
    image: "",
    desc: "",
  });

  const fetchData = async () => {
    try {
      const snap = await getDocs(collection(db, "promosi"));
      const items: Promo[] = [];
      snap.forEach(doc => items.push({ id: doc.id, ...doc.data() } as Promo));
      items.sort((a, b) => (a.order || 0) - (b.order || 0));
      setData(items);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal memuat data promosi" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (promo?: Promo) => {
    if (promo) {
      setFormData(promo);
    } else {
      setFormData({
        title: "",
        category: "Paket Kesehatan",
        image: "",
        desc: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      const id = formData.id || Date.now().toString();
      const payload = { ...formData, id };

      await setDoc(doc(db, "promosi", id), payload);
      await logActivity(formData.id ? 'UPDATE' : 'CREATE', 'Promosi', `Promo ${payload.title}`);
      
      setMessage({ type: "success", text: "Promo berhasil disimpan!" });
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Terjadi kesalahan saat menyimpan data." });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (confirm("Yakin ingin menghapus promo ini?")) {
      try {
        const docItem = data.find(d => d.id === id);
        await deleteDoc(doc(db, "promosi", id));
        await logActivity('DELETE', 'Promosi', `Promo ${docItem?.title || 'ID ' + id}`);
        setMessage({ type: "success", text: "Promo berhasil dihapus!" });
        fetchData();
      } catch (err) {
        console.error(err);
        setMessage({ type: "error", text: "Gagal menghapus data." });
      }
    }
  };

  const handleLoadDefault = async () => {
    if (!confirm("Ini akan menambahkan data promosi default ke database. Lanjutkan?")) return;
    setSaving(true);
    try {
      for (let i = 0; i < defaultPromos.length; i++) {
        const promo = defaultPromos[i];
        const id = `default-${i}`;
        await setDoc(doc(db, "promosi", id), { ...promo, order: i });
      }
      await logActivity('SYSTEM', 'Promosi', 'Import data default promosi');
      setMessage({ type: "success", text: "Data default berhasil dimuat!" });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal memuat data default." });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Memuat data...</div>;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manajemen Promosi</h1>
        <p className="text-gray-600 mt-1">Kelola data banner promosi dan event rumah sakit.</p>
      </div>

      {message.text && (
        <div className={`p-4 rounded-md ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {message.text}
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">Daftar Promosi</h2>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-[#006370] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#004e58] transition-colors"
        >
          <Plus size={16} /> Tambah Promo
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-500 w-24">Gambar</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Judul & Kategori</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500 w-24">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((promo) => (
                <tr key={promo.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                      {promo.image ? (
                        <img src={promo.image} alt={promo.title} className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon size={24} className="text-gray-400" />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    <div className="font-bold mb-1 line-clamp-2">{promo.title}</div>
                    <div className="text-xs text-[#3b9ca5] font-semibold">{promo.category}</div>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                    <button onClick={() => handleOpenModal(promo)} className="text-blue-600 hover:text-blue-800 p-1 bg-blue-50 rounded"><Pencil size={16} /></button>
                    <button onClick={() => handleDelete(promo.id)} className="text-red-500 hover:text-red-700 p-1 bg-red-50 rounded"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-4 py-12 text-center">
                    <div className="text-sm text-gray-500 mb-4">Belum ada data promosi.</div>
                    <button onClick={handleLoadDefault} disabled={saving} className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 border border-gray-300">
                      <Upload className="mr-2 h-4 w-4" /> {saving ? "Memuat..." : "Muat Data Default Promosi (8 Data)"}
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-gray-800">{formData.id ? "Edit Promo" : "Tambah Promo"}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Judul Promosi</label>
                <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" placeholder="Misal: Promo MCU Jantung" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Kategori / Subjudul</label>
                <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value as Category})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#006370]">
                  {categories.filter((c: Category) => c !== "Semua").map((cat: Category) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                  <option value="Semua">Lainnya</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Gambar Banner Promosi (URL atau Upload)</label>
                <p className="text-xs text-gray-500 mb-2">Karena desain terbaru menggunakan gambar penuh untuk menampilkan informasi diskon, pastikan gambar yang Anda pilih sudah mencakup informasi harga/promo secara visual.</p>
                
                <div className="space-y-3">
                  {/* File Upload */}
                  <div className="flex flex-col">
                    <label className="text-xs font-medium text-gray-600 mb-1">Upload Gambar dari Komputer:</label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFormData({ ...formData, image: reader.result as string });
                          };
                          reader.readAsDataURL(file);
                        }
                      }} 
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#006370] file:text-white hover:file:bg-[#004e58]" 
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <span className="text-xs text-gray-400 font-medium">ATAU</span>
                    <div className="h-px bg-gray-200 flex-1"></div>
                  </div>

                  {/* URL Input */}
                  <div className="flex flex-col">
                    <label className="text-xs font-medium text-gray-600 mb-1">Gunakan Link URL (Internet):</label>
                    <input 
                      type="url" 
                      value={formData.image} 
                      onChange={e => setFormData({...formData, image: e.target.value})} 
                      className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" 
                      placeholder="https://..." 
                    />
                  </div>
                </div>
                
                {formData.image && (
                  <div className="mt-4 p-2 border border-gray-200 rounded-md bg-gray-50 max-w-sm">
                    <p className="text-xs text-gray-500 mb-2 font-medium">Preview Gambar:</p>
                    <img src={formData.image} alt="Preview" className="w-full h-auto max-h-48 object-contain rounded bg-white border border-gray-100" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Deskripsi Detail</label>
                <p className="text-xs text-gray-500 mb-2">Penjelasan ini akan tampil di Halaman Detail Promosi di sebelah gambar utama.</p>
                <textarea rows={6} required value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" placeholder="Tuliskan deskripsi lengkap promo di sini..." />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Batal</button>
                <button type="submit" disabled={saving} className="px-4 py-2 text-sm font-medium text-white bg-[#006370] rounded-md hover:bg-[#004e58] disabled:opacity-50">
                  {saving ? "Menyimpan..." : "Simpan Promo"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
