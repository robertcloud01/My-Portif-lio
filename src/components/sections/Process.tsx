"use client";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

export function Process() {
    const { dictionary } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".process-header",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".process-header",
                    start: "top 85%",
                }
            }
        );

        gsap.fromTo(".process-step",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            }
        );

        gsap.fromTo(".process-line",
            { scaleX: 0 },
            {
                scaleX: 1,
                duration: 1.2,
                ease: "power2.inOut",
                transformOrigin: "left",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <Section id="process" ref={containerRef} className="relative">
            <FloatingShapes />
            <div className="process-header text-center mb-16 max-w-2xl mx-auto opacity-0 relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {dictionary.process.title}
                </h2>
                <p className="text-gray-400">
                    {dictionary.process.subtitle}
                </p>
            </div>

            <div className="relative z-10">
                <div className="process-line hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-premium-purple via-premium-cyan to-premium-purple opacity-30" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
                    {dictionary.process.steps.map((step, index) => (
                        <div key={index} className="process-step opacity-0 relative text-center md:text-left">
                            <div className="w-12 h-12 rounded-full bg-graphite border border-premium-purple/50 flex items-center justify-center text-premium-purple font-heading font-bold text-lg mb-6 mx-auto md:mx-0 relative z-10 bg-black">
                                {String(index + 1).padStart(2, "0")}
                            </div>
                            <h3 className="text-lg font-heading font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
