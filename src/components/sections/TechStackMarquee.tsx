"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg", invert: true },
    { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", invert: true },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invert: true },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
    const items = [...techStack, ...techStack];

    return (
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <motion.div
                className="flex gap-10 md:gap-16 flex-nowrap py-4"
                animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{
                    x: {
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }}
            >
                {items.map((tech, i) => (
                    <div
                        key={`${tech.name}-${i}`}
                        className="flex items-center gap-3 flex-shrink-0 group cursor-default"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={tech.logo}
                            alt={tech.name}
                            width={28}
                            height={28}
                            className={`w-6 h-6 md:w-7 md:h-7 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 ${(tech as any).invert ? "invert" : ""
                                }`}
                            loading="lazy"
                        />
                        <span className="text-[13px] md:text-sm font-medium text-white/25 group-hover:text-white/90 transition-colors duration-500 whitespace-nowrap tracking-wider uppercase">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export function TechStackMarquee() {
    return (
        <div className="relative py-10 md:py-14 overflow-hidden border-t border-b border-white/[0.04]">
            {/* Very subtle background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-transparent to-white/[0.01] pointer-events-none" />

            <div className="flex flex-col gap-5 md:gap-6">
                <MarqueeRow />
                <MarqueeRow reverse />
            </div>
        </div>
    );
}
