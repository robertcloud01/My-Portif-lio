"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const snippets = [
    "const future = await build();",
    "if (coffee) return code;",
    "<NextLevel />",
    "import { Magic } from 'gsap';",
    "git push origin master",
    "while(alive) { learn(); }",
    "npm install universe",
    "div { display: flex; }",
    "console.log('Hello World');",
    "export default function Dream()",
    "data => data.map(idea => reality)",
    "sudo rm -rf /bugs",
    "404: Limit Not Found",
    "opacity: 1;"
];

interface CodeFocusProps {
    children: React.ReactNode;
}

export function CodeFocus({ children }: CodeFocusProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const spawnSnippet = (e: MouseEvent) => {
        if (!containerRef.current) return;

        // Spawn multiple snippets per move for coverage
        const count = 3;

        for (let i = 0; i < count; i++) {
            const el = document.createElement("div");
            el.innerText = snippets[Math.floor(Math.random() * snippets.length)];

            // Random style
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 80 + 20; // Random distance
            const moveX = Math.cos(angle) * velocity;
            const moveY = Math.sin(angle) * velocity;

            el.style.position = "absolute";
            el.style.color = Math.random() > 0.5 ? "#7B4DFF" : "#00F0FF"; // Purple or Cyan
            el.style.opacity = "0";
            el.style.fontFamily = "'Fira Code', monospace";
            el.style.fontSize = `${Math.random() * 0.8 + 0.6}rem`;
            el.style.fontWeight = Math.random() > 0.5 ? "bold" : "normal";
            el.style.pointerEvents = "none";
            // Widen the spawn area significantly
            el.style.top = `${e.offsetY + Math.random() * 200 - 100}px`;
            el.style.left = `${e.offsetX + Math.random() * 200 - 100}px`;
            el.style.whiteSpace = "nowrap";
            el.style.zIndex = "20"; // Higher than before
            el.style.textShadow = "0 0 10px currentColor";

            containerRef.current.appendChild(el);

            // Explosive Animation
            gsap.fromTo(el,
                { scale: 0.5, opacity: 0 },
                {
                    opacity: Math.random() * 0.5 + 0.5, // Random max opacity
                    scale: 1,
                    x: moveX,
                    y: moveY,
                    duration: Math.random() * 0.8 + 0.4,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to(el, {
                            opacity: 0,
                            scale: 1.2,
                            duration: 0.3,
                            onComplete: () => el.remove()
                        })
                    }
                }
            );
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        // Higher probability (less throttle)
        if (Math.random() > 0.5) {
            spawnSnippet(e.nativeEvent);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative inline-block group"
            onMouseMove={handleMouseMove}
        >
            <div className="relative z-10">{children}</div>
        </div>
    );
}
