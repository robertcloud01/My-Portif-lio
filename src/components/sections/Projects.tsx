"use client";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ProjectCarousel } from "@/components/sections/ProjectCarousel";
import { projectMeta } from "@/data/projectMeta";
import { Button } from "@/components/ui/Button";
import { Link } from "lucide-react";

export function Projects() {
    const { dictionary } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, { scope: containerRef });

    return (
        <Section id="projects" ref={containerRef as any} className="relative overflow-hidden bg-black/40 backdrop-blur-sm">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-premium-purple/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-premium-cyan/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col items-center mb-10 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                        {dictionary.projects.title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                        {dictionary.projects.subtitle}
                    </p>
                </motion.div>
            </div>

            {/* New Horizontal Carousel */}
            <div className="relative z-10 -mx-4 md:-mx-8 lg:-mx-12">
                <ProjectCarousel
                    items={dictionary.projects.items}
                    meta={projectMeta}
                />
            </div>

        </Section>
    );
}
