"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [complete, setComplete] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => setComplete(true)
        });

        // Loading Progress
        tl.to(".loader-bar", {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut"
        });

        // Fade Out Text
        tl.to(".loader-text", {
            opacity: 0,
            y: -20,
            duration: 0.5,
            stagger: 0.1
        });

        // Reveal Curtain
        tl.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut"
        });

    }, { scope: containerRef });

    if (complete) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center">
            <div className="text-white font-mono text-xs mb-4 loader-text">INITIALIZING SYSTEM...</div>
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="loader-bar w-0 h-full bg-premium-purple shadow-[0_0_10px_2px_rgba(123,77,255,0.5)]" />
            </div>
            <div className="mt-2 text-gray-500 font-mono text-[10px] loader-text">LOADING ASSETS</div>
        </div>
    );
}
