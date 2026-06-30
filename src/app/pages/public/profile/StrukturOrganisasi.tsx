const topLevel = [{ title: "Direktur Utama" }];

const directors = [
  { title: "Direktur Medik\n& Keperawatan" },
  { title: "Direktur SDM\n& Pendidikan" },
  { title: "Direktur Keuangan\n& BMN" },
  { title: "Direktur Perencanaan\n& Strategi" },
  { title: "Direktur Layanan\nOperasional" },
];

function OrgBox({ title, highlight = false }: { title: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-xl px-3 py-2.5 text-center text-xs sm:text-sm font-semibold border-2 min-w-[110px] sm:min-w-[130px] whitespace-pre-line leading-snug ${
        highlight
          ? "bg-[#006370] text-white border-[#006370] shadow-md"
          : "bg-white text-[#006370] border-[#3b9ca5]"
      }`}
    >
      {title}
    </div>
  );
}

export default function StrukturOrganisasi() {
  return (
    <div className="w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
      <h2 className="text-2xl font-bold text-[#006370] mb-1">Struktur Organisasi</h2>
      <div className="w-12 h-1 bg-[#3b9ca5] mb-6 rounded-full" />
      <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-3xl">
        Bagan struktur organisasi utama Rumah Sakit Utama Demo yang menggambarkan hierarki kepemimpinan dan pembagian fungsi manajemen secara ringkas.
      </p>

      {/* Scrollable wrapper for mobile */}
      <div className="overflow-x-auto pb-4">
        <div className="flex flex-col items-center select-none min-w-[640px]">

          {/* Row 1: Side + Direktur Utama + Side */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-1">
              <OrgBox title="Dewan Pengawas" />
              <div className="text-[10px] text-gray-400 font-medium">Pengawas</div>
            </div>

            <div className="flex flex-col items-center relative">
              <div className="absolute top-5 right-full w-6 border-t-2 border-dashed border-[#3b9ca5]/50" />
              <div className="absolute top-5 left-full w-6 border-t-2 border-dashed border-[#3b9ca5]/50" />
              <OrgBox title="Direktur Utama" highlight />
            </div>

            <div className="flex flex-col items-center gap-1">
              <OrgBox title="Satuan Pemeriksa Internal" />
              <div className="text-[10px] text-gray-400 font-medium">Pengawas Internal</div>
            </div>
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-[#3b9ca5]/50" />

          {/* Directors row */}
          <div className="relative flex items-start">
            <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-[#3b9ca5]/50" />
            {directors.map((dir, i) => (
              <div key={i} className="flex flex-col items-center px-2 pt-0">
                <div className="w-0.5 h-8 bg-[#3b9ca5]/50" />
                <OrgBox title={dir.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-xs mt-6 text-center italic">
        * Geser ke kanan untuk melihat struktur lengkap pada layar kecil. Bagan ini merupakan representasi ringkas dari struktur organisasi utama.
      </p>
    </div>
  );
}
