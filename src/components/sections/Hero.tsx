"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextScramble } from "@/components/ui/TextScramble";

export function Hero() {
    const { dictionary } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const glowLRef = useRef<HTMLDivElement>(null);
    const glowRRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial Badge Reveal
        tl.fromTo(".hero-badge",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        );

        // Title Stagger
        tl.fromTo(".hero-title-line",
            { y: 50, opacity: 0, rotateX: -20 },
            { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.2 },
            "-=0.4"
        );

        // Description Reveal
        tl.fromTo(".hero-desc",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        );

        // Buttons Pop
        tl.fromTo(".hero-btn",
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 },
            "-=0.4"
        );

        // Socials Fade
        tl.fromTo(".hero-social",
            { opacity: 0 },
            { opacity: 1, duration: 1 },
            "-=0.2"
        );

        // Mouse Parallax Effect
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 2;
            const y = (clientY / window.innerHeight - 0.5) * 2;

            // Glows move opposite to mouse
            gsap.to(glowLRef.current, { x: -x * 50, y: -y * 50, duration: 2, ease: "power2.out" });
            gsap.to(glowRRef.current, { x: x * 50, y: y * 50, duration: 2, ease: "power2.out" });

            // Title moves slightly
            gsap.to(titleRef.current, { x: x * 10, y: y * 10, duration: 1, ease: "power2.out" });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div ref={glowLRef} className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-premium-purple/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
            <div ref={glowRRef} className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-premium-cyan/10 blur-[100px] rounded-full opacity-30 pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6 text-center perspective-1000">
                <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 opacity-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {dictionary.hero.badge}
                </div>

                <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter text-white mb-6">
                    <div className="overflow-hidden">
                        <div className="hero-title-line inline-block origin-bottom">
                            {dictionary.hero.title_prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-purple to-premium-cyan">
                                <TextScramble>{dictionary.hero.title_highlight}</TextScramble>
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="hero-title-line inline-block origin-bottom">
                            {dictionary.hero.title_suffix}
                        </div>
                    </div>
                </h1>

                <p className="hero-desc max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed opacity-0">
                    {dictionary.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="hero-btn opacity-0">
                        <Button variant="glow" size="lg" asChild>
                            <Link href="#projects">
                                {dictionary.hero.cta_primary} <ChevronRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="hero-btn opacity-0">
                        <Button variant="secondary" size="lg" asChild>
                            <Link href="#contact">{dictionary.hero.cta_secondary}</Link>
                        </Button>
                    </div>
                </div>

                <div className="hero-social mt-20 flex justify-center gap-6 text-gray-500 opacity-0">
                    <Github className="w-6 h-6 hover:text-white cursor-pointer transition-colors hover:scale-110" />
                    <Linkedin className="w-6 h-6 hover:text-white cursor-pointer transition-colors hover:scale-110" />
                    <Twitter className="w-6 h-6 hover:text-white cursor-pointer transition-colors hover:scale-110" />
                </div>
            </div>
        </section>
    );
}
