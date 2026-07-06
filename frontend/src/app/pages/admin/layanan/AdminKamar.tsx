import { useState, useEffect } from "react";
import api from "../../../../lib/api";
import { Plus, Trash2, Pencil, X, Upload, BedDouble, Wind, Tv, Wifi, Users, Coffee, Star } from "lucide-react";
import { logActivity } from "../../../../lib/activity";

export default function AdminKamar() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState<any>({
    id: "",
    name: "",
    type: "Kelas 1",
    price: 0,
    capacity: 1,
    image: "",
    sort_order: 0,
    features: ["Tempat tidur premium"],
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get('/rooms');
      const items: any[] = response.data;
      items.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
      setData(items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleArrayStringChange = (field: "features", value: string) => {
    const array = value.split("\n").map(item => item.trim()).filter(Boolean);
    setFormData({ ...formData, [field]: array });
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Yakin ingin menghapus kamar ${name}?`)) return;
    try {
      await api.delete(`/rooms/${id}`);
      await logActivity('DELETE', 'Kamar', `Hapus kamar: ${name}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenModal = (room?: any) => {
    if (room) {
      setFormData({
        id: room.id,
        name: room.name,
        type: room.type,
        price: room.price,
        capacity: room.capacity,
        image: room.image || "",
        sort_order: room.sort_order || 0,
        features: room.features ? room.features.map((f: any) => f.feature) : [],
      });
    } else {
      setFormData({
        id: "",
        name: "",
        type: "Kelas 1",
        price: 0,
        capacity: 1,
        image: "",
        sort_order: 0,
        features: ["Tempat tidur premium"],
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      const payload = { 
        name: formData.name,
        type: formData.type,
        price: formData.price,
        capacity: formData.capacity,
        image: formData.image,
        sort_order: formData.sort_order,
        features: formData.features
      };
      
      if (formData.id) {
        await api.put(`/rooms/${formData.id}`, payload);
      } else {
        await api.post('/rooms', payload);
      }

      await logActivity(formData.id ? 'UPDATE' : 'CREATE', 'Kamar', `${formData.id ? 'Edit' : 'Tambah'}: ${formData.name}`);
      
      setMessage({ type: "success", text: "Data kamar berhasil disimpan!" });
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Terjadi kesalahan saat menyimpan data." });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="py-12 text-center text-gray-500">Memuat data kamar...</div>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kamar Perawatan</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola data kelas kamar, harga, dan fasilitas ruang perawatan.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => handleOpenModal()} className="inline-flex items-center px-4 py-2 bg-[#006370] text-white text-sm font-medium rounded-md hover:bg-[#004e58]">
            <Plus size={16} className="mr-2" /> Tambah Kamar
          </button>
        </div>
      </div>

      {message.text && (
        <div className={`p-4 rounded-md text-sm ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {message.text}
        </div>
      )}

      {/* Table List */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kamar & Tipe</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kapasitas</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Harga/Malam</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fasilitas</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase w-24">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((room) => (
                <tr key={room.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {room.image ? (
                        <img src={room.image} alt={room.name} className="w-12 h-12 rounded object-cover border border-gray-200" />
                      ) : (
                        <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center text-gray-400">
                          <BedDouble size={20} />
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-bold text-gray-900">{room.name}</div>
                        <div className="text-xs text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded-full mt-1">{room.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex items-center gap-1.5"><Users size={14} className="text-gray-400" /> {room.capacity} Pasien</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Rp {Number(room.price).toLocaleString('id-ID')}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {room.features?.slice(0, 3).map((f: any, idx: number) => (
                        <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">
                          {f.feature}
                        </span>
                      ))}
                      {room.features?.length > 3 && (
                        <span className="text-[10px] text-gray-400">+{room.features.length - 3} lagi</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleOpenModal(room)} className="text-blue-600 hover:text-blue-900 mr-3">
                      <Pencil size={16} />
                    </button>
                    <button onClick={() => handleDelete(room.id, room.name)} className="text-red-600 hover:text-red-900">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">Belum ada data kamar perawatan.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => !saving && setIsModalOpen(false)} />
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">{formData.id ? "Edit Kamar" : "Tambah Kamar"}</h2>
              <button onClick={() => !saving && setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <form id="roomForm" onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama / Nomor Kamar</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-[#006370] focus:border-[#006370]" placeholder="Misal: VIP Anggrek" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipe / Kelas</label>
                    <input type="text" required value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-[#006370] focus:border-[#006370]" placeholder="Misal: VIP atau Kelas 1" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kapasitas Pasien</label>
                    <input type="number" required min="1" value={formData.capacity} onChange={e => setFormData({...formData, capacity: parseInt(e.target.value) || 1})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-[#006370] focus:border-[#006370]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Harga per Malam (Rp)</label>
                    <input type="number" required min="0" value={formData.price} onChange={e => setFormData({...formData, price: parseInt(e.target.value) || 0})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-[#006370] focus:border-[#006370]" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL Foto Kamar (opsional)</label>
                  <input type="url" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-[#006370] focus:border-[#006370]" placeholder="https://..." />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Urutan Tampil (opsional)</label>
                  <input type="number" value={formData.sort_order} onChange={e => setFormData({...formData, sort_order: parseInt(e.target.value) || 0})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-[#006370] focus:border-[#006370]" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fasilitas Kamar (Pisahkan dengan Enter)</label>
                  <p className="text-[11px] text-gray-500 mb-2">Tuliskan setiap fitur di baris baru. Contoh: AC Split, TV Kabel, Kamar Mandi Dalam</p>
                  <textarea rows={4} value={formData.features.join('\n')} onChange={e => handleArrayStringChange('features', e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-[#006370] focus:border-[#006370]" />
                </div>
              </form>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 rounded-b-xl">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Batal</button>
              <button type="submit" form="roomForm" disabled={saving} className="px-4 py-2 text-sm font-medium text-white bg-[#006370] rounded-md hover:bg-[#004e58] shadow-sm disabled:opacity-50">
                {saving ? "Menyimpan..." : "Simpan Kamar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
