"use client";

import { useState } from "react";
import { Volume2, VolumeX, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Wraps the external Mjolnir showcase iframe in a smaller, controllable box:
 * - Shrunk down from full-viewport height to a fixed, responsive height.
 * - A small control bar to mute (unloads the iframe so any audio stops) and
 *   close (collapses the whole block down to a slim "reopen" pill).
 */
export function MjolnirExperience() {
    const [open, setOpen] = useState(true);
    const [muted, setMuted] = useState(false);

    if (!open) {
        return (
            <div className="flex justify-center py-6 bg-black">
                <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 hover:border-premium-purple/50 rounded-full px-4 py-2 transition-colors"
                >
                    <Sparkles className="w-4 h-4 text-premium-purple" />
                    Mostrar experiência Mjolnir
                </button>
            </div>
        );
    }

    return (
        <div className="relative w-full h-[380px] sm:h-[460px] md:h-[560px] bg-black overflow-hidden">
            {/* Control bar */}
            <div className="absolute top-3 right-3 z-20 flex gap-2">
                <button
                    onClick={() => setMuted((m) => !m)}
                    aria-label={muted ? "Ativar som" : "Desativar som"}
                    className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center border transition-colors",
                        "bg-black/60 backdrop-blur border-white/10 text-gray-300 hover:text-white hover:border-white/30"
                    )}
                >
                    {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                    onClick={() => setOpen(false)}
                    aria-label="Fechar"
                    className="w-9 h-9 rounded-full flex items-center justify-center border bg-black/60 backdrop-blur border-white/10 text-gray-300 hover:text-white hover:border-red-400/50 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

            {muted ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-500">
                    <VolumeX className="w-8 h-8" />
                    <span className="text-sm">Som desativado</span>
                    <button
                        onClick={() => setMuted(false)}
                        className="text-xs text-premium-purple hover:underline"
                    >
                        Reativar experiência
                    </button>
                </div>
            ) : (
                <iframe
                    src="https://mjolnir-hazel.vercel.app/"
                    className="w-full h-full border-none bg-transparent block"
                    title="Mjolnir Experience"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            )}
        </div>
    );
}
