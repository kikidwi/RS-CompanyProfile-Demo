# Design System: RS Utama Demo

Dokumen ini berisi panduan desain (Design System) untuk memastikan konsistensi visual di seluruh halaman. **Seluruh implementasi harus mengacu pada dokumen ini.**

---

## 1. Palet Warna (Color Palette)

Palet warna diambil langsung dari komponen `Navbar`, `Hero`, dan `Footer` yang sudah ada sebagai **sumber kebenaran utama**.

### Primary Colors (Teal / Tosca — Warna Brand Utama)
Ini adalah warna utama website. Gunakan untuk tombol aktif, tab aktif, highlight, ikon, dan elemen interaktif.

| Token | Hex | Penggunaan |
|---|---|---|
| **Brand Dark** | `#006370` | Header/banner background, tombol hover, tab active border |
| **Brand Primary** | `#3b9ca5` | Tombol utama, background aksen, hover state |
| **Brand Light** | `#e0f5f6` | Background ringan untuk section, hover tab |

### Neutral Colors (Teks & Background)
| Token | Hex | Penggunaan |
|---|---|---|
| **Heading** | `#1a1a2e` (mendekati `text-gray-900`) | Judul halaman (H1-H3) |
| **Body Text** | `#374151` (Slate/Gray 700) | Teks paragraf utama |
| **Muted Text** | `#6b7280` (Gray 500) | Label kecil, teks sekunder |
| **Background** | `#f8fafc` | Background halaman, section selang-seling |
| **Surface** | `#ffffff` | Background kartu, modal |
| **Border** | `#e5e7eb` | Garis pemisah, border kartu |

### Warna Aksen & Status
| Token | Hex | Penggunaan |
|---|---|---|
| **Tab Active Border** | `#3b9ca5` | Garis bawah tab yang sedang aktif |
| **Tab Active Text** | `#006370` | Teks tab aktif |
| **Tab Hover** | `#f0f9fa` | Background tab saat di-hover |
| **Tab Hover Text** | `#3b9ca5` | Teks tab saat di-hover |

---

## 2. Tipografi (Typography)

Font default mengikuti yang sudah terpasang di website: **`'Karla', sans-serif`** (ditetapkan di `PublicLayout` dan tiap komponen).

| Elemen | Style |
|---|---|
| **H1 / Judul Halaman** | `text-3xl md:text-4xl font-bold`, warna `#006370` |
| **H2 / Sub-judul Section** | `text-2xl font-bold`, warna `#1a1a2e` atau `#006370` |
| **H3 / Judul Kartu** | `text-xl font-semibold`, warna `#1a1a2e` |
| **Body Paragraf** | `text-base leading-relaxed`, warna `#374151` |
| **Teks Kecil / Label** | `text-sm`, warna `#6b7280` |

---

## 3. Komponen Tab (Profile Section)

Pola tab untuk halaman multi-konten (seperti halaman Profil):

- **Tab container:** `border-b border-gray-200 bg-white sticky`
- **Tab default:** `text-gray-500`, `border-b-4 border-transparent`
- **Tab hover:** `text-[#3b9ca5] bg-[#f0f9fa]`
- **Tab aktif:** `text-[#006370] font-semibold border-b-4 border-[#3b9ca5] bg-[#f0f9fa]`
- Hindari warna biru (`#0ea5e9`) karena tidak konsisten dengan brand.

---

## 4. Komponen UI & Bentuk (Shapes)

- **Border Radius:** Kartu `rounded-2xl`, Tombol `rounded-lg` atau `rounded-xl`
- **Shadow:** Kartu ringan: `shadow-sm border border-gray-100`. Kartu menonjol: `shadow-md`
- **Hindari** terlalu banyak kartu yang bertumpuk, utamakan **teks yang rapi dan terstruktur** untuk konten informatif (tentang kami, visi misi, dll.)

---

## 5. Gaya Konten Halaman Profil

Untuk halaman **Tentang Kami** dan **Visi Misi**, gunakan pendekatan **editorial / teks-sentris**:
- Teks panjang yang rapi dan mudah dibaca
- Gunakan heading dan paragraf, bukan kartu-kartu terpisah
- Separator atau garis tipis boleh dipakai untuk memisahkan bagian, bukan `card` berlapis-lapis
- Warna teks mengikuti tabel tipografi di atas

---

## 6. Struktur Layout
- **Container:** `max-w-screen-xl mx-auto px-4 md:px-16`
- **Grid:** 1 kolom di mobile, 2 atau 3 kolom di desktop
- **Spacing section:** `py-12` atau `py-16`
