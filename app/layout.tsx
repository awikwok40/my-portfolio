import type { Metadata } from "next";
// Kita pakai font "Plus Jakarta Sans" biar kesan tech & modern-nya dapet banget
import { Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Ubah judul tab browser disini
  title: "Mohamad Irfan Maulana | Portfolio",
  description: "Information Systems Student at Gunadarma University | Web Developer & Data Science Enthusiast",
  // Opsi tambahan: Mengatur ikon (favicon) jika kamu punya file .ico nanti
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' di sini bikin anchor link (klik navbar) jadi halus
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>{children}</body>
    </html>
  );
}