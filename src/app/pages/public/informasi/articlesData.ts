import { BookOpen, GraduationCap, Megaphone } from "lucide-react";

export type ArticleCategory = "Berita" | "Edukasi" | "Pengumuman";

export type Article = {
  id: number;
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: string;
  authorRole: string;
  content: string[]; // paragraphs
  tags: string[];
};

export const categoryConfig: Record<ArticleCategory, { color: string; icon: React.ElementType }> = {
  Berita:     { color: "#006370",  icon: Megaphone },
  Edukasi:    { color: "#0d9488",  icon: GraduationCap },
  Pengumuman: { color: "#b45309",  icon: BookOpen },
};

export const articles: Article[] = [
  {
    id: 1,
    slug: "akreditasi-kars-paripurna",
    title: "RS Utama Demo Raih Akreditasi Paripurna dari KARS untuk Ketiga Kalinya",
    category: "Berita",
    date: "25 Juni 2026",
    readTime: "3 menit",
    image: "https://images.unsplash.com/photo-1615770922480-0b9ae80afeba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    excerpt: "Rumah Sakit Utama Demo kembali meraih pengakuan internasional atas komitmennya dalam meningkatkan mutu dan keselamatan pasien secara berkelanjutan.",
    author: "Tim Humas RS",
    authorRole: "Bagian Humas & Pemasaran",
    tags: ["Akreditasi", "KARS", "Mutu Pelayanan"],
    content: [
      "RS Utama Demo kembali menorehkan prestasi gemilang dengan berhasil meraih status Akreditasi Paripurna dari Komisi Akreditasi Rumah Sakit (KARS) untuk ketiga kalinya secara berturut-turut. Penganugerahan sertifikat berlangsung dalam sebuah acara resmi di Jakarta pada 23 Juni 2026.",
      "Akreditasi Paripurna merupakan tingkatan tertinggi dalam sistem akreditasi rumah sakit nasional yang diberikan kepada fasilitas kesehatan yang berhasil memenuhi seluruh standar mutu dan keselamatan pasien yang ditetapkan oleh KARS. Penilaian dilakukan melalui serangkaian survei mendalam selama tiga hari oleh tim surveior independen.",
      "Direktur Utama RS Utama Demo, dr. Budi Santoso, M.Kes, menyampaikan rasa syukur dan apresiasi yang mendalam kepada seluruh jajaran tenaga medis dan non-medis yang telah bekerja keras mempertahankan standar pelayanan. \"Pencapaian ini bukan sekadar selembar sertifikat, melainkan bukti nyata komitmen seluruh tim kami dalam memberikan pelayanan terbaik bagi setiap pasien,\" ujarnya.",
      "Survei akreditasi mencakup penilaian terhadap lebih dari 1.200 elemen penilaian yang mencakup tata kelola rumah sakit, keselamatan pasien, manajemen risiko, pelayanan medis, keperawatan, farmasi, hingga pengelolaan rekam medis. RS Utama Demo berhasil meraih nilai rata-rata di atas 80% untuk seluruh bab standar.",
      "Dengan diraihnya kembali Akreditasi Paripurna ini, RS Utama Demo semakin memantapkan posisinya sebagai pusat rujukan kesehatan terpercaya di wilayah Jakarta Selatan dan sekitarnya. Ke depan, manajemen berkomitmen untuk terus berinovasi dalam peningkatan mutu pelayanan demi memberikan pelayanan kesehatan yang aman, berkualitas, dan berorientasi pada kepuasan pasien.",
    ],
  },
  {
    id: 2,
    slug: "tanda-serangan-jantung",
    title: "Mengenal Tanda-Tanda Serangan Jantung dan Cara Pertolongan Pertama",
    category: "Edukasi",
    date: "20 Juni 2026",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    excerpt: "Serangan jantung bisa terjadi kapan saja. Kenali gejalanya sejak dini dan pelajari langkah pertolongan pertama yang benar sebelum ambulans tiba.",
    author: "dr. Ahmad Fauzi, Sp.JP (K)",
    authorRole: "Dokter Spesialis Jantung",
    tags: ["Serangan Jantung", "Pertolongan Pertama", "Kesehatan Jantung"],
    content: [
      "Serangan jantung atau infark miokard terjadi ketika aliran darah ke jantung tersumbat, menyebabkan kerusakan atau kematian otot jantung. Kondisi ini merupakan keadaan darurat medis yang memerlukan penanganan segera. Setiap menit sangat berarti — semakin cepat penanganan diberikan, semakin besar peluang pasien untuk selamat tanpa kerusakan permanen.",
      "Gejala paling umum dari serangan jantung adalah nyeri dada yang terasa seperti ditekan, diremas, atau terasa berat. Nyeri ini bisa menjalar ke lengan kiri, bahu, punggung, leher, atau rahang. Namun, perlu diingat bahwa sekitar 25% serangan jantung terjadi tanpa nyeri dada yang khas, terutama pada wanita dan penderita diabetes.",
      "Gejala lain yang perlu diwaspadai meliputi sesak napas (dengan atau tanpa nyeri dada), keringat dingin yang tiba-tiba, mual atau muntah, pusing atau pingsan, serta rasa cemas atau takut yang tidak dapat dijelaskan. Apabila Anda atau orang di sekitar Anda mengalami kombinasi gejala-gejala ini, segera hubungi layanan darurat medis.",
      "Pertolongan pertama yang dapat diberikan sambil menunggu ambulans adalah: (1) Minta korban untuk duduk atau berbaring dengan nyaman agar jantung tidak bekerja terlalu keras; (2) Longgarkan pakaian yang ketat; (3) Jika korban sadar dan tidak alergi aspirin, berikan 1 tablet aspirin (160-320 mg) untuk dikunyah, bukan ditelan; (4) Pantau kondisi korban dan jangan tinggalkan sendirian.",
      "Jika korban kehilangan kesadaran dan tidak bernapas, segera lakukan CPR (Cardiopulmonary Resuscitation). Tekan bagian tengah dada dengan kedua tangan, sedalam 5-6 cm, dengan kecepatan 100-120 kali per menit. Jika tersedia AED (Automated External Defibrillator), gunakan segera mengikuti panduan suara yang ada. Pengetahuan CPR dasar dapat menyelamatkan nyawa seseorang sebelum tim medis tiba.",
    ],
  },
  {
    id: 3,
    slug: "perubahan-jam-operasional",
    title: "Pemberitahuan: Perubahan Jam Operasional Poli Rawat Jalan Mulai 1 Juli 2026",
    category: "Pengumuman",
    date: "18 Juni 2026",
    readTime: "2 menit",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    excerpt: "Demi meningkatkan kualitas pelayanan, RS Utama Demo akan menyesuaikan jadwal operasional poliklinik rawat jalan. Simak informasi lengkapnya di sini.",
    author: "Manajemen RS",
    authorRole: "Manajemen RS Utama Demo",
    tags: ["Pengumuman", "Jadwal", "Poliklinik"],
    content: [
      "Dalam rangka peningkatan mutu layanan dan efisiensi operasional, RS Utama Demo mengumumkan perubahan jam operasional poliklinik rawat jalan yang berlaku mulai 1 Juli 2026. Perubahan ini dilakukan setelah melalui kajian mendalam dan evaluasi kebutuhan pasien.",
      "Perubahan utama yang diberlakukan adalah: Poli Spesialis Senin–Jumat yang sebelumnya buka pukul 08.00–16.00 WIB, kini diperpanjang menjadi 07.30–20.00 WIB. Sesi sore hari (14.00–20.00 WIB) dikhususkan bagi pasien yang memiliki keterbatasan waktu di pagi hari, seperti karyawan aktif.",
      "Untuk hari Sabtu, jam operasional tetap pukul 07.30–14.00 WIB. Tidak ada layanan rawat jalan di hari Minggu, kecuali IGD yang tetap beroperasi 24 jam. Jadwal dokter spesialis pada sesi sore akan ditampilkan pada papan jadwal di masing-masing poliklinik dan dapat diakses melalui website resmi rumah sakit.",
      "Manajemen RS Utama Demo menyampaikan permohonan maaf atas segala ketidaknyamanan yang mungkin timbul selama masa transisi ini. Seluruh janji temu yang telah dibuat sebelumnya tetap berlaku dan tidak perlu dijadwal ulang. Untuk konfirmasi atau informasi lebih lanjut, pasien dapat menghubungi Contact Center kami di nomor 1500 123.",
    ],
  },
  {
    id: 4,
    slug: "tips-kesehatan-jantung",
    title: "7 Tips Menjaga Kesehatan Jantung di Usia Produktif",
    category: "Edukasi",
    date: "15 Juni 2026",
    readTime: "4 menit",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    excerpt: "Penyakit jantung bukan hanya milik lansia. Gaya hidup modern membuat generasi muda semakin rentan. Ini 7 langkah mudah yang bisa Anda mulai hari ini.",
    author: "dr. Siti Rahayu, Sp.JP (K)",
    authorRole: "Dokter Spesialis Jantung – Elektrofisiologi",
    tags: ["Gaya Hidup Sehat", "Jantung", "Pencegahan"],
    content: [
      "Data dari Riset Kesehatan Dasar (Riskesdas) menunjukkan prevalensi penyakit jantung di Indonesia terus meningkat, bahkan menyerang kelompok usia produktif (25–45 tahun) dengan lebih agresif dari sebelumnya. Faktor utamanya adalah gaya hidup sedentari, stres kronis, pola makan tinggi lemak jenuh, dan kurangnya aktivitas fisik.",
      "Berikut adalah 7 tips yang dapat Anda terapkan untuk menjaga kesehatan jantung: Pertama, lakukan olahraga aerobik minimal 150 menit per minggu. Pilih aktivitas yang Anda sukai — berjalan cepat, bersepeda, berenang, atau jogging. Konsistensi lebih penting daripada intensitas.",
      "Kedua, jaga pola makan dengan memperbanyak konsumsi sayur, buah, biji-bijian utuh, dan ikan kaya omega-3. Kurangi konsumsi garam (< 5 gram/hari), gula tambahan, lemak trans, dan makanan ultra-proses. Ketiga, berhenti merokok. Merokok adalah faktor risiko terkuat penyakit kardiovaskular — bahkan paparan asap rokok pasif pun berbahaya.",
      "Keempat, kelola stres dengan baik. Stres kronis memicu pelepasan hormon kortisol yang merusak pembuluh darah. Meditasi, yoga, atau sekadar menghabiskan waktu di alam terbuka terbukti efektif. Kelima, tidur cukup 7–9 jam per malam. Kurang tidur meningkatkan risiko hipertensi, obesitas, dan diabetes — ketiganya merupakan faktor risiko penyakit jantung.",
      "Keenam, rutin periksa tekanan darah, kadar kolesterol, dan gula darah minimal setahun sekali, terutama jika Anda memiliki riwayat keluarga dengan penyakit jantung. Ketujuh, jaga berat badan ideal. Obesitas, terutama lemak visceral di perut, sangat erat kaitannya dengan sindrom metabolik dan penyakit jantung. Mulailah dengan langkah kecil — setiap perubahan positif berarti.",
    ],
  },
  {
    id: 5,
    slug: "layanan-genomik-kardiovaskular",
    title: "Peluncuran Program Layanan Genomik Kardiovaskular: Inovasi Deteksi Dini Berbasis DNA",
    category: "Berita",
    date: "10 Juni 2026",
    readTime: "4 menit",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    excerpt: "RS Utama Demo resmi meluncurkan layanan pemeriksaan DNA untuk mendeteksi risiko penyakit jantung turunan dengan teknologi generasi terbaru.",
    author: "Tim Humas RS",
    authorRole: "Bagian Humas & Pemasaran",
    tags: ["Inovasi", "Genomik", "Teknologi Medis"],
    content: [
      "RS Utama Demo secara resmi meluncurkan Program Layanan Genomik Kardiovaskular pada 8 Juni 2026, menjadikannya salah satu rumah sakit pertama di Indonesia yang menghadirkan layanan pemeriksaan DNA khusus untuk penyakit jantung secara komprehensif.",
      "Program ini memanfaatkan teknologi Next Generation Sequencing (NGS) untuk menganalisis panel gen yang terkait dengan berbagai kondisi jantung herediter, termasuk kardiomiopati hipertrofik, sindrom QT panjang, sindrom Brugada, dan hiperkolesterolemia familial. Pemeriksaan cukup dilakukan dengan satu kali pengambilan sampel darah atau usap mulut.",
      "Hasil pemeriksaan akan diinterpretasikan oleh tim multidisiplin yang terdiri dari dokter spesialis jantung konsultan, ahli genetika klinis, dan konselor genetik. Pasien akan mendapatkan laporan tertulis yang komprehensif beserta konsultasi untuk memahami implikasi hasil dan langkah pencegahan yang dapat diambil.",
      "Kepala Program Genomik RS Utama Demo, Prof. Dr. dr. Hendro Wahjono, Sp.JP(K), menjelaskan bahwa layanan ini sangat bermanfaat terutama bagi individu yang memiliki anggota keluarga dengan riwayat penyakit jantung dini, kematian mendadak, atau aritmia yang tidak dapat dijelaskan. \"Dengan mengetahui profil genetik Anda, kami dapat merancang strategi pencegahan dan pengobatan yang jauh lebih personal dan efektif,\" jelasnya.",
      "Untuk tahap awal, layanan ini tersedia setiap hari Senin dan Kamis di Klinik Jantung Lanjut RS Utama Demo. Pasien yang berminat dapat mendaftar melalui poli kardiologi atau menghubungi tim Koordinasi Layanan Khusus di nomor 0811 9876 5432.",
    ],
  },
  {
    id: 6,
    slug: "vaksinasi-influenza-jantung",
    title: "Pentingnya Vaksinasi Influenza bagi Pasien Penyakit Jantung",
    category: "Edukasi",
    date: "5 Juni 2026",
    readTime: "3 menit",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    excerpt: "Pasien dengan riwayat penyakit jantung memiliki risiko lebih tinggi terhadap komplikasi influenza. Pelajari mengapa vaksinasi tahunan sangat dianjurkan.",
    author: "dr. Hendra Kusuma, Sp.PD",
    authorRole: "Dokter Spesialis Penyakit Dalam",
    tags: ["Vaksinasi", "Influenza", "Pencegahan"],
    content: [
      "Bagi kebanyakan orang, influenza hanyalah penyakit tidak nyaman yang berlalu dalam seminggu. Namun, bagi pasien dengan penyakit jantung, influenza dapat memicu komplikasi serius yang mengancam jiwa, termasuk pneumonia berat, peradangan otot jantung (miokarditis), dan kejadian kardiovaskular akut seperti serangan jantung.",
      "Penelitian telah menunjukkan bahwa pasien penyakit jantung yang terinfeksi influenza memiliki risiko serangan jantung 6 kali lebih tinggi dalam minggu pertama setelah terinfeksi. Virus influenza memicu respons inflamasi sistemik yang dapat menstabilkan plak aterosklerosis di pembuluh darah dan meningkatkan kecenderungan pembekuan darah.",
      "Vaksinasi influenza tahunan terbukti secara ilmiah dapat mengurangi risiko rawat inap akibat komplikasi kardiovaskular hingga 45% pada pasien penyakit jantung. American Heart Association dan European Society of Cardiology sama-sama merekomendasikan vaksinasi influenza tahunan sebagai bagian dari tata laksana standar penyakit jantung.",
      "Vaksin influenza tersedia di Klinik Vaksinasi RS Utama Demo setiap hari Senin–Sabtu pukul 08.00–16.00 WIB. Anda tidak perlu membuat janji terlebih dahulu. Untuk pasien peserta BPJS Kesehatan, vaksin influenza dapat ditanggung sesuai ketentuan yang berlaku. Segera konsultasikan kebutuhan vaksinasi Anda dengan dokter.",
    ],
  },
  {
    id: 7,
    slug: "lowongan-perawat-icu",
    title: "Rekrutmen Tenaga Kesehatan: RS Utama Demo Membuka Lowongan Perawat ICU",
    category: "Pengumuman",
    date: "1 Juni 2026",
    readTime: "2 menit",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    excerpt: "Kami membuka kesempatan berkarier bagi perawat berpengalaman di unit ICU, ICCU, dan HCU. Pendaftaran dibuka hingga 31 Juli 2026.",
    author: "HRD RS Utama Demo",
    authorRole: "Bagian Sumber Daya Manusia",
    tags: ["Rekrutmen", "Karier", "Perawat"],
    content: [
      "RS Utama Demo membuka lowongan pekerjaan bagi tenaga keperawatan profesional untuk bergabung dalam tim perawatan intensif kami. Posisi yang tersedia meliputi Perawat ICU (Intensive Care Unit), Perawat ICCU (Intensive Cardiac Care Unit), dan Perawat HCU (High Care Unit).",
      "Persyaratan umum yang diperlukan: pendidikan minimal D3 Keperawatan (S1 diutamakan), memiliki STR (Surat Tanda Registrasi) yang masih berlaku, memiliki sertifikat pelatihan ICU/ICCU yang diakui, pengalaman minimal 1 tahun di unit perawatan intensif, dan memiliki kemampuan komunikasi yang baik serta dedikasi tinggi terhadap pelayanan pasien.",
      "RS Utama Demo menawarkan paket kompensasi yang kompetitif, termasuk gaji pokok sesuai kualifikasi, tunjangan profesi, fasilitas BPJS Kesehatan dan Ketenagakerjaan, peluang pengembangan kompetensi, serta lingkungan kerja yang mendukung pertumbuhan profesional.",
      "Lamaran dapat dikirimkan secara online melalui portal karier resmi RS Utama Demo di karier.rsutemademo.id, atau langsung ke bagian HRD RS Utama Demo di lantai 1 Gedung Administrasi. Pendaftaran dibuka hingga 31 Juli 2026. Hanya pelamar yang memenuhi kualifikasi yang akan dihubungi untuk proses seleksi lebih lanjut.",
    ],
  },
  {
    id: 8,
    slug: "bahaya-hipertensi",
    title: "Bahaya Hipertensi yang Tidak Terkontrol: Silent Killer yang Perlu Diwaspadai",
    category: "Edukasi",
    date: "28 Mei 2026",
    readTime: "6 menit",
    image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    excerpt: "Hipertensi sering tidak menimbulkan gejala hingga komplikasi serius terjadi. Kenali risikonya dan cara mengendalikannya sejak dini.",
    author: "dr. Rudi Hartono, Sp.PD-KGH",
    authorRole: "Dokter Spesialis Penyakit Dalam – Konsultan Ginjal Hipertensi",
    tags: ["Hipertensi", "Tekanan Darah", "Penyakit Kronis"],
    content: [
      "Hipertensi atau tekanan darah tinggi dijuluki 'silent killer' bukan tanpa alasan. Kondisi ini sering tidak menimbulkan gejala apapun selama bertahun-tahun, namun diam-diam merusak organ-organ vital seperti jantung, ginjal, otak, dan pembuluh darah. Ketika gejala akhirnya muncul, kerusakan serius mungkin telah terjadi.",
      "Seseorang dikatakan menderita hipertensi jika tekanan darahnya secara konsisten berada di atas 130/80 mmHg (berdasarkan panduan terkini). Di Indonesia, diperkirakan lebih dari 34 juta penduduk dewasa menderita hipertensi, dan tragisnya hanya sekitar sepertiga yang menyadari kondisi mereka.",
      "Hipertensi yang tidak terkontrol dapat menyebabkan berbagai komplikasi serius: serangan jantung dan gagal jantung akibat beban kerja jantung yang terus-menerus meningkat; stroke akibat pecah atau tersumbatnya pembuluh darah di otak; gagal ginjal kronis akibat kerusakan pada pembuluh darah halus di ginjal; serta masalah penglihatan akibat kerusakan retina.",
      "Penanganan hipertensi bersifat multifaktor. Perubahan gaya hidup merupakan fondasi utama: kurangi asupan garam hingga di bawah 5 gram per hari, perbanyak konsumsi buah dan sayur (pola makan DASH), turunkan berat badan jika kelebihan, rutin berolahraga, berhenti merokok, dan batasi konsumsi alkohol. Manajemen stres juga sangat penting.",
      "Jika perubahan gaya hidup belum cukup menurunkan tekanan darah ke target yang ditentukan dokter, obat antihipertensi mungkin diperlukan. Penting untuk tidak menghentikan obat secara tiba-tiba meski tekanan darah sudah normal, karena penghentian mendadak dapat memicu 'rebound hypertension' yang berbahaya. Selalu konsultasikan perubahan pengobatan Anda dengan dokter.",
    ],
  },
];
