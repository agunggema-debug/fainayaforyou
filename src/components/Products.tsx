"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { products, categories } from "@/data/products";
import type { Product } from "@/data/products";
import ProductDetailModal from "./ProductDetailModal";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 md:py-32 bg-background">
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
            Koleksi Kami
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown leading-tight mb-6">
            Produk <span className="text-primary">Unggulan</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Temukan berbagai produk rajutan tangan berkualitas tinggi yang
            dibuat dengan bahan terbaik dan desain eksklusif.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-cream/50 text-secondary hover:bg-cream hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream/50 mb-4">
                  {/* Product image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Fallback gradient if image fails */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-rose/20 opacity-0 [&+img]:opacity-100" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                      {product.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/40 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-dark-brown px-6 py-3 rounded-full text-sm font-medium hover:bg-primary hover:text-white"
                    >
                      Lihat Detail
                    </button>
                  </div>

                  {/* Color dots */}
                  <div className="absolute bottom-4 left-4 flex gap-1.5">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full border border-white/50"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-dark-brown mb-1">
                  {product.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-2">
                  {product.price}
                </p>
                <p className="text-secondary text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors group"
          >
            Pesan Sekarang
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}