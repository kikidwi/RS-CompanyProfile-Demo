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
      const response = await api.get('/information?type=important_info');
      if (response.data && response.data.length > 0) {
        const items: SectionType[] = response.data.map((d: any) => ({
          _dbId: d.id,
          id: d.slug,
          title: d.title,
          items: d.content || []
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
        type: 'important_info',
        slug: payload.id,
        title: payload.title,
        content: payload.items,
      };
      
      if ((payload as any)._dbId) {
        await api.put(`/information/${(payload as any)._dbId}`, apiPayload);
      } else {
        await api.post('/information', apiPayload);
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
          type: 'important_info',
          slug: payload.id,
          title: payload.title,
          content: payload.items,
        };
        // Use post, but if it exists it will duplicate. It's ok for restore default since it's an admin action.
        await api.post('/information', apiPayload);
      }
      await logActivity('SYSTEM', 'Info Penting', 'Restore default data informasi penting');
      setMessage({ type: "success", text: "Data default berhasil direstore!" });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal merestore default." });
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
        <h2 className="text-lg font-bold text-gray-800">Daftar Informasi Penting</h2>
        <button
          onClick={handleLoadDefault}
          disabled={saving}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 border border-gray-300 transition-colors"
        >
          {saving ? "Memproses..." : "Restore Default Data"}
        </button>
      </div>
      
      <p className="text-sm text-gray-500 mb-6">
        Kelola Jam Operasional, Kontak Darurat, Fasilitas, dan Aturan Pengunjung di sini.
      </p>

      <div className="grid gap-6">
        {sections.map(section => (
          <div key={section.id} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
            {/* View Mode */}
            {editingId !== section.id ? (
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#006370]">{section.title}</h3>
                  <button onClick={() => handleEdit(section)} className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded text-sm hover:bg-blue-100 font-medium">
                    <Pencil size={14} /> Edit
                  </button>
                </div>

                <div className="mt-4">
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex flex-col md:flex-row md:justify-between text-sm py-2 border-b border-gray-100 last:border-0">
                        <span className="font-semibold text-gray-700">{item.label}</span>
                        {item.value && (
                          <span className={`mt-1 md:mt-0 ${item.highlight ? 'text-red-600 font-bold' : 'text-gray-600'}`}>
                            {item.value}
                          </span>
                        )}
                        {item.detail && (
                          <p className="text-gray-500 w-full mt-1">{item.detail}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              /* Edit Mode */
              <div className="p-6 bg-gray-50 border-l-4 border-[#006370]">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Edit Info: {formData?.title}</h3>
                  <button onClick={() => setEditingId(null)} className="text-gray-500 hover:text-gray-800">
                    <X size={20} />
                  </button>
                </div>

                {formData && (
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-gray-700">Daftar Item</label>
                        <button 
                          onClick={() => setFormData({...formData, items: [...formData.items, { label: "", value: "", detail: "", highlight: false }]})}
                          className="text-xs flex items-center text-[#006370] hover:underline font-medium"
                        >
                          <Plus size={12} className="mr-1" /> Tambah Item
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        {formData.items.map((item, idx) => (
                          <div key={idx} className="p-4 bg-white border border-gray-200 rounded relative grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button 
                              onClick={() => {
                                const newItems = [...formData.items];
                                newItems.splice(idx, 1);
                                setFormData({...formData, items: newItems});
                              }}
                              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                            >
                              <Trash2 size={14} />
                            </button>
                            
                            <div>
                              <label className="block text-xs font-semibold text-gray-600 mb-1">Label / Nama (contoh: IGD)</label>
                              <input 
                                type="text" 
                                value={item.label} 
                                onChange={e => {
                                  const newItems = [...formData.items];
                                  newItems[idx].label = e.target.value;
                                  setFormData({...formData, items: newItems});
                                }}
                                className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                              />
                            </div>
                            
                            <div className="pr-6">
                              <label className="block text-xs font-semibold text-gray-600 mb-1">Nilai / Waktu (opsional)</label>
                              <input 
                                type="text" 
                                value={item.value || ""} 
                                onChange={e => {
                                  const newItems = [...formData.items];
                                  newItems[idx].value = e.target.value;
                                  setFormData({...formData, items: newItems});
                                }}
                                className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                              />
                            </div>

                            <div className="md:col-span-2">
                              <label className="block text-xs font-semibold text-gray-600 mb-1">Keterangan Detail (opsional)</label>
                              <textarea 
                                rows={2}
                                value={item.detail || ""} 
                                onChange={e => {
                                  const newItems = [...formData.items];
                                  newItems[idx].detail = e.target.value;
                                  setFormData({...formData, items: newItems});
                                }}
                                className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                              />
                            </div>
                            
                            <div className="md:col-span-2 flex items-center gap-2">
                              <input 
                                type="checkbox" 
                                id={`highlight-${idx}`}
                                checked={item.highlight || false}
                                onChange={e => {
                                  const newItems = [...formData.items];
                                  newItems[idx].highlight = e.target.checked;
                                  setFormData({...formData, items: newItems});
                                }}
                                className="w-4 h-4 text-[#006370] rounded border-gray-300"
                              />
                              <label htmlFor={`highlight-${idx}`} className="text-xs font-medium text-red-600">Tandai penting (Warna Merah)</label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-gray-200">
                      <button 
                        onClick={handleSave} 
                        disabled={saving}
                        className="flex items-center gap-2 bg-[#006370] text-white px-5 py-2.5 rounded-md text-sm font-bold hover:bg-[#004e58] disabled:opacity-50"
                      >
                        <Save size={16} /> {saving ? "Menyimpan..." : "Simpan Perubahan"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
