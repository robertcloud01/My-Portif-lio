"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projectMeta = [
    { 
        tags: ["Next.js", "Supabase", "AI Integration", "Stripe"], 
        color: "from-[#7B4DFF] to-[#4DF2FF]",
        icon: "✨"
    },
    { 
        tags: ["Node.js", "Redis", "PostgreSQL", "Next.js"], 
        color: "from-emerald-500 to-teal-500",
        icon: "🚀"
    },
    { 
        tags: ["React", "Framer Motion", "Tailwind", "Vite"], 
        color: "from-orange-500 to-red-500",
        icon: "🎨"
    },
    { 
        tags: ["Next.js", "Tailwind", "Framer Motion"], 
        color: "from-yellow-500 to-amber-600", 
        previewUrl: "https://valhallas-motors.vercel.app/",
        icon: "🏎️"
    },
    { 
        tags: ["React", "GSAP", "Three.js", "Tailwind"], 
        color: "from-[#005943] to-[#00241a]", 
        previewUrl: "https://aston-martin-psi.vercel.app/",
        icon: "💎",
        status: "in-progress"
    },
    { 
        tags: ["Next.js", "Tailwind", "GSAP", "Architecture"], 
        color: "from-stone-600 to-neutral-900", 
        previewUrl: "https://saitama-sushi-yfgq.vercel.app/",
        icon: "🏛️"
    },
];

interface ProjectMeta {
    tags: string[];
    color: string;
    previewUrl?: string;
    icon: string;
    status?: "in-progress" | "completed";
}

function ProjectCard({ project, meta, index, dictionary }: { project: any, meta: ProjectMeta, index: number, dictionary: any }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="project-card opacity-0 group relative"
        >
            <GlowingCard className="h-full">
                <div className="relative h-full flex flex-col">
                    {/* Header Visual */}
                    <div className={`h-52 w-full bg-gradient-to-br ${meta.color} relative overflow-hidden`}>
                        {/* Animated background elements */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] animate-pulse" />
                        
                        {meta.previewUrl ? (
                            <Link href={meta.previewUrl} target="_blank" className="block w-full h-full cursor-pointer relative z-10">
                                <iframe
                                    src={meta.previewUrl}
                                    className="w-full h-full border-none pointer-events-none scale-110 group-hover:scale-125 transition-transform duration-700 fade-mask opacity-60 group-hover:opacity-100"
                                    title={project.title}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </Link>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <motion.span 
                                    initial={{ scale: 0.8, opacity: 0.5 }}
                                    whileInView={{ scale: 1.2, opacity: 0.8 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                    className="text-8xl filter blur-[2px] select-none"
                                >
                                    {meta.icon}
                                </motion.span>
                                <div className="absolute inset-0 bg-black/10" />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="text-white/30 text-6xl font-black uppercase tracking-tighter select-none pointer-events-none transform -rotate-12 translate-x-[-20%] translate-y-[20%]">
                                        {project.title.split(' ')[0]}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Floating Category Badge */}
                        <div className="absolute top-4 right-4 z-30 flex flex-col items-end gap-2">
                            <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white shadow-xl transform group-hover:-translate-y-1 transition-transform">
                                {project.category}
                            </div>
                            
                            {meta.status === "in-progress" && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="px-3 py-1 rounded-full bg-void border border-premium-cyan/50 text-[9px] font-black uppercase tracking-[0.2em] text-premium-cyan shadow-[0_0_15px_rgba(77,242,255,0.4)] animate-pulse flex items-center gap-1.5"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-premium-cyan shadow-[0_0_8px_#4DF2FF]" />
                                    {dictionary.projects.in_progress || "Em Andamento"}
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex-grow flex flex-col relative z-20">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold mb-3 font-heading group-hover:text-premium-purple transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed min-h-[60px] line-clamp-3">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 mt-auto mb-8">
                            {meta.tags.map(tag => (
                                <span 
                                    key={tag} 
                                    className="px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded-md text-[10px] font-medium text-gray-400 hover:text-white border border-white/5 transition-colors cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            {meta.previewUrl ? (
                                <Button 
                                    variant="outline" 
                                    className="flex-grow group/btn relative overflow-hidden bg-white/5 border-white/10 hover:border-premium-purple/50" 
                                    asChild
                                >
                                    <Link href={meta.previewUrl} target="_blank">
                                        <span className="relative z-10 flex items-center justify-center">
                                            {dictionary.projects.cta_case} 
                                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-premium-purple/20 to-premium-cyan/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                    </Link>
                                </Button>
                            ) : (
                                <Button 
                                    variant="outline" 
                                    className="flex-grow group/btn relative overflow-hidden bg-white/5 border-white/10 hover:border-premium-purple/50"
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        {dictionary.projects.cta_case} 
                                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-premium-purple/20 to-premium-cyan/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                </Button>
                            )}
                            
                            <button className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-gray-400 hover:text-white">
                                <Github className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </GlowingCard>
        </motion.div>
    );
}

export function Projects() {
    const { dictionary } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const projects = gsap.utils.toArray<HTMLElement>(".project-card");

        projects.forEach((card, i) => {
            gsap.fromTo(card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        });

    }, { scope: containerRef });

    return (
        <Section id="projects" ref={containerRef as any} className="relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-premium-purple/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-premium-cyan/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col md:flex-row justify-between items-end mb-20 relative z-10">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                            {dictionary.projects.title}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {dictionary.projects.subtitle}
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Button variant="outline" className="mt-8 md:mt-0 group" asChild>
                        <Link href="https://github.com/stackbyte" target="_blank">
                            {dictionary.projects.cta_github} 
                            <Github className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 relative z-10">
                {dictionary.projects.items.map((project, index) => {
                    const meta = projectMeta[index];
                    if (!meta) return null;
                    
                    return (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            meta={meta as ProjectMeta} 
                            index={index}
                            dictionary={dictionary}
                        />
                    );
                })}
            </div>
        </Section>
    );
}

