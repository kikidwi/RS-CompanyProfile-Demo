import { useState, useEffect } from "react";
import api from "../../../../lib/api";
import { defaultFlows } from "../../public/informasi/AlurPendaftaran";
import { Pencil, X, Save, Plus, Trash2 } from "lucide-react";

type AlurType = typeof defaultFlows[0];

export default function AdminAlurPendaftaran() {
  const [flows, setFlows] = useState<AlurType[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<AlurType | null>(null);

  const fetchData = async () => {
    try {
      const response = await api.get('/information?type=registration_flow');
      if (response.data && response.data.length > 0) {
        const items: AlurType[] = response.data.map((d: any) => ({
          _dbId: d.id,
          id: d.slug,
          label: d.title,
          description: d.excerpt || '',
          steps: d.content || [],
          requirements: d.tags_or_requirements || []
        }));
        
        // Sort to match defaultFlows order
        const orderMap = new Map(defaultFlows.map((f, i) => [f.id, i]));
        items.sort((a, b) => (orderMap.get(a.id) || 0) - (orderMap.get(b.id) || 0));
        
        setFlows(items);
      } else {
        setFlows(defaultFlows);
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal memuat data alur pendaftaran" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (item: AlurType) => {
    setFormData(JSON.parse(JSON.stringify(item))); // Deep copy
    setEditingId(item.id);
  };

  const handleSave = async () => {
    if (!formData) return;
    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      // Clean up local-only UI fields before saving to firestore if necessary, 
      // but in this case, keeping them is fine or we can omit them. We will just save formData.
      const payload = { ...formData };
      delete (payload as any).icon; // Don't save React.ElementType to firestore
      
      const apiPayload = {
        type: 'registration_flow',
        slug: payload.id,
        title: payload.label,
        excerpt: payload.description,
        content: payload.steps,
        tags_or_requirements: payload.requirements
      };
      
      if ((payload as any)._dbId) {
        await api.put(`/information/${(payload as any)._dbId}`, apiPayload);
      } else {
        await api.post('/information', apiPayload);
      }
      setMessage({ type: "success", text: "Alur berhasil diperbarui!" });
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
    if (!confirm("Reset semua alur pendaftaran ke default pabrik?")) return;
    setSaving(true);
    try {
      for (const item of defaultFlows) {
        const payload = { ...item };
        delete (payload as any).icon;
        const apiPayload = {
          type: 'registration_flow',
          slug: payload.id,
          title: payload.label,
          excerpt: payload.description,
          content: payload.steps,
          tags_or_requirements: payload.requirements
        };
        await api.post('/information', apiPayload);
      }
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
        <h2 className="text-lg font-bold text-gray-800">Daftar Alur Pendaftaran</h2>
        <button
          onClick={handleLoadDefault}
          disabled={saving}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 border border-gray-300 transition-colors"
        >
          {saving ? "Memproses..." : "Restore Default Data"}
        </button>
      </div>
      
      <p className="text-sm text-gray-500 mb-6">
        Untuk Alur Pendaftaran, Anda hanya dapat mengubah teks dan langkah-langkah pada keempat tipe pendaftaran utama.
      </p>

      <div className="grid gap-6">
        {flows.map(flow => (
          <div key={flow.id} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
            {/* View Mode */}
            {editingId !== flow.id ? (
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#006370]">{flow.label}</h3>
                    <p className="text-gray-500 text-sm mt-1 max-w-3xl">{flow.description}</p>
                  </div>
                  <button onClick={() => handleEdit(flow)} className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded text-sm hover:bg-blue-100 font-medium">
                    <Pencil size={14} /> Edit
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm border-b pb-2">Langkah-langkah:</h4>
                    <ol className="space-y-3">
                      {flow.steps.map((s, i) => (
                        <li key={i} className="text-sm">
                          <span className="font-bold text-gray-800">{i+1}. {s.title}</span>
                          <p className="text-gray-500 mt-0.5 leading-relaxed">{s.detail}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm border-b pb-2">Persyaratan Dokumen:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {flow.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-gray-600">{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              /* Edit Mode */
              <div className="p-6 bg-gray-50 border-l-4 border-[#006370]">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Edit Alur: {formData?.label}</h3>
                  <button onClick={() => setEditingId(null)} className="text-gray-500 hover:text-gray-800">
                    <X size={20} />
                  </button>
                </div>

                {formData && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Deskripsi Singkat</label>
                      <textarea 
                        rows={2} 
                        value={formData.description} 
                        onChange={e => setFormData({...formData, description: e.target.value})} 
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* STEPS EDITOR */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-gray-700">Langkah-langkah ({formData.steps.length})</label>
                          <button 
                            onClick={() => setFormData({...formData, steps: [...formData.steps, { title: "", detail: "" }]})}
                            className="text-xs flex items-center text-[#006370] hover:underline font-medium"
                          >
                            <Plus size={12} className="mr-1" /> Tambah Langkah
                          </button>
                        </div>
                        <div className="space-y-3">
                          {formData.steps.map((step, idx) => (
                            <div key={idx} className="p-3 bg-white border border-gray-200 rounded relative group">
                              <button 
                                onClick={() => {
                                  const newSteps = [...formData.steps];
                                  newSteps.splice(idx, 1);
                                  setFormData({...formData, steps: newSteps});
                                }}
                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                              >
                                <Trash2 size={14} />
                              </button>
                              <div className="mb-2 mr-6">
                                <input 
                                  type="text" 
                                  value={step.title} 
                                  onChange={e => {
                                    const newSteps = [...formData.steps];
                                    newSteps[idx].title = e.target.value;
                                    setFormData({...formData, steps: newSteps});
                                  }}
                                  className="w-full text-sm font-bold border-b border-gray-200 focus:border-[#006370] focus:outline-none pb-1"
                                  placeholder={`Langkah ${idx+1}`}
                                />
                              </div>
                              <textarea 
                                rows={2} 
                                value={step.detail} 
                                onChange={e => {
                                  const newSteps = [...formData.steps];
                                  newSteps[idx].detail = e.target.value;
                                  setFormData({...formData, steps: newSteps});
                                }}
                                className="w-full text-xs text-gray-600 bg-transparent resize-none focus:outline-none"
                                placeholder="Penjelasan detail langkah..."
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* REQUIREMENTS EDITOR */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-gray-700">Persyaratan Dokumen</label>
                          <button 
                            onClick={() => setFormData({...formData, requirements: [...formData.requirements, ""]})}
                            className="text-xs flex items-center text-[#006370] hover:underline font-medium"
                          >
                            <Plus size={12} className="mr-1" /> Tambah Syarat
                          </button>
                        </div>
                        <div className="space-y-2">
                          {formData.requirements.map((req, idx) => (
                            <div key={idx} className="flex gap-2">
                              <input 
                                type="text" 
                                value={req} 
                                onChange={e => {
                                  const newReqs = [...formData.requirements];
                                  newReqs[idx] = e.target.value;
                                  setFormData({...formData, requirements: newReqs});
                                }}
                                className="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm"
                                placeholder="Misal: KTP asli"
                              />
                              <button 
                                onClick={() => {
                                  const newReqs = [...formData.requirements];
                                  newReqs.splice(idx, 1);
                                  setFormData({...formData, requirements: newReqs});
                                }}
                                className="text-red-500 hover:bg-red-50 p-1.5 rounded"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
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
