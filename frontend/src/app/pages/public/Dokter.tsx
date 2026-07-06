import { useState, useMemo, useEffect } from "react";
import api from "../../../lib/api";
import { Link } from "react-router";
import {
  ChevronRight,
  Search,
  X,
  Calendar,
  Phone,
  Clock,
  GraduationCap,
  Award,
  Stethoscope,
  ChevronDown,
  Users,
} from "lucide-react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Doctor = {
  id: number;
  name: string;
  title: string;
  specialty: string;
  polyclinic: string;
  image: string;
  schedule: { day: string; time: string }[];
  education: string[];
  experience: string;
  bio: string;
  languages: string[];
};

/* ─────────────────────────────────────────────
   DATA – 16 dokter, 8 spesialisasi
───────────────────────────────────────────── */
export const defaultDoctors: Doctor[] = [
  {
    id: 1,
    name: "dr. Ahmad Fauzi",
    title: "Sp.JP (K)",
    specialty: "Kardiologi",
    polyclinic: "Poli Jantung",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    schedule: [
      { day: "Senin", time: "08:00 – 12:00" },
      { day: "Rabu", time: "08:00 – 12:00" },
      { day: "Jumat", time: "13:00 – 17:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Indonesia",
      "Sp.JP – RSCM Jakarta",
      "Konsultan Kardiologi Intervensi – RSUP Harapan Kita",
    ],
    experience: "18 tahun",
    bio: "Dokter spesialis jantung dengan keahlian khusus di bidang kardiologi intervensi. Berpengalaman melakukan lebih dari 2.000 prosedur kateterisasi jantung.",
    languages: ["Indonesia", "Inggris"],
  },
  {
    id: 2,
    name: "dr. Siti Rahayu",
    title: "Sp.JP (K)",
    specialty: "Kardiologi",
    polyclinic: "Poli Jantung",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    schedule: [
      { day: "Selasa", time: "08:00 – 12:00" },
      { day: "Kamis", time: "13:00 – 17:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Gadjah Mada",
      "Sp.JP – RSCM Jakarta",
      "Konsultan Elektrofisiologi – National Heart Centre, Singapura",
    ],
    experience: "14 tahun",
    bio: "Spesialis elektrofisiologi jantung dengan fokus pada diagnosis dan tata laksana aritmia kompleks serta implantasi alat pacu jantung.",
    languages: ["Indonesia", "Inggris"],
  },
  {
    id: 3,
    name: "dr. Bambang Suryanto",
    title: "SpBTKV",
    specialty: "Bedah Toraks",
    polyclinic: "Poli Bedah Kardiovaskular",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    schedule: [
      { day: "Senin", time: "07:00 – 11:00" },
      { day: "Selasa", time: "07:00 – 11:00" },
      { day: "Rabu", time: "13:00 – 17:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Airlangga",
      "SpBTKV – RSCM Jakarta",
      "Fellowship Bedah Jantung – Cleveland Clinic, USA",
    ],
    experience: "22 tahun",
    bio: "Ahli bedah toraks kardiovaskular berpengalaman dalam operasi bypass jantung terbuka, penggantian katup, dan repair aorta.",
    languages: ["Indonesia", "Inggris"],
  },
  {
    id: 4,
    name: "dr. Maya Indah Pratiwi",
    title: "Sp.JP",
    specialty: "Kardiologi",
    polyclinic: "Poli Jantung",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    schedule: [
      { day: "Rabu", time: "08:00 – 12:00" },
      { day: "Kamis", time: "08:00 – 12:00" },
      { day: "Sabtu", time: "08:00 – 11:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Diponegoro",
      "Sp.JP – Universitas Indonesia",
    ],
    experience: "10 tahun",
    bio: "Spesialis jantung dengan keahlian dalam pengelolaan gagal jantung kronis dan program transplantasi jantung.",
    languages: ["Indonesia"],
  },
  {
    id: 5,
    name: "dr. Hendra Kusuma",
    title: "Sp.PD",
    specialty: "Penyakit Dalam",
    polyclinic: "Poli Penyakit Dalam",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    schedule: [
      { day: "Senin", time: "13:00 – 17:00" },
      { day: "Rabu", time: "13:00 – 17:00" },
      { day: "Jumat", time: "08:00 – 12:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Padjadjaran",
      "Sp.PD – RSCM Jakarta",
    ],
    experience: "12 tahun",
    bio: "Spesialis penyakit dalam dengan fokus pada diabetes mellitus, hipertensi, dan penyakit ginjal kronis.",
    languages: ["Indonesia", "Inggris"],
  },
  {
    id: 6,
    name: "dr. Rina Lestari",
    title: "Sp.OG",
    specialty: "Kebidanan & Kandungan",
    polyclinic: "Poli Kebidanan",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    schedule: [
      { day: "Senin", time: "08:00 – 12:00" },
      { day: "Kamis", time: "08:00 – 12:00" },
      { day: "Sabtu", time: "09:00 – 12:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Brawijaya",
      "Sp.OG – RSCM Jakarta",
      "Fellowship Fetomaternal – National University Hospital, Singapura",
    ],
    experience: "16 tahun",
    bio: "Spesialis obstetri dan ginekologi dengan keahlian dalam penanganan kehamilan berisiko tinggi dan operasi laparoskopi.",
    languages: ["Indonesia", "Inggris"],
  },
  {
    id: 7,
    name: "dr. Agus Setiawan",
    title: "Sp.B",
    specialty: "Bedah Umum",
    polyclinic: "Poli Bedah Umum",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    schedule: [
      { day: "Selasa", time: "13:00 – 17:00" },
      { day: "Kamis", time: "13:00 – 17:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Indonesia",
      "Sp.B – RSCM Jakarta",
    ],
    experience: "9 tahun",
    bio: "Ahli bedah umum dengan kompetensi di bidang bedah laparoskopi, penanganan trauma, dan bedah onkologi dasar.",
    languages: ["Indonesia"],
  },
  {
    id: 8,
    name: "dr. Dewi Anggraini",
    title: "Sp.A",
    specialty: "Anak",
    polyclinic: "Poli Anak",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    schedule: [
      { day: "Senin", time: "08:00 – 14:00" },
      { day: "Rabu", time: "08:00 – 14:00" },
      { day: "Jumat", time: "08:00 – 12:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Airlangga",
      "Sp.A – RSCM Jakarta",
      "Subspesialisasi Kardiologi Anak – RSUP Harapan Kita",
    ],
    experience: "11 tahun",
    bio: "Dokter spesialis anak dengan subspesialisasi kardiologi anak. Berpengalaman dalam tata laksana penyakit jantung bawaan pada bayi dan anak.",
    languages: ["Indonesia", "Inggris"],
  },
  {
    id: 9,
    name: "dr. Farid Maulana",
    title: "Sp.N",
    specialty: "Saraf",
    polyclinic: "Poli Saraf",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    schedule: [
      { day: "Selasa", time: "08:00 – 12:00" },
      { day: "Jumat", time: "08:00 – 12:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Gadjah Mada",
      "Sp.N – Universitas Indonesia",
    ],
    experience: "8 tahun",
    bio: "Spesialis neurologi dengan fokus pada stroke, epilepsi, dan nyeri kepala. Aktif dalam program rehabilitasi stroke terpadu RS.",
    languages: ["Indonesia"],
  },
  {
    id: 10,
    name: "dr. Yunita Wulandari",
    title: "Sp.JP",
    specialty: "Kardiologi",
    polyclinic: "Poli Jantung",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    schedule: [
      { day: "Senin", time: "13:00 – 17:00" },
      { day: "Kamis", time: "08:00 – 12:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Diponegoro",
      "Sp.JP – Universitas Indonesia",
    ],
    experience: "7 tahun",
    bio: "Spesialis jantung dengan minat klinis pada penyakit jantung pada wanita, sindrom metabolik, dan pencegahan penyakit kardiovaskular.",
    languages: ["Indonesia", "Jerman"],
  },
  {
    id: 11,
    name: "dr. Rudi Hartono",
    title: "Sp.PD-KGH",
    specialty: "Penyakit Dalam",
    polyclinic: "Poli Penyakit Dalam",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    schedule: [
      { day: "Rabu", time: "08:00 – 12:00" },
      { day: "Sabtu", time: "08:00 – 12:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Padjadjaran",
      "Sp.PD – RSCM Jakarta",
      "Konsultan Ginjal Hipertensi – RSCM Jakarta",
    ],
    experience: "20 tahun",
    bio: "Konsultan ginjal hipertensi dengan pengalaman luas dalam terapi dialisis, transplantasi ginjal, dan manajemen hipertensi resisten.",
    languages: ["Indonesia", "Inggris"],
  },
  {
    id: 12,
    name: "dr. Sri Mulyani",
    title: "Sp.OG",
    specialty: "Kebidanan & Kandungan",
    polyclinic: "Poli Kebidanan",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    schedule: [
      { day: "Selasa", time: "13:00 – 17:00" },
      { day: "Jumat", time: "13:00 – 17:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Indonesia",
      "Sp.OG – RSCM Jakarta",
    ],
    experience: "13 tahun",
    bio: "Spesialis kandungan dengan keahlian dalam bedah laparoskopi ginekologi, penanganan mioma uteri, dan endometriosis.",
    languages: ["Indonesia"],
  },
  {
    id: 13,
    name: "dr. Andri Prasetyo",
    title: "SpBTKV",
    specialty: "Bedah Toraks",
    polyclinic: "Poli Bedah Kardiovaskular",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    schedule: [
      { day: "Rabu", time: "07:00 – 11:00" },
      { day: "Jumat", time: "07:00 – 11:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Brawijaya",
      "SpBTKV – RSCM Jakarta",
    ],
    experience: "6 tahun",
    bio: "Ahli bedah toraks kardiovaskular muda dengan spesialisasi pada penanganan varises, Peripheral Artery Disease (PAD), dan trauma toraks.",
    languages: ["Indonesia", "Inggris"],
  },
  {
    id: 14,
    name: "dr. Lastri Simanungkalit",
    title: "Sp.A (K)",
    specialty: "Anak",
    polyclinic: "Poli Anak",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    schedule: [
      { day: "Selasa", time: "08:00 – 12:00" },
      { day: "Kamis", time: "13:00 – 17:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Sumatera Utara",
      "Sp.A – Universitas Indonesia",
      "Konsultan Nutrisi & Penyakit Metabolik – RSCM Jakarta",
    ],
    experience: "15 tahun",
    bio: "Konsultan spesialis anak dengan fokus pada nutrisi anak, gangguan tumbuh kembang, dan pengelolaan diabetes anak.",
    languages: ["Indonesia", "Inggris", "Batak"],
  },
  {
    id: 15,
    name: "dr. Wahyu Santoso",
    title: "Sp.B (K) Onk",
    specialty: "Bedah Umum",
    polyclinic: "Poli Bedah Onkologi",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    schedule: [
      { day: "Senin", time: "08:00 – 12:00" },
      { day: "Rabu", time: "13:00 – 17:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Airlangga",
      "Sp.B – RSCM Jakarta",
      "Konsultan Onkologi Bedah – Universitas Indonesia",
    ],
    experience: "17 tahun",
    bio: "Konsultan bedah onkologi dengan pengalaman dalam penanganan kanker payudara, kanker tiroid, dan tumor jaringan lunak.",
    languages: ["Indonesia", "Inggris"],
  },
  {
    id: 16,
    name: "dr. Lina Nursyifa",
    title: "Sp.N",
    specialty: "Saraf",
    polyclinic: "Poli Saraf",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    schedule: [
      { day: "Senin", time: "13:00 – 17:00" },
      { day: "Rabu", time: "08:00 – 12:00" },
      { day: "Sabtu", time: "08:00 – 11:00" },
    ],
    education: [
      "S1 Kedokteran – Universitas Padjadjaran",
      "Sp.N – RSCM Jakarta",
    ],
    experience: "9 tahun",
    bio: "Spesialis saraf dengan minat pada neurologi perilaku, demensia, Parkinson, dan manajemen nyeri kronik.",
    languages: ["Indonesia"],
  },
];

const DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

const specialtyColors: Record<string, string> = {
  Kardiologi: "#006370",
  "Bedah Toraks": "#b45309",
  "Penyakit Dalam": "#6d28d9",
  "Kebidanan & Kandungan": "#be185d",
  "Bedah Umum": "#0369a1",
  Anak: "#0d9488",
  Saraf: "#7c3aed",
};

/* ─────────────────────────────────────────────
   DOCTOR CARD
───────────────────────────────────────────── */
function DoctorCard({
  doctor,
  onOpen,
}: {
  doctor: Doctor;
  onOpen: (d: Doctor) => void;
}) {
  const color = specialtyColors[doctor.specialty] ?? "#006370";
  return (
    <div
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col cursor-pointer"
      onClick={() => onOpen(doctor)}
    >
      {/* Photo */}
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span
          className="absolute bottom-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: color }}
        >
          {doctor.specialty}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-gray-900 font-bold text-base leading-snug">
          {doctor.name}, <span className="text-[#3b9ca5]">{doctor.title}</span>
        </h3>
        <p className="text-gray-400 text-xs mt-1 mb-3">{doctor.polyclinic}</p>

        {/* Schedule preview */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {doctor.schedule.map((s) => (
            <span
              key={s.day}
              className="text-[11px] font-semibold px-2 py-0.5 rounded-full border"
              style={{ borderColor: `${color}40`, color, backgroundColor: `${color}10` }}
            >
              {s.day}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
          <Award size={12} className="shrink-0" />
          Pengalaman {doctor.experience}
        </div>

        <button
          className="mt-auto w-full py-2.5 rounded-xl text-sm font-bold text-white transition-colors"
          style={{ backgroundColor: color }}
          onClick={(e) => {
            e.stopPropagation();
            onOpen(doctor);
          }}
        >
          Lihat Profil & Jadwal
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MODAL
───────────────────────────────────────────── */
function DoctorModal({
  doctor,
  onClose,
}: {
  doctor: Doctor;
  onClose: () => void;
}) {
  const color = specialtyColors[doctor.specialty] ?? "#006370";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="relative flex items-center gap-5 p-6"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}aa)` }}
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-20 h-20 rounded-full object-cover object-top border-4 border-white/40 shadow"
          />
          <div className="flex-1">
            <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">
              {doctor.polyclinic}
            </span>
            <h2 className="text-white text-xl font-extrabold leading-tight mt-0.5">
              {doctor.name}
            </h2>
            <p className="text-white/80 text-sm">{doctor.title} – {doctor.specialty}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Bio */}
          <div>
            <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              <Stethoscope size={15} style={{ color }} /> Tentang Dokter
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{doctor.bio}</p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              <GraduationCap size={15} style={{ color }} /> Pendidikan
            </h4>
            <ul className="space-y-1.5">
              {doctor.education.map((edu, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  {edu}
                </li>
              ))}
            </ul>
          </div>

          {/* Jadwal */}
          <div>
            <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              <Calendar size={15} style={{ color }} /> Jadwal Praktik
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.schedule.map((s) => (
                <div
                  key={s.day}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                  style={{ borderColor: `${color}30`, backgroundColor: `${color}08` }}
                >
                  <Calendar size={14} style={{ color }} className="shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">{s.day}</p>
                    <p className="text-xs text-gray-500">{s.time} WIB</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3">
            <div
              className="rounded-xl p-3 text-center"
              style={{ backgroundColor: `${color}10` }}
            >
              <Award size={18} className="mx-auto mb-1" style={{ color }} />
              <p className="text-sm font-extrabold text-gray-800">{doctor.experience}</p>
              <p className="text-[10px] text-gray-500">Pengalaman</p>
            </div>
            <div
              className="rounded-xl p-3 text-center"
              style={{ backgroundColor: `${color}10` }}
            >
              <Users size={18} className="mx-auto mb-1" style={{ color }} />
              <p className="text-sm font-extrabold text-gray-800">{doctor.languages.length}</p>
              <p className="text-[10px] text-gray-500">Bahasa</p>
            </div>
            <div
              className="rounded-xl p-3 text-center"
              style={{ backgroundColor: `${color}10` }}
            >
              <Calendar size={18} className="mx-auto mb-1" style={{ color }} />
              <p className="text-sm font-extrabold text-gray-800">{doctor.schedule.length}</p>
              <p className="text-[10px] text-gray-500">Hari Praktik</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <button
              className="flex-1 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: color }}
            >
              <Phone size={15} /> Buat Janji Temu
            </button>
            <button className="px-5 py-3 rounded-xl text-sm font-bold border-2 text-gray-600 border-gray-200 hover:border-gray-300 transition-colors">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Dokter() {
  const [search, setSearch] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("Semua");
  const [activeDay, setActiveDay] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showSpecialtyDropdown, setShowSpecialtyDropdown] = useState(false);
  const [doctorsData, setDoctorsData] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await api.get('/doctors');
        if (response.data && response.data.length > 0) {
          const items = response.data.map((d: any) => ({
            id: d.id,
            name: d.name,
            title: d.title,
            specialty: d.specialty,
            polyclinic: d.polyclinic,
            image: d.image,
            schedule: d.schedules ? d.schedules.map((s: any) => ({ day: s.day, time: `${s.start_time.substring(0, 5)} - ${s.end_time.substring(0, 5)}` })) : [],
            education: d.educations ? d.educations.map((e: any) => `${e.degree} - ${e.institution}${e.year ? ` (${e.year})` : ''}`) : [],
            experience: d.experience || "",
            bio: d.bio || "",
            languages: d.languages || [],
          }));
          setDoctorsData(items);
        } else {
          setDoctorsData(defaultDoctors);
        }
      } catch (err) {
        console.error("Gagal mengambil data dokter dari database:", err);
        setDoctorsData(defaultDoctors);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const specialties = useMemo(() => ["Semua", ...Array.from(new Set(doctorsData.map((d) => d.specialty)))], [doctorsData]);

  const filtered = useMemo(() => {
    return doctorsData.filter((d) => {
      const matchSearch =
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.specialty.toLowerCase().includes(search.toLowerCase()) ||
        d.polyclinic.toLowerCase().includes(search.toLowerCase());
      const matchSpecialty =
        activeSpecialty === "Semua" || d.specialty === activeSpecialty;
      const matchDay =
        !activeDay || d.schedule.some((s) => s.day === activeDay);
      return matchSearch && matchSpecialty && matchDay;
    });
  }, [doctorsData, search, activeSpecialty, activeDay]);

  return (
    <div
      className="w-full bg-[#f8fafc] min-h-screen"
      style={{ fontFamily: "'Karla', sans-serif" }}
    >
      {/* ── Breadcrumb ── */}
      <div className="bg-[#f0fdfa] py-3 px-4 md:px-16 border-b border-[#ccfbf1]">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-sm">
          <Link to="/" className="text-[#0f766e] hover:text-[#0d9488] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-[#99f6e4]" />
          <span className="text-[#115e59] font-medium">Dokter</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="relative w-full h-[240px] md:h-[340px] overflow-hidden bg-[#006370]">
        <img
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Tim Dokter"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#006370]/95 to-[#3b9ca5]/60" />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16">
          <div className="max-w-screen-xl mx-auto w-full">
            <p className="text-[#99f6e4] text-sm font-semibold uppercase tracking-widest mb-2">
              Tim Medis Profesional
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
              Direktori Dokter Spesialis
            </h1>
            <p className="text-[#ccfbf1] text-base md:text-lg max-w-xl">
              Temukan dokter yang tepat sesuai kebutuhan kesehatan Anda. Lihat jadwal praktik dan buat janji temu dengan mudah.
            </p>
          </div>
        </div>
      </div>

      {/* ── Search & Filter Bar ── */}
      <div className="sticky top-[104px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 md:px-16 py-4 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          {/* Search */}
          <div className="flex items-center gap-2 flex-1 bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5">
            <Search size={15} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Cari nama dokter, spesialisasi, atau poliklinik..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1"
            />
            {search && (
              <button onClick={() => setSearch("")}>
                <X size={14} className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* Specialty dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSpecialtyDropdown(!showSpecialtyDropdown)}
              className="flex items-center gap-2 bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 min-w-[180px] justify-between hover:border-[#3b9ca5] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Stethoscope size={14} className="text-[#3b9ca5]" />
                {activeSpecialty}
              </span>
              <ChevronDown
                size={14}
                className={`text-gray-400 transition-transform ${showSpecialtyDropdown ? "rotate-180" : ""}`}
              />
            </button>
            {showSpecialtyDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-xl py-1 z-50 min-w-[200px]">
                {specialties.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setActiveSpecialty(s);
                      setShowSpecialtyDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      activeSpecialty === s
                        ? "text-[#006370] bg-[#f0f9fa] font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Day filter chips */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-16 pb-3 flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveDay(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              !activeDay
                ? "bg-[#006370] text-white border-[#006370]"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#3b9ca5]"
            }`}
          >
            Semua Hari
          </button>
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(activeDay === day ? null : day)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeDay === day
                  ? "bg-[#3b9ca5] text-white border-[#3b9ca5]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#3b9ca5]"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results ── */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 py-10">
        {/* Result count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-sm">
            Menampilkan <span className="font-bold text-gray-800">{filtered.length}</span> dari{" "}
            <span className="font-bold text-gray-800">{doctorsData.length}</span> dokter
          </p>
          {(search || activeSpecialty !== "Semua" || activeDay) && (
            <button
              onClick={() => {
                setSearch("");
                setActiveSpecialty("Semua");
                setActiveDay(null);
              }}
              className="text-xs text-[#3b9ca5] hover:text-[#006370] font-semibold flex items-center gap-1 transition-colors"
            >
              <X size={12} /> Reset filter
            </button>
          )}
        </div>

        {loading ? (
          <div className="py-24 text-center text-gray-500">Memuat data dokter...</div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((doc) => (
              <DoctorCard
                key={doc.id}
                doctor={doc}
                onOpen={setSelectedDoctor}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <Stethoscope size={44} className="mx-auto mb-3 opacity-20" />
            <p className="text-base font-semibold text-gray-500">Dokter tidak ditemukan</p>
            <p className="text-sm mt-1">Coba ubah kata kunci atau filter pencarian.</p>
          </div>
        )}
      </div>



      {/* ── CTA Banner ── */}
      <div className="bg-gradient-to-r from-[#006370] to-[#3b9ca5] py-12 px-4 md:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl font-bold mb-1">
              Butuh bantuan memilih dokter?
            </h3>
            <p className="text-[#ccfbf1] text-sm max-w-md">
              Tim Customer Care kami siap membantu Anda 24/7 untuk mencarikan dokter yang paling sesuai dengan kondisi dan jadwal Anda.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button className="bg-white text-[#006370] font-bold text-sm px-7 py-3 rounded-xl hover:bg-[#f0fdfa] transition-colors shadow flex items-center gap-2">
              <Phone size={15} /> Hubungi Kami
            </button>
            <button className="border-2 border-white/50 text-white font-bold text-sm px-7 py-3 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
              <Clock size={15} /> Buat Janji Online
            </button>
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      {selectedDoctor && (
        <DoctorModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
}
