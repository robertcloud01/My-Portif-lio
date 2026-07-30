"use client";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

export function Benefits() {
    const { dictionary } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".benefits-header",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".benefits-header",
                    start: "top 85%",
                }
            }
        );

        gsap.fromTo(".benefit-row",
            { opacity: 0, x: 30 },
            {
                opacity: 1,
                x: 0,
                stagger: 0.12,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <Section id="benefits" ref={containerRef} className="bg-graphite/30 relative">
            <FloatingShapes />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                <div className="benefits-header opacity-0 lg:sticky lg:top-32 self-start">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {dictionary.benefits.title}
                    </h2>
                    <p className="text-gray-400">
                        {dictionary.benefits.subtitle}
                    </p>
                </div>

                <div className="lg:col-span-2">
                    {dictionary.benefits.items.map((item, index) => (
                        <div
                            key={index}
                            className="benefit-row opacity-0 grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-2 sm:gap-8 py-6 border-t border-white/10 last:border-b group"
                        >
                            <h3 className="font-heading font-bold text-lg group-hover:text-premium-purple transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
