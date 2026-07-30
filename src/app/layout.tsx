import type { Metadata } from "next";
import { Inter, Space_Grotesk, Cinzel } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
// Bold, rune-carved look — used for the Nordic/Viking-themed marquee (Valhallas.Dev / Mjolnir branding)
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", weight: ["600", "700", "900"] });

export const metadata: Metadata = {
  title: "Premium Developer Portfolio",
  description: "Desenvolvedor Web & Criador de Experiências Digitais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${cinzel.variable} antialiased font-sans bg-void text-white selection:bg-premium-purple selection:text-white`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
