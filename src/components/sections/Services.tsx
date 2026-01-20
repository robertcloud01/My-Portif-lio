"use client";

import { Section } from "@/components/ui/Section";
import { Code2, Layout, ShoppingBag, Bot, Palette, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, Draggable } from "gsap/all";
import { GlowingCard } from "@/components/ui/GlowingCard";

const icons = [Code2, Layout, ShoppingBag, Bot, Palette, Zap];

export function Services() {
    const { dictionary } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, Draggable);

        const cards = gsap.utils.toArray<HTMLElement>(".service-card");

        // Helper to start floating animation from CURRENT position
        const startFloating = (target: any) => {
            // We use relative values (x/y) on top of the current transform
            // But since Draggable modifies x/y directly, we should animate TO a random relative offset
            // Actually, to make it robust:
            // Draggable sets 'x' and 'y' (translate).
            // To float, we can animate 'x' and 'y' to random values relative to where they are,
            // OR just simple random floating logic that tween to absolute coords works if we know bounds?
            // Simpler: Just tween x/y with relative random values from current spot.

            gsap.to(target, {
                y: `+=${gsap.utils.random(-15, 15)}`,
                x: `+=${gsap.utils.random(-10, 10)}`,
                rotation: `+=${gsap.utils.random(-3, 3)}`,
                duration: gsap.utils.random(2, 4),
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                delay: gsap.utils.random(0, 0.5)
            });
        };

        // Initial Reveal (Stagger)
        gsap.fromTo(cards,
            { y: 100, opacity: 0, rotateX: -15 },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                },
                onComplete: () => {
                    // Apply Draggable and Float
                    cards.forEach((card) => {
                        // Initialize Draggable
                        Draggable.create(card, {
                            type: "x,y",
                            edgeResistance: 0.65,
                            bounds: containerRef.current, // Keep inside section roughly
                            inertia: true, // Need plugin? If not available, it just won't throw. Standard Draggable allows basic momentum-ish feel usually or simple drag.
                            onPress: function () {
                                gsap.killTweensOf(this.target); // Stop floating when grabbed
                                // Scale up slightly for feedback
                                gsap.to(this.target, { scale: 1.05, duration: 0.2, boxShadow: "0 20px 50px rgba(0,0,0,0.5)", zIndex: 50 });
                            },
                            onRelease: function () {
                                gsap.to(this.target, { scale: 1, duration: 0.2, boxShadow: "none", zIndex: 1 });
                                startFloating(this.target); // Resume floating from new spot
                            }
                        });

                        // Start initial float
                        startFloating(card);
                    });
                }
            }
        );

        gsap.fromTo(".services-header",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".services-header",
                    start: "top 80%",
                }
            }
        )

    }, { scope: containerRef });

    return (
        <Section id="expertise" className="bg-graphite/30 perspective-1000" ref={containerRef as any}>
            <div className="services-header mb-16 text-center opacity-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {dictionary.services.title}
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {dictionary.services.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dictionary.services.items.map((service, index) => {
                    const Icon = icons[index];
                    return (
                        <div key={index} className="service-card opacity-0 touch-none cursor-grab active:cursor-grabbing"> {/* touch-none is vital for draggable on mobile */}
                            <GlowingCard>
                                <div className="p-8 h-full bg-graphite/40">
                                    <div className="absolute inset-0 bg-gradient-to-br from-premium-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center mb-6 group-hover:bg-premium-purple text-premium-purple group-hover:text-white transition-colors duration-300">
                                            <Icon className="w-6 h-6" />
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-premium-purple transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </GlowingCard>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
