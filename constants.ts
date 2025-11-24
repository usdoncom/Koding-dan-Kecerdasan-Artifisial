import { RoadmapDay, ProblemItem, BasicCard, ContentCard } from './types';

export const BASICS_DATA: BasicCard[] = [
  { id: 1, title: "Apa itu TikTok Affiliate", description: "Pahami model bisnis affiliate marketing di ekosistem TikTok.", iconName: "BookOpen" },
  { id: 2, title: "Syarat & Aturan", description: "Pelajari kebijakan komunitas dan syarat minimal followers.", iconName: "ShieldAlert" },
  { id: 3, title: "Cara Daftar", description: "Panduan langkah demi langkah mendaftar TikTok Shop & Affiliate.", iconName: "UserPlus" },
  { id: 4, title: "Verifikasi Identitas", description: "Cara lolos verifikasi KTP agar komisi bisa cair.", iconName: "BadgeCheck" },
  { id: 5, title: "Cara Ambil Produk", description: "Menambahkan produk dari marketplace ke etalase (Showcase).", iconName: "ShoppingBag" },
  { id: 6, title: "Menentukan Niche", description: "Pilih kategori pasar yang spesifik dan potensial.", iconName: "Target" },
  { id: 7, title: "Riset Produk Laris", description: "Analisis data produk yang sedang trending dan winning.", iconName: "TrendingUp" },
];

export const PROBLEMS_DATA: ProblemItem[] = [
  { id: 1, title: "View Video Stuck 200", cause: "Konten kurang engaging di 3 detik pertama atau terdeteksi unoriginal.", solution: "Perbaiki hook visual dan audio. Gunakan teknik pattern interrupt.", tip: "Cek retensi audiens di analytics." },
  { id: 2, title: "Tidak Ada yang CO (Checkout)", cause: "Video viral tapi tidak relevan dengan produk (salah target audience).", solution: "Buat konten soft-selling yang fokus pada manfaat produk, bukan cuma hiburan.", tip: "Gunakan Call to Action (CTA) yang jelas." },
  { id: 3, title: "Live Streaming Sepi", cause: "Kurang konsisten, jam live salah, atau tidak ada interaksi.", solution: "Jadwal live tetap, sapa setiap penonton yang masuk, adakan flash sale.", tip: "Durasi minimal live disarankan 90 menit." },
  { id: 4, title: "Kena Shadowban", cause: "Melanggar panduan komunitas atau re-upload konten orang lain.", solution: "Hapus konten bermasalah, istirahat posting 2 hari, lalu upload konten original.", tip: "Jangan gunakan watermark aplikasi lain." },
  { id: 5, title: "Komisi Kecil", cause: "Memilih produk dengan persentase komisi rendah (<5%).", solution: "Filter produk di marketplace creator dengan komisi minimal 10-15%.", tip: "Cari toko yang memberi sampel gratis + komisi tinggi." },
  { id: 6, title: "Produk Bagus Tapi Gak Laku", cause: "Video review membosankan atau pencahayaan buruk.", solution: "Gunakan format 'Problem-Agitation-Solution'. Tunjukkan hasil pemakaian.", tip: "Lighting yang baik meningkatkan kepercayaan." },
  { id: 7, title: "Bingung Ide Konten", cause: "Kurang riset dan tidak punya content bank.", solution: "Lakukan metode ATM (Amati Tiru Modifikasi) dari akun kompetitor luar negeri.", tip: "Simpan ide di notes setiap kali scroll FYP." },
  { id: 8, title: "Salah Pilih Niche", cause: "Mengikuti tren sesaat yang tidak disukai secara jangka panjang.", solution: "Pilih niche berdasarkan hobi atau keahlian agar tidak burnout.", tip: "Niche abadi: Kesehatan, Kekayaan, Hubungan." },
  { id: 9, title: "Keranjang Kuning Hilang", cause: "Skor pelanggaran poin mencapai batas tertentu.", solution: "Ajukan banding jika merasa tidak salah, atau ikuti ujian pelanggaran.", tip: "Selalu pantau notifikasi sistem." },
  { id: 10, title: "Gaptek Editing", cause: "Terlalu memikirkan efek canggih.", solution: "Mulai dengan template CapCut yang sudah disediakan TikTok.", tip: "Cut-to-cut yang pas lebih penting daripada efek." },
  { id: 11, title: "Takut Tampil Wajah", cause: "Kurang percaya diri.", solution: "Gunakan format POV tangan, unboxing, atau ASMR.", tip: "Voice over (suara) juga membangun personal branding." },
  { id: 12, title: "Followers Tidak Bertambah", cause: "Konten tidak memberikan nilai (edukasi/hiburan).", solution: "Fokus pada 'Apa untungnya buat penonton?'.", tip: "Balas komentar dengan video (VT)." },
  { id: 13, title: "Video Dibisukan (Muted)", cause: "Hak cipta musik.", solution: "Gunakan musik yang tersedia di library 'Commercial Sounds' TikTok.", tip: "Cek lisensi sebelum pakai lagu viral." },
  { id: 14, title: "Sample Gratis Ditolak", cause: "Performa akun belum meyakinkan seller.", solution: "Beli sampel sendiri dulu, buktikan bisa jualan, baru ajukan lagi.", tip: "Buat portofolio video review." },
  { id: 15, title: "Burnout / Malas", cause: "Ekspektasi terlalu tinggi di awal.", solution: "Fokus pada proses belajar, bukan hasil uang instan.", tip: "Gabung komunitas affiliate untuk semangat." },
];

