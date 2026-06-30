# RS Utama Demo — Website Company Profile

Website company profile **RS Utama Demo**, dibangun dengan React + Vite + TypeScript + Tailwind CSS. Menampilkan seluruh informasi layanan, profil kelembagaan, direktori dokter, promosi, dan informasi penting rumah sakit.

---

## 🏥 Tentang Proyek

Website ini adalah company profile **Rumah Sakit Utama Demo**, sebuah RS Umum tipe A yang menyediakan layanan kesehatan terpadu dengan standar internasional (KARS Paripurna & JCI). Proyek ini dibangun sebagai portofolio desain dan pengembangan web.

---

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev
```

Development server akan berjalan di `http://localhost:5173/`

---

## 🗂️ Struktur Halaman

| Rute | Halaman |
|------|---------|
| `/` | Beranda |
| `/profil/tentang-kami` | Tentang Kami |
| `/profil/visi-misi` | Visi & Misi |
| `/profil/jajaran-direksi` | Jajaran Direksi |
| `/profil/dewan-pengawas` | Dewan Pengawas |
| `/profil/struktur-organisasi` | Struktur Organisasi |
| `/profil/map-aksesibilitas` | Map & Aksesibilitas |
| `/dokter` | Direktori Dokter |
| `/layanan/medical-checkup` | Medical Checkup |
| `/layanan/kamar-perawatan` | Kamar Perawatan |
| `/layanan/maklumat-pelayanan` | Maklumat Pelayanan |
| `/layanan/ketersediaan-kamar` | Ketersediaan Kamar |
| `/promosi` | Promosi & Event |
| `/informasi/berita-artikel` | Berita & Artikel |
| `/informasi/berita-artikel/:slug` | Detail Artikel |
| `/informasi/alur-pendaftaran` | Alur Pendaftaran |
| `/informasi/informasi-penting` | Informasi Penting |

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** react-router v7
- **Icons:** lucide-react
- **Font:** Karla (Google Fonts)
- **Gambar:** Unsplash (CDN), RandomUser API (foto dokter)

---

## 📁 Struktur Folder

```
src/
└── app/
    ├── components/         # Komponen shared (Navbar, Footer, Hero, dll.)
    ├── layout/             # PublicLayout (wrapper + ScrollToTop)
    ├── pages/
    │   └── public/
    │       ├── Home.tsx
    │       ├── Dokter.tsx
    │       ├── Promosi.tsx
    │       ├── profile/    # Halaman menu Profil
    │       ├── layanan/    # Halaman menu Layanan
    │       └── informasi/  # Halaman menu Informasi
    └── Router.tsx          # Definisi seluruh route
guidelines/
├── SITEMAP_AND_MENUS.md    # Peta halaman & status pengerjaan
├── DESIGN_SYSTEM.md        # Panduan warna, tipografi, komponen
└── Guidelines.md           # Panduan pengembangan umum
```