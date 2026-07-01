import { useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { logActivity } from "../../../../lib/activity";
import { Plus, Trash2, Pencil, X, Upload } from "lucide-react";
import { articles as defaultArticles, type Article, type ArticleCategory } from "../../public/informasi/articlesData";

export default function AdminBerita() {
  const [data, setData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState<Article>({
    id: 0,
    slug: "",
    title: "",
    category: "Berita",
    date: new Date().toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: "3 menit",
    image: "",
    excerpt: "",
    author: "Tim Humas RS",
    authorRole: "Bagian Humas & Pemasaran",
    content: [""],
    tags: [""],
  });

  const fetchData = async () => {
    try {
      const snap = await getDocs(collection(db, "informasi_berita"));
      const items: Article[] = [];
      snap.forEach(doc => items.push({ ...doc.data() } as Article));
      items.sort((a, b) => b.id - a.id); // Descending ID
      setData(items);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal memuat data berita" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (article?: Article) => {
    if (article) {
      setFormData(article);
    } else {
      setFormData({
        id: Date.now(),
        slug: "",
        title: "",
        category: "Berita",
        date: new Date().toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' }),
        readTime: "3 menit",
        image: "",
        excerpt: "",
        author: "Tim Humas RS",
        authorRole: "Bagian Humas & Pemasaran",
        content: [""],
        tags: [""],
      });
    }
    setIsModalOpen(true);
  };

  const handleArrayStringChange = (field: "content" | "tags", value: string) => {
    const array = value.split("\n").map(item => item.trim()).filter(Boolean);
    setFormData({ ...formData, [field]: array });
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      // Auto generate slug if empty
      const finalSlug = formData.slug || generateSlug(formData.title);
      const payload = { ...formData, slug: finalSlug };

      // Ensure content and tags are at least empty arrays, not undefined
      if (!payload.content) payload.content = [];
      if (!payload.tags) payload.tags = [];

      await setDoc(doc(db, "informasi_berita", payload.id.toString()), payload);
      
      const isNew = !data.some(d => d.id === payload.id);
      await logActivity(isNew ? 'CREATE' : 'UPDATE', 'Berita', `Artikel: ${payload.title}`);
      
      setMessage({ type: "success", text: "Berita berhasil disimpan!" });
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Terjadi kesalahan saat menyimpan data." });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Yakin ingin menghapus berita ini?")) {
      try {
        const docItem = data.find(d => d.id === id);
        await deleteDoc(doc(db, "informasi_berita", id.toString()));
        await logActivity('DELETE', 'Berita', `Artikel: ${docItem?.title || 'ID ' + id}`);
        setMessage({ type: "success", text: "Berita berhasil dihapus!" });
        fetchData();
      } catch (err) {
        console.error(err);
        setMessage({ type: "error", text: "Gagal menghapus data." });
      }
    }
  };

  const handleLoadDefault = async () => {
    if (!confirm("Ini akan menambahkan data berita default ke database. Lanjutkan?")) return;
    setSaving(true);
    try {
      for (const item of defaultArticles) {
        await setDoc(doc(db, "informasi_berita", item.id.toString()), item);
      }
      await logActivity('SYSTEM', 'Berita', 'Import data default berita');
      setMessage({ type: "success", text: "Data default berhasil dimuat!" });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal memuat data default." });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="py-8 text-center text-gray-500">Memuat data...</div>;

  return (
    <div className="space-y-4">
      {message.text && (
        <div className={`p-4 rounded-md ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {message.text}
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Daftar Berita & Artikel</h2>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-[#006370] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#004e58] transition-colors"
        >
          <Plus size={16} /> Tulis Berita
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-500 w-64">Judul & Kategori</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Tanggal</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Penulis</th>
              <th className="px-4 py-3 text-right font-medium text-gray-500">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  <div className="font-bold mb-1 line-clamp-2">{item.title}</div>
                  <div className="text-xs text-[#3b9ca5] font-semibold">{item.category}</div>
                </td>
                <td className="px-4 py-3 text-gray-700">{item.date}</td>
                <td className="px-4 py-3 text-gray-700">{item.author}</td>
                <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                  <button onClick={() => handleOpenModal(item)} className="text-blue-600 hover:text-blue-800 p-1 bg-blue-50 rounded"><Pencil size={16} /></button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 p-1 bg-red-50 rounded"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-12 text-center">
                  <div className="text-sm text-gray-500 mb-4">Belum ada berita.</div>
                  <button onClick={handleLoadDefault} disabled={saving} className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 border border-gray-300">
                    <Upload className="mr-2 h-4 w-4" /> {saving ? "Memuat..." : "Muat Data Default Berita"}
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-gray-800">{formData.id && formData.title ? "Edit Berita" : "Tulis Berita"}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Judul Berita</label>
                  <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Kategori</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value as ArticleCategory})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#006370]">
                    <option value="Berita">Berita</option>
                    <option value="Edukasi">Edukasi</option>
                    <option value="Pengumuman">Pengumuman</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Tanggal</label>
                  <input type="text" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" placeholder="Misal: 25 Juni 2026" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Penulis</label>
                  <input type="text" required value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Peran Penulis (Role)</label>
                  <input type="text" required value={formData.authorRole} onChange={e => setFormData({...formData, authorRole: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Waktu Baca</label>
                  <input type="text" required value={formData.readTime} onChange={e => setFormData({...formData, readTime: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" placeholder="Misal: 3 menit" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Gambar Thumbnail Berita (URL atau Upload)</label>
                  
                  <div className="space-y-3 p-3 border border-gray-200 rounded-md bg-gray-50/50">
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

                    <div className="flex items-center gap-2 py-1">
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
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370] bg-white" 
                        placeholder="https://..." 
                      />
                    </div>
                  </div>

                  {formData.image && (
                    <div className="mt-3 p-2 border border-gray-200 rounded-md bg-gray-50 w-full sm:w-1/2">
                      <p className="text-xs text-gray-500 mb-2 font-medium">Preview Gambar:</p>
                      <img src={formData.image} alt="Preview" className="w-full h-auto max-h-48 object-cover rounded bg-white border border-gray-100" onError={(e) => (e.currentTarget.style.display = 'none')} />
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Ringkasan (Excerpt)</label>
                  <textarea rows={2} required value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Isi Artikel (Satu paragraf per baris)</label>
                  <textarea rows={6} required value={(formData.content || []).join("\n")} onChange={e => handleArrayStringChange("content", e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Tags (Pisahkan dengan baris baru)</label>
                  <textarea rows={2} required value={(formData.tags || []).join("\n")} onChange={e => handleArrayStringChange("tags", e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006370]" placeholder="Akreditasi&#10;Kesehatan" />
                </div>

              </div>
              
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Batal</button>
                <button type="submit" disabled={saving} className="px-4 py-2 text-sm font-medium text-white bg-[#006370] rounded-md hover:bg-[#004e58] disabled:opacity-50">
                  {saving ? "Menyimpan..." : "Simpan Berita"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
