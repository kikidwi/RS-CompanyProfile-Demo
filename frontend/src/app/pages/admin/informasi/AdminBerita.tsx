import { useState, useEffect } from "react";
import api from "../../../../lib/api";
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
      const response = await api.get('/articles');
      const items: Article[] = response.data.map((d: any) => ({
        id: d.id,
        slug: d.slug,
        title: d.title,
        category: d.category,
        date: d.date,
        readTime: d.read_time,
        image: d.image,
        excerpt: d.excerpt,
        author: d.author,
        authorRole: d.author_role,
        content: typeof d.content === 'string' ? [d.content] : (d.content || []),
        tags: d.tags?.map((t: any) => t.tag) || [],
      }));
      items.sort((a, b) => (b.id as number) - (a.id as number)); // Descending ID
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
      const finalSlug = formData.slug || generateSlug(formData.title);
      const payload = {
        slug: finalSlug,
        title: formData.title,
        category: formData.category,
        date: formData.date,
        read_time: formData.readTime,
        image: formData.image,
        excerpt: formData.excerpt,
        author: formData.author,
        author_role: formData.authorRole,
        content: formData.content.join('\n'), // Store content as text in new schema
        tags: formData.tags
      };

      if (formData.id) {
        await api.put(`/articles/${formData.id}`, payload);
      } else {
        await api.post('/articles', payload);
      }
      
      await logActivity('UPDATE', 'Berita & Artikel', `${formData.id ? 'Edit' : 'Tambah'}: ${formData.title}`);
      
      setIsModalOpen(false);
      setMessage({ type: "success", text: formData.id ? "Berita berhasil diperbarui!" : "Berita berhasil ditambahkan!" });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal menyimpan data." });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string | number, title: string) => {
    if (!window.confirm(`Yakin ingin menghapus artikel "${title}"?`)) return;
    
    try {
      await api.delete(`/articles/${id}`);
      await logActivity('DELETE', 'Berita & Artikel', `Hapus: ${title}`);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus berita.");
    }
  };

  if (loading) return <div className="py-12 text-center text-gray-500">Memuat data...</div>;

  return (
    <div className="space-y-6">
      {message.text && (
        <div className={`p-4 rounded-md ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {message.text}
        </div>
      )}

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Kelola Berita & Artikel</h3>
          <p className="text-sm text-gray-500">Pusat informasi, kegiatan RS, dan artikel kesehatan.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Plus className="-ml-1 mr-2 h-4 w-4" /> Tambah Artikel
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow-sm ring-1 ring-black/5 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artikel</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-16 shrink-0 mr-3">
                      <img className="h-10 w-16 rounded object-cover" src={item.image} alt="" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 line-clamp-1">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.author}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.category === 'Berita' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'Artikel Kesehatan' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleOpenModal(item)} className="text-blue-600 hover:text-blue-900 mr-4">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleDelete(item.id, item.title)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  Belum ada artikel. Klik "Tambah Artikel" untuk membuat baru.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 sm:p-6 lg:p-8">
          <div className="fixed inset-0 bg-gray-900/75 transition-opacity" onClick={() => !saving && setIsModalOpen(false)}></div>
          
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                {formData.id ? "Edit Artikel" : "Tulis Artikel Baru"}
              </h3>
              <button onClick={() => !saving && setIsModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <form id="articleForm" onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Judul Artikel *</label>
                      <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Judul menarik..." />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kategori *</label>
                        <select required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value as ArticleCategory })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500">
                          <option value="Berita">Berita RS</option>
                          <option value="Artikel Kesehatan">Artikel Kesehatan</option>
                          <option value="Kegiatan">Kegiatan / CSR</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal *</label>
                        <input type="text" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="misal: 10 Jan 2024" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">URL Gambar (Thumbnail) *</label>
                      <div className="flex gap-2">
                        <input type="url" required value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="https://..." />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ringkasan (Excerpt) *</label>
                      <textarea required rows={3} value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Satu atau dua kalimat ringkasan..." />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Penulis *</label>
                      <input type="text" required value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Jabatan Penulis *</label>
                      <input type="text" required value={formData.authorRole} onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estimasi Waktu Baca</label>
                      <input type="text" value={formData.readTime} onChange={(e) => setFormData({ ...formData, readTime: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="misal: 4 menit" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tags (Pisahkan dengan Enter)</label>
                      <textarea rows={3} value={formData.tags.join('\n')} onChange={(e) => handleArrayStringChange('tags', e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Kesehatan&#10;Jantung&#10;Inovasi" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Konten Lengkap Artikel (Pisahkan paragraf dengan Enter) *</label>
                  <textarea required rows={10} value={formData.content.join('\n\n')} onChange={(e) => handleArrayStringChange('content', e.target.value)} className="w-full border border-gray-300 rounded-md py-3 px-4 text-sm focus:ring-blue-500 focus:border-blue-500 font-serif" placeholder="Tuliskan isi paragraf artikel di sini..." />
                </div>
                
              </form>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3 rounded-b-xl">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                Batal
              </button>
              <button type="submit" form="articleForm" disabled={saving} className="inline-flex justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                {saving ? "Menyimpan..." : (formData.id ? "Simpan Perubahan" : "Terbitkan Artikel")}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
