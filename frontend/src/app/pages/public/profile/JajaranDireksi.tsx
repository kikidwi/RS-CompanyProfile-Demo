import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

const defaultDireksi = [
  {
    name: "Dr. dr. Iwan Hartoyo, Sp.JP(K), MARS, FACC",
    role: "Direktur Utama",
    desc: "Memimpin seluruh operasional dan kebijakan strategis rumah sakit.",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "dr. Muhamad Fauzi, Sp.PD, KKV, M.Epid",
    role: "Direktur Medik & Keperawatan",
    desc: "Bertanggung jawab atas mutu layanan medis dan keperawatan.",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Dr. dr. Dicky Hanafy, Sp.JP, Subsp.KI(K)",
    role: "Direktur SDM, Pendidikan & Penelitian",
    desc: "Mengelola pengembangan SDM, pendidikan, dan riset kesehatan.",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Tri Hartono Rianto, SE, MBus, Ak, CA, CPMA",
    role: "Direktur Keuangan & BMN",
    desc: "Mengelola keuangan, anggaran, dan barang milik negara.",
    photo: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Dr. drg. Maya Marinda, M.Kes",
    role: "Direktur Perencanaan & Strategi",
    desc: "Memimpin perencanaan layanan dan pengembangan strategi jangka panjang.",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Haruddin S., ST, M.Kes, QRMA, QHIA",
    role: "Direktur Layanan Operasional",
    desc: "Mengkoordinasikan seluruh layanan operasional dan penunjang medis.",
    photo: "https://randomuser.me/api/portraits/men/83.jpg",
  },
];

export default function JajaranDireksi() {
  const [direksiData, setDireksiData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snap = await getDocs(collection(db, "profil_direksi"));
        if (!snap.empty) {
          const items: any[] = [];
          snap.forEach((d) => items.push({ id: d.id, ...d.data() }));
          items.sort((a, b) => (a.order || 0) - (b.order || 0));
          setDireksiData(items);
        } else {
          setDireksiData(defaultDireksi);
        }
      } catch (err) {
        console.error("Gagal mengambil data direksi dari database:", err);
        setDireksiData(defaultDireksi);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Jajaran Direksi</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-3xl">
        Rumah Sakit Utama Demo dipimpin oleh jajaran direksi yang berpengalaman dan kompeten di bidangnya masing-masing, berkomitmen untuk mewujudkan visi dan misi rumah sakit dalam memberikan pelayanan kesehatan terbaik.
      </p>

      {loading ? (
        <div className="py-12 text-center text-gray-500">Memuat data...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {direksiData.map((person, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Photo */}
              <div className="w-full h-52 bg-gray-100 overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Info */}
              <div className="p-5 w-full">
                <p className="text-xs font-semibold text-[#3b9ca5] uppercase tracking-wider mb-1">{person.role}</p>
                <h3 className="text-gray-800 font-bold text-base leading-snug mb-2">{person.name}</h3>
                <div className="w-8 h-0.5 bg-gray-200 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">{person.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
