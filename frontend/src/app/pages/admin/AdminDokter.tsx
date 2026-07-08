import { useState, useEffect } from "react";
import api from "../../../lib/api";
import { logActivity } from "../../../lib/activity";
import { Plus, Trash2, Pencil, X } from "lucide-react";
import ImageUpload from "../../../app/components/ImageUpload";

interface Schedule {
  day: string;
  time_start: string;
  time_end: string;
  quota?: number;
  location?: string;
}

interface Education {
  degree: string;
  institution: string;
  year?: string;
}

interface DoctorData {
  id: string;
  name: string;
  title: string;
  specialty: string;
  polyclinic: string;
  image: string;
  schedules: Schedule[];
  educations: Education[];
  experience: string;
  bio: string;
  languages: string[];
  sort_order?: number;
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
    schedules: [],
    educations: [],
    experience: "",
    bio: "",
    languages: [],
    sort_order: 0,
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const fetchData = async () => {
    try {
      const response = await api.get('/doctors');
      const items: DoctorData[] = response.data.map((d: any) => ({
        id: d.id,
        name: d.name,
        title: d.title,
        specialty: d.specialty,
        polyclinic: d.polyclinic,
        image: d.image,
        experience: d.experience || "",
        bio: d.bio || "",
        languages: d.languages || [],
        sort_order: d.sort_order || 0,
        schedules: d.schedules || [],
        educations: d.educations || []
      }));
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
      schedules: [],
      educations: [],
      experience: "",
      bio: "",
      languages: [],
      sort_order: data.length,
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
      const payload = { ...formData };
      if (editingId) {
        await api.put(`/doctors/${editingId}`, payload);
      } else {
        await api.post('/doctors', payload);
      }
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
    if (!window.confirm("Yakin ingin menghapus dokter ini?")) return;
    try {
      await api.delete(`/doctors/${id}`);
      await logActivity('DELETE', 'Dokter', `Hapus dokter ID: ${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus.");
    }
  };

  // Form helpers
  const handleArrayStringChange = (field: "languages", value: string) => {
    const array = value.split(",").map(item => item.trim()).filter(Boolean);
    setFormData({ ...formData, [field]: array });
  };

  const addSchedule = () => setFormData({ ...formData, schedules: [...formData.schedules, { day: "Senin", time_start: "08:00", time_end: "12:00" }] });
  const updateSchedule = (index: number, field: keyof Schedule, value: string) => {
    const updated = [...formData.schedules];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, schedules: updated });
  };
  const removeSchedule = (index: number) => setFormData({ ...formData, schedules: formData.schedules.filter((_, i) => i !== index) });

  const addEducation = () => setFormData({ ...formData, educations: [...formData.educations, { degree: "", institution: "", year: "" }] });
  const updateEducation = (index: number, field: keyof Education, value: string) => {
    const updated = [...formData.educations];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, educations: updated });
  };
  const removeEducation = (index: number) => setFormData({ ...formData, educations: formData.educations.filter((_, i) => i !== index) });

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
          <h3 className="text-lg font-medium text-gray-900">Jadwal & Profil Dokter</h3>
          <p className="text-sm text-gray-500">Kelola data dokter, jadwal praktik, dan profil pendidikan.</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
          <Plus className="-ml-1 mr-2 h-4 w-4" /> Tambah Dokter
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow ring-1 ring-black/5 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dokter</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Spesialisasi</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Poliklinik</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Jadwal</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full object-cover mr-3 bg-gray-100" src={item.image} alt="" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.title}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.specialty}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.polyclinic}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {item.schedules?.length || 0} Jadwal
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  <button onClick={() => openEdit(item)} className="text-blue-600 hover:text-blue-900"><Pencil className="h-4 w-4 inline" /></button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4 inline" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          <div className="fixed inset-0 bg-gray-900/75" onClick={() => !saving && setIsModalOpen(false)}></div>
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col m-4">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">{editingId ? "Edit Dokter" : "Tambah Dokter"}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-500"><X className="h-5 w-5" /></button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form id="doctorForm" onSubmit={handleSubmit} className="space-y-8">
                
                {/* Info Dasar */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 border-b pb-2">Informasi Dasar</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap (tanpa gelar)</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gelar (Depan & Belakang)</label>
                      <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="Dr. dr. ... Sp.PD" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Spesialisasi</label>
                      <input type="text" required value={formData.specialty} onChange={(e) => setFormData({...formData, specialty: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Poliklinik</label>
                      <input type="text" required value={formData.polyclinic} onChange={(e) => setFormData({...formData, polyclinic: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                    </div>
                    <div>
                      <ImageUpload
                        value={formData.image}
                        onChange={(url) => setFormData({...formData, image: url})}
                        folder="doctors"
                        label="Foto Dokter"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 border-b pb-2">Profil Detail</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pengalaman (Tahun)</label>
                      <input type="text" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="misal: 15 Tahun" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bahasa yang Dikuasai (Pisahkan dengan koma)</label>
                      <input type="text" value={formData.languages.join(", ")} onChange={(e) => handleArrayStringChange("languages", e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" placeholder="Indonesia, Inggris" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Biografi Singkat</label>
                      <textarea rows={3} value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Urutan Tampil (Sort Order)</label>
                      <input type="number" value={formData.sort_order} onChange={(e) => setFormData({...formData, sort_order: parseInt(e.target.value) || 0})} className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                    </div>
                  </div>
                </div>

                {/* Jadwal Praktik */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium text-gray-900">Jadwal Praktik</h4>
                    <button type="button" onClick={addSchedule} className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-100 font-medium">
                      + Tambah Jadwal
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {formData.schedules.map((sched, i) => (
                      <div key={i} className="flex gap-2 items-center bg-gray-50 p-2 rounded-md border border-gray-200">
                        <select value={sched.day} onChange={(e) => updateSchedule(i, "day", e.target.value)} className="w-1/3 border-gray-300 rounded-md text-sm py-1">
                          {["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"].map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                        <input type="time" value={sched.time_start} onChange={(e) => updateSchedule(i, "time_start", e.target.value)} className="w-1/4 border-gray-300 rounded-md text-sm py-1" />
                        <span className="text-gray-500">-</span>
                        <input type="time" value={sched.time_end} onChange={(e) => updateSchedule(i, "time_end", e.target.value)} className="w-1/4 border-gray-300 rounded-md text-sm py-1" />
                        <button type="button" onClick={() => removeSchedule(i)} className="text-red-500 hover:text-red-700 ml-auto"><X size={16} /></button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pendidikan */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium text-gray-900">Riwayat Pendidikan</h4>
                    <button type="button" onClick={addEducation} className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-100 font-medium">
                      + Tambah Pendidikan
                    </button>
                  </div>
                  <div className="space-y-3">
                    {formData.educations.map((edu, i) => (
                      <div key={i} className="flex gap-2 items-start bg-gray-50 p-3 rounded-md border border-gray-200">
                        <input type="text" placeholder="Gelar (misal: Spesialis Penyakit Dalam)" value={edu.degree} onChange={(e) => updateEducation(i, "degree", e.target.value)} className="flex-1 border-gray-300 rounded-md text-sm py-1" />
                        <input type="text" placeholder="Institusi" value={edu.institution} onChange={(e) => updateEducation(i, "institution", e.target.value)} className="flex-1 border-gray-300 rounded-md text-sm py-1" />
                        <input type="text" placeholder="Tahun" value={edu.year} onChange={(e) => updateEducation(i, "year", e.target.value)} className="w-24 border-gray-300 rounded-md text-sm py-1" />
                        <button type="button" onClick={() => removeEducation(i)} className="text-red-500 hover:text-red-700 mt-1.5 ml-2"><X size={16} /></button>
                      </div>
                    ))}
                  </div>
                </div>

              </form>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 rounded-b-xl">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Batal
              </button>
              <button type="submit" form="doctorForm" disabled={saving} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 shadow-sm">
                {saving ? "Menyimpan..." : "Simpan Data"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
