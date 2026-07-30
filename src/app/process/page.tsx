'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { processSteps, differentiators } from '@/lib/data';
import { FadeIn } from '@/components/motion/fade-in';
import { SlideUp } from '@/components/motion/slide-up';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-container';

export default function ProcessPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4">Metodologia</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nosso{' '}
              <span className="gradient-text">Processo</span>
            </h1>
            <p className="text-lg text-[#8888A0] max-w-2xl mx-auto">
              Método transparente e colaborativo para criar soluções digitais de alto padrão.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto mb-24">
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#6366F1] via-[#A78BFA] to-transparent hidden sm:block" />
            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
                  className="relative flex items-start gap-6 pl-0 sm:pl-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.15 + 0.2 }}
                    className="hidden sm:flex absolute left-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A78BFA] items-center justify-center z-10"
                  >
                    <span className="text-sm font-bold text-white">{step.step}</span>
                  </motion.div>
                  <Card className="flex-1 bg-[#0A0A14] border-[#1E1E2E] hover:border-[#6366F1]/20 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="sm:hidden w-8 h-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A78BFA] flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-[#8888A0]">{step.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <FadeIn>
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">Diferenciais</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Por que nos escolher?
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {differentiators.map(item => (
            <StaggerItem key={item.title} className="h-full">
              <Card className="h-full bg-[#0A0A14] border-[#1E1E2E] hover:border-[#6366F1]/30 transition-all group">
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-base font-semibold text-white mb-2 group-hover:text-[#6366F1] transition-colors"
                >
                  {item.title}
                </motion.h3>
                <p className="text-sm text-[#8888A0]">{item.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
