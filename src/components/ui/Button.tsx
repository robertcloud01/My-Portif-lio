"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        // Base styles
        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-premium-purple/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

        const variants = {
            primary: "bg-white text-black hover:bg-gray-200 border border-transparent",
            secondary: "bg-graphite text-white hover:bg-graphite-light border border-white/10",
            outline: "border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40",
            ghost: "text-gray-400 hover:text-white hover:bg-white/5",
            glow: "bg-premium-purple text-white shadow-[0_0_20px_-5px_#7B4DFF] hover:shadow-[0_0_30px_-5px_#7B4DFF] hover:bg-premium-purple/90 border border-transparent",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-6 text-sm",
            lg: "h-14 px-8 text-base",
            icon: "h-10 w-10",
        };

        if (asChild) {
            return (
                <Comp
                    className={cn(baseStyles, variants[variant], sizes[size], className)}
                    ref={ref}
                    {...props}
                >
                    {children}
                </Comp>
            );
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading}
                // Cast props to any because framer-motion props are complex to type perfectly with standard HTML attributes overlap
                {...(props as any)}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children as React.ReactNode}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
