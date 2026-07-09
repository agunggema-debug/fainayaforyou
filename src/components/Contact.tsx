"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "+62 831-2409-0800",
    href: "https://wa.me/6283124090800",
  },
  {
    icon: Mail,
    label: "Email",
    value: "fainaya.service.art@gmail.com",
    href: "mailto:fainaya.service.art@gmail.com",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Jakarta, Indonesia",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">Kontak</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown leading-tight mb-6">
            Mari <span className="text-primary">Terhubung</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">Punya pertanyaan atau ingin memesan produk? Jangan ragu untuk menghubungi kami.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-brown mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-brown mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Masukkan email Anda"
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-brown mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subjek pesan"
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-brown mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Kirim Pesan
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            {/* Info Cards */}
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 hover:bg-white transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary mb-1">{info.label}</p>
                  <p className="font-medium text-dark-brown group-hover:text-primary transition-colors">{info.value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-rose/20 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="font-serif font-bold text-dark-brown text-lg">Lebih Cepat via WhatsApp</h3>
              </div>
              <p className="text-secondary text-sm mb-4">Dapatkan respon lebih cepat dengan menghubungi kami langsung melalui WhatsApp.</p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
