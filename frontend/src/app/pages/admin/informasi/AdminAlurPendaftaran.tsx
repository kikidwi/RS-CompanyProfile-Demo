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
      const response = await api.get('/registration-flows');
      if (response.data && response.data.length > 0) {
        const items: AlurType[] = response.data.map((d: any) => ({
          _dbId: d.id,
          id: d.slug,
          label: d.label,
          description: d.description || '',
          color: d.color,
          steps: d.steps.map((step: any) => ({
            title: step.title,
            detail: step.detail
          })),
          requirements: d.requirements.map((req: any) => req.requirement)
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
      const payload = { ...formData };
      delete (payload as any).icon;
      
      const apiPayload = {
        slug: payload.id,
        label: payload.label,
        description: payload.description,
        color: payload.color || "#006370",
        steps: payload.steps,
        requirements: payload.requirements
      };
      
      if ((payload as any)._dbId) {
        await api.put(`/registration-flows/${(payload as any)._dbId}`, apiPayload);
      } else {
        await api.post('/registration-flows', apiPayload);
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
          slug: payload.id,
          label: payload.label,
          description: payload.description,
          color: payload.color || "#006370",
          steps: payload.steps,
          requirements: payload.requirements
        };
        await api.post('/registration-flows', apiPayload);
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

  // Forms helpers
  const handleArrayStringChange = (field: "requirements", value: string) => {
    if (!formData) return;
    const array = value.split("\n").map(item => item.trim()).filter(Boolean);
    setFormData({ ...formData, [field]: array });
  };

  const addStep = () => {
    if (!formData) return;
    setFormData({ ...formData, steps: [...formData.steps, { title: "", detail: "" }] });
  };

  const removeStep = (index: number) => {
    if (!formData) return;
    const updated = formData.steps.filter((_, i) => i !== index);
    setFormData({ ...formData, steps: updated });
  };

  const updateStep = (index: number, field: "title" | "detail", value: string) => {
    if (!formData) return;
    const updated = [...formData.steps];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, steps: updated });
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
          <h3 className="text-lg font-medium text-gray-900">Alur Pendaftaran</h3>
          <p className="text-sm text-gray-500">Kelola langkah-langkah dan panduan pendaftaran pasien.</p>
        </div>
        <button onClick={handleLoadDefault} className="text-sm text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md transition-colors">
          Reset Default Data
        </button>
      </div>

      {editingId && formData && (
        <div className="bg-white border border-blue-200 shadow-sm rounded-lg overflow-hidden">
          <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex justify-between items-center">
            <h4 className="font-semibold text-blue-900">Edit Alur: {formData.label}</h4>
            <button onClick={() => setEditingId(null)} className="text-blue-400 hover:text-blue-600">
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h5 className="font-medium text-gray-900 border-b pb-2">Informasi Umum</h5>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Judul Alur</label>
                  <input type="text" value={formData.label} onChange={(e) => setFormData({...formData, label: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Singkat</label>
                  <textarea rows={3} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Persyaratan Dokumen (Pisahkan dengan Enter)</label>
                  <textarea rows={4} value={formData.requirements.join('\n')} onChange={(e) => handleArrayStringChange("requirements", e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="KTP&#10;Kartu BPJS&#10;Surat Rujukan" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h5 className="font-medium text-gray-900">Langkah-Langkah (Steps)</h5>
                  <button type="button" onClick={addStep} className="text-xs flex items-center text-blue-600 bg-blue-50 px-2 py-1 rounded hover:bg-blue-100">
                    <Plus size={14} className="mr-1" /> Tambah Langkah
                  </button>
                </div>
                
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {formData.steps.map((step, i) => (
                    <div key={i} className="flex gap-3 items-start border border-gray-100 bg-gray-50 p-4 rounded-md relative">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 mt-1">
                        {i + 1}
                      </div>
                      <div className="flex-1 space-y-3">
                        <input type="text" placeholder="Judul Langkah (Misal: Ambil Nomor Antrian)" value={step.title} onChange={(e) => updateStep(i, "title", e.target.value)} className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm font-medium focus:ring-blue-500 focus:border-blue-500" />
                        <textarea rows={2} placeholder="Penjelasan detail..." value={step.detail} onChange={(e) => updateStep(i, "detail", e.target.value)} className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <button type="button" onClick={() => removeStep(i)} className="text-gray-400 hover:text-red-500 pt-1">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-200">
              <button onClick={handleSave} disabled={saving} className="inline-flex items-center px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                <Save className="mr-2 h-4 w-4" /> {saving ? "Menyimpan..." : "Simpan Perubahan"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      <div className="space-y-6">
        {flows.map((flow) => (
          <div key={flow.id} className={`bg-white rounded-xl shadow-sm border ${editingId === flow.id ? 'border-blue-400 ring-1 ring-blue-400' : 'border-gray-200'}`}>
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: flow.color || "#006370" }}>
                  <span className="font-bold text-sm">{flow.id.substring(0, 2).toUpperCase()}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{flow.label}</h4>
                  <p className="text-sm text-gray-500">{flow.steps.length} Langkah • {flow.requirements.length} Syarat</p>
                </div>
              </div>
              <button onClick={() => handleEdit(flow)} className="px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors">
                Edit Alur
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">{flow.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h5 className="text-xs font-semibold text-gray-400 uppercase mb-3">Langkah-Langkah</h5>
                  <div className="space-y-4 relative before:absolute before:inset-0 before:ml-3 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                    {flow.steps.map((step, i) => (
                      <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-gray-200 text-gray-500 font-bold text-[10px] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                          {i + 1}
                        </div>
                        <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                          <div className="font-semibold text-sm text-gray-800 mb-1">{step.title}</div>
                          <div className="text-xs text-gray-500">{step.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-gray-400 uppercase mb-3">Persyaratan</h5>
                  <ul className="space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    {flow.requirements.map((req, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-[#006370] shrink-0">✓</span> {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
