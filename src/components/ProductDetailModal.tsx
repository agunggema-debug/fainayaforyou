"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import type { Product } from "@/data/products";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dark-brown/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-dark-brown hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Left: Image */}
              <div className="relative aspect-4/5 md:aspect-auto md:min-h-100 bg-cream/30">
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/20 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">{product.category}</span>
                </div>
              </div>

              {/* Right: Details */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark-brown mb-3">{product.name}</h3>

                  <p className="text-secondary text-sm leading-relaxed mb-6">{product.description}</p>

                  {/* Colors */}
                  <div className="mb-6">
                    <p className="text-xs font-medium text-dark-brown uppercase tracking-wider mb-3">Warna Tersedia</p>
                    <div className="flex gap-2.5">
                      {product.colors.map((color, i) => (
                        <div key={i} className="group relative">
                          <div className="w-8 h-8 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform duration-200" style={{ backgroundColor: color }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <a
                  href={product.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 w-full"
                >
                  Pesan Sekarang
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
