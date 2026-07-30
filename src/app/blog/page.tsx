'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { Search, Calendar, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { SlideUp } from '@/components/motion/slide-up';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-container';
import { ScaleHover } from '@/components/motion/scale-in';

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = [...new Set(blogPosts.flatMap(p => p.tags))];

  const filtered = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !activeTag || post.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4">Blog</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Artigos e{' '}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-[#8888A0] max-w-2xl mx-auto">
              Dicas, tendências e guias sobre tecnologia web, design e transformação digital.
            </p>
          </div>
        </FadeIn>

        <SlideUp>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8888A0]" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-[#1E1E2E] bg-[#0A0A14] text-sm text-white placeholder:text-[#8888A0] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <motion.button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTag === tag
                      ? 'bg-[#6366F1] text-white'
                      : 'bg-[#0A0A14] text-[#8888A0] border border-[#1E1E2E] hover:text-white'
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>
        </SlideUp>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, index) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="h-full"
              >
                <ScaleHover className="h-full">
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <Card className="group h-full bg-[#0A0A14] border-[#1E1E2E] hover:border-[#6366F1]/20 transition-all flex flex-col">
                      <div className="flex-1 p-5">
                        <div className="flex items-center gap-2 text-xs text-[#8888A0] mb-3">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#6366F1] transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-[#8888A0] line-clamp-3">{post.excerpt}</p>
                      </div>
                      <div className="px-5 pb-4">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {post.tags.slice(0, 3).map(t => (
                            <Badge key={t} variant="outline" className="text-[10px]">{t}</Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#6366F1] group-hover:gap-2 transition-all">
                          Ler mais <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Card>
                  </Link>
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
            <p className="text-[#8888A0]">Nenhum artigo encontrado.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
