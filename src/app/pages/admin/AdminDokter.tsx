import { useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { logActivity } from "../../../lib/activity";
import { Plus, Trash2, Pencil, X, Upload } from "lucide-react";
import { defaultDoctors } from "../public/Dokter";

interface DoctorData {
  id: string;
  name: string;
  title: string;
  specialty: string;
  polyclinic: string;
  image: string;
  schedule: { day: string; time: string }[];
  education: string[];
  experience: string;
  bio: string;
  languages: string[];
  order?: number;
}

export default function AdminDokter() {
  const [data, setData] = useState<DoctorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<DoctorData>({
    id: "",
    name: "",
    title: "",
    specialty: "",
    polyclinic: "",
    image: "",
    schedule: [],
    education: [],
    experience: "",
    bio: "",
    languages: [],
    order: 0,
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const fetchData = async () => {
    try {
      const snap = await getDocs(collection(db, "dokter"));
      const items: DoctorData[] = [];
      snap.forEach((d) => items.push({ id: d.id, ...d.data() } as DoctorData));
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
    setFormData({
      id: "",
      name: "",
      title: "",
      specialty: "",
      polyclinic: "",
      image: "",
      schedule: [],
      education: [],
      experience: "",
      bio: "",
      languages: [],
      order: data.length,
    });
    setIsModalOpen(true);
  };

  const openEdit = (item: DoctorData) => {
    setEditingId(item.id);
    setFormData({ ...item });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });
    try {
      const docId = editingId || crypto.randomUUID();
      const payload = { ...formData };
      if (!editingId) {
        payload.id = docId;
      }
      await setDoc(doc(db, "dokter", docId), payload);
      await logActivity(editingId ? 'UPDATE' : 'CREATE', 'Dokter', `Dokter ${payload.name}`);
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
    if (!window.confirm("Yakin ingin menghapus data dokter ini?")) return;
    try {
      const docItem = data.find(d => d.id === id);
      await deleteDoc(doc(db, "dokter", id));
      await logActivity('DELETE', 'Dokter', `Dokter ${docItem?.name || 'ID ' + id}`);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus.");
    }
  };

  const handleAddSchedule = () => {
    setFormData({
      ...formData,
      schedule: [...formData.schedule, { day: "Senin", time: "08:00 - 12:00" }]
    });
  };

  const handleUpdateSchedule = (index: number, field: "day" | "time", value: string) => {
    const newSchedule = [...formData.schedule];
    newSchedule[index][field] = value;
    setFormData({ ...formData, schedule: newSchedule });
  };

  const handleRemoveSchedule = (index: number) => {
    const newSchedule = formData.schedule.filter((_, i) => i !== index);
    setFormData({ ...formData, schedule: newSchedule });
  };

  // Helper function to handle array strings (education, languages) via textarea
  const handleArrayStringChange = (field: "education" | "languages", value: string) => {
    const arr = value.split("\n").filter(item => item.trim() !== "");
    setFormData({ ...formData, [field]: arr });
  };

  const handleLoadDefault = async () => {
    if (!window.confirm("Yakin ingin memuat data default? Ini akan menambahkan 16 data dokter bawaan.")) return;
    setSaving(true);
    setMessage({ type: "", text: "" });
    try {
      // Create an array of promises for setting documents
      const promises = defaultDoctors.map((docItem, index) => {
        const docId = crypto.randomUUID();
        const payload = {
          id: docId,
          name: docItem.name,
          title: docItem.title,
          specialty: docItem.specialty,
          polyclinic: docItem.polyclinic,
          image: docItem.image,
          schedule: docItem.schedule,
          education: docItem.education,
          experience: docItem.experience,
          bio: docItem.bio,
          languages: docItem.languages,
          order: index
        };
        return setDoc(doc(db, "dokter", docId), payload);
      });
      await Promise.all(promises);
      await logActivity('IMPORT', 'Dokter', 'Import data default dokter');
      setMessage({ type: "success", text: "Data default berhasil dimuat!" });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Gagal memuat data default." });
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
        <div>
          <h3 className="text-lg font-medium text-gray-900">Manajemen Dokter</h3>
          <p className="text-sm text-gray-500">Kelola direktori dokter spesialis rumah sakit.</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
          <Plus className="-ml-1 mr-2 h-4 w-4" /> Tambah Dokter
        </button>
      </div>

      <div className="overflow-hidden shadow ring-1 ring-black/5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Foto</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama & Gelar</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Spesialisasi</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Poliklinik</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3">
                  <img src={item.image} alt={item.name} className="h-10 w-10 rounded-full object-cover bg-gray-100" />
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.title}</div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.specialty}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.polyclinic}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button onClick={() => openEdit(item)} className="text-blue-600 hover:text-blue-800"><Pencil className="h-4 w-4 inline" /></button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700"><Trash2 className="h-4 w-4 inline" /></button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center">
                  <div className="text-sm text-gray-500 mb-3">Belum ada data dokter.</div>
                  <button onClick={handleLoadDefault} disabled={saving} className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 border border-gray-300">
                    <Upload className="mr-2 h-4 w-4" /> {saving ? "Memuat..." : "Muat Data Default (16 Dokter)"}
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto pt-20 pb-10">
          <div className="fixed inset-0 bg-gray-600/75" onClick={() => !saving && setIsModalOpen(false)}></div>
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 z-10 max-h-[90vh] flex flex-col">
            
            <div className="px-6 py-4 border-b flex justify-between items-center">
               <h3 className="text-lg font-medium text-gray-900">{editingId ? "Edit Dokter" : "Tambah Dokter"}</h3>
               <button onClick={() => !saving && setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                 <X size={20} />
               </button>
            </div>

            <div className="overflow-y-auto flex-1">
              <form id="dokterForm" onSubmit={handleSubmit} className="p-6 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Dokter</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="Contoh: dr. Ahmad Fauzi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gelar (Title)</label>
                    <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="Contoh: Sp.JP (K)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Spesialisasi</label>
                    <input type="text" required value={formData.specialty} onChange={(e) => setFormData({ ...formData, specialty: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="Contoh: Kardiologi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Poliklinik</label>
                    <input type="text" required value={formData.polyclinic} onChange={(e) => setFormData({ ...formData, polyclinic: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="Contoh: Poli Jantung" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pengalaman</label>
                    <input type="text" required value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="Contoh: 18 tahun" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Urutan Tampil (Opsional)</label>
                    <input type="number" value={formData.order} onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio / Deskripsi Singkat</label>
                  <textarea rows={3} required value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pendidikan (Satu per baris)</label>
                  <textarea rows={4} value={formData.education.join("\n")} onChange={(e) => handleArrayStringChange("education", e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="S1 Kedokteran – Universitas Indonesia&#10;Sp.JP – RSCM Jakarta" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bahasa yang Dikuasai (Satu per baris)</label>
                  <textarea rows={2} value={formData.languages.join("\n")} onChange={(e) => handleArrayStringChange("languages", e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="Indonesia&#10;Inggris" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Foto Dokter (Pilih Gambar)</label>
                  <input type="file" accept="image/*" onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData({ ...formData, image: reader.result as string });
                      };
                      reader.readAsDataURL(file);
                    }
                  }} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                  {formData.image && (
                    <div className="mt-2">
                      <img src={formData.image} alt="Preview" className="h-24 w-24 object-cover rounded-md border bg-gray-50" />
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Jadwal Praktik</label>
                    <button type="button" onClick={handleAddSchedule} className="text-sm text-blue-600 hover:text-blue-800 font-medium">+ Tambah Jadwal</button>
                  </div>
                  
                  {formData.schedule.length === 0 && (
                    <p className="text-sm text-gray-500 italic">Belum ada jadwal yang ditambahkan.</p>
                  )}

                  <div className="space-y-2">
                    {formData.schedule.map((sch, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        <select 
                          value={sch.day} 
                          onChange={(e) => handleUpdateSchedule(i, "day", e.target.value)}
                          className="border border-gray-300 rounded-md py-1.5 px-3 text-sm"
                        >
                          {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].map(d => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                        <input 
                          type="text" 
                          value={sch.time} 
                          onChange={(e) => handleUpdateSchedule(i, "time", e.target.value)}
                          placeholder="Contoh: 08:00 - 12:00"
                          className="flex-1 border border-gray-300 rounded-md py-1.5 px-3 text-sm"
                        />
                        <button type="button" onClick={() => handleRemoveSchedule(i)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-md">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </form>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t flex justify-end gap-3 rounded-b-lg">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50">
                Batal
              </button>
              <button type="submit" form="dokterForm" disabled={saving} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                {saving ? "Menyimpan..." : "Simpan Dokter"}
              </button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}
