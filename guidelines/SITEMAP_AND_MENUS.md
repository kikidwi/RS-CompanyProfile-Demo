# Struktur Menu & Sitemap Rumah Sakit Utama Demo

Dokumen ini berisi daftar lengkap struktur navigasi dan menu-menu yang telah dibangun pada Website Company Profile RS Utama Demo. Seluruh halaman di bawah ini sudah berstatus selesai dan terintegrasi.

## 1. Beranda (Home)
- **Rute:** `/`
- **Isi Utama:** Hero banner carousel, stat counters, quick links layanan (MCU, Kamar, Ketersediaan, Maklumat), direktori dokter (highlight 4 dokter), daftar promo terbaru, dan artikel berita edukasi terbaru.
- **Status:** `[x] Selesai`

## 2. Profil (Dropdown Menu)
- **Rute Induk:** `/profil`
- **Sub-menu:**
  1. **Tentang Kami**
     - Rute: `/profil/tentang-kami`
     - Isi Utama: Sejarah singkat, deskripsi RS, keunggulan layanan, akreditasi KARS & JCI.
     - Status: `[x] Selesai`
  2. **Visi Misi**
     - Rute: `/profil/visi-misi`
     - Isi Utama: Visi 2030, penjabaran misi, nilai-nilai budaya kerja (Berorientasi Pelayanan, Akuntabel, dll), dan tagline.
     - Status: `[x] Selesai`
  3. **Jajaran Direksi**
     - Rute: `/profil/jajaran-direksi`
     - Isi Utama: Grid profil foto, nama, gelar, dan deskripsi singkat 6 direktur utama.
     - Status: `[x] Selesai`
  4. **Dewan Pengawas**
     - Rute: `/profil/dewan-pengawas`
     - Isi Utama: Profil foto dan jabatan anggota dewan pengawas independen.
     - Status: `[x] Selesai`
  5. **Struktur Organisasi**
     - Rute: `/profil/struktur-organisasi`
     - Isi Utama: Bagan hierarki responsif untuk manajemen rumah sakit dari Dewan Pengawas hingga Direktur Operasional.
     - Status: `[x] Selesai`
  6. **Map & Aksesibilitas**
     - Rute: `/profil/map-aksesibilitas`
     - Isi Utama: Peta Google Maps embed, alamat lengkap, kontak darurat, jam operasional, dan panduan transportasi publik (TransJakarta, KRL/MRT, kendaraan pribadi).
     - Status: `[x] Selesai`

## 3. Dokter
- **Rute:** `/dokter`
- **Isi Utama:** Direktori seluruh dokter spesialis dengan fitur pencarian nama (realtime) dan filter dropdown berdasarkan spesialisasi (Kardiologi, Bedah Toraks, Penyakit Dalam, Anak, dll). Menggunakan modal detail interaktif.
- **Status:** `[x] Selesai`

## 4. Layanan (Dropdown Menu)
- **Rute Induk:** `/layanan`
- **Sub-menu:**
  1. **Medical Checkup (MCU)**
     - Rute: `/layanan/medical-checkup`
     - Isi Utama: Tabel perbandingan 3 paket MCU (Basic, Standard, Premium) beserta harganya.
     - Status: `[x] Selesai`
  2. **Kamar Perawatan**
     - Rute: `/layanan/kamar-perawatan`
     - Isi Utama: Daftar tipe kamar inap (VIP, Kelas 1, 2, 3) beserta foto, tarif per malam, dan fasilitas bed/ruangan.
     - Status: `[x] Selesai`
  3. **Maklumat Pelayanan**
     - Rute: `/layanan/maklumat-pelayanan`
     - Isi Utama: Pernyataan resmi komitmen keselamatan pasien, hak dan kewajiban pasien & rumah sakit.
     - Status: `[x] Selesai`
  4. **Ketersediaan Kamar**
     - Rute: `/layanan/ketersediaan-kamar`
     - Isi Utama: Tabel dashboard *real-time* ketersediaan bed/kamar rawat inap dengan filter tipe/kelas ruangan.
     - Status: `[x] Selesai`

## 5. Promosi
- **Rute:** `/promosi`
- **Isi Utama:** Kumpulan banner, poster, dan informasi promosi paket kesehatan (MCU, Diskon USG, Persalinan) lengkap dengan perhitungan diskon.
- **Status:** `[x] Selesai`

## 6. Informasi (Dropdown Menu)
- **Rute Induk:** `/informasi`
- **Sub-menu:**
  1. **Berita & Artikel**
     - Rute: `/informasi/berita-artikel`
     - Isi Utama: Daftar berita terbaru, artikel kesehatan, dan pengumuman resmi.
     - Status: `[x] Selesai`
  2. **Detail Berita & Artikel**
     - Rute: `/informasi/berita-artikel/:slug`
     - Isi Utama: Tampilan detail artikel dinamis dengan fitur "Bagikan" ke clipboard/share intent, rekomendasi artikel terkait.
     - Status: `[x] Selesai`
  3. **Alur Pendaftaran Pasien**
     - Rute: `/informasi/alur-pendaftaran`
     - Isi Utama: Panduan langkah-demi-langkah (stepper) untuk proses pendaftaran Rawat Jalan, Rawat Inap, IGD, dan pendaftaran Online.
     - Status: `[x] Selesai`
  4. **Informasi Penting**
     - Rute: `/informasi/informasi-penting`
     - Isi Utama: Accordion info vital lingkungan RS (jam kunjungan, kebijakan parkir, tata tertib pasien, kantin & fasilitas umum).
     - Status: `[x] Selesai`
