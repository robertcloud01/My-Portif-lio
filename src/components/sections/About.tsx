"use client";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CodeFocus } from "@/components/ui/CodeFocus";

export function About() {
    const { dictionary, language } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);
    const lineRef = useRef<SVGPathElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-timeline",
                start: "top 70%",
                end: "bottom 80%",
                scrub: 1,
            }
        });

        // Animate Line Drawing
        // We use strokeDasharray/offset to simulate drawing
        if (lineRef.current) {
            const length = lineRef.current.getTotalLength();
            gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });

            tl.to(lineRef.current, {
                strokeDashoffset: 0,
                ease: "none",
            });
        }

        // Animate Cards Reveal & Glow
        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            // Reveal Fade In
            gsap.fromTo(card,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Active State (Glow) when line passes
            gsap.fromTo(card.querySelector('.timeline-node'),
                { scale: 1, backgroundColor: "#1A1A1A", borderColor: "#333" },
                {
                    scale: 1.5,
                    backgroundColor: "#7B4DFF",
                    borderColor: "#FFF",
                    boxShadow: "0 0 20px rgba(123,77,255,0.6)",
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 60%", // When card is near center
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        });

        // 3D Tilt Effect on Cards
        const handleMouseMove = (e: MouseEvent) => {
            cardsRef.current.forEach(card => {
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Check if mouse is near/over card
                if (x > -50 && x < rect.width + 50 && y > -50 && y < rect.height + 50) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
                    const rotateY = ((x - centerX) / centerX) * 10;

                    gsap.to(card, {
                        rotationX: rotateX,
                        rotationY: rotateY,
                        transformPerspective: 1000,
                        ease: "power2.out",
                        duration: 0.5
                    });
                } else {
                    gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5 });
                }
            });
        };

        // Animate Bio Text
        gsap.fromTo(".bio-text",
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".about-bio",
                    start: "top 80%",
                }
            }
        );

    }, { scope: containerRef });

    return (
        <Section id="about" className="bg-graphite/30" ref={containerRef}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left: Bio (Standard Fade) */}
                <div className="about-bio sticky top-32">
                    <CodeFocus>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            {dictionary.about.title}
                        </h2>
                    </CodeFocus>
                    <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                        <p className="bio-text opacity-0">
                            {dictionary.about.p1}
                        </p>
                        <p className="bio-text opacity-0">
                            {dictionary.about.p2}
                        </p>
                        <p className="bio-text opacity-0">
                            {dictionary.about.p3}
                        </p>
                    </div>
                </div>

                {/* Right: Living Timeline */}
                <div className="about-timeline relative pl-10">
                    {/* Animated SVG Beam */}
                    <div className="absolute left-[3px] top-4 bottom-0 w-1 overflow-visible pointer-events-none">
                        <svg className="h-full w-[20px] overflow-visible" preserveAspectRatio="none">
                            <path
                                ref={lineRef}
                                d={`M 10 0 V 2000`} // Simple vertical line, large enough to cover content (dynamically handled by drawing length)
                                stroke="#7B4DFF"
                                strokeWidth="4"
                                strokeLinecap="round"
                                fill="none"
                                filter="url(#glow)"
                            />
                            <defs>
                                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                        </svg>
                        {/* Background dull line */}
                        <div className="absolute top-0 left-[9px] w-[2px] h-full bg-white/5 -z-10"></div>
                    </div>

                    <div className="space-y-12">
                        {dictionary.about.timeline.map((item, index) => (
                            <div
                                key={index}
                                ref={el => { cardsRef.current[index] = el; }}
                                className="about-timeline-item relative group"
                            >
                                {/* Node Dot */}
                                <span className="timeline-node absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-graphite border-2 border-gray-700 z-10 transition-all duration-300 transform origin-center" />

                                {/* 3D Card Content */}
                                <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm cursor-default">
                                    <span className="text-sm text-premium-purple font-mono mb-2 block">{item.year}</span>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.role}</h4>
                                    <div className="text-sm text-gray-500 mb-3">{item.company}</div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
