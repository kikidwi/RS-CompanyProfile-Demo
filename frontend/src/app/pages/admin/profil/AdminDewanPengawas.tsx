import { useState, useEffect } from "react";
import api from "../../../../lib/api";
import { Plus, Trash2, Pencil } from "lucide-react";

interface PengawasData {
  id: string;
  name: string;
  role: string;
  institution: string;
  photo: string;
  order: number;
}

export default function AdminDewanPengawas() {
  const [data, setData] = useState<PengawasData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", role: "", institution: "", photo: "", order: 0 });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const fetchData = async () => {
    try {
      const response = await api.get('/profiles?type=dewan-pengawas');
      const items: PengawasData[] = response.data.map((d: any) => ({
        id: d.id.toString(),
        name: d.name,
        role: d.role,
        institution: d.content?.institution || "",
        photo: d.image || "",
        order: d.order || 0
      }));
      items.sort((a, b) => (a.order || 0) - (b.order || 0));
      setData(items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const openAdd = () => {
    setEditingId(null);
    setFormData({ name: "", role: "", institution: "", photo: "", order: data.length });
    setIsModalOpen(true);
  };

  const openEdit = (item: PengawasData) => {
    setEditingId(item.id);
    setFormData({ name: item.name, role: item.role, institution: item.institution, photo: item.photo, order: item.order });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });
    try {
      const payload = {
        type: 'dewan-pengawas',
        name: formData.name,
        role: formData.role,
        image: formData.photo,
        order: formData.order,
        content: { institution: formData.institution }
      };
      
      if (editingId) {
        await api.put(`/profiles/${editingId}`, payload);
      } else {
        await api.post('/profiles', payload);
      }
      setIsModalOpen(false);
      setMessage({ type: "success", text: editingId ? "Data berhasil diperbarui!" : "Data berhasil ditambahkan!" });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal menyimpan data." });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await api.delete(`/profiles/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus.");
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
          <h3 className="text-lg font-medium text-gray-900">Dewan Pengawas</h3>
          <p className="text-sm text-gray-500">Data dewan pengawas yang ditampilkan di halaman profil.</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
          <Plus className="-ml-1 mr-2 h-4 w-4" /> Tambah
        </button>
      </div>

      <div className="overflow-hidden shadow ring-1 ring-black/5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Foto</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jabatan</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Institusi</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3">
                  <img src={item.photo} alt={item.name} className="h-10 w-10 rounded-full object-cover bg-gray-100" />
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.role}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.institution}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button onClick={() => openEdit(item)} className="text-blue-600 hover:text-blue-800"><Pencil className="h-4 w-4 inline" /></button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700"><Trash2 className="h-4 w-4 inline" /></button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-8 text-center text-sm text-gray-500">Belum ada data dewan pengawas.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          <div className="fixed inset-0 bg-gray-600/75" onClick={() => !saving && setIsModalOpen(false)}></div>
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 z-10">
            <form onSubmit={handleSubmit}>
              <div className="px-6 py-5 space-y-4">
                <h3 className="text-lg font-medium text-gray-900">{editingId ? "Edit Dewan Pengawas" : "Tambah Dewan Pengawas"}</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jabatan</label>
                  <input type="text" required value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="misal: Ketua Dewan Pengawas" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institusi / Perwakilan</label>
                  <input type="text" value={formData.institution} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="misal: Perwakilan Kemenkes RI" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Foto (Pilih Gambar)</label>
                  <input type="file" accept="image/*" onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData({ ...formData, photo: reader.result as string });
                      };
                      reader.readAsDataURL(file);
                    }
                  }} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                  {formData.photo && (
                    <div className="mt-2">
                      <img src={formData.photo} alt="Preview" className="h-20 w-20 object-cover rounded-md border bg-gray-50" />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Urutan Tampil</label>
                  <input type="number" value={formData.order} onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-3 flex flex-row-reverse gap-3">
                <button type="submit" disabled={saving} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                  {saving ? "Menyimpan..." : "Simpan"}
                </button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50">
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
