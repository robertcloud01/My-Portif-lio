import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Valhallas TechForge — Desenvolvimento Premium de Sites e Sistemas',
  description:
    'Transformamos seu negócio com sites premium, sistemas personalizados, automações com IA e soluções digitais de alto padrão.',
  keywords: ['desenvolvimento web', 'sites premium', 'sistemas web', 'IA', 'automação', 'landing pages', 'e-commerce', 'Valhallas'],
  openGraph: {
    title: 'Valhallas TechForge — Tecnologia Premium para seu Negócio',
    description:
      'Sites, sistemas e soluções com IA para empresas que buscam o melhor.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Valhallas TechForge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valhallas TechForge',
    description: 'Tecnologia premium para transformar seu negócio.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050508] text-[#F0F0F5]">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
