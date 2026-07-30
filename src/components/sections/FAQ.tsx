"use client";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

export function FAQ() {
    const { dictionary } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".faq-header",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".faq-header",
                    start: "top 85%",
                }
            }
        );

        gsap.fromTo(".faq-item",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <Section id="faq" ref={containerRef} className="relative">
            <FloatingShapes />
            <div className="faq-header text-center mb-16 max-w-2xl mx-auto opacity-0 relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {dictionary.faq.title}
                </h2>
                <p className="text-gray-400">
                    {dictionary.faq.subtitle}
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
                {dictionary.faq.items.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={cn(
                                "faq-item opacity-0 rounded-2xl border overflow-hidden transition-colors",
                                isOpen ? "border-premium-purple/50 bg-white/5" : "border-white/10 bg-black/30"
                            )}
                        >
                            <button
                                className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <span className="font-heading font-semibold">{item.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 shrink-0 text-premium-purple transition-transform duration-300",
                                        isOpen && "rotate-180"
                                    )}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
