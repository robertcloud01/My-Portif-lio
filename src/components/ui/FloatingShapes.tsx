"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface FloatingShapesProps {
    className?: string;
    variant?: "hero" | "section";
}

/**
 * Decorative floating squares/dots that drift slowly in the background,
 * inspired by the animated hero graphics on premium SaaS landing pages.
 * Purely decorative, pointer-events disabled.
 */
export function FloatingShapes({ className, variant = "section" }: FloatingShapesProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const shapes = gsap.utils.toArray<HTMLElement>(".floating-shape");

        shapes.forEach((shape) => {
            gsap.to(shape, {
                y: `+=${gsap.utils.random(-30, 30)}`,
                x: `+=${gsap.utils.random(-20, 20)}`,
                rotation: `+=${gsap.utils.random(-25, 25)}`,
                duration: gsap.utils.random(4, 7),
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                delay: gsap.utils.random(0, 1.5),
            });
        });
    }, { scope: containerRef });

    const shapes = variant === "hero"
        ? [
            { size: 90, top: "8%", left: "6%", color: "border-premium-purple/40", rotate: 12 },
            { size: 50, top: "18%", left: "88%", color: "border-premium-cyan/40", rotate: -20 },
            { size: 34, top: "68%", left: "10%", color: "border-premium-cyan/30", rotate: 45 },
            { size: 70, top: "72%", left: "82%", color: "border-premium-purple/30", rotate: -10 },
            { size: 22, top: "40%", left: "4%", color: "border-premium-purple/30", rotate: 20 },
            { size: 28, top: "30%", left: "94%", color: "border-premium-cyan/30", rotate: -15 },
        ]
        : [
            { size: 60, top: "10%", left: "8%", color: "border-premium-purple/25", rotate: 15 },
            { size: 40, top: "75%", left: "88%", color: "border-premium-cyan/25", rotate: -20 },
            { size: 26, top: "50%", left: "4%", color: "border-premium-cyan/20", rotate: 30 },
        ];

    return (
        <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} aria-hidden="true">
            {shapes.map((s, i) => (
                <div
                    key={i}
                    className={cn("floating-shape absolute rounded-xl border", s.color)}
                    style={{
                        width: s.size,
                        height: s.size,
                        top: s.top,
                        left: s.left,
                        transform: `rotate(${s.rotate}deg)`,
                    }}
                />
            ))}
        </div>
    );
}
