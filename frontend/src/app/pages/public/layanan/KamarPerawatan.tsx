import { useState, useEffect } from "react";
import { BedDouble, Wifi, Tv, Wind, Coffee, Users, Star } from "lucide-react";
import api from "../../../../lib/api";

type RoomClass = {
  name: string;
  kelas: string;
  color: string;
  bg: string;
  badge?: string;
  price: string;
  capacity: string;
  description: string;
  facilities: { icon: React.ElementType; label: string }[];
  image: string;
};

export const defaultRoomClasses: RoomClass[] = [
  {
    name: "Kelas III",
    kelas: "Kelas 3",
    color: "#64748b",
    bg: "#f8fafc",
    price: "Rp 200.000 / malam",
    capacity: "4–6 pasien / kamar",
    description:
      "Kamar perawatan bersama yang nyaman dengan standar kebersihan tinggi. Cocok untuk pasien peserta BPJS.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    facilities: [
      { icon: BedDouble, label: "Tempat tidur standar" },
      { icon: Wind, label: "Kipas angin / ventilasi" },
      { icon: Tv, label: "Televisi bersama" },
      { icon: Users, label: "Kamar mandi bersama" },
    ],
  },
  {
    name: "Kelas II",
    kelas: "Kelas 2",
    color: "#3b9ca5",
    bg: "#f0fdfa",
    price: "Rp 400.000 / malam",
    capacity: "2–3 pasien / kamar",
    description:
      "Kamar semi-privat dengan fasilitas yang lebih lengkap dan lingkungan yang lebih tenang untuk pemulihan optimal.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    facilities: [
      { icon: BedDouble, label: "Tempat tidur semi-elektrik" },
      { icon: Wind, label: "AC ruangan" },
      { icon: Tv, label: "Televisi personal" },
      { icon: Wifi, label: "Wi-Fi gratis" },
    ],
  },
  {
    name: "Kelas I",
    kelas: "Kelas 1",
    color: "#006370",
    bg: "#e6f4f5",
    badge: "Rekomendasi",
    price: "Rp 750.000 / malam",
    capacity: "1–2 pasien / kamar",
    description:
      "Kamar privat dengan dekorasi elegan, fasilitas lengkap, dan akses eksklusif untuk kenyamanan penuh selama perawatan.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    facilities: [
      { icon: BedDouble, label: "Tempat tidur elektrik premium" },
      { icon: Wind, label: "AC split inverter" },
      { icon: Tv, label: "Smart TV 42\"" },
      { icon: Wifi, label: "Wi-Fi berkecepatan tinggi" },
    ],
  },
  {
    name: "VIP",
    kelas: "VIP",
    color: "#b45309",
    bg: "#fffbeb",
    badge: "Premium",
    price: "Rp 1.500.000 / malam",
    capacity: "Kamar pribadi eksklusif",
    description:
      "Suite eksklusif dengan ruang tamu, sofa bed untuk keluarga, dan pelayanan prioritas 24 jam penuh dari tim medis terbaik.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    facilities: [
      { icon: BedDouble, label: "Tempat tidur King Size" },
      { icon: Coffee, label: "Mini bar & pantry" },
      { icon: Wifi, label: "Wi-Fi dedicated fiber" },
      { icon: Star, label: "Perawat personal" },
    ],
  },
];

export default function KamarPerawatan() {
  const [rooms, setRooms] = useState(defaultRoomClasses);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/rooms');
        if (response.data && response.data.length > 0) {
          const items: any[] = response.data;
          items.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
          
          const mappedItems = items.map(item => ({
            name: item.name,
            kelas: item.type,
            price: `Rp ${Number(item.price).toLocaleString('id-ID')} / malam`,
            capacity: `${item.capacity} pasien / kamar`,
            image: item.image || "",
            facilities: (item.features || []).map((f: any) => ({
              label: f.feature,
              icon: BedDouble
            })),
            badge: item.type === "VIP" ? "Premium" : "Tersedia",
            bg: item.type === "VIP" ? "#fffbeb" : "#e6f4f5",
            color: item.type === "VIP" ? "#b45309" : "#006370",
            description: item.capacity === 1 ? "Kamar perawatan privat eksklusif dengan fasilitas memadai." : "Kamar perawatan reguler yang dirancang untuk kenyamanan proses penyembuhan pasien."
          }));

          setRooms(mappedItems);
        }
      } catch (err) {
        console.error("Gagal memuat kamar perawatan dari Firebase:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      {/* Header */}
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Kamar Perawatan</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-3xl">
        Kami menyediakan berbagai kelas kamar perawatan yang dirancang untuk memenuhi kebutuhan dan kenyamanan pasien. Setiap kamar dilengkapi fasilitas modern dan dijaga kebersihan serta kenyamanannya secara berkala.
      </p>

      {/* Room Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {loading ? (
          <div className="col-span-1 lg:col-span-2 py-12 text-center text-gray-500">Memuat data kamar...</div>
        ) : rooms.map((room, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
          >
            {/* Badge */}
            {room.badge && (
              <span
                className="absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full z-10"
                style={{ backgroundColor: room.color }}
              >
                {room.badge}
              </span>
            )}

            {/* Image */}
            <div className="w-full h-52 overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${room.color}18`, color: room.color }}
                >
                  {room.kelas}
                </span>
                <span className="text-sm font-bold text-gray-800">{room.price}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1">{room.name}</h3>
              <p className="text-gray-500 text-xs mb-1 flex items-center gap-1">
                <Users size={12} />
                {room.capacity}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{room.description}</p>

              {/* Facilities */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {room.facilities.map((fac, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${room.color}15` }}
                    >
                      <fac.icon size={14} style={{ color: room.color }} />
                    </div>
                    {fac.label}
                  </div>
                ))}
              </div>

              <button
                className="mt-auto w-full py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: room.color }}
              >
                Tanyakan Ketersediaan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="mt-12 bg-[#f0fdfa] border border-[#ccfbf1] rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="w-12 h-12 rounded-full bg-[#3b9ca5] flex items-center justify-center shrink-0">
          <BedDouble size={22} className="text-white" />
        </div>
        <div>
          <h4 className="font-bold text-[#006370] mb-1">Informasi Penerimaan Pasien</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kamar perawatan tersedia untuk pasien rawat inap (Ranap) sesuai dengan indikasi medis dan ketersediaan kamar. Untuk pasien BPJS, silakan menghubungi bagian admisi terlebih dahulu. Tarif dapat berubah sewaktu-waktu.
          </p>
        </div>
      </div>
    </div>
  );
}
