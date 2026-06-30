# Guidelines Proyek: RS Utama Demo

Dokumen ini berisi panduan arsitektur dan gaya penulisan kode (code style) khusus untuk proyek website RS Utama Demo. 

## 1. Arsitektur Komponen & Halaman
*   **Pembagian Direktori:** 
    *   Halaman penuh (*pages*) diletakkan di dalam folder `src/app/pages/public/`.
    *   Menu yang memiliki banyak sub-menu dikelompokkan dalam foldernya masing-masing, misalnya `/profile`, `/layanan`, dan `/informasi`.
    *   Bagian UI yang dapat digunakan kembali (*reusable*) atau bersifat parsial (seperti `Navbar`, `Footer`, `Hero`) diletakkan di `src/app/components/`.
*   **Routing:** Semua rute didefinisikan secara terpusat di dalam `src/app/Router.tsx` menggunakan API v6/v7 dari `react-router` (komponen `<Routes>` dan `<Route>`).
*   **Tata Letak (Layouting):** Setiap halaman dibungkus oleh komponen `PublicLayout.tsx` yang secara otomatis menyuntikkan `Navbar`, `Footer`, dan fungsi `ScrollToTop` setiap kali berpindah URL.

## 2. Panduan Tailwind CSS & Styling
*   **Font Family:** Pastikan seluruh kontainer utama atau komponen menggunakan font turunan *Karla* melalui utilitas CSS `style={{ fontFamily: "'Karla', sans-serif" }}` atau konfigurasi standar global.
*   **Penggunaan Warna:** Hindari warna generik bawaan browser. Selalu gunakan warna merek (brand colors) rumah sakit.
    *   Tosca / Teal Primer: `bg-[#3b9ca5]` atau `text-[#3b9ca5]`.
    *   Dark Teal (Header/Aksen Gelap): `bg-[#006370]`.
    *   Warna transparansi menggunakan alpha HEX (contoh: `#3b9ca530`) atau utility opacity dari Tailwind (`bg-[#3b9ca5]/20`).
*   **Responsivitas (Mobile-First):** Desain harus bekerja di layar kecil (mobile) terlebih dahulu. Gunakan *breakpoint* Tailwind (`sm:`, `md:`, `lg:`) untuk menyesuaikan tata letak pada layar desktop (seperti mengubah *stack* kolom tunggal menjadi *grid multi-kolom*).

## 3. Komponen Pihak Ketiga & Aset
*   **Ikonografi:** Gunakan **Lucide React** (`lucide-react`) untuk konsistensi seluruh ikon. Tidak diperbolehkan mengombinasikan *library* ikon lain agar *bundle-size* tetap optimal dan visual selaras.
*   **Data Mock/Statis:** Karena belum ada backend, buat data secara statis (seperti daftar dokter, paket MCU, atau artikel) di dalam variabel konstanta (contoh: `const doctors = [...]`) tepat di atas definisi komponen, atau pisahkan ke file `[namaData]Data.ts` jika isinya sangat besar.

## 4. Pola Interaksi (UX Patterns)
*   **Hover States:** Elemen *clickable* (tombol, tautan, kartu layanan) wajib memiliki indikator interaksi. Gunakan utility `hover:bg-`, `hover:text-`, atau `hover:shadow-lg hover:-translate-y-1 transition-all` untuk animasi mikro yang elegan.
*   **Scroll State:** Setiap navigasi halaman otomatis memicu reset gulir ke (0,0) melalui `ScrollToTop`. Tidak perlu menangani *scroll reset* secara individual di setiap halaman.
*   **Penyelarasan Teks (Alignment):** Pada konten panjang (seperti profil atau artikel), gunakan *line-height* yang lega (`leading-relaxed` atau `leading-loose`) dipadukan dengan teks berwarna keabu-abuan (`text-gray-700` atau `text-gray-600`) agar ramah di mata.
