import { useState, useEffect } from "react";
import api from "../../../../lib/api";
import { logActivity } from "../../../../lib/activity";
import { defaultSections } from "../../public/informasi/InformasiPenting";
import { Pencil, X, Save, Plus, Trash2 } from "lucide-react";

type SectionType = typeof defaultSections[0];

export default function AdminInfoPenting() {
  const [sections, setSections] = useState<SectionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<SectionType | null>(null);

  const fetchData = async () => {
    try {
      const response = await api.get('/important-infos');
      if (response.data && response.data.length > 0) {
        const items: SectionType[] = response.data.map((d: any) => ({
          _dbId: d.id,
          id: d.slug,
          title: d.title,
          color: d.color,
          items: d.items.map((item: any) => ({
            label: item.label,
            value: item.value,
            detail: item.detail,
            highlight: item.is_highlight
          }))
        }));
        
        const orderMap = new Map(defaultSections.map((s, i) => [s.id, i]));
        items.sort((a, b) => (orderMap.get(a.id) || 0) - (orderMap.get(b.id) || 0));
        
        setSections(items);
      } else {
        setSections(defaultSections);
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal memuat data informasi penting" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (item: SectionType) => {
    setFormData(JSON.parse(JSON.stringify(item)));
    setEditingId(item.id);
  };

  const handleSave = async () => {
    if (!formData) return;
    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      const payload = { ...formData };
      delete (payload as any).icon; 
      
      const apiPayload = {
        title: payload.title,
        slug: payload.id,
        color: payload.color || "#006370",
        items: payload.items,
      };
      
      if ((payload as any)._dbId) {
        await api.put(`/important-infos/${(payload as any)._dbId}`, apiPayload);
      } else {
        await api.post('/important-infos', apiPayload);
      }
      await logActivity('UPDATE', 'Info Penting', `Edit: ${payload.title}`);
      setMessage({ type: "success", text: "Informasi berhasil diperbarui!" });
      setEditingId(null);
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal menyimpan data." });
    } finally {
      setSaving(false);
    }
  };

  const handleLoadDefault = async () => {
    if (!confirm("Reset semua informasi ke default pabrik?")) return;
    setSaving(true);
    try {
      for (const item of defaultSections) {
        const payload = { ...item };
        delete (payload as any).icon;
        const apiPayload = {
          title: payload.title,
          slug: payload.id,
          color: payload.color || "#006370",
          items: payload.items,
        };
        // Use post, it will create them. Make sure DB is truncated if wanted or let them duplicate. 
        // For safe measure, we can just POST them and it will create new ones.
        await api.post('/important-infos', apiPayload);
      }
      setMessage({ type: "success", text: "Data default berhasil dimuat ulang." });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal memuat data default." });
    } finally {
      setSaving(false);
    }
  };

  // ... (rest of the form helpers)
  const addItem = () => {
    if (!formData) return;
    setFormData({
      ...formData,
      items: [...formData.items, { label: "", value: "" }]
    });
  };

  const removeItem = (index: number) => {
    if (!formData) return;
    const updated = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updated });
  };

  const updateItem = (index: number, field: string, value: any) => {
    if (!formData) return;
    const updated = [...formData.items];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, items: updated });
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
          <h3 className="text-lg font-medium text-gray-900">Informasi Penting & Aturan</h3>
          <p className="text-sm text-gray-500">Kelola jam operasional, kontak darurat, dan tata tertib pengunjung.</p>
        </div>
        <button onClick={handleLoadDefault} className="text-sm text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md transition-colors">
          Reset Default Data
        </button>
      </div>

      {editingId && formData && (
        <div className="bg-white border border-blue-200 shadow-sm rounded-lg overflow-hidden">
          <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex justify-between items-center">
            <h4 className="font-semibold text-blue-900">Edit Kategori: {formData.title}</h4>
            <button onClick={() => setEditingId(null)} className="text-blue-400 hover:text-blue-600">
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="flex gap-4 mb-4">
               <div className="flex-1">
                 <label className="block text-sm font-medium text-gray-700 mb-1">Judul Kategori</label>
                 <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
               </div>
               <div className="w-32">
                 <label className="block text-sm font-medium text-gray-700 mb-1">Warna Aksen</label>
                 <input type="color" value={formData.color || "#000000"} onChange={(e) => setFormData({...formData, color: e.target.value})} className="w-full h-[38px] border border-gray-300 rounded-md cursor-pointer" />
               </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">Item Informasi</label>
                <button type="button" onClick={addItem} className="text-xs flex items-center text-blue-600 bg-blue-50 px-2 py-1 rounded hover:bg-blue-100">
                  <Plus size={14} className="mr-1" /> Tambah Item
                </button>
              </div>
              
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                {formData.items.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start border border-gray-100 bg-gray-50 p-3 rounded-md">
                    <div className="flex-1 space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder="Label (Misal: IGD)" value={item.label} onChange={(e) => updateItem(i, "label", e.target.value)} className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
                        <input type="text" placeholder="Nilai (Misal: 24 Jam)" value={item.value || ""} onChange={(e) => updateItem(i, "value", e.target.value)} className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <input type="text" placeholder="Detail tambahan (opsional)..." value={item.detail || ""} onChange={(e) => updateItem(i, "detail", e.target.value)} className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
                      <label className="flex items-center text-xs text-gray-600">
                        <input type="checkbox" checked={item.highlight || false} onChange={(e) => updateItem(i, "highlight", e.target.checked)} className="mr-2 rounded text-blue-600 focus:ring-blue-500" />
                        Highlight item ini (Warna Teks Merah/Bold)
                      </label>
                    </div>
                    <button type="button" onClick={() => removeItem(i)} className="text-gray-400 hover:text-red-500 pt-1">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-100">
              <button onClick={handleSave} disabled={saving} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                <Save className="mr-2 h-4 w-4" /> {saving ? "Menyimpan..." : "Simpan Perubahan"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div key={section.id} className={`bg-white rounded-xl shadow-sm border ${editingId === section.id ? 'border-blue-400 ring-1 ring-blue-400' : 'border-gray-200'} overflow-hidden`}>
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100 bg-gray-50/50">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: section.color || "#006370" }}></div>
                {section.title}
              </h4>
              <button onClick={() => handleEdit(section)} className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                <Pencil size={14} className="mr-1" /> Edit
              </button>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-start gap-4 text-sm">
                    <span className="text-gray-500 shrink-0 max-w-[120px]">{item.label}</span>
                    <div className="text-right">
                      <span className={`font-medium ${item.highlight ? 'text-red-600' : 'text-gray-900'}`}>{item.value}</span>
                      {item.detail && <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
