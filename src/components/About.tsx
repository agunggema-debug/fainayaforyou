"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, ShieldCheck, Leaf } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description:
      "Setiap produk dibuat dengan penuh cinta dan ketelitian oleh pengrajin tangan terampil.",
  },
  {
    icon: Sparkles,
    title: "Desain Unik",
    description:
      "Setiap produk memiliki desain eksklusif yang tidak bisa ditemukan di tempat lain.",
  },
  {
    icon: ShieldCheck,
    title: "Kualitas Premium",
    description:
      "Menggunakan benang dan material berkualitas tinggi yang tahan lama dan nyaman.",
  },
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    description:
      "Proses produksi yang ramah lingkungan dengan bahan-bahan alami pilihan.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Image - replaced from Heart icon to actual product image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-rose/30">
              <div className="relative w-full h-full">
                <Image
                  src="/images/products/hero2.jpg"
                  alt="Proses pembuatan rajutan tangan"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-sage/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-rose/20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Tentang Kami
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown leading-tight mb-6">
              Cerita di Balik{" "}
              <span className="text-primary">Setiap Rajutan</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-6">
              Fainaya For You lahir dari kecintaan terhadap seni merajut. Kami
              percaya bahwa setiap produk rajutan memiliki kehangatan dan cerita
              tersendiri yang tidak bisa digantikan oleh mesin.
            </p>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              Dengan pengalaman bertahun-tahun, kami menghadirkan produk-produk
              berkualitas tinggi yang dibuat dengan teknik rajutan terbaik. Dari
              pemilihan benang hingga sentuhan akhir, setiap detail kami
              perhatikan dengan saksama.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/30 border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-dark-brown">100+</p>
                <p className="text-sm text-secondary">Pelanggan Puas</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-dark-brown mb-2">
                {value.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}