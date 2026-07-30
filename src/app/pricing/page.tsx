'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { plans } from '@/lib/data';
import { discountPercent } from '@/lib/utils';
import { Check, ChevronRight, ShieldCheck, Clock3, Headset } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { SlideUp } from '@/components/motion/slide-up';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-container';
import { ScaleHover } from '@/components/motion/scale-in';

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn><div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Investimento</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Planos <span className="gradient-text">Transparentes</span></h1>
          <p className="text-lg text-[#8888A0] max-w-2xl mx-auto">Escolha o plano ideal para seu projeto. Precos justos sem surpresas.</p>
        </div></FadeIn>
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => {
            const discount = discountPercent(plan.price, plan.originalPrice);
            return (
            <StaggerItem key={plan.name} className="h-full">
              <ScaleHover className="h-full"><Card className={"relative h-full flex flex-col p-8 bg-[#0A0A14] border-[#1E1E2E] hover:border-[#6366F1]/30 transition-all " + (plan.popular ? "ring-2 ring-[#6366F1]" : "")}>
                {plan.popular && <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge variant="default" className="px-4 py-1">Mais Popular</Badge></motion.div>}
                {discount && <div className="absolute top-4 right-4"><Badge variant="accent" className="text-[11px] font-bold">-{discount}%</Badge></div>}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-[#8888A0] mb-4">{plan.description}</p>
                  {plan.originalPrice && (
                    <div className="text-sm text-[#8888A0] line-through decoration-red-500/60 mb-0.5">{plan.originalPrice}</div>
                  )}
                  <div className="text-3xl font-bold text-white">{plan.price}<span className="text-sm text-[#8888A0] font-normal">/{plan.timeframe}</span></div>
                </div>
                <div className="space-y-3 mb-8">{plan.features.map(f => (<div key={f} className="flex items-center gap-2 text-sm text-[#8888A0]"><Check className="w-4 h-4 text-[#22C55E] shrink-0" />{f}</div>))}</div>
                <Link href={`/contact?plan=${encodeURIComponent(plan.name)}`} className="mt-auto"><Button className={"w-full " + (plan.popular ? "bg-[#6366F1] hover:bg-[#4F46E5]" : "")} variant={plan.popular ? "default" : "outline"}>Contratar <ChevronRight className="w-4 h-4 ml-1" /></Button></Link>
              </Card></ScaleHover>
            </StaggerItem>
            );
          })}
        </StaggerContainer>

        <SlideUp delay={0.2}>
          <div className="max-w-5xl mx-auto mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, title: 'Garantia de satisfação', desc: 'Ajustes incluídos até você aprovar o resultado final.' },
              { icon: Clock3, title: 'Prazo no contrato', desc: 'Cronograma combinado por escrito antes de começar.' },
              { icon: Headset, title: 'Suporte pós-entrega', desc: 'Acompanhamento direto pelo WhatsApp após o lançamento.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-[#1E1E2E] bg-[#0A0A14]/50">
                <item.icon className="w-5 h-5 text-[#6366F1] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-[#8888A0]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SlideUp>
      </div>
    </div>
  );
}
