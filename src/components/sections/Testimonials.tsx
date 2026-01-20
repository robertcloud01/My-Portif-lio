"use client";

import { Section } from "@/components/ui/Section";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Testimonials() {
    const { dictionary } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".testimonial-card",
            { scale: 0.8, opacity: 0, y: 50 },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <Section id="testimonials" ref={containerRef as any}>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {dictionary.testimonials.title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dictionary.testimonials.items.map((t, i) => (
                    <div
                        key={i}
                        className="testimonial-card p-8 rounded-2xl bg-white/5 border border-white/5 opacity-0"
                    >
                        <div className="flex gap-1 mb-4 text-premium-purple">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-gray-300 italic mb-6">"{t.quote}"</p>
                        <div>
                            <div className="font-bold text-white">{t.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
