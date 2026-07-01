import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

const defaultData = {
  paragraf1: "Rumah Sakit Utama Demo merupakan rumah sakit umum bertipe A yang berfokus pada penyelenggaraan pelayanan kesehatan terpadu dengan standar internasional. Didirikan pada tahun 2005, kami berawal dari sebuah klinik kesehatan masyarakat kecil yang perlahan berkembang menjadi salah satu pusat rujukan unggulan di kawasan ini.",
  paragraf2: "Perjalanan panjang kami ditandai oleh semangat yang tidak pernah padam: memberikan perawatan medis terbaik dengan sentuhan kemanusiaan yang hangat. Kami percaya bahwa teknologi medis mutakhir dan dokter spesialis berpengalaman, apabila dipadukan dengan rasa empati yang tulus, akan menghasilkan pengalaman penyembuhan yang sesungguhnya bagi setiap pasien.",
  paragraf3: "Saat ini, Rumah Sakit Utama Demo melayani lebih dari 10.000 pasien rawat jalan dan 2.000 pasien rawat inap setiap bulannya, dengan dukungan lebih dari 500 tenaga medis dan non-medis yang terlatih dan berdedikasi tinggi.",
  keunggulan: [
    { title: "Empati", desc: "Kami melayani setiap pasien dengan kepedulian tulus, selayaknya merawat anggota keluarga sendiri. Pendekatan yang berpusat pada pasien (patient-centered care) menjadi fondasi dari setiap tindakan kami." },
    { title: "Profesionalisme", desc: "Seluruh tenaga medis kami menjunjung tinggi etika profesi dan terus memperbarui keilmuan melalui pelatihan dan sertifikasi internasional secara berkala." },
    { title: "Integritas", desc: "Kami berkomitmen untuk selalu transparan, jujur, dan mengutamakan keselamatan serta hak-hak setiap pasien di atas kepentingan lainnya." },
  ],
  akreditasi: "Komitmen kami terhadap mutu layanan telah diakui secara formal melalui berbagai proses akreditasi nasional dan internasional yang ketat. Rumah Sakit Utama Demo saat ini telah memperoleh status KARS Paripurna, KARS Internasional, serta akreditasi bergengsi dari Joint Commission International (JCI) — tiga standar tertinggi dalam dunia pelayanan kesehatan.",
};

export default function TentangKami() {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    async function fetchData() {
      try {
        const docSnap = await getDoc(doc(db, "profil", "tentang-kami"));
        if (docSnap.exists()) {
          const d = docSnap.data();
          setData({
            paragraf1: d.paragraf1 || defaultData.paragraf1,
            paragraf2: d.paragraf2 || defaultData.paragraf2,
            paragraf3: d.paragraf3 || defaultData.paragraf3,
            keunggulan: d.keunggulan || defaultData.keunggulan,
            akreditasi: d.akreditasi || defaultData.akreditasi,
          });
        }
      } catch (error) {
        console.error("Error fetching tentang kami:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      className="w-full"
      style={{ fontFamily: "'Karla', sans-serif" }}
    >
      {/* Tentang Kami */}
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Tentang Kami</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full"></div>

      <p className="text-gray-700 leading-relaxed mb-5 text-[15px]">
        {data.paragraf1}
      </p>
      <p className="text-gray-700 leading-relaxed mb-5 text-[15px]">
        {data.paragraf2}
      </p>
      <p className="text-gray-700 leading-relaxed mb-10 text-[15px]">
        {data.paragraf3}
      </p>

      <hr className="border-gray-100 mb-10" />

      {/* Keunggulan */}
      <h3 className="text-xl font-bold text-[#006370] mb-1">Keunggulan Kami</h3>
      <div className="w-10 h-1 bg-[#3b9ca5] mb-6 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {data.keunggulan.map((item) => (
          <div key={item.title} className="border-l-4 border-[#3b9ca5] pl-4">
            <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <hr className="border-gray-100 mb-10" />

      {/* Akreditasi */}
      <h3 className="text-xl font-bold text-[#006370] mb-1">Akreditasi & Penghargaan</h3>
      <div className="w-10 h-1 bg-[#3b9ca5] mb-6 rounded-full"></div>
      <p className="text-gray-700 leading-relaxed text-[15px]">
        {data.akreditasi}
      </p>
    </div>
  );
}