export const CONTENT_CARDS: ContentCard[] = [
  { id: 1, category: "Hook", title: "100 Hook Viral (5W+1H)", description: "Kumpulan kalimat pembuka yang bikin audiens stop scrolling." },
  { id: 2, category: "Editing", title: "Template Overlay 8 Detik", description: "Template editing cepat untuk konten review produk singkat." },
  { id: 3, category: "Script", title: "Script Try-On Fashion", description: "Naskah khusus niche fashion pria/wanita agar terlihat estetik." },
  { id: 4, category: "Tutorial", title: "Mastering CapCut Mobile", description: "Tutorial transisi, keyframe, dan auto-caption di HP." },
  { id: 5, category: "Riset", title: "Cara Riset Konten FYP", description: "Teknik mencari video winning untuk di-remake." },
  { id: 6, category: "Psikologi", title: "Video Pemicu Checkout", description: "Struktur video yang memanipulasi emosi beli." },
  { id: 7, category: "SEO", title: "Panduan SEO TikTok", description: "Optimasi caption, hashtag, dan nama file agar mudah dicari." },
];

export const ROADMAP_DATA: RoadmapDay[] = [
  // Phase 1: Days 1-3
  { day: 1, phase: "Setup", task: "Daftar TikTok Shop & Affiliate", note: "Pastikan KTP dan Rekening siap." },
  { day: 2, phase: "Setup", task: "Optimasi Profil (Bio, Foto)", note: "Gunakan nama yang jelas dan niche spesifik." },
  { day: 3, phase: "Setup", task: "Riset & Add 10 Produk Pertama", note: "Pilih produk rating 4.5+." },
  // Phase 2: Days 4-7
  { day: 4, phase: "Content Basic", task: "Belajar Basic CapCut", note: "Fokus potong video dan tambah teks." },
  { day: 5, phase: "Content Basic", task: "Buat 3 Script Video Pendek", note: "Gunakan rumus Hook - Story - Offer." },
  { day: 6, phase: "Content Basic", task: "Take Video & Voice Over", note: "Pastikan pencahayaan cukup." },
  { day: 7, phase: "Content Basic", task: "Upload Video Pertama", note: "Jam prime time: 12.00 atau 19.00." },
  // Phase 3: Days 8-14
  { day: 8, phase: "Konsistensi", task: "Evaluasi Video Pertama", note: "Cek retention rate." },
  { day: 9, phase: "Konsistensi", task: "Riset Kompetitor Niche", note: "ATM 5 video kompetitor." },
  { day: 10, phase: "Konsistensi", task: "Belajar SEO Tiktok", note: "Optimasi caption dengan keyword." },
  { day: 11, phase: "Konsistensi", task: "Upload 2 Video Sehari", note: "Pagi dan Malam." },
  { day: 12, phase: "Konsistensi", task: "Balas Komen dengan VT", note: "Meningkatkan engagement." },
  { day: 13, phase: "Konsistensi", task: "Cari Sample Gratis", note: "Hubungi seller via chat." },
  { day: 14, phase: "Konsistensi", task: "Review Mingguan", note: "Video mana yang views tertinggi?" },
  // Phase 4: Days 15-21
  { day: 15, phase: "Live Streaming", task: "Persiapan Alat Live", note: "Ringlight & Tripod." },
  { day: 16, phase: "Live Streaming", task: "Latihan Live 20 Menit", note: "Fokus menyapa audiens." },
  { day: 17, phase: "Live Streaming", task: "Live Terjadwal (Sesi 1)", note: "Konsisten di jam yang sama." },
  { day: 18, phase: "Live Streaming", task: "Belajar Etalase Live", note: "Pin produk saat bicara." },
  { day: 19, phase: "Live Streaming", task: "Kolaborasi / PK (Opsional)", note: "Menambah exposure." },
  { day: 20, phase: "Live Streaming", task: "Analisis Data Live", note: "Cek peak viewers." },
  { day: 21, phase: "Live Streaming", task: "Live Minimal 60 Menit", note: "Durasi mempengaruhi traffic." },
  // Phase 5: Days 22-30
  { day: 22, phase: "Scaling", task: "Iklan (Ads) Tipis-tipis", note: "Coba Promote Rp 15rb di video best perform." },
  { day: 23, phase: "Scaling", task: "Buat Series Konten", note: "Part 1, Part 2, dst." },
  { day: 24, phase: "Scaling", task: "Cross Platform Share", note: "Share ke IG Reels / YT Shorts." },
  { day: 25, phase: "Scaling", task: "Evaluasi Produk Winning", note: "Fokus jualan 1 produk terlaris." },
  { day: 26, phase: "Scaling", task: "Buat Video Stok (Batching)", note: "Agar tidak kehabisan stok konten." },
  { day: 27, phase: "Scaling", task: "Optimasi Hashtag Baru", note: "Cari hashtag yang sedang trending." },
  { day: 28, phase: "Scaling", task: "Cek Pelanggaran Akun", note: "Pastikan kesehatan akun aman." },
  { day: 29, phase: "Scaling", task: "Persiapan Bulan Depan", note: "Buat content calendar." },
  { day: 30, phase: "Scaling", task: "Rayakan Progres!", note: "Apapun hasilnya, konsistensi adalah kunci." },
];