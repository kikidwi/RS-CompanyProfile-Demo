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
          <Route path="promosi" element={<Promosi />} />

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
          
          <Route path="pengaturan" element={<PengaturanLayout />}>
            <Route index element={<PengaturanUmum />} />
            <Route path="pengguna" element={<ManajemenUser />} />
          </Route>
          {/* Rute admin lainnya akan ditambahkan di fase selanjutnya */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
