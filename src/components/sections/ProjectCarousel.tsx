"use client";

import { useRef, useState, useEffect, useLayoutEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectMeta } from "@/data/projectMeta";
import { Button } from "@/components/ui/Button";
import { TechLoader } from "@/components/ui/TechLoader";
import { ExternalLink, Github, Construction, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectShowcaseItemProps {
    project: any;
    meta: ProjectMeta;
}

function ProjectShowcaseItem({ project, meta }: ProjectShowcaseItemProps) {
    return (
        <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 flex flex-col gap-6 p-4 select-none group relative">
            {/* Status Badge */}
            <div className="absolute top-0 right-4 z-20">
                {meta.status === "in-progress" ? (
                    <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-md flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider animate-pulse">
                        <Construction className="w-3 h-3" />
                        In Development
                    </div>
                ) : meta.status === "completed" ? (
                    <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-md flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-3 h-3" />
                        Completed
                    </div>
                ) : null}
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-white">{project.title}</h3>
                    <p className="text-xs md:text-sm text-gray-400 mt-1 line-clamp-2 max-w-md">{project.description}</p>
                </div>
            </div>

            {/* Static Browser Frame */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a1a] group-hover:border-white/20 transition-colors">
                {/* Browser Chrome */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#2a2a2a] flex items-center px-4 gap-2 z-10 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div className="ml-4 flex-1 h-5 bg-[#1a1a1a] rounded-sm text-[10px] text-gray-500 flex items-center px-2 truncate font-mono">
                        {meta.previewUrl || "loading-preview..."}
                    </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 top-8 bg-black overflow-hidden">
                    {meta.previewUrl ? (
                        <div className="w-full h-full relative group/frame">
                            {/* Scaled iframe: render at 2x size then scale to 50% for better framing */}
                            <div className="absolute inset-0 overflow-hidden">
                                <iframe
                                    src={meta.previewUrl}
                                    className="border-none pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    title={project.title}
                                    loading="lazy"
                                    style={{
                                        width: '200%',
                                        height: '200%',
                                        transform: 'scale(0.5)',
                                        transformOrigin: 'top left',
                                    }}
                                />
                            </div>
                            {/* Dark overlay that fades out on hover */}
                            <div className="absolute inset-0 bg-black/20 group-hover/frame:bg-transparent transition-colors duration-500" />

                            {/* Interaction Hint */}
                            <a
                                href={meta.previewUrl}
                                target="_blank"
                                className="absolute bottom-4 right-4 opacity-0 group-hover/frame:opacity-100 transition-all transform translate-y-2 group-hover/frame:translate-y-0 bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-200"
                            >
                                Visit Site <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
                            <TechLoader />
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Actions */}
            <div className="flex gap-3">
                {meta.previewUrl && (
                    <Button variant="outline" size="sm" asChild className="h-9 text-xs flex-1 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
                        <Link href={meta.previewUrl} target="_blank">
                            Open Project <ExternalLink className="ml-2 w-3 h-3" />
                        </Link>
                    </Button>
                )}
                <Button variant="ghost" size="sm" className="h-9 text-xs text-gray-400 hover:text-white flex-1 hover:bg-white/5">
                    <Github className="mr-2 w-3 h-3" /> View Source
                </Button>
            </div>
        </div>
    );
}

export function ProjectCarousel({ items, meta }: { items: any[], meta: ProjectMeta[] }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });

    // Use ResizeObserver for robust constraint updates
    useLayoutEffect(() => {
        const updateConstraints = () => {
            if (containerRef.current && wrapperRef.current) {
                const containerWidth = containerRef.current.scrollWidth;
                const wrapperWidth = wrapperRef.current.offsetWidth;

                // If content is wider than wrapper, allow dragging
                if (containerWidth > wrapperWidth) {
                    // Left constraint is negative (scrollable amount)
                    // We add a large buffer to ensure the last item is fully reachable and "bouncy"
                    // The issue might be that scrollWidth isn't including the last margin.
                    // Let's add an extra safety margin.
                    const extraMargin = 200;
                    setConstraints({
                        left: -(containerWidth - wrapperWidth + extraMargin),
                        right: 0
                    });
                } else {
                    setConstraints({ left: 0, right: 0 });
                }
            }
        };

        // Initial update
        updateConstraints();

        // ResizeObserver for reliable updates when content loads or window resizes
        const observer = new ResizeObserver(() => {
            updateConstraints();
        });

        if (containerRef.current) observer.observe(containerRef.current);
        if (wrapperRef.current) observer.observe(wrapperRef.current);

        window.addEventListener('resize', updateConstraints);
        return () => {
            window.removeEventListener('resize', updateConstraints);
            observer.disconnect();
        };
    }, [items]); // Re-calculate if items change

    // Map items to their meta, preserving array order
    const sortedItems = useMemo(() => items
        .map((item, index) => ({ item, meta: meta[index], originalIndex: index }))
        .sort((a, b) => {
            // Only sort: items with preview URL come before items without
            const aHasUrl = a.meta?.previewUrl ? 1 : 0;
            const bHasUrl = b.meta?.previewUrl ? 1 : 0;
            return bHasUrl - aHasUrl;
        }), [items, meta]);

    return (
        <div ref={wrapperRef} className="relative w-full py-10 group/carousel overflow-hidden">
            {/* Gradient Masks for edges - Smooth fade out */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Draggable container using Framer Motion for superior physics */}
            <motion.div
                ref={containerRef}
                className="flex cursor-grab active:cursor-grabbing px-[5vw] md:px-[10vw] w-max" // w-max ensures it takes up full width of children
                drag="x"
                dragConstraints={constraints}
                dragElastic={0.1}
                dragMomentum={true}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                whileTap={{ cursor: "grabbing" }}
            >
                {sortedItems.map(({ item, meta }, index) => {
                    if (!meta) return null;

                    return (
                        <motion.div
                            key={index}
                            className="mr-8 md:mr-16 last:mr-0 flex-shrink-0"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectShowcaseItem project={item} meta={meta} />
                        </motion.div>
                    );
                })}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-center text-gray-600 text-xs mt-8 uppercase tracking-widest"
            >
                Drag to explore
            </motion.div>
        </div>
    );
}
