"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ArrowUp } from "lucide-react";
import { BigTextMarquee } from "./BigTextMarquee";

export function Footer() {
    const { dictionary } = useLanguage();

    const companyLinks = [
        { name: dictionary.nav.about, href: "#about" },
        { name: dictionary.nav.projects, href: "#projects" },
        { name: "FAQ", href: "#faq" },
        { name: dictionary.nav.contact, href: "#contact" },
    ];

    const servicesLinksA = dictionary.services.items.slice(0, 3).map((s) => ({
        name: s.title,
        href: "#expertise",
    }));

    const servicesLinksB = dictionary.services.items.slice(3, 6).map((s) => ({
        name: s.title,
        href: "#expertise",
    }));

    const socialLinks = [
        { name: "LinkedIn", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "X / Twitter", href: "#" },
        { name: "Instagram", href: "#" },
    ];

    return (
        <footer className="bg-black">
            <BigTextMarquee />

            <Container>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-16">
                    <div className="col-span-2 md:col-span-1 flex md:items-start">
                        <Link href="/" className="text-xl font-heading font-bold tracking-tighter text-white">
                            VALHALLAS<span className="text-premium-purple">.DEV</span>
                        </Link>
                    </div>

                    <div>
                        <h4 className="text-sm font-heading font-bold text-white mb-4">{dictionary.footer.company_title}</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-premium-cyan transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-heading font-bold text-white mb-4">{dictionary.footer.services_title}</h4>
                        <ul className="space-y-3">
                            {servicesLinksA.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-premium-cyan transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-heading font-bold text-white mb-4">{dictionary.footer.explore_title}</h4>
                        <ul className="space-y-3">
                            {servicesLinksB.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-premium-cyan transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-heading font-bold text-white mb-4">{dictionary.footer.social_title}</h4>
                        <ul className="space-y-3">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-gray-500 hover:text-premium-cyan transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-white/5">
                    <div className="text-gray-500 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} Valhallas.Dev. {dictionary.footer.rights}
                    </div>

                    <div className="flex items-center gap-3 text-gray-500 text-xs">
                        <a href="#" className="hover:text-white transition-colors">{dictionary.footer.privacy_policy}</a>
                        <span className="text-gray-700">|</span>
                        <a href="#" className="hover:text-white transition-colors">{dictionary.footer.cookie_policy}</a>
                    </div>

                    <a
                        href="#top"
                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
                    >
                        {dictionary.footer.back_to_top} <ArrowUp className="w-3.5 h-3.5" />
                    </a>
                </div>
            </Container>
        </footer>
    );
}
