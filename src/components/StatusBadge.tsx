
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

export default function StatusBadge() {
    const [online, setOnline] = useState<boolean | null>(null);

    useEffect(() => {
        // Initial fetch
        const fetchStatus = async () => {
            const { data } = await supabase
                .from("status")
                .select("online")
                .eq("id", 1)
                .single();
            if (data) {
                setOnline(data.online);
            }
        };

        fetchStatus();

        // Realtime subscription
        const subscription = supabase
            .channel("status_updates")
            .on(
                "postgres_changes",
                {
                    event: "UPDATE",
                    schema: "public",
                    table: "status",
                    filter: "id=eq.1",
                },
                (payload) => {
                    setOnline(payload.new.online);
                }
            )
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    if (online === null) return null; // Loading state

    return (
        <div
            className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-500",
                online
                    ? "bg-green-500/10 border-green-500/20 text-green-500"
                    : "bg-red-500/10 border-red-500/20 text-red-500"
            )}
        >
            <span className="relative flex h-2 w-2">
                {online && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                )}
                <span
                    className={cn(
                        "relative inline-flex rounded-full h-2 w-2",
                        online ? "bg-green-500" : "bg-red-500"
                    )}
                ></span>
            </span>
            {online ? "Disponível agora" : "Indisponível no momento"}
        </div>
    );
}
