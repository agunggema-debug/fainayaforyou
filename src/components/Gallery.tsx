"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    size: "large",
    color: "from-primary/20 to-rose/30",
    image: "tas-tote.jpg",
    alt: "Tas Tote Rajutan",
  },
  {
    id: 2,
    size: "small",
    color: "from-sage/20 to-primary/20",
    image: "dompet-koin.jpg",
    alt: "Dompet Koin Rajutan",
  },
  {
    id: 3,
    size: "small",
    color: "from-rose/20 to-sage/20",
    image: "gantungan-kunci.jpg",
    alt: "Gantungan Kunci Rajutan",
  },
  {
    id: 4,
    size: "medium",
    color: "from-primary/15 to-rose/25",
    image: "tas-ransel.jpg",
    alt: "Tas Ransel Rajutan",
  },
  {
    id: 5,
    size: "medium",
    color: "from-sage/15 to-primary/15",
    image: "tas-clutch.jpg",
    alt: "Tas Clutch Rajutan",
  },
  {
    id: 6,
    size: "small",
    color: "from-rose/25 to-sage/15",
    image: "bros-bunga.jpg",
    alt: "Bros Bunga Rajutan",
  },
  {
    id: 7,
    size: "small",
    color: "from-primary/10 to-rose/20",
    image: "gelang.jpg",
    alt: "Gelang Rajutan",
  },
  {
    id: 8,
    size: "large",
    color: "from-sage/20 to-primary/15",
    image: "dompet-panjang.jpg",
    alt: "Dompet Panjang Rajutan",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Galeri
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown leading-tight mb-6">
            Inspirasi{" "}
            <span className="text-primary">Rajutan Terkini</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Lihat berbagai kreasi terbaru kami yang siap memberikan inspirasi
            untuk gaya Anda.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} ${
                item.size === "large"
                  ? "col-span-2 row-span-2"
                  : item.size === "medium"
                  ? "col-span-2 row-span-1"
                  : "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={`/images/gallery/${item.image}`}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  Lihat Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-secondary text-sm mb-4">
            Ikuti kami di Instagram untuk melihat lebih banyak koleksi
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @fainaya_for_you
          </a>
        </motion.div>
      </div>
    </section>
  );
}