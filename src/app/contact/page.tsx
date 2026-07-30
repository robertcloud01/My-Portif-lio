'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/lib/data';
import { buildWhatsappLink, CONTACT_EMAIL } from '@/lib/whatsapp';
import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, Check, Loader2, ChevronRight } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { SlideUp } from '@/components/motion/slide-up';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const serviceLabel = services.find(s => s.slug === formData.service)?.title;
    const lines = [
      'Olá! Vim pelo site da Valhallas TechForge e gostaria de um orçamento.',
      '',
      `Nome: ${formData.name || '-'}`,
      `Email: ${formData.email || '-'}`,
      `Telefone: ${formData.phone || '-'}`,
      serviceLabel ? `Serviço de interesse: ${serviceLabel}` : null,
      '',
      `Mensagem: ${formData.message || '-'}`,
    ].filter(Boolean);

    const whatsappUrl = buildWhatsappLink(lines.join('\n'));

    await new Promise(r => setTimeout(r, 600));
    setSending(false);
    setSent(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn><div className="text-center mb-12">
          <Badge variant="default" className="mb-4">Contato</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Vamos Criar Algo <span className="gradient-text">Incrivel</span></h1>
          <p className="text-lg text-[#8888A0] max-w-2xl mx-auto">Conte-nos sobre seu projeto e daremos vida a sua ideia.</p>
        </div></FadeIn>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            <SlideUp delay={0.2}><Card className="bg-[#0A0A14] border-[#1E1E2E] p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#A78BFA]/10 flex items-center justify-center"><MessageCircle className="w-5 h-5 text-[#6366F1]" /></div>
                <div><h3 className="text-sm font-semibold text-white">WhatsApp</h3><p className="text-xs text-[#8888A0]">Resposta rapida</p></div>
              </div>
              <a href={buildWhatsappLink('Olá! Vim pelo site e gostaria de saber mais sobre os serviços da Valhallas TechForge.')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#22C55E] hover:text-[#16A34A] transition-colors">Fale Conosco <ChevronRight className="w-3 h-3" /></a>
            </Card></SlideUp>
            <SlideUp delay={0.3}><Card className="bg-[#0A0A14] border-[#1E1E2E] p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#A78BFA]/10 flex items-center justify-center"><Mail className="w-5 h-5 text-[#6366F1]" /></div>
                <div><h3 className="text-sm font-semibold text-white">Email</h3><p className="text-xs text-[#8888A0]">{CONTACT_EMAIL}</p></div>
              </div>
            </Card></SlideUp>
            <SlideUp delay={0.4}><Card className="bg-[#0A0A14] border-[#1E1E2E] p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#A78BFA]/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-[#6366F1]" /></div>
                <div><h3 className="text-sm font-semibold text-white">Localizacao</h3><p className="text-xs text-[#8888A0]">Brasil — Atendimento Remoto</p></div>
              </div>
            </Card></SlideUp>
            <SlideUp delay={0.5}><Card className="bg-[#0A0A14] border-[#1E1E2E] p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#A78BFA]/10 flex items-center justify-center"><Clock className="w-5 h-5 text-[#6366F1]" /></div>
                <div><h3 className="text-sm font-semibold text-white">Horario</h3><p className="text-xs text-[#8888A0]">Seg-Sex: 9h as 18h</p></div>
              </div>
            </Card></SlideUp>
          </div>

          <div className="lg:col-span-3">
            <SlideUp delay={0.3}><Card className="bg-[#0A0A14] border-[#1E1E2E] p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { field: 'name', label: 'Nome', type: 'text', placeholder: 'Seu nome', delay: 0.1 },
                  { field: 'email', label: 'Email', type: 'email', placeholder: 'seu@email.com', delay: 0.2 },
                  { field: 'phone', label: 'Telefone', type: 'tel', placeholder: '(11) 99999-9999', delay: 0.3 },
                ].map(({ field, label, type, placeholder, delay }) => (
                  <motion.div key={field} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
                    <label className="block text-sm text-[#8888A0] mb-1.5">{label}</label>
                    <input type={type} value={formData[field as keyof typeof formData]} onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[#1E1E2E] bg-[#050508] text-sm text-white placeholder:text-[#8888A0] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all" placeholder={placeholder} />
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <label className="block text-sm text-[#8888A0] mb-1.5">Servico de interesse</label>
                  <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl border border-[#1E1E2E] bg-[#050508] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all">
                    <option value="">Selecione...</option>
                    {services.map(s => (<option key={s.slug} value={s.slug}>{s.title}</option>))}
                  </select>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <label className="block text-sm text-[#8888A0] mb-1.5">Mensagem</label>
                  <textarea required rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#1E1E2E] bg-[#050508] text-sm text-white placeholder:text-[#8888A0] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all resize-none" placeholder="Conte sobre seu projeto..." />
                </motion.div>
                <motion.button type="submit" disabled={sending}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full h-11 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#A78BFA] text-white text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                  {sending ? <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}><Loader2 className="w-4 h-4" /></motion.div>Abrindo WhatsApp...</>
                    : sent ? <><Check className="w-4 h-4" />Enviado! Continue no WhatsApp</>
                    : <><MessageCircle className="w-4 h-4" />Enviar via WhatsApp</>}
                </motion.button>
                <p className="text-xs text-center text-[#8888A0]">Ao enviar, abriremos o WhatsApp com sua mensagem já pronta para confirmar o envio.</p>
              </form>
            </Card></SlideUp>
          </div>
        </div>
      </div>
    </div>
  );
}
