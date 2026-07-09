"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream/50 to-background"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-rose/20" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-sage/10" />
      </div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4956a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-6">
                Handcrafted with Love
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-dark-brown leading-tight mb-6"
            >
              Kreasi Rajutan
              <br />
              <span className="text-primary">Tangan</span> Terbaik
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-secondary text-lg md:text-xl max-w-2xl lg:mx-0 mx-auto mb-10 leading-relaxed"
            >
              Temukan koleksi tas, dompet, dan aksesoris rajutan unik yang dibuat
              dengan penuh keahlian dan kreativitas. Setiap produk adalah karya seni
              yang lahir dari sentuhan tangan terampil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
            >
              <a
                href="#products"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
              >
                Lihat Koleksi
              </a>
              <a
                href="#about"
                className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300"
              >
                Tentang Kami
              </a>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-rose/30 blur-3xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/hero.jpg"
                  alt="Kreasi Rajutan Tangan"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-sage/30 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-rose/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-secondary/60 hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}