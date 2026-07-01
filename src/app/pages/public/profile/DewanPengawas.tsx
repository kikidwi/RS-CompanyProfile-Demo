import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

const defaultPeople = [
  {
    name: "Prof. Dr. H. Budi Santoso, MPH",
    role: "Ketua Dewan Pengawas",
    institution: "Perwakilan Kementerian Kesehatan RI",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dra. Siti Rahayu Aminah, M.Si",
    role: "Anggota",
    institution: "Perwakilan Kementerian Keuangan RI",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. dr. Andi Wijaya, Sp.PD",
    role: "Anggota",
    institution: "Tokoh Masyarakat / Pakar Kesehatan",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

export default function DewanPengawas() {
  const [pengawasData, setPengawasData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snap = await getDocs(collection(db, "profil_dewan_pengawas"));
        if (!snap.empty) {
          const items: any[] = [];
          snap.forEach((d) => items.push({ id: d.id, ...d.data() }));
          items.sort((a, b) => (a.order || 0) - (b.order || 0));
          setPengawasData(items);
        } else {
          setPengawasData(defaultPeople);
        }
      } catch (err) {
        console.error("Gagal mengambil data dewan pengawas:", err);
        setPengawasData(defaultPeople);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Dewan Pengawas</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-3xl">
        Dewan Pengawas adalah organ independen yang bertugas melakukan pembinaan dan pengawasan terhadap pengelolaan Rumah Sakit Utama Demo, guna memastikan tata kelola yang baik dan pencapaian visi misi secara efektif.
      </p>

      {loading ? (
        <div className="py-12 text-center text-gray-500">Memuat data...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pengawasData.map((person, i) => (
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
                <p className="text-gray-500 text-sm">{person.institution}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
