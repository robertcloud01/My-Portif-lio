export const projectMeta: ProjectMeta[] = [
    {
        tags: ["Next.js", "Supabase", "AI Integration", "Stripe"],
        color: "from-[#7B4DFF] to-[#4DF2FF]",
        icon: "✨"
    },
    {
        tags: ["Node.js", "Redis", "PostgreSQL", "Next.js"],
        color: "from-emerald-500 to-teal-500",
        icon: "🚀"
    },
    {
        tags: ["React", "Framer Motion", "Tailwind", "Vite"],
        color: "from-orange-500 to-red-500",
        previewUrl: "https://saitama-sushi.vercel.app/",
        icon: "🎨",
        status: "completed"
    },
    {
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        color: "from-yellow-500 to-amber-600",
        previewUrl: "https://valhallas-motors.vercel.app/",
        icon: "🏎️"
    },
    {
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        color: "from-[#6B4C9A] to-[#2C1654]",
        previewUrl: "https://iliria-psicologia.vercel.app/",
        icon: "🧠",
        status: "completed"
    },
    {
        tags: ["Next.js", "Tailwind", "GSAP", "Framer Motion"],
        color: "from-red-600 to-rose-900",
        previewUrl: "https://posrche-site-exp.vercel.app/",
        icon: "🏎️",
        status: "completed"
    },
    {
        tags: ["Next.js", "Tailwind", "GSAP", "Architecture"],
        color: "from-stone-600 to-neutral-900",
        previewUrl: "https://miracle-house-architect-studio.vercel.app/",
        icon: "🏛️",
        status: "completed"
    },
    {
        tags: ["React", "GSAP", "Three.js", "Tailwind"],
        color: "from-[#005943] to-[#00241a]",
        previewUrl: "https://aston-martin-psi.vercel.app/",
        icon: "💎",
        status: "in-progress"
    },
    {
        tags: ["React", "Tailwind", "TypeScript", "Vite"],
        color: "from-cyan-500 to-teal-600",
        previewUrl: "https://puresorriso.vercel.app/",
        icon: "🦷",
        status: "completed"
    },
    {
        tags: ["JavaScript", "GSAP", "Lenis", "HTML5"],
        color: "from-red-600 to-amber-700",
        previewUrl: "https://tabasco-omega.vercel.app/",
        icon: "🌶️",
        status: "completed"
    },
];

export interface ProjectMeta {
    tags: string[];
    color: string;
    previewUrl?: string;
    icon: string;
    status?: "in-progress" | "completed";
}
