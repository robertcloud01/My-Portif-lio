"use client";

import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <SmoothScroll>
                <Preloader />
                <CustomCursor />
                {children}
            </SmoothScroll>
        </LanguageProvider>
    );
}
