"use client";

import { useEffect, useState, useRef } from "react";

interface GlitchOption {
    text: string;
    className?: string;
}

interface GlitchTextProps {
    text?: string; // Fallback or initial text
    options: (string | GlitchOption)[]; // Options to cycle through
    speed?: number; // Speed of character change in ms
    cycleSpeed?: number; // Speed of word cycle in ms
    className?: string; // Base class
    trigger?: boolean;
}

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function GlitchText({
    text = "",
    options = [],
    speed = 50,
    cycleSpeed = 1500,
    className = "",
    trigger = true,
}: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [currentClass, setCurrentClass] = useState(className);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const cycleRef = useRef<NodeJS.Timeout | null>(null);
    const indexRef = useRef(0);

    // Normalize options to object format
    const normalizedOptions = options.map(opt =>
        typeof opt === 'string' ? { text: opt, className: "" } : opt
    );

    useEffect(() => {
        if (!trigger) return;

        let currentOptionIndex = 0;
        const allOptions = normalizedOptions.length > 0 ? normalizedOptions : [{ text: text, className: "" }];

        // Function to scramble text randomly
        const scramble = (targetText: string, targetClass?: string) => {
            let iteration = 0;
            clearInterval(intervalRef.current as NodeJS.Timeout);

            // Set class immediately if desired, or wait until settled. 
            // For glitch effect, setting it at start of scramble is usually fine.
            if (targetClass !== undefined) {
                setCurrentClass(`${className} ${targetClass}`.trim());
            }

            intervalRef.current = setInterval(() => {
                setDisplayText((prev) =>
                    targetText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return targetText[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iteration >= targetText.length) {
                    clearInterval(intervalRef.current as NodeJS.Timeout);
                }

                iteration += 1 / 3;
            }, speed);
        };

        // Cycle through options
        const cycle = () => {
            if (allOptions.length <= 1) {
                scramble(allOptions[0].text, allOptions[0].className);
                return;
            }

            const currentOption = allOptions[currentOptionIndex];
            scramble(currentOption.text, currentOption.className);

            // Determine next index
            currentOptionIndex = (currentOptionIndex + 1) % allOptions.length;
        };

        // Start cycling
        cycle(); // Initial run
        cycleRef.current = setInterval(cycle, cycleSpeed);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (cycleRef.current) clearInterval(cycleRef.current);
        };
    }, [text, JSON.stringify(options), speed, cycleSpeed, trigger, className]);

    return (
        <span className={`${currentClass} font-mono relative inline-block transition-colors duration-300`}>
            {displayText}
        </span>
    );
}
