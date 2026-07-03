import { useState, useEffect } from "react";
import api from "../../../../lib/api";
import { useAuth } from "../../../../context/AuthContext";
import { Trash2, Plus } from "lucide-react";
import { Navigate } from "react-router";

// Tipe Data User
interface UserData {
  id: string;
  email: string;
  role: string;
  name: string;
}

export default function ManajemenUser() {
  const { userRole } = useAuth();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "humas",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Hanya Super Admin yang boleh akses
  if (userRole !== "super_admin") {
    return <Navigate to="/admin/pengaturan" replace />;
  }

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (err) {
      console.error("Gagal mengambil data user:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await api.post('/users', formData);

      // Sukses
      setIsModalOpen(false);
      setFormData({ name: "", email: "", password: "", role: "humas" });
      fetchUsers();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Gagal membuat user baru.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Yakin ingin menghapus akses user ini?")) {
      try {
        await api.delete(`/users/${id}`);
        fetchUsers();
      } catch (err) {
        console.error("Gagal menghapus user:", err);
        alert("Gagal menghapus user");
      }
    }
  };

  if (loading) {
    return <div className="py-12 text-center text-gray-500">Memuat data pengguna...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Manajemen Staf / Pengguna</h3>
          <p className="mt-1 text-sm text-gray-500">Kelola akun staf yang memiliki akses ke Admin Panel.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          <Plus className="-ml-1 mr-2 h-5 w-5" />
          Tambah Staf
        </button>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th scope="col" className="relative px-6 py-3"><span className="sr-only">Aksi</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.role === 'super_admin' ? 'bg-purple-100 text-purple-800' :
                          user.role === 'humas' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => handleDelete(user.id)}
                          className="text-red-600 hover:text-red-900 ml-4"
                          disabled={user.role === 'super_admin'}
                        >
                          {user.role !== 'super_admin' && <Trash2 className="h-4 w-4 inline" />}
                        </button>
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                        Belum ada data staf.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Tambah User */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-gray-600/75 transition-opacity" 
            onClick={() => !isSubmitting && setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden z-10">
            <form onSubmit={handleSubmit}>
              <div className="px-6 py-5">
                <h3 className="text-lg font-medium text-gray-900 mb-4" id="modal-title">Tambah Staf Baru</h3>
                  
                  {error && <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md">{error}</div>}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 border px-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 border px-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Password Sementara</label>
                      <input type="password" name="password" required minLength={6} value={formData.password} onChange={handleChange} className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 border px-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Hak Akses (Role)</label>
                      <select name="role" value={formData.role} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        <option value="humas">Humas (Berita & Promo)</option>
                        <option value="admin_operasional">Admin Operasional (Dokter & Layanan)</option>
                        <option value="super_admin">Super Admin (Akses Penuh)</option>
                      </select>
                    </div>
                  </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse gap-3">
                <button type="submit" disabled={isSubmitting} className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:text-sm">
                  {isSubmitting ? 'Menyimpan...' : 'Simpan'}
                </button>
                <button type="button" onClick={() => setIsModalOpen(false)} disabled={isSubmitting} className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:text-sm">
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
