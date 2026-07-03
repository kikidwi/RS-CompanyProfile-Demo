import { useState, useEffect } from "react";
import { BedDouble, Search, RefreshCw } from "lucide-react";
import api from "../../../../lib/api";

type BedStatus = "available" | "occupied" | "maintenance";

type Room = {
  id: string;
  number: string;
  ward: string;
  floor: number;
  class: string;
  status: BedStatus;
  patient?: string;
  since?: string;
};

export const defaultGenerateRooms = (): Room[] => {
  const wards = [
    { name: "Penyakit Dalam", class: "Kelas I", floor: 2 },
    { name: "Bedah", class: "Kelas II", floor: 3 },
    { name: "Anak", class: "Kelas III", floor: 4 },
    { name: "Jantung", class: "VIP", floor: 5 },
    { name: "Saraf", class: "Kelas I", floor: 2 },
    { name: "Kebidanan", class: "Kelas II", floor: 3 },
  ];

  const statuses: BedStatus[] = ["available", "occupied", "occupied", "occupied", "maintenance", "available", "available", "occupied"];
  const rooms: Room[] = [];
  let id = 1;

  wards.forEach((ward) => {
    for (let i = 1; i <= 8; i++) {
      const status = statuses[(id - 1) % statuses.length];
      rooms.push({
        id: String(id++),
        number: `${ward.floor}${String(i).padStart(2, "0")}`,
        ward: ward.name,
        floor: ward.floor,
        class: ward.class,
        status,
        patient: status === "occupied" ? `Pasien #${1000 + id}` : undefined,
        since: status === "occupied"
          ? `${Math.floor(Math.random() * 5) + 1} hari lalu`
          : undefined,
      });
    }
  });

  return rooms;
};

export const defaultAllRooms = defaultGenerateRooms();

const wardOptions = ["Semua Ruangan", ...Array.from(new Set(defaultAllRooms.map((r) => r.ward)))];
const statusLabels: Record<BedStatus, string> = {
  available: "Tersedia",
  occupied: "Terisi",
  maintenance: "Perawatan",
};
const statusColors: Record<BedStatus, { bg: string; text: string; dot: string }> = {
  available: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  occupied: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
  maintenance: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-400" },
};

export default function KetersediaanKamar() {
  const [search, setSearch] = useState("");
  const [wardFilter, setWardFilter] = useState("Semua Ruangan");
  const [statusFilter, setStatusFilter] = useState<"all" | BedStatus>("all");
  const [lastUpdated, setLastUpdated] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  });
  const [roomsData, setRoomsData] = useState(defaultAllRooms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/room-availabilities');
        if (response.data && response.data.length > 0) {
          const items: any[] = response.data;
          // sort by floor and number
          items.sort((a, b) => {
            if (a.floor === b.floor) {
              return a.number.localeCompare(b.number);
            }
            return a.floor - b.floor;
          });
          setRoomsData(items);
        }
      } catch (err) {
        console.error("Gagal memuat ketersediaan kamar dari Firebase:", err);
      } finally {
        setLoading(false);
        setLastUpdated(new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }));
      }
    };
    fetchData();
  }, []);

  const filtered = roomsData.filter((room) => {
    const matchSearch =
      room.number.toLowerCase().includes(search.toLowerCase()) ||
      room.ward.toLowerCase().includes(search.toLowerCase());
    const matchWard = wardFilter === "Semua Ruangan" || room.ward === wardFilter;
    const matchStatus = statusFilter === "all" || room.status === statusFilter;
    return matchSearch && matchWard && matchStatus;
  });

  const totals = {
    available: roomsData.filter((r) => r.status === "available").length,
    occupied: roomsData.filter((r) => r.status === "occupied").length,
    maintenance: roomsData.filter((r) => r.status === "maintenance").length,
  };

  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-1">
        <h2 className="text-2xl font-bold text-[#006370]">Ketersediaan Kamar Rawat Inap</h2>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <RefreshCw size={14} className="text-[#3b9ca5]" />
          <span>Diperbarui: {lastUpdated} WIB</span>
        </div>
      </div>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-3xl">
        Dashboard ini menampilkan status ketersediaan kamar rawat inap secara real-time (data simulasi). Gunakan filter untuk menemukan kamar yang sesuai kebutuhan Anda.
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {(["available", "occupied", "maintenance"] as BedStatus[]).map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(statusFilter === s ? "all" : s)}
            className={`rounded-2xl p-5 flex flex-col items-center transition-all border-2 ${
              statusFilter === s ? "border-[#3b9ca5] shadow-md" : "border-transparent"
            } ${statusColors[s].bg}`}
          >
            <span className={`text-3xl font-extrabold ${statusColors[s].text}`}>{totals[s]}</span>
            <span className={`text-xs font-semibold mt-1 ${statusColors[s].text}`}>{statusLabels[s]}</span>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex items-center gap-2 flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm">
          <Search size={15} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Cari nomor atau nama ruangan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1"
          />
        </div>
        <select
          value={wardFilter}
          onChange={(e) => setWardFilter(e.target.value)}
          className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 shadow-sm outline-none focus:border-[#3b9ca5] transition-colors"
        >
          {wardOptions.map((w) => (
            <option key={w} value={w}>{w}</option>
          ))}
        </select>
      </div>

      {/* Room Grid */}
      {loading ? (
        <div className="py-12 text-center text-gray-500">Memuat data ketersediaan kamar...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {filtered.map((room) => {
          const col = statusColors[room.status];
          return (
            <div
              key={room.id}
              className={`${col.bg} rounded-xl p-3 border border-gray-100 flex flex-col gap-1 group hover:shadow-md transition-all cursor-default`}
            >
              <div className="flex items-center justify-between">
                <BedDouble size={15} className={col.text} />
                <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} />
              </div>
              <span className="text-base font-bold text-gray-900 mt-1">
                {room.number}
              </span>
              <span className="text-[11px] text-gray-500 leading-tight">{room.ward}</span>
              <span className={`text-[10px] font-semibold uppercase tracking-wide mt-1 ${col.text}`}>
                {statusLabels[room.status]}
              </span>
              {room.since && (
                <span className="text-[10px] text-gray-400">{room.since}</span>
              )}
            </div>
          );
        })}
      </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <BedDouble size={40} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">Tidak ada kamar yang sesuai filter.</p>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 items-center justify-end text-xs text-gray-500 border-t border-gray-100 pt-6">
        <span className="font-semibold text-gray-700">Keterangan:</span>
        {(["available", "occupied", "maintenance"] as BedStatus[]).map((s) => (
          <span key={s} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-full ${statusColors[s].dot}`} />
            {statusLabels[s]}
          </span>
        ))}
      </div>
    </div>
  );
}
