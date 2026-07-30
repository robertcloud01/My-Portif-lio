"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
            <button
                onClick={() => setLanguage("pt")}
                className={`relative px-3 py-1 rounded-full text-xs font-medium transition-colors ${language === "pt" ? "text-black" : "text-gray-400 hover:text-white"
                    }`}
            >
                {language === "pt" && (
                    <motion.div
                        layoutId="active-lang"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
                <span className="relative z-10">PT</span>
            </button>
            <button
                onClick={() => setLanguage("en")}
                className={`relative px-3 py-1 rounded-full text-xs font-medium transition-colors ${language === "en" ? "text-black" : "text-gray-400 hover:text-white"
                    }`}
            >
                {language === "en" && (
                    <motion.div
                        layoutId="active-lang"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
                <span className="relative z-10">EN</span>
            </button>
        </div>
    );
}
