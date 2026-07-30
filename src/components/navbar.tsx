'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { buildWhatsappLink } from '@/lib/whatsapp';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/process', label: 'Processo' },
  { href: '/pricing', label: 'Planos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contato' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[#050508]/80 backdrop-blur-xl border-b border-[#1E1E2E]/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size={36} className="group-hover:shadow-[#6366F1]/40 transition-all duration-300" />
            <div className="hidden sm:block">
              <span className="text-base font-bold text-white">Valhallas</span>
              <span className="text-base font-bold text-[#6366F1]"> TechForge</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-white bg-[#6366F1]/10'
                      : 'text-[#8888A0] hover:text-white hover:bg-[#0A0A14]'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={buildWhatsappLink('Olá! Vim pelo site e gostaria de saber mais sobre os serviços da Valhallas TechForge.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-lg text-sm font-medium text-[#22C55E] border border-[#22C55E]/20 bg-[#22C55E]/5 hover:bg-[#22C55E]/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <Link href="/contact">
              <Button variant="premium" size="sm" className="hidden sm:inline-flex">
                Solicitar Orçamento
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-[#8888A0] hover:text-white hover:bg-[#0A0A14] transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#1E1E2E] bg-[#050508]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-sm font-medium transition-all',
                    isActive
                      ? 'text-white bg-[#6366F1]/10'
                      : 'text-[#8888A0] hover:text-white hover:bg-[#0A0A14]'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 space-y-3">
              <a
                href={buildWhatsappLink('Olá! Vim pelo site e gostaria de saber mais sobre os serviços da Valhallas TechForge.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-medium text-[#22C55E] border border-[#22C55E]/20 justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full" size="lg">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
