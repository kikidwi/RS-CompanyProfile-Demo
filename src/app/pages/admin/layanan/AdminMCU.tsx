import { useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { Plus, Trash2, Pencil, X, Upload } from "lucide-react";
import { defaultMcuPackages } from "../../public/layanan/MedicalCheckup";

export default function AdminMCU() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState<any>({
    id: "",
    name: "",
    price: "",
    color: "#006370",
    badge: "",
    description: "",
    items: [""],
    order: 0,
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "layanan_mcu"));
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
    if (!window.confirm("Yakin ingin memuat data default MCU?")) return;
    setSaving(true);
    setMessage({ type: "", text: "" });
    try {
      const promises = defaultMcuPackages.map((pkg, i) => {
        const docId = crypto.randomUUID();
        const payload: any = {
          ...pkg,
          order: i,
        };
        Object.keys(payload).forEach(key => payload[key] === undefined && delete payload[key]);
        return setDoc(doc(db, "layanan_mcu", docId), payload);
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
    if (!window.confirm("Yakin ingin menghapus paket MCU ini?")) return;
    try {
      await deleteDoc(doc(db, "layanan_mcu", id));
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenModal = (pkg?: any) => {
    if (pkg) {
      setFormData({
        ...pkg,
        items: pkg.items && pkg.items.length ? pkg.items : [""],
      });
    } else {
      setFormData({
        id: "",
        name: "",
        price: "",
        color: "#006370",
        badge: "",
        description: "",
        items: [""],
        order: data.length,
      });
    }
    setIsModalOpen(true);
  };

  const handleItemChange = (index: number, value: string) => {
    const newItems = [...formData.items];
    newItems[index] = value;
    setFormData({ ...formData, items: newItems });
  };

  const addItem = () => setFormData({ ...formData, items: [...formData.items, ""] });
  const removeItem = (index: number) => {
    const newItems = formData.items.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const docId = formData.id || crypto.randomUUID();
      const payload = { ...formData };
      delete payload.id;
      // Filter empty items
      payload.items = payload.items.filter((i: string) => i.trim() !== "");
      await setDoc(doc(db, "layanan_mcu", docId), payload);
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
        <h2 className="text-lg font-bold text-gray-800">Paket Medical Check-Up (MCU)</h2>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} /> Tambah Paket
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Paket</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Harga</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Badge</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Deskripsi</th>
              <th className="px-4 py-3 text-right font-medium text-gray-500">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((pkg) => (
              <tr key={pkg.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pkg.color }} />
                    {pkg.name}
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-700">{pkg.price}</td>
                <td className="px-4 py-3">
                  {pkg.badge && <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{pkg.badge}</span>}
                </td>
                <td className="px-4 py-3 text-gray-500 truncate max-w-xs">{pkg.description}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button onClick={() => handleOpenModal(pkg)} className="text-blue-600 hover:text-blue-800"><Pencil size={16} /></button>
                  <button onClick={() => handleDelete(pkg.id)} className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center">
                  <div className="text-sm text-gray-500 mb-3">Belum ada data paket MCU.</div>
                  <button onClick={handleLoadDefault} disabled={saving} className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 border border-gray-300">
                    <Upload className="mr-2 h-4 w-4" /> {saving ? "Memuat..." : "Muat Data Default MCU"}
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">{formData.id ? "Edit Paket MCU" : "Tambah Paket MCU"}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Paket</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Harga (Teks)</label>
                  <input type="text" required value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Warna Tema (Hex)</label>
                  <div className="flex gap-2">
                    <input type="color" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} className="h-9 w-9 p-0 border border-gray-300 rounded-md" />
                    <input type="text" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Badge (Opsional)</label>
                  <input type="text" placeholder="misal: Terpopuler" value={formData.badge || ""} onChange={e => setFormData({...formData, badge: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Singkat</label>
                <textarea rows={2} required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Daftar Pemeriksaan (Items)</label>
                  <button type="button" onClick={addItem} className="text-xs text-blue-600 font-medium">+ Tambah Item</button>
                </div>
                <div className="space-y-2">
                  {formData.items.map((item: string, i: number) => (
                    <div key={i} className="flex gap-2">
                      <input type="text" value={item} onChange={e => handleItemChange(i, e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder={`Item ${i+1}`} />
                      {formData.items.length > 1 && (
                        <button type="button" onClick={() => removeItem(i)} className="text-red-500 hover:text-red-700 p-2"><Trash2 size={16} /></button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium">Batal</button>
                <button type="submit" disabled={saving} className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                  {saving ? "Menyimpan..." : "Simpan Paket"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
