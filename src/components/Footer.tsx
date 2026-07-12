"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Camera, MessageCircle, Eye } from "lucide-react";
import { useVisitorCounter } from "@/utils/visitorCounter";

const footerLinks = {
  perusahaan: {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#about" },
      { label: "Produk", href: "#products" },
      { label: "Galeri", href: "#gallery" },
      { label: "Testimoni", href: "#testimonials" },
    ],
  },
  bantuan: {
    title: "Bantuan",
    links: [
      { label: "Cara Memesan", href: "#" },
      { label: "Pengiriman", href: "#" },
      { label: "Pengembalian", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  sosial: {
    title: "Sosial Media",
    links: [
      { label: "Instagram", href: "https://instagram.com", icon: Camera },
      { label: "Facebook", href: "https://facebook.com", icon: Globe },
      { label: "TikTok", href: "https://tiktok.com", icon: MessageCircle },
    ],
  },
};

export default function Footer() {
  const { totalVisitors, onlineVisitors, loading } = useVisitorCounter();

  return (
    <footer className="bg-dark-brown text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              className="font-serif text-2xl font-bold text-white mb-4 block"
            >
              Fainaya{' '}
              <span className="text-primary">For You</span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Menghadirkan produk rajutan tangan berkualitas tinggi dengan
              desain eksklusif dan penuh cinta.
            </p>
            <div className="flex gap-3">
              {footerLinks.sosial.links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                    aria-label={link.label}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Links */}
          {Object.values(footerLinks).map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
            >
              <h3 className="font-serif text-white font-bold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      {"icon" in link && link.icon && (
                        <link.icon className="w-3.5 h-3.5" />
                      )}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-cream/60">
              &copy; {new Date().getFullYear()} Fainaya For You. All rights
              reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              {!loading && (
                <>
                  <p className="text-sm text-cream/60 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>
                      <strong className="text-cream/80">{totalVisitors.toLocaleString()}</strong>{" "}
                      total pengunjung
                    </span>
                  </p>
                  <p className="text-sm text-cream/60 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                    <span>
                      <strong className="text-cream/80">{onlineVisitors}</strong>{" "}
                      online sekarang
                    </span>
                  </p>
                </>
              )}
              <p className="text-sm text-cream/60 flex items-center gap-1">
                Made with <Heart className="w-3.5 h-3.5 text-rose" /> in Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}