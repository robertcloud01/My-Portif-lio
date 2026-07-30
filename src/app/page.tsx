'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services, portfolioItems, processSteps, differentiators, plans, faqItems } from '@/lib/data';
import {
  ArrowUpRight, Check, BadgeCheck, Layers, Sparkles,
  Code2, Palette, Globe, ShoppingCart, Layout, Cpu, Bot, Database,
  BarChart3, Shield, Zap, Smartphone, LineChart, Users, Factory,
  Building2, Stethoscope, UtensilsCrossed, Scale, ChevronDown,
} from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { SlideUp } from '@/components/motion/slide-up';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-container';
import { ScaleIn, ScaleHover } from '@/components/motion/scale-in';
import { Testimonials } from '@/components/testimonials';

const iconMap: Record<string, React.ElementType> = { Code2, Palette, Globe, ShoppingCart, Layout, Cpu, Bot, Database,
  BarChart3, Shield, Zap, Smartphone, LineChart, Users, Factory,
  Building2, Stethoscope, UtensilsCrossed, Scale };

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden">
        {/* Simple background */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/4 right-0 md:right-1/4 w-[800px] h-[800px] bg-[#6366F1]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 lg:mt-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* TEXT COLUMN */}
            <div className="text-center lg:text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="default" className="mb-6 bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20 px-4 py-2 text-sm font-semibold tracking-wide inline-flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4" />
                  Desenvolvedor & Designer Premium
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight"
              >
                Sua Ideia, Nosso <br className="hidden lg:block" /> <span className="gradient-text">Código</span>. Sucesso.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }} 
                className="text-lg sm:text-xl text-[#8888A0] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Transformamos suas ideias em soluções digitais completas com design moderno, alta performance e foco absurdo em conversão de vendas.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.6 }} 
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link href="/services">
                  <Button size="lg" className="group bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-lg shadow-[#6366F1]/25">
                    Iniciar Projeto
                    <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="border-[#2A2A3E] text-white hover:bg-[#1E1E2E] hover:border-[#6366F1]/50">
                    Ver Portfólio
                  </Button>
                </Link>
              </motion.div>
              
              {/* SOCIAL PROOF */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 1, duration: 0.8 }} 
                className="mt-14 flex items-center justify-center lg:justify-start gap-6"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3E] border-2 border-[#0A0A14] flex items-center justify-center shadow-lg"
                    >
                      <Check className="w-5 h-5 text-green-400" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-lg">+50 Projetos</p>
                  <p className="text-[#8888A0] text-sm">Clientes Satisfeitos</p>
                </div>
              </motion.div>
            </div>

            {/* IMAGE COLUMN */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, delay: 0.4 }} 
              className="relative mx-auto lg:mx-0 lg:ml-auto w-full max-w-md lg:max-w-lg xl:max-w-xl flex items-center justify-center"
            >
              {/* Clean Profile Image */}
              <div className="relative w-full aspect-square md:aspect-[4/5] z-10">
                <img 
                  src="/minha_foto.png" 
                  alt="Perfil Profissional" 
                  className="w-full h-full object-cover object-top rounded-2xl border border-[#2A2A3E]"
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 0%, black 80%, transparent 100%)',
                    maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 0%, black 80%, transparent 100%)'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="default" className="mb-4 px-4 py-2 bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20 font-semibold">
                Nossos Serviços
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Soluções <span className="gradient-text">Completas</span>
              </h2>
              <p className="text-lg text-[#8888A0] max-w-2xl mx-auto leading-relaxed">
                Da estratégia à execução, entregamos projetos digitais prontos para escalar.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {services.slice(0, 6).map(s => {
              const Icon = iconMap[s.icon] || Layers;
              return (
                <StaggerItem key={s.slug} className="h-full">
                  <ScaleHover className="h-full">
                    <Link href={'/services#' + s.slug} className="block h-full">
                      <Card className="h-full flex flex-col">
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#A78BFA]/20 flex items-center justify-center mb-6 border border-[#6366F1]/20">
                            <Icon className="w-7 h-7 text-[#6366F1]" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                          <p className="text-[#8888A0] mb-6 leading-relaxed">{s.description}</p>
                          <div className="mt-auto flex items-center text-[#6366F1] font-semibold gap-2 group">
                            Saiba mais
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </ScaleHover>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="default" className="mb-4 px-4 py-2 bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20 font-semibold">
                Portfólio
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Projetos <span className="gradient-text">Realizados</span>
              </h2>
              <p className="text-lg text-[#8888A0] max-w-2xl mx-auto leading-relaxed">
                Conheça alguns dos projetos que transformamos em realidade.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {portfolioItems.slice(0, 3).map(item => (
              <StaggerItem key={item.title} className="h-full">
                <ScaleHover className="h-full">
                  <Link href="/portfolio" className="block h-full">
                    <Card className="p-0 h-full overflow-hidden flex flex-col">
                      <div className="relative h-52 w-full overflow-hidden bg-[#0A0A14] border-b border-[#2A2A3E]">
                        {item.link && item.link !== '#' ? (
                          <>
                            <iframe 
                              src={item.link} 
                              className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                              style={{ border: 'none' }}
                              title={item.title}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14] via-transparent to-transparent opacity-90 pointer-events-none" />
                          </>
                        ) : (
                          <div className="absolute inset-0 bg-grid opacity-30 flex items-center justify-center">
                             <Badge variant="default" className="px-4 py-2">{item.category}</Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col relative z-10">
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-[#8888A0] mb-6 flex-1 leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.slice(0, 3).map(t => (
                            <Badge key={t} variant="outline" className="text-xs px-3 py-1 border-[#2A2A3E] text-[#8888A0]">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </Link>
                </ScaleHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="border-[#2A2A3E] hover:border-[#6366F1]/50">
                Ver Todos os Projetos
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* PROCESS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="default" className="mb-4 px-4 py-2 bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20 font-semibold">
                Nosso Processo
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Como <span className="gradient-text">Trabalhamos</span>
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.step}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="p-8 rounded-2xl border border-[#2A2A3E] text-center bg-[#0A0A14]/50 backdrop-blur-sm hover:border-[#6366F1]/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#A78BFA]/20 flex items-center justify-center mx-auto mb-6 border border-[#6366F1]/20">
                      <span className="text-[#6366F1] font-bold text-2xl">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-[#8888A0] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="default" className="mb-4 px-4 py-2 bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20 font-semibold">
                FAQ
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Perguntas <span className="gradient-text">Frequentes</span>
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <SlideUp key={i} delay={i * 0.05}>
                <motion.div
                  className="border border-[#2A2A3E] rounded-2xl overflow-hidden bg-[#0A0A14]/50 backdrop-blur-sm"
                  whileHover={{ borderColor: 'rgba(99, 102, 241, 0.3)' }}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors"
                  >
                    <span className="text-white font-semibold text-lg">{item.q}</span>
                    <motion.div
                      animate={{ rotate: activeFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6366F1]/10 flex items-center justify-center"
                    >
                      <ChevronDown className="w-5 h-5 text-[#6366F1]" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeFaq === i ? 'auto' : 0,
                      opacity: activeFaq === i ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#8888A0] leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                </motion.div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-24 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="default" className="mb-4 px-4 py-2 bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20 font-semibold">
                Diferenciais
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Por que <span className="gradient-text">Nos Escolher</span>
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {differentiators.map((item, i) => {
              const Icon = iconMap[item.icon] || Layers;
              return (
                <StaggerItem key={i} className="h-full">
                  <Card className="h-full">
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#A78BFA]/20 flex items-center justify-center mb-6 border border-[#6366F1]/20">
                        <Icon className="w-7 h-7 text-[#6366F1]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-[#8888A0] leading-relaxed">{item.desc}</p>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6366F1]/20 to-[#A78BFA]/20 blur-[120px] rounded-full pointer-events-none"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Badge variant="default" className="mb-6 px-4 py-2 bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20 font-semibold">
              Vamos Começar
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Pronto para <span className="gradient-text">Transformar</span> seu Projeto?
            </h2>
            <p className="text-xl text-[#8888A0] mb-12 max-w-2xl mx-auto leading-relaxed">
              Entre em contato hoje e descubra como podemos ajudar sua empresa a crescer com tecnologia de ponta.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact">
                <Button size="xl" className="group bg-gradient-to-r from-[#6366F1] to-[#A78BFA] shadow-xl shadow-[#6366F1]/30 hover:shadow-[#6366F1]/40">
                  Solicitar Orçamento
                  <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
