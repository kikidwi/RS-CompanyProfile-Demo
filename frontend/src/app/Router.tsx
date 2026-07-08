import { BrowserRouter, Routes, Route } from 'react-router';
import PublicLayout from './layout/PublicLayout';

// Pages
import Home from './pages/public/Home';

import ProfileLayout from './pages/public/profile/ProfileLayout';
import TentangKami from './pages/public/profile/TentangKami';
import VisiMisi from './pages/public/profile/VisiMisi';
import JajaranDireksi from './pages/public/profile/JajaranDireksi';
import DewanPengawas from './pages/public/profile/DewanPengawas';
import StrukturOrganisasi from './pages/public/profile/StrukturOrganisasi';
import MapAksesibilitas from './pages/public/profile/MapAksesibilitas';

import LayananLayout from './pages/public/layanan/LayananLayout';
import MedicalCheckup from './pages/public/layanan/MedicalCheckup';
import KamarPerawatan from './pages/public/layanan/KamarPerawatan';
import MaklumatPelayanan from './pages/public/layanan/MaklumatPelayanan';
import KetersediaanKamar from './pages/public/layanan/KetersediaanKamar';
import Promosi from './pages/public/Promosi';
import PromosiDetail from './pages/public/PromosiDetail';
import Dokter from './pages/public/Dokter';
import InformasiLayout from './pages/public/informasi/InformasiLayout';
import BeritaArtikel from './pages/public/informasi/BeritaArtikel';
import AlurPendaftaran from './pages/public/informasi/AlurPendaftaran';
import InformasiPenting from './pages/public/informasi/InformasiPenting';
import BeritaArtikelDetail from './pages/public/informasi/BeritaArtikelDetail';

// Admin
import AdminLayout from './layout/AdminLayout';
import ProtectedRoute from './layout/ProtectedRoute';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

import PengaturanLayout from './pages/admin/pengaturan/PengaturanLayout';
import PengaturanUmum from './pages/admin/pengaturan/PengaturanUmum';
import ManajemenUser from './pages/admin/pengaturan/ManajemenUser';

import ProfilLayout from './pages/admin/profil/ProfilLayout';
import AdminTentangKami from './pages/admin/profil/AdminTentangKami';
import AdminVisiMisi from './pages/admin/profil/AdminVisiMisi';
import AdminDireksi from './pages/admin/profil/AdminDireksi';
import AdminDewanPengawas from './pages/admin/profil/AdminDewanPengawas';

import AdminDokter from './pages/admin/AdminDokter';
import AdminPromosi from './pages/admin/AdminPromosi';

import AdminLayananLayout from './pages/admin/layanan/LayananLayout';
import AdminMCU from './pages/admin/layanan/AdminMCU';
import AdminKamar from './pages/admin/layanan/AdminKamar';
import AdminMaklumat from './pages/admin/layanan/AdminMaklumat';
import AdminKetersediaan from './pages/admin/layanan/AdminKetersediaan';

import AdminInformasiLayout from './pages/admin/informasi/AdminInformasiLayout';
import AdminBerita from './pages/admin/informasi/AdminBerita';
import AdminAlurPendaftaran from './pages/admin/informasi/AdminAlurPendaftaran';
import AdminInfoPenting from './pages/admin/informasi/AdminInfoPenting';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          
          {/* Profile Routes with Tab Layout */}
          <Route path="profil" element={<ProfileLayout />}>
            <Route path="tentang-kami" element={<TentangKami />} />
            <Route path="visi-misi" element={<VisiMisi />} />
            <Route path="jajaran-direksi" element={<JajaranDireksi />} />
            <Route path="dewan-pengawas" element={<DewanPengawas />} />
            <Route path="struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="map-aksesibilitas" element={<MapAksesibilitas />} />
          </Route>

          {/* Layanan Routes with Tab Layout */}
          <Route path="layanan" element={<LayananLayout />}>
            <Route path="medical-checkup" element={<MedicalCheckup />} />
            <Route path="kamar-perawatan" element={<KamarPerawatan />} />
            <Route path="maklumat-pelayanan" element={<MaklumatPelayanan />} />
            <Route path="ketersediaan-kamar" element={<KetersediaanKamar />} />
          </Route>

          {/* Dokter */}
          <Route path="dokter" element={<Dokter />} />

          {/* Promosi */}
          <Route path="promosi">
            <Route index element={<Promosi />} />
            <Route path=":id" element={<PromosiDetail />} />
          </Route>

          {/* Informasi Routes with Tab Layout */}
          <Route path="informasi" element={<InformasiLayout />}>
            <Route path="berita-artikel" element={<BeritaArtikel />} />
            <Route path="berita-artikel/:slug" element={<BeritaArtikelDetail />} />
            <Route path="alur-pendaftaran" element={<AlurPendaftaran />} />
            <Route path="informasi-penting" element={<InformasiPenting />} />
          </Route>
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          
          {/* Pengaturan: accessible by super_admin & admin */}
          <Route path="pengaturan" element={
            <ProtectedRoute allowedRoles={['super_admin', 'admin']}>
              <PengaturanLayout />
            </ProtectedRoute>
          }>
            <Route index element={<PengaturanUmum />} />
            {/* Pengguna: super_admin only */}
            <Route path="pengguna" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <ManajemenUser />
              </ProtectedRoute>
            } />
          </Route>

          {/* Profil: super_admin & admin only */}
          <Route path="profil" element={
            <ProtectedRoute allowedRoles={['super_admin', 'admin']}>
              <ProfilLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminTentangKami />} />
            <Route path="visi-misi" element={<AdminVisiMisi />} />
            <Route path="direksi" element={<AdminDireksi />} />
            <Route path="dewan-pengawas" element={<AdminDewanPengawas />} />
          </Route>
          
          {/* Dokter: super_admin & admin only */}
          <Route path="dokter" element={
            <ProtectedRoute allowedRoles={['super_admin', 'admin']}>
              <AdminDokter />
            </ProtectedRoute>
          } />

          {/* Promosi: super_admin & admin only */}
          <Route path="promosi" element={
            <ProtectedRoute allowedRoles={['super_admin', 'admin']}>
              <AdminPromosi />
            </ProtectedRoute>
          } />
          
          {/* Layanan: super_admin & admin only */}
          <Route path="layanan" element={
            <ProtectedRoute allowedRoles={['super_admin', 'admin']}>
              <AdminLayananLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminMCU />} />
            <Route path="kamar" element={<AdminKamar />} />
            <Route path="maklumat" element={<AdminMaklumat />} />
            <Route path="ketersediaan" element={<AdminKetersediaan />} />
          </Route>
          
          {/* Informasi: accessible by all roles (sidebar filtered per sub-tab) */}
          <Route path="informasi" element={<AdminInformasiLayout />}>
            <Route index element={<AdminBerita />} />
            <Route path="berita" element={<AdminBerita />} />
            <Route path="alur" element={
              <ProtectedRoute allowedRoles={['super_admin', 'admin']}>
                <AdminAlurPendaftaran />
              </ProtectedRoute>
            } />
            <Route path="penting" element={
              <ProtectedRoute allowedRoles={['super_admin', 'admin']}>
                <AdminInfoPenting />
              </ProtectedRoute>
            } />
          </Route>
          
          {/* Rute admin lainnya akan ditambahkan di fase selanjutnya */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Trigger IDE refresh
