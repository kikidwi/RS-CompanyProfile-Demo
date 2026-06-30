import { MapPin, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router";

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/profil/tentang-kami" },
  { label: "Visi & Misi", href: "/profil/visi-misi" },
  { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
  { label: "Jadwal Dokter", href: "/dokter" },
];

const serviceLinks = [
  { label: "Medical Checkup", href: "/layanan/medical-checkup" },
  { label: "Kamar Perawatan", href: "/layanan/kamar-perawatan" },
  { label: "Ketersediaan Kamar", href: "/layanan/ketersediaan-kamar" },
  { label: "Promosi", href: "/promosi" },
  { label: "Berita & Informasi", href: "/informasi/berita-artikel" },
];

const certifications = [
  { label: "KARS PARIPURNA", color: "text-yellow-400" },
  { label: "KARS INTERNASIONAL", color: "text-yellow-400" },
  { label: "JCI", color: "text-yellow-400" },
];

export function Footer() {
  return (
    <footer style={{ fontFamily: "'Karla', sans-serif" }}>
      {/* Registration CTA */}
      <div id="pendaftaran" className="bg-[#3b9ca5] py-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-1">Pendaftaran Online</h3>
            <p className="text-white/80 text-sm">Daftarkan diri Anda sekarang untuk mendapatkan layanan terbaik dari tim dokter spesialis kami.</p>
          </div>
          <Link
            to="/layanan/medical-checkup"
            className="shrink-0 bg-white text-[#3b9ca5] font-bold px-8 py-3 rounded-lg hover:bg-[#f0f9fa] transition-colors"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#006370] py-12 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tautan Cepat */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Tautan Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/70 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-white font-bold text-sm mb-4 mt-6 uppercase tracking-wider">Layanan Kami</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/70 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#3b9ca5] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">RUMAH SAKIT UTAMA DEMO</p>
                  <p className="text-white/70 text-xs mt-1">
                    Jl. Kesehatan Raya No. 123, Jakarta Selatan, 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-[#3b9ca5] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-bold text-xs">TELEPON</p>
                  <p className="text-white/70 text-xs">Contact Center: 1500 123</p>
                  <p className="text-white/70 text-xs">WhatsApp: 0811 1234 5678</p>
                  <p className="text-white/70 text-xs">Emergency: (021) 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-[#3b9ca5] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-bold text-xs">EMAIL</p>
                  <p className="text-white/70 text-xs">info@hospitaldemo.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Sertifikat & Penghargaan</h4>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xs ${cert.color}`}>★</span>
                    ))}
                  </div>
                  <span className="text-white text-sm font-semibold">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media (Replaced PJNHK Mobile) */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Media Sosial</h4>
            <p className="text-white/70 text-xs mb-4">
              Ikuti media sosial kami untuk mendapatkan informasi kesehatan terbaru dan promo menarik lainnya.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3b9ca5] transition-colors">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3b9ca5] transition-colors">
                <Youtube size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3b9ca5] transition-colors">
                <Facebook size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#004d57] py-4 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/60 text-xs">© {new Date().getFullYear()}. All rights reserved</p>
          <p className="text-white/60 text-xs">Rumah Sakit Utama Demo - Health Care Services</p>
        </div>
      </div>
    </footer>
  );
}
