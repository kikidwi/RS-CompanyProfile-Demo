import { useState } from "react";
import { Phone, Globe, Search, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";

type SubItem = { label: string; href: string };
type NavLink = { label: string; href: string; subItems?: SubItem[] };

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks: NavLink[] = [
    { label: "Beranda", href: "/" },
    {
      label: "Profil",
      href: "#",
      subItems: [
        { label: "Tentang Kami", href: "/profil/tentang-kami" },
        { label: "Visi Misi", href: "/profil/visi-misi" },
        { label: "Jajaran Direksi", href: "/profil/jajaran-direksi" },
        { label: "Dewan Pengawas", href: "/profil/dewan-pengawas" },
        { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
        { label: "Map & Aksesibilitas", href: "/profil/map-aksesibilitas" },
      ],
    },
    { label: "Dokter", href: "/dokter" },
    {
      label: "Layanan",
      href: "#",
      subItems: [
        { label: "Medical Checkup", href: "/layanan/medical-checkup" },
        { label: "Kamar Perawatan", href: "/layanan/kamar-perawatan" },
        { label: "Maklumat Pelayanan", href: "/layanan/maklumat-pelayanan" },
        { label: "Ketersediaan Kamar", href: "/layanan/ketersediaan-kamar" },
      ],
    },
    { label: "Promosi", href: "/promosi" },
    {
      label: "Informasi",
      href: "#",
      subItems: [
        { label: "Berita & Artikel", href: "/informasi/berita-artikel" },
        { label: "Alur Pendaftaran", href: "/informasi/alur-pendaftaran" },
        { label: "Informasi Penting", href: "/informasi/informasi-penting" },
      ],
    },
  ];

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full sticky top-0 z-50" style={{ fontFamily: "'Karla', sans-serif" }}>

      {/* ── Top Bar ── */}
      <div className="bg-[#3b9ca5] px-4 md:px-16 py-2 hidden sm:block">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-white text-xs md:text-sm">
            <span>Contact Center: <strong>1500 123</strong></span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1 hidden md:flex">
              <Phone size={13} className="text-red-300" />
              IGD: (021) 500 119
            </span>
          </div>
          <div className="flex items-center gap-3 text-white text-xs md:text-sm">
            <button className="flex items-center gap-1 hover:opacity-80">
              <Globe size={13} /> ID
            </button>
            <span className="opacity-40">|</span>
            <button className="flex items-center gap-1 hover:opacity-80">
              <Globe size={13} /> EN
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <div className="bg-white shadow-sm px-4 md:px-16 py-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={closeAll}>
            <div className="w-10 h-10 bg-gradient-to-br from-[#3b9ca5] to-[#006370] rounded-full flex items-center justify-center shadow">
              <span className="text-white font-extrabold text-sm">RS</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-[#006370] font-extrabold text-sm">RS Utama Demo</div>
              <div className="text-[#3b9ca5] text-[11px] font-medium">Pelayanan Kesehatan Terpadu</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-1 mx-4">
            {navLinks.map((link) =>
              link.subItems ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-0.5 text-[#006370] text-sm px-2.5 py-1.5 hover:text-[#3b9ca5] hover:bg-[rgba(59,156,165,0.07)] rounded-lg transition-colors whitespace-nowrap">
                    {link.label}
                    <ChevronDown size={13} className="ml-0.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute left-0 top-full mt-1 w-52 bg-white border border-gray-100 shadow-xl rounded-xl py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block px-4 py-2 text-sm text-[#374151] hover:bg-[#f0f9fa] hover:text-[#006370] transition-colors"
                        onClick={closeAll}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-[#006370] text-sm px-2.5 py-1.5 hover:text-[#3b9ca5] hover:bg-[rgba(59,156,165,0.07)] rounded-lg transition-colors whitespace-nowrap"
                  onClick={closeAll}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-[#f8fafc] border border-gray-200 rounded-xl px-3 py-2 gap-2 w-44">
            <Search size={14} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Cari..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1 w-full"
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="xl:hidden text-[#006370] p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        {menuOpen && (
          <div className="xl:hidden mt-3 pb-4 border-t border-gray-100">
            {/* Mobile Search */}
            <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-xl px-3 py-2.5 gap-2 mt-3 mb-2">
              <Search size={14} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Cari..."
                className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1"
              />
            </div>

            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.subItems ? (
                    <div>
                      {/* Expandable parent */}
                      <button
                        className="w-full flex items-center justify-between text-[#006370] font-semibold text-sm px-3 py-2.5 hover:bg-[rgba(59,156,165,0.07)] rounded-xl transition-colors"
                        onClick={() =>
                          setOpenDropdown((prev) =>
                            prev === link.label ? null : link.label
                          )
                        }
                      >
                        {link.label}
                        {openDropdown === link.label ? (
                          <ChevronUp size={15} className="text-[#3b9ca5]" />
                        ) : (
                          <ChevronDown size={15} className="opacity-50" />
                        )}
                      </button>
                      {openDropdown === link.label && (
                        <div className="flex flex-col pl-4 pb-1">
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className="text-gray-600 text-sm px-3 py-2 hover:text-[#006370] hover:bg-[rgba(59,156,165,0.07)] rounded-xl transition-colors"
                              onClick={closeAll}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="block text-[#006370] text-sm px-3 py-2.5 hover:text-[#3b9ca5] hover:bg-[rgba(59,156,165,0.07)] rounded-xl transition-colors font-medium"
                      onClick={closeAll}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile contact strip */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 px-3">
              <span>Contact: <strong className="text-[#006370]">1500 123</strong></span>
              <span>IGD: <strong className="text-red-500">(021) 500 119</strong></span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
