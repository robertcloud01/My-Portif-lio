"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Contact() {
    const { dictionary } = useLanguage();

    return (
        <Section id="contact" className="bg-graphite/30">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                    {dictionary.contact.title}
                </h2>
                <p className="text-gray-400">
                    {dictionary.contact.subtitle}
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-xl mx-auto bg-black/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm text-gray-400">{dictionary.contact.form.name}</label>
                            <input
                                id="name"
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-premium-purple/50 focus:bg-white/10 transition-all"
                                placeholder={dictionary.contact.form.name_placeholder}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm text-gray-400">{dictionary.contact.form.email}</label>
                            <input
                                id="email"
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-premium-purple/50 focus:bg-white/10 transition-all"
                                placeholder={dictionary.contact.form.email_placeholder}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm text-gray-400">{dictionary.contact.form.message}</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-premium-purple/50 focus:bg-white/10 transition-all resize-none"
                            placeholder={dictionary.contact.form.message_placeholder}
                        />
                    </div>

                    <Button variant="glow" size="lg" className="w-full">
                        {dictionary.contact.form.submit} <Send className="ml-2 w-4 h-4" />
                    </Button>
                </form>
            </motion.div>
        </Section>
    );
}
