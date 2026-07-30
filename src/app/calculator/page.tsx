'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Plus, Minus, Mail, ChevronRight, Zap } from 'lucide-react';

interface Feature {
  id: string;
  name: string;
  price: number;
  category: string;
}

const features: Feature[] = [
  { id: 'pages-5', name: 'Até 5 páginas', price: 500, category: 'Páginas' },
  { id: 'pages-10', name: 'Até 10 páginas', price: 1000, category: 'Páginas' },
  { id: 'pages-unlimited', name: 'Páginas ilimitadas', price: 2000, category: 'Páginas' },
  { id: 'blog', name: 'Blog integrado', price: 800, category: 'Funcionalidades' },
  { id: 'cms', name: 'Painel administrativo (CMS)', price: 1500, category: 'Funcionalidades' },
  { id: 'contact', name: 'Formulário de contato', price: 300, category: 'Funcionalidades' },
  { id: 'whatsapp', name: 'Integração WhatsApp', price: 400, category: 'Funcionalidades' },
  { id: 'payment', name: 'Gateway de pagamento', price: 1500, category: 'Funcionalidades' },
  { id: 'seo', name: 'SEO completo', price: 800, category: 'Otimização' },
  { id: 'performance', name: 'Otimização de performance', price: 600, category: 'Otimização' },
  { id: 'analytics', name: 'Google Analytics / Tags', price: 400, category: 'Otimização' },
  { id: 'api', name: 'API / Integrações', price: 2000, category: 'Avançado' },
  { id: 'dashboard', name: 'Dashboard interativo', price: 2500, category: 'Avançado' },
  { id: 'auth', name: 'Área de login/usuários', price: 1500, category: 'Avançado' },
  { id: 'ai', name: 'Inteligência Artificial', price: 3000, category: 'Avançado' },
  { id: 'multilang', name: 'Multi-idioma', price: 1000, category: 'Avançado' },
];

const categories = ['Páginas', 'Funcionalidades', 'Otimização', 'Avançado'];

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { SlideUp } from "@/components/motion/slide-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";

export default function CalculatorPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [pages, setPages] = useState(1);

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const total = Array.from(selected).reduce((sum, id) => {
    const feature = features.find(f => f.id === id);
    return sum + (feature?.price || 0);
  }, 0);

  const basePrice = 1500;
  const pagesPrice = pages * 300;
  const finalPrice = basePrice + pagesPrice + total;

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="accent" className="mb-4">Calculadora</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Calcule seu{' '}
            <span className="gradient-text">Orçamento</span>
          </h1>
          <p className="text-lg text-[#8888A0] max-w-2xl mx-auto">
            Selecione as funcionalidades e veja uma estimativa do investimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Features */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-[#0A0A14] border-[#1E1E2E]">
              <h3 className="text-sm font-semibold text-white mb-3">Número de páginas</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPages(Math.max(1, pages - 1))}
                  className="w-10 h-10 rounded-lg border border-[#1E1E2E] flex items-center justify-center text-white hover:bg-[#0D0D1A] transition-all"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-2xl font-bold text-white w-12 text-center">{pages}</span>
                <button
                  onClick={() => setPages(Math.min(20, pages + 1))}
                  className="w-10 h-10 rounded-lg border border-[#1E1E2E] flex items-center justify-center text-white hover:bg-[#0D0D1A] transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <span className="text-sm text-[#8888A0]">páginas (R$ {pages * 300})</span>
              </div>
            </Card>

            {categories.map(cat => (
              <div key={cat}>
                <h3 className="text-sm font-semibold text-white mb-3">{cat}</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {features.filter(f => f.category === cat).map(f => {
                    const isSelected = selected.has(f.id);
                    return (
                      <button
                        key={f.id}
                        onClick={() => toggle(f.id)}
                        className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-[#6366F1] bg-[#6366F1]/5'
                            : 'border-[#1E1E2E] bg-[#0A0A14] hover:border-[#2A2A3E]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                            isSelected ? 'bg-[#6366F1] border-[#6366F1]' : 'border-[#1E1E2E]'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className="text-sm text-white">{f.name}</span>
                        </div>
                        <span className="text-sm text-[#8888A0]">R$ {f.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <Card className="bg-gradient-to-br from-[#6366F1]/5 to-[#A78BFA]/5 border-[#1E1E2E]">
                <h3 className="text-lg font-semibold text-white mb-4">Resumo</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8888A0]">Base</span>
                    <span className="text-white">R$ {basePrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8888A0]">{pages} páginas</span>
                    <span className="text-white">R$ {pagesPrice}</span>
                  </div>
                  {Array.from(selected).map(id => {
                    const f = features.find(f => f.id === id);
                    return f ? (
                      <div key={id} className="flex justify-between text-sm">
                        <span className="text-[#8888A0]">{f.name}</span>
                        <span className="text-white">R$ {f.price}</span>
                      </div>
                    ) : null;
                  })}
                  <div className="pt-3 border-t border-[#1E1E2E]">
                    <div className="flex justify-between">
                      <span className="text-sm font-semibold text-white">Estimativa</span>
                      <span className="text-xl font-bold gradient-text">R$ {finalPrice}</span>
                    </div>
                    <p className="text-xs text-[#8888A0] mt-1">*Valor estimado. Orçamento final sob consulta.</p>
                  </div>
                </div>

                <Link href={`/contact?calculator=true&estimate=${finalPrice}`}>
                  <Button className="w-full">
                    Solicitar Orçamento
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </Card>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
