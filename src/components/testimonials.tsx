'use client';

import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { FadeIn } from '@/components/motion/fade-in';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-container';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 px-4 py-2 bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20 font-semibold">
              Depoimentos
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Quem Usa, <span className="gradient-text">Recomenda</span>
            </h2>
            <p className="text-lg text-[#8888A0] max-w-2xl mx-auto leading-relaxed">
              Resultados reais de negócios que confiaram na Valhallas TechForge.
            </p>
          </div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t) => (
            <StaggerItem key={t.author} className="h-full">
              <Card className="h-full flex flex-col">
                <div className="relative z-10 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-[#6366F1]/40 mb-4" />
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-[#F0F0F5] mb-6 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="pt-4 border-t border-[#1E1E2E]">
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-[#8888A0]">{t.role}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
