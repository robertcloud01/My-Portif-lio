"use client";

import { useMemo, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface PixelDividerProps {
    className?: string;
    color?: "purple" | "cyan";
    density?: number;
}

/**
 * A mosaic / "pixel wipe" divider between sections: a grid of small squares
 * that materialize with a scroll-triggered stagger, creating a jagged,
 * glitchy edge instead of a plain straight line between sections.
 */
export function PixelDivider({ className, color = "purple", density = 0.55 }: PixelDividerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const cols = 24;
    const rows = 3;

    const cells = useMemo(() => {
        // Deterministic pseudo-random pattern (no impure Math.random in render)
        return Array.from({ length: cols * rows }, (_, i) => {
            const seed = Math.sin(i * 12.9898) * 43758.5453;
            const frac = seed - Math.floor(seed);
            return frac < density;
        });
    }, [density]);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".pixel-cell",
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
                stagger: {
                    each: 0.008,
                    from: "random",
                },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                }
            }
        );
    }, { scope: containerRef });

    const colorClass = color === "purple" ? "bg-premium-purple" : "bg-premium-cyan";

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full overflow-hidden select-none pointer-events-none", className)}
            style={{ height: "clamp(36px, 6vw, 72px)" }}
            aria-hidden="true"
        >
            <div
                className="grid w-full h-full"
                style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
            >
                {cells.map((filled, i) => (
                    <div
                        key={i}
                        className={cn("pixel-cell", filled ? colorClass : "bg-transparent")}
                    />
                ))}
            </div>
        </div>
    );
}
