'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioItems } from '@/lib/data';
import { ArrowUpRight, Search, GitFork, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { SlideUp } from '@/components/motion/slide-up';
import { ScaleHover } from '@/components/motion/scale-in';

const categories = ['Todos', 'Clinicas', 'Restaurantes', 'Advogados', 'Ecommerce', 'Sistemas'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [search, setSearch] = useState('');

  const filtered = portfolioItems.filter(item => {
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">Portfólio</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nossos{' '}
              <span className="gradient-text">Projetos</span>
            </h1>
            <p className="text-lg text-[#8888A0] max-w-2xl mx-auto">
              Cada projeto é uma história de transformação digital.
            </p>
          </div>
        </FadeIn>

        <SlideUp>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8888A0]" />
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-[#1E1E2E] bg-[#0A0A14] text-sm text-white placeholder:text-[#8888A0] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-[#6366F1] text-white'
                      : 'bg-[#0A0A14] text-[#8888A0] border border-[#1E1E2E] hover:text-white'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </SlideUp>

        <motion.div layout className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
              >
                <ScaleHover>
                  <Card className="overflow-hidden bg-[#0A0A14] border-[#1E1E2E] hover:border-[#6366F1]/20 transition-all">
                    <div className="grid md:grid-cols-5 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-2 h-64 md:h-full min-h-[250px] bg-[#0A0A14] rounded-xl flex items-center justify-center relative overflow-hidden group border border-[#1E1E2E]"
                      >
                        {item.link && item.link !== '#' ? (
                          <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <iframe 
                              src={item.link} 
                              className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                              style={{ border: 'none' }}
                              title={item.title}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A14] via-transparent to-transparent opacity-80 pointer-events-none" />
                          </div>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-grid opacity-20" />
                            <div className="relative z-10 text-center p-6">
                              <Badge variant="default" className="mb-3">{item.category}</Badge>
                              <p className="text-xs text-[#8888A0]">{item.technologies.join(' • ')}</p>
                            </div>
                          </>
                        )}
                      </motion.div>
                      <div className="md:col-span-3 p-6 pt-0 md:pt-6">
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-sm text-[#8888A0] mb-4">{item.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div><span className="text-xs text-[#8888A0]">Problema: </span><span className="text-xs text-white">{item.problem}</span></div>
                          <div><span className="text-xs text-[#8888A0]">Solução: </span><span className="text-xs text-white">{item.solution}</span></div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.technologies.map(tech => (
                            <Badge key={tech} variant="outline" className="text-[10px]">{tech}</Badge>
                          ))}
                        </div>

                        <div className="text-sm text-[#22C55E] font-medium mb-4">{item.result}</div>

                        <div className="flex items-center gap-3">
                          <Link href={item.link}><Button size="sm"><ExternalLink className="w-3.5 h-3.5 mr-1.5" />Ver Projeto</Button></Link>
                          <Link href={item.github}><Button variant="outline" size="sm"><GitFork className="w-3.5 h-3.5 mr-1.5" />Código</Button></Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScaleHover>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[#8888A0]">Nenhum projeto encontrado para essa categoria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
