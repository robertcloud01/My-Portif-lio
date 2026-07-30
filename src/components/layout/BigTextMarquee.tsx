"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

/**
 * Giant scrolling outline text banner, placed right above the footer.
 * Mirrors the oversized marquee text treatment used on premium landing
 * pages as a closing visual statement before the footer.
 */
export function BigTextMarquee() {
    const { dictionary } = useLanguage();
    const text = dictionary.footer.marquee_text;
    const items = Array(6).fill(text);

    return (
        <div className="relative overflow-hidden border-t border-white/5 bg-black py-8 md:py-10">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <motion.div
                    className="flex gap-16 flex-nowrap items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ x: { duration: 90, repeat: Infinity, ease: "linear" } }}
                >
                    {[...items, ...items].map((t, i) => (
                        <span
                            key={i}
                            className="font-nordic text-5xl md:text-7xl font-bold uppercase tracking-wide text-white/10 [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] whitespace-nowrap shrink-0"
                        >
                            {t}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
