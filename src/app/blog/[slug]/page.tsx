'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';
import { ArrowLeft, Calendar, ChevronRight, MessageCircle } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { SlideUp } from '@/components/motion/slide-up';
import { buildWhatsappLink } from '@/lib/whatsapp';

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-32 flex items-center justify-center">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Artigo não encontrado</h1>
            <Link href="/blog">
              <Button variant="outline">Voltar ao Blog</Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-[#8888A0] hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>
        </SlideUp>

        <FadeIn>
          <Badge variant="default" className="mb-4">{post.tags[0]}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-[#8888A0] mb-8">
            <Calendar className="w-4 h-4" />
            {post.date} · {post.author}
          </div>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-5"
        >
          <p className="text-lg text-white font-medium leading-relaxed">{post.excerpt}</p>
          {post.content?.map((paragraph, i) => (
            <p key={i} className="text-[#8888A0] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <SlideUp>
          <div className="mt-12 p-6 rounded-2xl border border-[#6366F1]/20 bg-[#6366F1]/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold mb-1">Quer aplicar isso no seu negócio?</p>
              <p className="text-sm text-[#8888A0]">Fale com a gente e receba uma análise gratuita do seu projeto.</p>
            </div>
            <a href={buildWhatsappLink(`Olá! Li o artigo "${post.title}" no blog e gostaria de saber mais.`)} target="_blank" rel="noopener noreferrer">
              <Button className="whitespace-nowrap">
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </SlideUp>

        <SlideUp className="mt-8 pt-8 border-t border-[#1E1E2E]">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(t => (
              <Badge key={t} variant="outline">{t}</Badge>
            ))}
          </div>
          <Link href="/blog">
            <Button variant="outline">
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
              Mais Artigos
            </Button>
          </Link>
        </SlideUp>
      </div>
    </div>
  );
}
