'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/lib/data';
import {
  Check, ArrowUpRight, Search, Layers,
  Code2, Palette, Globe, ShoppingCart, Layout, Cpu, Bot, Database,
  BarChart3, Shield, Zap, Smartphone, LineChart, Users, Factory,
  Building2, Stethoscope, UtensilsCrossed, Scale,
} from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { SlideUp } from '@/components/motion/slide-up';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-container';
import { ScaleHover } from '@/components/motion/scale-in';

const iconMap: Record<string, React.ElementType> = {
  Code2, Palette, Globe, ShoppingCart, Layout, Cpu, Bot, Database,
  BarChart3, Shield, Zap, Smartphone, LineChart, Users, Factory,
  Building2, Stethoscope, UtensilsCrossed, Scale,
};

export default function ServicesPage() {
  const [search, setSearch] = useState('');
  const filtered = services.filter(s => s.title.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4">Serviços</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nossas{' '}
              <span className="gradient-text">Soluções</span>
            </h1>
            <p className="text-lg text-[#8888A0] max-w-2xl mx-auto">
              Do site institucional ao sistema com inteligência artificial — cada projeto é único e feito sob medida.
            </p>
          </div>
        </FadeIn>

        <SlideUp>
          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8888A0]" />
            <input
              type="text"
              placeholder="Buscar serviços..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-[#1E1E2E] bg-[#0A0A14] text-sm text-white placeholder:text-[#8888A0] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all"
            />
          </div>
        </SlideUp>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {filtered.map((service, index) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full"
              >
                <ScaleHover className="h-full">
                  <Card className="group h-full flex flex-col p-6 bg-[#0A0A14] border-[#1E1E2E] hover:border-[#6366F1]/30 transition-all duration-500">
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#A78BFA]/10 flex items-center justify-center mb-4"
                    >
                      <Icon className="w-6 h-6 text-[#6366F1]" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-[#8888A0] mb-4">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.benefits.map(b => (
                        <div key={b} className="flex items-center gap-2 text-xs text-[#8888A0]">
                          <Check className="w-3 h-3 text-[#6366F1]" />
                          {b}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#1E1E2E]">
                      <div>
                        <div className="text-xs text-[#8888A0]">Prazo: {service.timeframe}</div>
                        <div className="text-sm font-semibold text-white">{service.price}</div>
                      </div>
                      <Link href={`/contact?service=${service.slug}`}>
                        <Button variant="ghost" size="sm">
                          <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </ScaleHover>
              </motion.div>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[#8888A0]">Nenhum serviço encontrado para "{search}"</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
