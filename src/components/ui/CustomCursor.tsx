"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Hide default cursor
        document.body.style.cursor = "none";

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
            gsap.to(followerRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        const handleHover = () => {
            gsap.to([cursorRef.current, followerRef.current], {
                scale: 2,
                backgroundColor: "white",
                mixBlendMode: "difference",
                duration: 0.3
            });
        };

        const handleUnhover = () => {
            gsap.to([cursorRef.current, followerRef.current], {
                scale: 1,
                backgroundColor: "#7B4DFF",
                mixBlendMode: "normal",
                duration: 0.3
            });
        };

        window.addEventListener("mousemove", moveCursor);

        // Add magnetic effect listeners
        const interactables = document.querySelectorAll("a, button, .cursor-hover");
        interactables.forEach(el => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleUnhover);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.style.cursor = "auto";
            interactables.forEach(el => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleUnhover);
            });
        };
    });

    // Only render on desktop to avoid issues on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-premium-purple rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
            />
        </>
    );
}
