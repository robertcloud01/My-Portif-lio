"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Dictionary, pt, en } from "./translations";

type Language = "pt" | "en";

interface LanguageContextType {
    language: Language;
    dictionary: Dictionary;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("pt");

    const toggleLanguage = () => {
        setLanguageState((prev) => (prev === "pt" ? "en" : "pt"));
    };

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const dictionary = language === "pt" ? pt : en;

    return (
        <LanguageContext.Provider value={{ language, dictionary, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
