"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CountUpProps {
    value: string;
    className?: string;
}

/**
 * Animates a number counting up from 0 when it enters the viewport.
 * Accepts strings like "50+", "98%", "5+" and animates the numeric part
 * while preserving prefix/suffix characters (+, %, etc).
 */
export function CountUp({ value, className }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const match = value.match(/[\d.]+/);
        if (!match || !ref.current) return;

        const numericValue = parseFloat(match[0]);
        const suffix = value.slice(match.index! + match[0].length);
        const prefix = value.slice(0, match.index);
        const counter = { val: 0 };

        gsap.to(counter, {
            val: numericValue,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 90%",
                once: true,
            },
            onUpdate: () => {
                if (ref.current) {
                    const display = Number.isInteger(numericValue)
                        ? Math.round(counter.val)
                        : counter.val.toFixed(1);
                    ref.current.textContent = `${prefix}${display}${suffix}`;
                }
            },
        });
    }, { scope: ref, dependencies: [value] });

    return <span ref={ref} className={className}>0</span>;
}
