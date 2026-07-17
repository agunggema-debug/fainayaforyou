import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes, Quicksand } from "next/font/google";
import ChatBot from "@/components/ChatBot";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fainaya For You - Kreasi Rajutan Tangan",
  description:
    "Tas, dompet, dan aksesoris rajutan tangan unik yang dibuat dengan penuh keahlian dan kreativitas. Handcrafted with love by Fainaya For You.",
  keywords: [
    "rajutan tangan",
    "tas rajutan",
    "dompet rajutan",
    "aksesoris rajutan",
    "handmade",
    "crochet",
    "Fainaya",
  ],
  authors: [{ name: "Fainaya For You" }],
  icons: {
    icon: "/images/products/logo.png",
  },
  openGraph: {
    title: "Fainaya For You - Kreasi Rajutan Tangan",
    description:
      "Tas, dompet, dan aksesoris rajutan tangan unik yang dibuat dengan penuh keahlian dan kreativitas.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfairDisplay.variable} ${greatVibes.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollToTop />
        <ChatBot />
      </body>
    </html>
  );
}