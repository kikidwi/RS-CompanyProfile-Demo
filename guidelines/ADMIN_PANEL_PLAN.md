# Rencana Pengembangan Halaman Admin (CMS) RS Utama Demo

Dokumen ini berisi rencana pengembangan (Blueprint) untuk membangun halaman admin/CMS (Content Management System) guna mengelola seluruh konten dinamis di website company profile RS Utama Demo.

---

## 1. Arsitektur & Tech Stack
Karena website utama (Public) menggunakan React, Vite, dan Tailwind CSS, halaman Admin akan dibangun di dalam repositori yang sama (*monorepo*) dengan rute bersarang di bawah `/admin`.

*   **Routing:** React Router v7 (Protected Routes di bawah `/admin`).
*   **State Management:** React Context / Zustand (untuk Authentication & Global State).
*   **Styling:** Tailwind CSS (menggunakan tema warna yang sama atau tema admin khusus, misalnya mode gelap/terang).
*   **Komponen UI Admin:** Table, Modal, Form Input, Sidebar, Topbar.
*   **Text Editor:** Integrasi library seperti `React Quill` atau `TipTap` untuk membuat artikel/berita (WYSIWYG).
*   **Backend (Masa Depan):** REST API (Node.js/Go) atau BaaS (Supabase/Firebase) untuk menggantikan mock data.

---

## 2. Manajemen Role & Hak Akses (RBAC)

Sistem admin akan mengimplementasikan *Role-Based Access Control* (RBAC) untuk membatasi akses berdasarkan peran pengguna:
*   **Super Admin:** Memiliki hak akses penuh ke seluruh sistem (seluruh modul, pengaturan, dan manajemen pengguna).
*   **Humas:** Memiliki akses khusus untuk memperbarui modul Informasi (Berita & Artikel Edukasi) dan Promosi.
*   **Admin Operasional (Lainnya):** Memiliki akses untuk mengatur informasi website lainnya seperti Manajemen Profil, Dokter, Layanan, dan Pengaturan.

---

## 3. Struktur Rute Admin

Seluruh rute ini harus diamankan dengan mekanisme *Authentication* (Login) dan *Authorization* (Pengecekan Role).

| Rute | Modul | Fungsi |
|---|---|---|
| `/admin/login` | **Autentikasi** | Halaman login untuk staf/admin. |
| `/admin` | **Dashboard** | Ringkasan statistik (jumlah dokter, artikel, promo aktif). |
| `/admin/profil` | **Manajemen Profil** | Edit teks Tentang Kami, Visi Misi, dan CRUD Jajaran Direksi/Dewan Pengawas. |
| `/admin/dokter` | **Manajemen Dokter** | CRUD direktori dokter (foto, nama, spesialisasi, jadwal poli). |
| `/admin/layanan` | **Manajemen Layanan** | CRUD paket MCU, tipe Kamar Perawatan, dan *update* status ketersediaan kamar. |
| `/admin/promosi` | **Manajemen Promosi** | CRUD banner promo (gambar, harga diskon, masa berlaku). |
| `/admin/informasi` | **Manajemen Artikel** | CRUD Berita & Artikel Edukasi menggunakan *Rich Text Editor*. |
| `/admin/pengaturan` | **Pengaturan Sistem** | Edit kontak darurat, alamat, jam operasional, dan tautan sosial media. |

---

## 4. Desain Tata Letak (Layout)

Halaman admin akan menggunakan `AdminLayout.tsx` yang berbeda dari `PublicLayout.tsx`.

1.  **Sidebar (Kiri):**
    *   Berisi navigasi utama ke setiap modul (Dashboard, Profil, Dokter, Layanan, dll).
    *   Bisa di-*collapse* (ciutkan) pada layar kecil.
2.  **Topbar (Atas):**
    *   Berisi *Breadcrumbs* (penunjuk posisi halaman).
    *   Notifikasi dan Profil Admin (Tombol Logout).
3.  **Area Konten Utama:**
    *   **Tampilan Data (List):** Menggunakan tabel dengan fitur pencarian (Search), penomoran halaman (Pagination), dan aksi (Edit/Delete).
    *   **Tampilan Form:** Form input yang rapi dengan validasi untuk Tambah/Ubah data.

---

## 5. Fase Pengerjaan (Milestones)

Proses pengerjaan akan dibagi menjadi 4 fase bertahap:

### Fase 1: Persiapan & Infrastruktur (Layouting)
- [ ] Membuat halaman `/admin/login`.
- [ ] Membuat `AdminLayout.tsx` (Sidebar & Topbar).
- [ ] Menyusun sistem *Protected Route* beserta validasi *Role* (Role-Based Access Control).

### Fase 2: Pembangunan Modul Utama (CRUD Sederhana)
- [ ] Modul **Manajemen Dokter** (Halaman List Tabel & Form Tambah/Edit).
- [ ] Modul **Manajemen Promosi** (Halaman List Tabel & Form Banner).
- [ ] Modul **Pengaturan** (Form statis untuk mengubah nomor telepon dan alamat).

### Fase 3: Modul Kompleks (Rich Text & Data Bertingkat)
- [ ] Integrasi *WYSIWYG Text Editor* untuk Modul **Berita & Artikel**.
- [ ] Modul **Ketersediaan Kamar** (Tampilan khusus untuk *update* angka secara cepat).
- [ ] Modul **Profil & Organisasi** (CRUD data hierarki organisasi).

### Fase 4: Integrasi Data & Finalisasi
- [ ] Menyatukan data *mock* yang ada di sisi publik dengan *state* (atau API) yang dikelola oleh Admin.
- [ ] *Quality Assurance (QA)*: Pengujian responsivitas halaman admin di tablet/mobile.

---

*Catatan: Rencana ini dapat langsung dieksekusi dengan membuat komponen-komponen statis terlebih dahulu (UI-first), sebelum akhirnya dihubungkan ke backend database sungguhan.*
