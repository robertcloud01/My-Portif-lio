"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type DeviceType = "desktop" | "tablet" | "mobile";

interface DeviceFrameProps {
    children: ReactNode;
    device: DeviceType;
    className?: string;
}

export function DeviceFrame({ children, device, className }: DeviceFrameProps) {
    const variants = {
        desktop: {
            width: "100%",
            maxWidth: "100%",
            aspectRatio: "16/9",
            borderRadius: "12px",
        },
        tablet: {
            width: "768px",
            maxWidth: "100%",
            aspectRatio: "3/4",
            borderRadius: "24px",
        },
        mobile: {
            width: "375px",
            maxWidth: "100%",
            aspectRatio: "9/19.5",
            borderRadius: "32px",
        }
    };

    return (
        <div className={cn("flex justify-center items-center w-full h-full p-4 transition-all duration-500", className)}>
            <motion.div
                initial="desktop"
                animate={device}
                variants={variants}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={cn(
                    "relative overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm",
                    device === "mobile" ? "border-x-4 border-y-8 border-gray-800" : "",
                    device === "tablet" ? "border-4 border-gray-800" : ""
                )}
            >
                {/* Browser/Device Bar (Simplified) */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-black/40 flex items-center px-3 gap-1.5 z-20">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>

                <div className="w-full h-full pt-6 bg-black">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
