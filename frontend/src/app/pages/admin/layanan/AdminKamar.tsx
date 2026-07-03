import { useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { Plus, Trash2, Pencil, X, Upload, BedDouble, Wind, Tv, Wifi, Users, Coffee, Star } from "lucide-react";
import { defaultRoomClasses } from "../../public/layanan/KamarPerawatan";

export default function AdminKamar() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState<any>({
    id: "",
    name: "",
    kelas: "",
    price: "",
    capacity: "",
    color: "#3b9ca5",
    bg: "#f0fdfa",
    badge: "",
    description: "",
    image: "",
    facilities: [{ label: "", icon: "BedDouble" }],
    order: 0,
  });

  const availableIcons = ["BedDouble", "Wind", "Tv", "Wifi", "Users", "Coffee", "Star"];
  const iconMap: any = { BedDouble, Wind, Tv, Wifi, Users, Coffee, Star };

  const fetchData = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "layanan_kamar"));
      const items: any[] = [];
      snap.forEach((d) => items.push({ id: d.id, ...d.data() }));
      items.sort((a, b) => (a.order || 0) - (b.order || 0));
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
    if (!window.confirm("Yakin ingin memuat data default Kamar Perawatan?")) return;
    setSaving(true);
    setMessage({ type: "", text: "" });
    try {
      const promises = defaultRoomClasses.map((room, i) => {
        const docId = crypto.randomUUID();
        // facilities icon needs to be string instead of component for DB storage
        const safeFacilities = room.facilities.map((f: any) => ({
          label: f.label,
          icon: typeof f.icon === 'string' ? f.icon : (f.icon.render?.name || f.icon.name || "BedDouble")
        }));
        
        const payload: any = {
          ...room,
          facilities: safeFacilities,
          order: i,
        };
        Object.keys(payload).forEach(key => payload[key] === undefined && delete payload[key]);
        return setDoc(doc(db, "layanan_kamar", docId), payload);
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
    if (!window.confirm("Yakin ingin menghapus kamar ini?")) return;
    try {
      await deleteDoc(doc(db, "layanan_kamar", id));
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenModal = (room?: any) => {
    if (room) {
      setFormData({
        ...room,
        facilities: room.facilities && room.facilities.length ? room.facilities : [{ label: "", icon: "BedDouble" }],
      });
    } else {
      setFormData({
        id: "",
        name: "",
        kelas: "",
        price: "",
        capacity: "",
        color: "#3b9ca5",
        bg: "#f0fdfa",
        badge: "",
        description: "",
        image: "",
        facilities: [{ label: "", icon: "BedDouble" }],
        order: data.length,
      });
    }
    setIsModalOpen(true);
  };

  const handleFacilityChange = (index: number, field: string, value: string) => {
    const newFacilities = [...formData.facilities];
    newFacilities[index] = { ...newFacilities[index], [field]: value };
    setFormData({ ...formData, facilities: newFacilities });
  };

  const addFacility = () => setFormData({ ...formData, facilities: [...formData.facilities, { label: "", icon: "BedDouble" }] });
  const removeFacility = (index: number) => {
    const newFacilities = formData.facilities.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, facilities: newFacilities });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const docId = formData.id || crypto.randomUUID();
      const payload = { ...formData };
      delete payload.id;
      // Filter empty
      payload.facilities = payload.facilities.filter((f: any) => f.label.trim() !== "");
      await setDoc(doc(db, "layanan_kamar", docId), payload);
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
        <h2 className="text-lg font-bold text-gray-800">Kamar Perawatan</h2>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} /> Tambah Kamar
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Nama Kelas</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Harga</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Kapasitas</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Badge</th>
              <th className="px-4 py-3 text-right font-medium text-gray-500">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((room) => (
              <tr key={room.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  <div className="flex flex-col">
                    <span className="font-bold">{room.name}</span>
                    <span className="text-xs text-gray-500">{room.kelas}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-700">{room.price}</td>
                <td className="px-4 py-3 text-gray-700">{room.capacity}</td>
                <td className="px-4 py-3">
                  {room.badge && <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{room.badge}</span>}
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button onClick={() => handleOpenModal(room)} className="text-blue-600 hover:text-blue-800"><Pencil size={16} /></button>
                  <button onClick={() => handleDelete(room.id)} className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center">
                  <div className="text-sm text-gray-500 mb-3">Belum ada data kamar perawatan.</div>
                  <button onClick={handleLoadDefault} disabled={saving} className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 border border-gray-300">
                    <Upload className="mr-2 h-4 w-4" /> {saving ? "Memuat..." : "Muat Data Default Kamar"}
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">{formData.id ? "Edit Kamar" : "Tambah Kamar"}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama (Tampilan Utama)</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="misal: Kelas III" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kelas (Label Kecil)</label>
                  <input type="text" required value={formData.kelas} onChange={e => setFormData({...formData, kelas: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="misal: Kelas 3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Harga per malam</label>
                  <input type="text" required value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="Rp 200.000 / malam" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kapasitas</label>
                  <input type="text" required value={formData.capacity} onChange={e => setFormData({...formData, capacity: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="4-6 pasien" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Warna Tema (Hex)</label>
                  <div className="flex gap-2">
                    <input type="color" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} className="h-9 w-9 p-0 border border-gray-300 rounded-md" />
                    <input type="text" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Warna Background (Hex)</label>
                  <div className="flex gap-2">
                    <input type="color" value={formData.bg} onChange={e => setFormData({...formData, bg: e.target.value})} className="h-9 w-9 p-0 border border-gray-300 rounded-md" />
                    <input type="text" value={formData.bg} onChange={e => setFormData({...formData, bg: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Badge (Opsional)</label>
                  <input type="text" placeholder="misal: Rekomendasi" value={formData.badge || ""} onChange={e => setFormData({...formData, badge: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL Foto Kamar</label>
                  <input type="url" required value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="https://..." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Singkat</label>
                <textarea rows={2} required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Fasilitas Kamar</label>
                  <button type="button" onClick={addFacility} className="text-xs text-blue-600 font-medium">+ Tambah Fasilitas</button>
                </div>
                <div className="space-y-3">
                  {formData.facilities.map((fac: any, i: number) => (
                    <div key={i} className="flex flex-col gap-2 p-3 border border-gray-100 rounded-lg bg-gray-50">
                      <div className="flex gap-2">
                        <input type="text" value={fac.label} onChange={e => handleFacilityChange(i, "label", e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="Nama fasilitas (misal: Wi-Fi gratis)" />
                        {formData.facilities.length > 1 && (
                          <button type="button" onClick={() => removeFacility(i)} className="text-red-500 hover:text-red-700 p-2 shrink-0"><Trash2 size={16} /></button>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {availableIcons.map(iconName => {
                          const IconComp = iconMap[iconName];
                          return (
                            <button
                              key={iconName}
                              type="button"
                              onClick={() => handleFacilityChange(i, "icon", iconName)}
                              className={`p-2 rounded-md border flex items-center justify-center transition-colors ${fac.icon === iconName ? 'border-blue-500 bg-blue-100 text-blue-700' : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-100'}`}
                              title={iconName}
                            >
                              <IconComp size={16} />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium">Batal</button>
                <button type="submit" disabled={saving} className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                  {saving ? "Menyimpan..." : "Simpan Kamar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
