"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const { dictionary } = useLanguage();

    const navLinks = [
        { name: dictionary.nav.expertise, href: "#expertise" },
        { name: dictionary.nav.projects, href: "#projects" },
        { name: dictionary.nav.about, href: "#about" },
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-4" : "py-6 bg-transparent"
            )}
        >
            <Container>
                <nav className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-heading font-bold tracking-tighter text-white z-50">
                        VALHALLAS<span className="text-premium-purple">.DEV</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <LanguageSwitcher />
                        <Button variant="outline" size="sm" asChild>
                            <Link href="#contact">{dictionary.nav.contact}</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden z-50">
                        <LanguageSwitcher />
                        <button
                            className="text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Nav */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="absolute inset-0 top-0 h-screen w-screen bg-black flex flex-col items-center justify-center gap-8 md:hidden"
                            >
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-2xl font-bold text-gray-300 hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link href="#contact" onClick={() => setIsOpen(false)}>
                                    <Button variant="glow" size="lg">{dictionary.nav.contact}</Button>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </Container>
        </motion.header>
    );
}
