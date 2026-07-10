export interface ChatItem {
  id: string;
  type: "bot" | "user";
  message: string;
  timestamp: Date;
}

export interface QAPair {
  keywords: string[];
  response: string;
}

export const chatResponses: QAPair[] = [
  {
    keywords: ["halo", "hai", "hi", "hay", "pagi", "siang", "sore", "malam"],
    response:
    "Halo, cantik! 🌸 Selamat datang di Fainaya For You! Ada yang bisa aku bantu hari ini? Kami punya koleksi tas, dompet, dan aksesoris rajutan tangan yang cantik-cantik lho~",
  },
  {
    keywords: ["tas", "dompet", "produk", "jual", "beli", "cari"],
    response:
    "Tentu! Kami memiliki berbagai produk rajutan tangan yang elegan, seperti tas, dompet, clutch, dan aksesoris lainnya. Semua dibuat dengan bahan berkualitas dan sentuhan cinta. 🌷 Yuk lihat koleksi lengkapnya di bagian Produk!",
  },
  {
    keywords: ["harga", "mahal", "murah", "berapa", "cost", "price", "biaya"],
    response:
    "Untuk informasi harga, setiap produk memiliki kisaran yang berbeda tergantung ukuran, bahan, dan tingkat kerumitan. Kisaran harga mulai dari Rp50.000 - Rp350.000. Untuk detail lengkapnya, bisa langsung cek di bagian Produk atau hubungi kami via WhatsApp ya! 💕",
  },
  {
    keywords: ["order", "pesan", "beli", "cara order", "cara pesan", "pemesanan"],
    response:
    "Caranya mudah sekali! 💫\n1. Pilih produk yang kamu suka dari galeri atau bagian Produk\n2. Klik tombol 'Pesan Sekarang' atau hubungi kami via WhatsApp\n3. Tentukan warna, ukuran, atau customisasi yang diinginkan\n4. Kami akan konfirmasi dan proses pesananmu dengan cinta ✨\n\nAda yang ingin ditanyakan seputar pemesanan?",
  },
  {
    keywords: ["pembayaran", "bayar", "transfer", "payment", "cod", "bca", "mandiri", "gopay", "ovo"],
    response:
    "Untuk pembayaran, kami menerima beberapa metode:\n💳 Transfer Bank (BCA, Mandiri, BRI)\n📱 E-Wallet (GoPay, OVO, Dana, ShopeePay)\n📦 COD (untuk area tertentu)\n\nPembayaran bisa dp 50% di awal dan 50% setelah jadi ya~ 😊",
  },
  {
    keywords: ["pengiriman", "kirim", "ongkir", "ekspedisi", "sampai", "jne", "jnt", "sicepat"],
    response:
    "Kami bekerja sama dengan beberapa jasa pengiriman terpercaya:\n📦 JNE, J&T, SiCepat, dan AnterAja\n⏱ Proses produksi 3-7 hari kerja\n🚚 Estimasi pengiriman 2-5 hari kerja\n\nGratis ongkir untuk area tertentu dengan minimal belanja! 🎉",
  },
  {
    keywords: ["custom", "kustom", "design", "desain", "model", "warna", "ukuran"],
    response:
    "Bisa banget! 🎨 Kami menerima pesanan custom sesuai keinginanmu. Kamu bisa pilih:\n🌈 Warna favoritmu\n📐 Ukuran yang diinginkan\n✨ Model atau desain spesial\n💎 Tambahan aksesoris (rantai, manik-manik, dll)\n\nYuk chat WhatsApp kami untuk diskusi lebih lanjut! 💬",
  },
  {
    keywords: ["bahan", "material", "benang", "kualitas", "rajut"],
    response:
    "Kami menggunakan bahan-bahan berkualitas terbaik:\n🧶 Benang katun premium (lembut dan kuat)\n🧶 Benang polyester berkualitas\n🧶 Bahan pelapis interior (untuk tas)\n🧶 Ranting, ritsleting, dan aksesoris logam anti karat\n\nSemua bahan dipilih dengan teliti agar hasilnya cantik dan tahan lama! 🌸",
  },
  {
    keywords: ["testimoni", "review", "ulasan", "kata", "customer", "pelanggan"],
    response:
    "Kepuasan pelanggan adalah prioritas kami! 💖 Kamu bisa lihat testimoni dan review dari customer kami yang puas di bagian Testimoni. Banyak yang suka karena kualitasnya premium, cantik, dan pelayanannya ramah. Yuk dicek! ✨",
  },
  {
    keywords: ["kontak", "contact", "wa", "whatsapp", "instagram", "ig", "email", "telepon"],
    response:
    "Kami bisa dihubungi melalui:\n📱 WhatsApp: 0812-3456-7890\n📸 Instagram: @fainayaforyou\n✉️ Email: fainayaforyou@gmail.com\n\nJangan ragu untuk reach out, ya! Kami siap membantu dengan senang hati 🥰",
  },
  {
    keywords: ["terima kasih", "makasih", "thanks", "thank", "trims"],
    response:
    "Sama-sama, cantik! 🥰 Seneng banget bisa bantu. Jangan lupa mampir lagi ya ke Fainaya For You~ Setiap hari ada produk baru yang cantik-cantik! 🌸✨",
  },
  {
    keywords: ["lama", "berapa lama", "proses", "waktu", "estimasi", "jadi", "selesai"],
    response:
    "Estimasi pengerjaan:\n⏱ Tas kecil / dompet: 2-4 hari\n⏱ Tas sedang: 4-7 hari\n⏱ Tas besar / custom: 7-14 hari\n\nYa, kita kerjakan dengan penuh cinta dan ketelitian, jadi butuh waktu yang pas biar hasilnya sempurna! 💕",
  },
  {
    keywords: ["size", "ukuran", "besar", "kecil", "panjang", "lebar", "dimensi"],
    response:
    "Ukuran produk bervariasi, tergantung model yang kamu pilih. Informasi dimensi lengkap ada di tiap detail produk ya. Tapi kalau mau request ukuran custom, kita bisa menyesuaikan! 📏✨",
  },
  {
    keywords: ["promo", "diskon", "sale", "murah", "obral", "gratis", "hadiah"],
    response:
    "Asyik! 🎉 Kami sering ada promo spesial:\n🎀 Diskon untuk pembelian pertama\n🎀 Gratis ongkir area tertentu\n🎀 Bonus aksesoris untuk pembelian minimal\n🎀 Promo pre-order\n\nPantengin terus Instagram kita biar nggak ketinggalan info promo terbaru! 📢💕",
  },
];

export const welcomeMessage: string =
  "Halo, cantik! 🌸 Selamat datang di Fainaya For You! Aku asisten virtual Fainaya, siap bantu kamu yang ingin tahu seputar produk rajutan tangan kita. Kamu bisa tanya-tanya apa aja, ya! 💕";

export const fallbackResponse: string =
  "Maaf, aku belum paham pertanyaannya, nih 😅. Tapi tenang, kamu bisa cek:\n\n🛍 Bagian Produk untuk lihat koleksi\n📸 Galeri untuk lihat hasil karya\n💬 WhatsApp kami untuk diskusi lebih detail\n\nAtau coba tanya dengan kata kunci lain, ya! 🌷";