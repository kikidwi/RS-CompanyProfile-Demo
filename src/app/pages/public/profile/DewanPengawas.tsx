const people = [
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
  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Dewan Pengawas</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-3xl">
        Dewan Pengawas adalah organ independen yang bertugas melakukan pembinaan dan pengawasan terhadap pengelolaan Rumah Sakit Utama Demo, guna memastikan tata kelola yang baik dan pencapaian visi misi secara efektif.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((person, i) => (
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
    </div>
  );
}
