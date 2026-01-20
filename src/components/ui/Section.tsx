import { cn } from "@/lib/utils";
import { Container } from "./Container";
import * as React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, containerClassName, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-20 md:py-32 overflow-hidden", className)}
                {...props}
            >
                <Container className={containerClassName}>
                    {children}
                </Container>
            </section>
        );
    }
);

Section.displayName = "Section";
