import { useState, useEffect } from "react";
import api from "../../../../lib/api";

export default function PengaturanUmum() {
  const [formData, setFormData] = useState({
    telepon: "",
    email: "",
    alamat: "",
    instagram: "",
    facebook: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/settings/general');
        if (response.data && Object.keys(response.data).length > 0) {
          setFormData(response.data);
        }
      } catch (error) {
        console.error("Gagal mengambil pengaturan:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      await api.post('/settings/general', formData);
      setMessage({ type: "success", text: "Pengaturan berhasil disimpan!" });
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Terjadi kesalahan saat menyimpan data." });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="py-12 text-center text-gray-500">Memuat data...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {message.text && (
        <div className={`p-4 rounded-md ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {message.text}
        </div>
      )}

      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Kontak Darurat & Info</h3>
        <p className="mt-1 text-sm text-gray-500">Informasi ini akan ditampilkan di footer dan header website publik.</p>
      </div>

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="telepon" className="block text-sm font-medium text-gray-700">Nomor Telepon (IGD / Pendaftaran)</label>
          <div className="mt-1">
            <input
              type="text"
              name="telepon"
              id="telepon"
              value={formData.telepon}
              onChange={handleChange}
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
              placeholder="021-1234567"
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Utama</label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
              placeholder="info@rsutama.com"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
          <div className="mt-1">
            <textarea
              id="alamat"
              name="alamat"
              rows={3}
              value={formData.alamat}
              onChange={handleChange}
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
              placeholder="Jl. Raya Kesehatan No. 1..."
            />
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Sosial Media</h3>
      </div>

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Link Instagram</label>
          <div className="mt-1">
            <input
              type="url"
              name="instagram"
              id="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
              placeholder="https://instagram.com/rsutama"
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">Link Facebook</label>
          <div className="mt-1">
            <input
              type="url"
              name="facebook"
              id="facebook"
              value={formData.facebook}
              onChange={handleChange}
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
              placeholder="https://facebook.com/rsutama"
            />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {saving ? "Menyimpan..." : "Simpan Pengaturan"}
          </button>
        </div>
      </div>
    </form>
  );
}
