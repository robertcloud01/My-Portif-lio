"use client";

import { useRef, useState } from "react";

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface TextScrambleProps {
    children: string;
    className?: string;
    speed?: number;
}

export function TextScramble({ children, className, speed = 40 }: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(children);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startScramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current!);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                children
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) return children[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= children.length) {
                clearInterval(intervalRef.current!);
            }

            iteration += 1 / 3;
        }, speed);
    };

    return (
        <span
            className={className}
            onMouseEnter={startScramble}
        >
            {displayText}
        </span>
    );
}
