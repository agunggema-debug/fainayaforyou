export interface Product {
  id: number;
  name: string;
  category: "Tas" | "Dompet" | "Aksesoris";
  price: string;
  description: string;
  image: string;
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Tas Tote Rajut Elegan",
    category: "Tas",
    price: "Rp 185.000",
    description:
      "Tas tote rajutan tangan dengan desain elegan, cocok untuk daily use. Dibuat dengan benang premium pilihan.",
    image: "/images/products/tas-tote.jpg",
    colors: ["#c4956a", "#9caf87", "#2d2a24"],
  },
  {
    id: 2,
    name: "Tas Selempang Mini",
    category: "Tas",
    price: "Rp 125.000",
    description:
      "Tas selempang mini yang lucu dan praktis. Cocok untuk acara santai maupun formal.",
    image: "/images/products/tas-selempang.jpg",
    colors: ["#e8c4b8", "#d4a373", "#6b5b4f"],
  },
  {
    id: 3,
    name: "Tas Ransel Rajut",
    category: "Tas",
    price: "Rp 225.000",
    description:
      "Tas ransel rajut yang unik dan stylish. Dengan tali panjang yang nyaman dipakai.",
    image: "/images/products/tas-ransel.jpg",
    colors: ["#9caf87", "#c4956a", "#3d352e"],
  },
  {
    id: 4,
    name: "Dompet Koin Rajut",
    category: "Dompet",
    price: "Rp 55.000",
    description:
      "Dompet koin kecil yang menggemaskan dengan motif rajutan yang rapi. Praktis untuk menyimpan koin dan kartu.",
    image: "/images/products/dompet-koin.jpg",
    colors: ["#d4a373", "#e8c4b8", "#9caf87"],
  },
  {
    id: 5,
    name: "Dompet Panjang Rajut",
    category: "Dompet",
    price: "Rp 95.000",
    description:
      "Dompet panjang dengan banyak kompartemen. Dibuat dengan rajutan yang kuat dan tahan lama.",
    image: "/images/products/dompet-panjang.jpg",
    colors: ["#6b5b4f", "#c4956a", "#2d2a24"],
  },
  {
    id: 6,
    name: "Card Holder Rajut",
    category: "Dompet",
    price: "Rp 45.000",
    description:
      "Tempat kartu praktis dengan desain minimalis. Cocok untuk menyimpan KTP, kartu kredit, dan kartu nama.",
    image: "/images/products/card-holder.jpg",
    colors: ["#c4956a", "#e8c4b8", "#3d352e"],
  },
  {
    id: 7,
    name: "Gantungan Kunci Rajut",
    category: "Aksesoris",
    price: "Rp 25.000",
    description:
      "Gantungan kunci lucu berbentuk bunga dan hewan. Hadiah sempurna untuk orang tersayang.",
    image: "/images/products/gantungan-kunci.jpg",
    colors: ["#e8c4b8", "#d4a373", "#9caf87"],
  },
  {
    id: 8,
    name: "Bros Rajut Bunga",
    category: "Aksesoris",
    price: "Rp 35.000",
    description:
      "Bros cantik berbentuk bunga mawar. Dapat dipasang di baju, tas, atau hijab.",
    image: "/images/products/bros-bunga.jpg",
    colors: ["#e8c4b8", "#c4956a", "#d4a373"],
  },
  {
    id: 9,
    name: "Ikat Rambut Rajut",
    category: "Aksesoris",
    price: "Rp 20.000",
    description:
      "Ikat rambut rajut yang unik dan tidak melukai rambut. Tersedia berbagai warna cantik.",
    image: "/images/products/ikat-rambut.jpg",
    colors: ["#9caf87", "#c4956a", "#e8c4b8"],
  },
  {
    id: 10,
    name: "Tas Clutch Malam",
    category: "Tas",
    price: "Rp 165.000",
    description:
      "Tas clutch elegan untuk acara spesial. Dengan sentuhan manik-manik yang mewah.",
    image: "/images/products/tas-clutch.jpg",
    colors: ["#2d2a24", "#c4956a", "#3d352e"],
  },
  {
    id: 11,
    name: "Dompet HP Rajut",
    category: "Dompet",
    price: "Rp 65.000",
    description:
      "Dompet khusus handphone dengan tali. Praktis saat bepergian tanpa tas besar.",
    image: "/images/products/dompet-hp.jpg",
    colors: ["#d4a373", "#9caf87", "#6b5b4f"],
  },
  {
    id: 12,
    name: "Gelang Rajut Persahabatan",
    category: "Aksesoris",
    price: "Rp 30.000",
    description:
      "Gelang rajut persahabatan yang manis. Tersedia paket berpasangan untuk sahabat.",
    image: "/images/products/gelang.jpg",
    colors: ["#e8c4b8", "#9caf87", "#c4956a"],
  },
];

export const categories = ["Semua", "Tas", "Dompet", "Aksesoris"] as const;

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