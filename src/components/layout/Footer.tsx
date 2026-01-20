"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
    const { dictionary } = useLanguage();

    return (
        <footer className="py-8 border-t border-white/5 bg-black">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Valhallas.Dev. {dictionary.footer.rights}
                    </div>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
