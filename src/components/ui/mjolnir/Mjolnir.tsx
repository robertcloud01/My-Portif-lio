'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './mjolnir.module.css';
import MjolnirSVG from './MjolnirSVG';
import { initParticles, ParticleSystemControls } from './particleSystem';

interface LightningPath {
    d: string;
}

interface MjolnirProps {
    className?: string;
    lightningPathsUrl?: string;
}

const Mjolnir: React.FC<MjolnirProps> = ({
    className,
    lightningPathsUrl = '/lottie_paths.json'
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const coreGlowRef = useRef<HTMLDivElement>(null);
    const hammerPathRef = useRef<SVGPathElement>(null);
    const energyLinesGroupRef = useRef<SVGGElement>(null);
    const particleControls = useRef<ParticleSystemControls | null>(null);

    // Meticulous state sync with script.js
    const stateRef = useRef({
        scrollIntensity: 0,
        isHovering: false,
        isIntroDone: false,
        lightningPaths: [] as string[]
    });

    const [strokeAnim, setStrokeAnim] = useState<gsap.core.Tween | null>(null);
    const delayedCallRef = useRef<gsap.core.Tween | null>(null);
    const tickerRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    // 1. Particle System Init
    useEffect(() => {
        if (!canvasRef.current) return;
        particleControls.current = initParticles(
            canvasRef.current,
            () => ({ scrollIntensity: stateRef.current.scrollIntensity }),
            () => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
        );
        return () => particleControls.current?.cleanup();
    }, []);

    // 2. Fetch Data & Start
    useEffect(() => {
        fetch(lightningPathsUrl)
            .then(res => res.json())
            .then((data: LightningPath[]) => {
                stateRef.current.lightningPaths = data.map(item => item.d);
                playIntro();
            })
            .catch(() => {
                stateRef.current.lightningPaths = ["M0,0 L100,100"];
                playIntro();
            });
    }, [lightningPathsUrl]);

    // 3. Lightning Engine (Exact match to script.js)
    const createLightning = useCallback(() => {
        if (stateRef.current.lightningPaths.length === 0 || !energyLinesGroupRef.current) return;

        const ns = "http://www.w3.org/2000/svg";
        const path = document.createElementNS(ns, "path");
        const template = stateRef.current.lightningPaths[Math.floor(Math.random() * stateRef.current.lightningPaths.length)];
        path.setAttribute("d", template);

        const colors = ["#bef8ff", "#ffffff", "#4FC3FF"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        path.setAttribute("stroke", color);
        path.setAttribute("fill", "none");

        const baseWidth = Math.random() * 2 + 0.5;
        path.setAttribute("stroke-width", (baseWidth * (1 + stateRef.current.scrollIntensity * 2)).toString());

        path.setAttribute("filter", "url(#electric-glow-filter)");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        path.style.opacity = "0";

        const scale = (Math.random() * 0.4 + 0.3) * (1 + stateRef.current.scrollIntensity * 0.5);
        const rotation = Math.random() * 360;
        const maxOffset = 150;
        const dx = (Math.random() - 0.5) * 2 * maxOffset;
        const dy = (Math.random() - 0.5) * 2 * maxOffset;

        gsap.set(path, {
            transformOrigin: "50% 50%",
            x: dx,
            y: dy,
            scale: scale,
            rotation: rotation,
            xPercent: -50,
            yPercent: -50
        });

        energyLinesGroupRef.current.appendChild(path);

        const tl = gsap.timeline({ onComplete: () => path.remove() });
        tl.to(path, { opacity: 1, duration: 0.05, ease: "steps(1)" })
            .to(path, { opacity: Math.random() * 0.5, duration: 0.05, ease: "steps(1)" })
            .to(path, { opacity: 1, duration: 0.05, ease: "steps(1)" })
            .to(path, { opacity: 0, duration: 0.1 + Math.random() * 0.2, ease: "power2.out" });
    }, []);

    const lightningLoop = useCallback(() => {
        let chance = 0.3;
        if (stateRef.current.scrollIntensity > 0.1) chance = 0.8;
        if (stateRef.current.isHovering) chance = 0.9;

        if (Math.random() < chance) {
            const count = Math.floor(1 + stateRef.current.scrollIntensity * 3);
            for (let i = 0; i < count; i++) createLightning();
        }

        let delay = 0.1 + Math.random() * 1.5;
        if (stateRef.current.scrollIntensity > 0.5) delay = 0.05 + Math.random() * 0.2;
        if (stateRef.current.isHovering) delay = 0.1 + Math.random() * 0.3;

        // Use a ref to store the delayedCall so it can be killed
        delayedCallRef.current = gsap.delayedCall(delay, lightningLoop);
    }, [createLightning]);

    // 4. Intro & Impact (Exact match to script.js)
    const playIntro = () => {
        if (!wrapperRef.current || !coreGlowRef.current || !svgRef.current) return;

        const tl = gsap.timeline({
            onComplete: () => {
                stateRef.current.isIntroDone = true;
                startIdleState();
            }
        });

        // Setup Initial
        gsap.set(wrapperRef.current, { y: "-150vh", scale: 2, opacity: 0 });
        gsap.set(coreGlowRef.current, { opacity: 0.5, scale: 0.9 });

        // 1. Fall
        tl.to(wrapperRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.in"
        });

        // 2. Impact
        tl.add(() => {
            // Flash Glow
            gsap.fromTo(coreGlowRef.current,
                { scale: 3, opacity: 1, background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(79, 195, 255, 0) 70%)" },
                { scale: 0.9, opacity: 0.5, background: "radial-gradient(circle, rgba(79, 195, 255, 0.4) 0%, rgba(79, 195, 255, 0) 70%)", duration: 0.5, ease: "power2.out" }
            );

            // Screen Flash
            if (containerRef.current) {
                gsap.fromTo(containerRef.current,
                    { backgroundColor: "#203a4a" },
                    { backgroundColor: "transparent", duration: 0.3, ease: "power2.out" }
                );
            }

            // Heavy Shake
            shakeScreen(20, 0.5);

            // Explosion Particles
            particleControls.current?.explode(0, 0);

            // Lightning Burst
            for (let i = 0; i < 5; i++) setTimeout(createLightning, i * 50);
        });

        // 3. Settling bounce
        tl.to(wrapperRef.current, {
            y: 10,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut"
        });
    };

    const shakeScreen = (power: number, duration: number) => {
        if (!svgRef.current) return;
        gsap.to(svgRef.current, {
            x: `random(-${power}, ${power})`,
            y: `random(-${power}, ${power})`,
            duration: 0.05,
            repeat: Math.floor(duration / 0.05),
            yoyo: true,
            ease: "none",
            onComplete: () => { gsap.set(svgRef.current, { x: 0, y: 0 }); }
        });
    };

    // 5. Idle & Interactions
    const startIdleState = () => {
        lightningLoop();

        // Float
        gsap.to(wrapperRef.current, {
            y: -15,
            rotation: 1.5,
            duration: 5,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut"
        });

        // Runes Flow
        if (hammerPathRef.current) {
            const anim = gsap.to(hammerPathRef.current, {
                strokeDashoffset: "-=2000",
                duration: 20,
                repeat: -1,
                ease: "none"
            });
            setStrokeAnim(anim);
        }

        // Vibration Ticker
        const tickerFunc = () => {
            if (!svgRef.current) return;
            if (stateRef.current.scrollIntensity <= 0.01 && !stateRef.current.isHovering) {
                gsap.set(svgRef.current, { x: 0, y: 0 });
                return;
            }
            let shake = 0;
            if (stateRef.current.isHovering) shake = 2;
            shake += stateRef.current.scrollIntensity * 15;

            const rx = (Math.random() - 0.5) * shake;
            const ry = (Math.random() - 0.5) * shake;
            gsap.set(svgRef.current, { x: rx, y: ry });
        };
        gsap.ticker.add(tickerFunc);
        tickerRef.current = tickerFunc;

        initScrollInteraction();
    };

    const initScrollInteraction = useCallback(() => {
        ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // Increased scrub for smoother "follow"
            onUpdate: (self) => {
                stateRef.current.scrollIntensity = self.progress;
                const intensity = self.progress;

                // Sync background darkening (hero style)
                if (containerRef.current) {
                    const darkness = intensity;
                    const r = Math.floor(26 * (1 - darkness));
                    const g = Math.floor(34 * (1 - darkness));
                    const b = Math.floor(51 * (1 - darkness));
                    containerRef.current.style.background = `radial-gradient(circle at center, rgb(${r}, ${g}, ${b}) 0%, #000000 70%)`;
                }

                // Update Core Glow - More dramatic scaling
                if (coreGlowRef.current) {
                    // Reaches peak scale (2.5) and opacity (1.0) based on scroll
                    gsap.to(coreGlowRef.current, {
                        scale: 0.9 + intensity * 2.5,
                        opacity: 0.5 + intensity * 0.5,
                        duration: 0.1,
                        overwrite: "auto"
                    });
                }

                // Hammer Path Width - Thicker as we scroll
                if (hammerPathRef.current) {
                    gsap.to(hammerPathRef.current, {
                        strokeWidth: 1.5 + intensity * 6,
                        duration: 0.1
                    });
                }
            }
        });
    }, []);

    const startVibrationTicker = useCallback(() => {
        const tickerFunc = () => {
            if (!svgRef.current) return;
            if (stateRef.current.scrollIntensity <= 0.01 && !stateRef.current.isHovering) {
                gsap.set(svgRef.current, { x: 0, y: 0 });
                return;
            }
            let shake = 0;
            if (stateRef.current.isHovering) shake = 2;
            shake += stateRef.current.scrollIntensity * 15;

            const rx = (Math.random() - 0.5) * shake;
            const ry = (Math.random() - 0.5) * shake;
            gsap.set(svgRef.current, { x: rx, y: ry });
        };
        gsap.ticker.add(tickerFunc);
        return () => gsap.ticker.remove(tickerFunc);
    }, []);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        return () => {
            if (delayedCallRef.current) delayedCallRef.current.kill();
            if (tickerRef.current) gsap.ticker.remove(tickerRef.current);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, { scope: containerRef });

    const handleMouseEnter = () => {
        if (!stateRef.current.isIntroDone) return;
        stateRef.current.isHovering = true;
        if (hammerPathRef.current) gsap.to(hammerPathRef.current, { stroke: "#ffffff", duration: 0.3 });
        if (strokeAnim) gsap.to(strokeAnim, { timeScale: 10, duration: 0.5 });
    };

    const handleMouseLeave = () => {
        if (!stateRef.current.isIntroDone) return;
        stateRef.current.isHovering = false;
        if (hammerPathRef.current) gsap.to(hammerPathRef.current, { stroke: "#c2f0ff", duration: 0.5 });
        if (strokeAnim) gsap.to(strokeAnim, { timeScale: 1, duration: 1 });
    };

    return (
        <div ref={containerRef} className={`${styles.container} ${className || ''}`}>
            <canvas ref={canvasRef} className={styles.canvas} />
            <div ref={coreGlowRef} className={styles.coreGlow} />

            <div
                ref={wrapperRef}
                className={styles.wrapper}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <MjolnirSVG
                    ref={svgRef}
                    hammerBodyRef={hammerPathRef}
                    lightningRef={energyLinesGroupRef}
                />
            </div>
        </div>
    );
};

export default Mjolnir;
