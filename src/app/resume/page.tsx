'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Briefcase, GraduationCap, Globe, Award, Code2, Cpu, Users, Lightbulb, Target, Rocket, BookOpen } from 'lucide-react';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { SlideUp } from "@/components/motion/slide-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <Badge variant="accent" className="mb-4">Currículo</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Quem está por trás da <span className="gradient-text">Valhallas</span></h1>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Baixar PDF
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-1 bg-gradient-to-br from-[#6366F1]/10 to-[#A78BFA]/10 border-[#1E1E2E] text-center">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#A78BFA] flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">VT</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Valhallas TechForge</h2>
            <p className="text-sm text-[#8888A0] mb-4">Full-Stack Developer & Tech Lead</p>
            <div className="flex items-center justify-center gap-1 text-xs text-[#8888A0]">
              <MapPin className="w-3 h-3" />
              São Paulo, Brasil
            </div>
          </Card>

          <Card className="md:col-span-2 bg-[#0A0A14] border-[#1E1E2E]">
            <h3 className="text-lg font-semibold text-white mb-3">Resumo Profissional</h3>
            <p className="text-sm text-[#8888A0] leading-relaxed">
              Desenvolvedor full-stack com 5+ anos de experiência criando soluções digitais de alto padrão.
              Especialista em Next.js, React, TypeScript, Node.js e arquiteturas escaláveis.
              Apaixonado por transformar ideias em produtos digitais que geram resultados reais para os negócios.
              Experiência em liderança técnica, arquitetura de sistemas, UI/UX design e integração de IA.
            </p>
          </Card>
        </div>

        {/* Experience */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#6366F1]" />
          Experiência
        </h2>
        <div className="space-y-4 mb-8">
          {[
            { title: 'Tech Lead & Fundador', company: 'Valhallas TechForge', period: '2024 - Presente', desc: 'Liderança técnica e desenvolvimento de soluções web premium, sistemas personalizados e automações com IA para clientes de diversos setores.' },
            { title: 'Senior Full-Stack Developer', company: 'Agência Digital Premium', period: '2022 - 2024', desc: 'Desenvolvimento de plataformas web escaláveis, liderança de equipe técnica, arquitetura de sistemas e implementação de melhores práticas de engenharia.' },
            { title: 'Full-Stack Developer', company: 'Startup de Tecnologia', period: '2020 - 2022', desc: 'Desenvolvimento full-stack de produtos SaaS, APIs RESTful, integrações com serviços terceiros e otimização de performance.' },
          ].map(exp => (
            <Card key={exp.title} className="bg-[#0A0A14] border-[#1E1E2E] hover:border-[#6366F1]/10 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm text-[#6366F1]">{exp.company}</p>
                </div>
                <Badge variant="outline" className="text-[10px] whitespace-nowrap">{exp.period}</Badge>
              </div>
              <p className="text-sm text-[#8888A0] mt-2">{exp.desc}</p>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-[#6366F1]" />
          Stack & Tecnologias
        </h2>
        <Card className="bg-[#0A0A14] border-[#1E1E2E] mb-8">
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Supabase', 'Stripe', 'AWS', 'Docker', 'Git', 'Tailwind CSS', 'GraphQL', 'REST APIs', 'CI/CD', 'Figma', 'Vercel'].map(tech => (
              <Badge key={tech} variant="default">{tech}</Badge>
            ))}
          </div>
        </Card>

        {/* Education & Languages */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#0A0A14] border-[#1E1E2E]">
            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#6366F1]" />
              Educação
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-white">Bacharelado em Ciência da Computação</p>
                <p className="text-xs text-[#8888A0]">Universidade — 2018 - 2022</p>
              </div>
              <div>
                <p className="text-sm font-medium text-white">MBA em Engenharia de Software</p>
                <p className="text-xs text-[#8888A0]">Instituição — 2023 - 2024</p>
              </div>
            </div>
          </Card>
          <Card className="bg-[#0A0A14] border-[#1E1E2E]">
            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#6366F1]" />
              Idiomas
            </h3>
            <div className="space-y-3">
              {[
                { lang: 'Português', level: 'Nativo' },
                { lang: 'Inglês', level: 'Avançado (C1)' },
                { lang: 'Espanhol', level: 'Intermediário (B1)' },
              ].map(item => (
                <div key={item.lang} className="flex items-center justify-between">
                  <span className="text-sm text-white">{item.lang}</span>
                  <Badge variant="outline" className="text-[10px]">{item.level}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Certificates & Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#0A0A14] border-[#1E1E2E]">
            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#A78BFA]" />
              Certificações
            </h3>
            <ul className="space-y-2">
              {['AWS Certified Developer', 'Next.js Certified', 'React Advanced Patterns', 'Node.js Performance'].map(cert => (
                <li key={cert} className="flex items-center gap-2 text-sm text-[#8888A0]">
                  <Award className="w-3.5 h-3.5 text-[#A78BFA]" />
                  {cert}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-[#0A0A14] border-[#1E1E2E]">
            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#A78BFA]" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Liderança', 'Comunicação', 'Resolução de Problemas', 'Trabalho em Equipe', 'Gestão de Tempo', 'Pensamento Crítico', 'Adaptabilidade', 'Criatividade'].map(skill => (
                <Badge key={skill} variant="accent" className="text-[11px]">{skill}</Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
