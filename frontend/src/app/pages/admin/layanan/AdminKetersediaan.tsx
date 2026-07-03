import { useState, useEffect } from "react";
import api from "../../../../lib/api";
import { Plus, Trash2, Pencil, X, Upload } from "lucide-react";
import { defaultAllRooms } from "../../public/layanan/KetersediaanKamar";

export default function AdminKetersediaan() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState<any>({
    id: "",
    number: "",
    ward: "",
    floor: 1,
    class: "",
    status: "available",
    patient: "",
    since: "",
  });

  const availableStatuses = [
    { value: "available", label: "Tersedia" },
    { value: "occupied", label: "Terisi" },
    { value: "maintenance", label: "Perawatan" },
  ];

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get('/room-availabilities');
      const items: any[] = response.data;
      // sort by floor then number
      items.sort((a, b) => {
        if (a.floor === b.floor) {
          return a.number.localeCompare(b.number);
        }
        return (a.floor || 0) - (b.floor || 0);
      });
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

  const handleLoadDefault = async () => {
    if (!window.confirm("Yakin ingin memuat data default Ketersediaan Kamar? Ini akan menambahkan 48 data kamar acak.")) return;
    setSaving(true);
    setMessage({ type: "", text: "" });
    try {
      const promises = defaultAllRooms.map((room) => {
        const docId = crypto.randomUUID();
        const payload: any = { ...room };
        Object.keys(payload).forEach(key => payload[key] === undefined && delete payload[key]);
        return api.post('/room-availabilities', payload);
      });
      await Promise.all(promises);
      setMessage({ type: "success", text: "Data default berhasil dimuat!" });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal memuat data default." });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Yakin ingin menghapus data kamar ini?")) return;
    try {
      await api.delete(`/room-availabilities/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenModal = (room?: any) => {
    if (room) {
      setFormData({
        ...room,
        patient: room.patient || "",
        since: room.since || "",
      });
    } else {
      setFormData({
        id: "",
        number: "",
        ward: "",
        floor: 1,
        class: "",
        status: "available",
        patient: "",
        since: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const docId = formData.id || crypto.randomUUID();
      const payload = { ...formData };
      delete payload.id;
      
      // Cleanup empty optional fields
      if (!payload.patient) delete payload.patient;
      if (!payload.since) delete payload.since;

      if (formData.id) {
        await api.put(`/room-availabilities/${formData.id}`, payload);
      } else {
        await api.post('/room-availabilities', payload);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data");
    } finally {
      setSaving(false);
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
        <h2 className="text-lg font-bold text-gray-800">Ketersediaan Kamar (Real-time)</h2>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} /> Tambah Kamar
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto max-h-[600px]">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Nomor Kamar</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Ruangan & Lantai</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Kelas</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Keterangan (Opsional)</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((room) => {
                const statusColor = room.status === "available" ? "bg-green-100 text-green-800" 
                  : room.status === "occupied" ? "bg-red-100 text-red-800" 
                  : "bg-amber-100 text-amber-800";
                const statusLabel = availableStatuses.find(s => s.value === room.status)?.label || room.status;

                return (
                  <tr key={room.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-bold text-gray-900">{room.number}</td>
                    <td className="px-4 py-3 text-gray-700">
                      <div>{room.ward}</div>
                      <div className="text-xs text-gray-500">Lantai {room.floor}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{room.class}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor}`}>
                        {statusLabel}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">
                      {room.patient && <div>Pasien: {room.patient}</div>}
                      {room.since && <div>Sejak: {room.since}</div>}
                    </td>
                    <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                      <button onClick={() => handleOpenModal(room)} className="text-blue-600 hover:text-blue-800"><Pencil size={16} /></button>
                      <button onClick={() => handleDelete(room.id)} className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
                    </td>
                  </tr>
                );
              })}
              {data.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center">
                    <div className="text-sm text-gray-500 mb-4">Belum ada data ketersediaan kamar.</div>
                    <button onClick={handleLoadDefault} disabled={saving} className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 border border-gray-300">
                      <Upload className="mr-2 h-4 w-4" /> {saving ? "Memuat..." : "Muat Data Default Kamar (48 data acak)"}
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">{formData.id ? "Edit Status Kamar" : "Tambah Kamar"}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Kamar</label>
                  <input type="text" required value={formData.number} onChange={e => setFormData({...formData, number: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="misal: 201" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Ruangan</label>
                  <input type="text" required value={formData.ward} onChange={e => setFormData({...formData, ward: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="misal: Penyakit Dalam" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lantai</label>
                  <input type="number" required min="1" value={formData.floor} onChange={e => setFormData({...formData, floor: Number(e.target.value)})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kelas</label>
                  <input type="text" required value={formData.class} onChange={e => setFormData({...formData, class: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="misal: Kelas I" />
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Status Saat Ini</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm bg-white">
                    {availableStatuses.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
              </div>

              {formData.status === "occupied" && (
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Identitas Pasien (Opsional)</label>
                    <input type="text" value={formData.patient} onChange={e => setFormData({...formData, patient: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="misal: Tn. Budi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirawat Sejak (Opsional)</label>
                    <input type="text" value={formData.since} onChange={e => setFormData({...formData, since: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="misal: 2 hari lalu / 12 Mei" />
                  </div>
                </div>
              )}

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium">Batal</button>
                <button type="submit" disabled={saving} className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                  {saving ? "Menyimpan..." : "Simpan Data"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
