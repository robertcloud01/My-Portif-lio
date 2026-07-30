"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

export function FinalCTA() {
    const { dictionary } = useLanguage();

    return (
        <Section className="relative overflow-hidden">
            <FloatingShapes />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-premium-purple/20 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-premium-cyan/10 blur-[100px] rounded-full pointer-events-none animate-pulse" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-gradient-to-b from-graphite-light/60 to-black p-10 md:p-16"
            >
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                    {dictionary.finalCta.title}
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                    {dictionary.finalCta.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="glow" size="lg" asChild>
                        <Link href="#contact">{dictionary.finalCta.cta_primary}</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="#pricing">{dictionary.finalCta.cta_secondary}</Link>
                    </Button>
                </div>
            </motion.div>
        </Section>
    );
}
