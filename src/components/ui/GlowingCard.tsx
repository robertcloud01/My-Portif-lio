"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    gradientColor?: string;
}

export function GlowingCard({ children, className, gradientColor = "from-premium-purple via-premium-cyan to-premium-purple", ...props }: GlowingCardProps) {
    return (
        <div className={cn("relative group rounded-2xl p-[1px] overflow-hidden", className)} {...props}>
            {/* Moving Gradient Border (The "Rays") */}
            <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_50%,var(--color-premium-purple)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            {/* Slower, wider rotation for the "Glow" */}
            <div className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_50%,var(--color-premium-cyan)_100%)] opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl mix-blend-screen" />

            {/* Inner Content Container (Masks the center) */}
            <div className="relative h-full bg-black rounded-2xl border border-white/10 z-10 w-full overflow-hidden">
                {children}
            </div>
        </div>
    );
}
