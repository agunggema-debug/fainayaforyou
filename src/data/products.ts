export interface Product {
  id: number;
  name: string;
  category: "Tas" | "Dompet" | "Aksesoris" | "Paket";
  price: string;
  description: string;
  image: string;
  colors: string[];
  waLink: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Tas Tote Rajut Elegan",
    category: "Tas",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Tas tote rajutan tangan dengan desain elegan, cocok untuk daily use. Dibuat dengan benang premium pilihan.",
    image: "/images/products/tas-tote.jpg",
    colors: ["#c4956a", "#9caf87", "#2d2a24"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Tas%20Tote%20Rajut%20Elegan",
  },
  {
    id: 2,
    name: "Tas Selempang Mini",
    category: "Tas",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Tas selempang mini yang lucu dan praktis. Cocok untuk acara santai maupun formal.",
    image: "/images/products/tas-selempang.jpg",
    colors: ["#26075c", "#d4a373", "#6b5b4f"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Tas%20Selempang%20Mini",
  },
  {
    id: 3,
    name: "Topi Sun Visor Rajutan",
    category: "Aksesoris",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Topi sun visor rajutan dengan warna cream dan aksen hitam di pinggirnya. Cocok untuk melindungi wajah dari sinar matahari dengan gaya yang tetap modis.",
    image: "/images/products/topi-sun-visor.jpg",
    colors: ["#f5e6cc", "#2d2a24"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Topi%20Sun%20Visor%20Rajutan",
  },
  {
    id: 4,
    name: "Dompet Koin Rajut",
    category: "Dompet",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Dompet koin kecil yang menggemaskan dengan motif rajutan yang rapi. Praktis untuk menyimpan koin dan kartu.",
    image: "/images/products/dompet-koin.jpg",
    colors: ["#d4a373", "#e8c4b8", "#9caf87"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Dompet%20Koin%20Rajut",
  },
  {
    id: 5,
    name: "Dompet Panjang Rajut",
    category: "Dompet",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Dompet panjang dengan banyak kompartemen. Dibuat dengan rajutan yang kuat dan tahan lama.",
    image: "/images/products/dompet-panjang.jpg",
    colors: ["#6b5b4f", "#c4956a", "#2d2a24"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Dompet%20Panjang%20Rajut",
  },
  {
    id: 6,
    name: "Card Holder Rajut",
    category: "Dompet",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Tempat kartu praktis dengan desain minimalis. Cocok untuk menyimpan KTP, kartu kredit, dan kartu nama.",
    image: "/images/products/card-holder.jpg",
    colors: ["#c4956a", "#e8c4b8", "#3d352e"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Card%20Holder%20Rajut",
  },
  {
    id: 7,
    name: "Gantungan Kunci Rajut",
    category: "Aksesoris",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Gantungan kunci lucu berbentuk bunga dan hewan. Hadiah sempurna untuk orang tersayang.",
    image: "/images/products/gantungan-kunci.jpg",
    colors: ["#e8c4b8", "#d4a373", "#9caf87"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Gantungan%20Kunci%20Rajut",
  },
  {
    id: 8,
    name: "Bros Rajut Bunga",
    category: "Aksesoris",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Bros cantik berbentuk bunga mawar. Dapat dipasang di baju, tas, atau hijab.",
    image: "/images/products/bros-bunga.jpg",
    colors: ["#e8c4b8", "#c4956a", "#d4a373"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Bros%20Rajut%20Bunga",
  },
  {
    id: 9,
    name: "Ikat Rambut Rajut",
    category: "Aksesoris",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Ikat rambut rajut yang unik dan tidak melukai rambut. Tersedia berbagai warna cantik.",
    image: "/images/products/ikat-rambut.jpg",
    colors: ["#9caf87", "#c4956a", "#e8c4b8"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Ikat%20Rambut%20Rajut",
  },
  {
    id: 10,
    name: "Tas Clutch Malam",
    category: "Tas",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Tas clutch elegan untuk acara spesial. Dengan sentuhan manik-manik yang mewah.",
    image: "/images/products/tas-clutch.jpg",
    colors: ["#2d2a24", "#c4956a", "#3d352e"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Tas%20Clutch%20Malam",
  },
  {
    id: 11,
    name: "Dompet HP Rajut",
    category: "Dompet",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Dompet khusus handphone dengan tali. Praktis saat bepergian tanpa tas besar.",
    image: "/images/products/dompet-hp.jpg",
    colors: ["#d4a373", "#9caf87", "#6b5b4f"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Dompet%20HP%20Rajut",
  },
  {
    id: 12,
    name: "Gelang Rajut Persahabatan",
    category: "Aksesoris",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Gelang rajut persahabatan yang manis. Tersedia paket berpasangan untuk sahabat.",
    image: "/images/products/gelang.jpg",
    colors: ["#e8c4b8", "#9caf87", "#c4956a"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Gelang%20Rajut%20Persahabatan",
  },
  {
    id: 13,
    name: "Paket-1",
    category: "Paket",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Paket hemat berisi sling bag, dompet koin, dan gantungan kunci butterfly. Cocok untuk daily look yang simpel dan elegan.",
    image: "/images/products/Paket-1.jpg",
    colors: ["#2d2a24", "#f5e6cc"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Paket-1",
  },
  {
    id: 14,
    name: "Paket-2",
    category: "Paket",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Paket spesial berisi tote bag, dompet koin, gantungan kunci, dan kartu ucapan. Hadiah sempurna untuk orang tersayang.",
    image: "/images/products/paket-2.jpg",
    colors: ["#f5e6cc", "#5c4033"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Paket-2",
  },
  {
    id: 15,
    name: "Paket-3",
    category: "Paket",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Paket lengkap berisi tote bag, dompet koin, dan gantungan kunci dengan warna serasi. Praktis dan stylish!",
    image: "/images/products/paket-3.jpg",
    colors: ["#f5e6cc", "#5c4033"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Paket-3",
  },
  {
    id: 16,
    name: "Paket-4",
    category: "Paket",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Paket eksklusif berisi sling bag coklat muda, dompet koin coklat muda, gantungan kunci bunga tulip Mulberry Wood, dan gantungan kunci gembul warna bunga matahari & hijau.",
    image: "/images/products/paket-4.jpg",
    colors: ["#c4956a", "#5c4033", "#ffd700", "#4a7c59"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Paket-4",
  },
  {
    id: 17,
    name: "Paket Aksesoris",
    category: "Paket",
    price: "💬 Pesan via Call/WhatsApp",
    description:
      "Paket aksesoris lucu berisi boneka hijab kuning dengan baju rok hijau, dompet koin biru, dan gantungan kunci kepala kucing yang menggemaskan.",
    image: "/images/products/paket-aksesoris.jpg",
    colors: ["#ffd700", "#4a7c59", "#4a7fb5"],
    waLink: "https://wa.me/6283124090800?text=Halo%20Fainaya%20For%20You%2C%20saya%20tertarik%20dengan%20produk%20Paket%20Aksesoris",
  },
];

export const categories = ["Semua", "Tas", "Dompet", "Aksesoris", "Paket"] as const;

export const testimonials = [
  {
    id: 1,
    name: "Sarah Amalia",
    role: "Pelanggan Setia",
    content:
      "Tas rajut dari Fainaya For You benar-benar berkualitas! Jahitannya rapi dan motifnya cantik. Sudah jadi favorit saya.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dian Permata",
    role: "Pelanggan",
    content:
      "Dompet koinnya lucu banget! Detail rajutannya halus dan warnanya sesuai pesanan. Pengiriman juga cepat.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rina Wijaya",
    role: "Pelanggan Setia",
    content:
      "Sudah 3 kali order dan selalu puas. Kualitas konsisten dan pelayanan ramah. Recomended banget!",
    rating: 5,
  },
  {
    id: 4,
    name: "Maya Sari",
    role: "Pelanggan",
    content:
      "Bros bunganya cantik sekali! Detailnya rapi dan warnanya persis seperti di foto. Makasih Fainaya!",
    rating: 4,
  },
  {
    id: 5,
    name: "Fitri Handayani",
    role: "Pelanggan Setia",
    content:
      "Tas tote rajutnya kuat banget, udah dipakai hampir setiap hari dan masih bagus. Worth it banget!",
    rating: 5,
  },
];