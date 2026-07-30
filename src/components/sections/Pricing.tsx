"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

export function Pricing() {
    const { dictionary } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".pricing-header",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".pricing-header",
                    start: "top 85%",
                }
            }
        );

        gsap.fromTo(".pricing-card",
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <Section id="pricing" ref={containerRef} className="bg-graphite/30 relative">
            <FloatingShapes />
            <div className="pricing-header text-center mb-16 max-w-2xl mx-auto opacity-0 relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {dictionary.pricing.title}
                </h2>
                <p className="text-gray-400">
                    {dictionary.pricing.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative z-10">
                {dictionary.pricing.plans.map((plan, index) => {
                    const isPopular = index === 1;
                    return (
                        <div
                            key={index}
                            className={cn(
                                "pricing-card opacity-0 relative z-10 rounded-2xl p-8 flex flex-col",
                                isPopular
                                    ? "bg-gradient-to-b from-premium-purple/20 to-black border-2 border-premium-purple shadow-[0_0_40px_-10px_#7B4DFF] md:-translate-y-4"
                                    : "bg-black/40 border border-white/10"
                            )}
                        >
                            {isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full bg-premium-purple text-white text-xs font-bold uppercase tracking-wide">
                                    <Sparkles className="w-3 h-3" /> {dictionary.pricing.popular}
                                </div>
                            )}

                            <h3 className="text-xl font-heading font-bold mb-1">{plan.name}</h3>
                            <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                            <div className="mb-6">
                                <span className="text-4xl font-heading font-bold">{plan.price}</span>
                                <span className="text-gray-500 text-sm ml-2">/ {plan.period}</span>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-4 h-4 text-premium-cyan mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button variant={isPopular ? "glow" : "outline"} size="lg" className="w-full" asChild>
                                <Link href="#contact">{dictionary.pricing.cta}</Link>
                            </Button>
                        </div>
                    );
                })}
            </div>

            <div className="relative z-10 mt-16 max-w-3xl mx-auto text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-heading font-bold mb-2">{dictionary.pricing.custom_title}</h3>
                <p className="text-gray-400 mb-6">{dictionary.pricing.custom_subtitle}</p>
                <Button variant="secondary" size="lg" asChild>
                    <Link href="#contact">{dictionary.pricing.custom_cta}</Link>
                </Button>
            </div>
        </Section>
    );
}
