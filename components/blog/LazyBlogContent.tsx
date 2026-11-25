"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { useLenis } from "lenis/react";

interface LazyBlogContentProps {
    children: React.ReactNode;
}

// Helper for hydration-safe client detection
const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function LazyBlogContent({ children }: LazyBlogContentProps) {
    const mounted = useSyncExternalStore(
        emptySubscribe,
        getClientSnapshot,
        getServerSnapshot
    );
    const [hasIntersected, setHasIntersected] = useState(
        () => typeof window !== "undefined" && !("IntersectionObserver" in window)
    );
    const containerRef = useRef<HTMLDivElement>(null);
    const lenis = useLenis();

    useEffect(() => {
        if (hasIntersected || !containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Fires asynchronously on mount if already in viewport, or when scrolled near
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "300px 0px",
            }
        );

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, [hasIntersected]);

    // Resize Lenis whenever the container height changes
    useEffect(() => {
        if (!lenis || !containerRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(() => {
                lenis.resize();
            });
        });

        resizeObserver.observe(containerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [lenis]);

    // SSR and initial hydration render children to preserve SEO.
    // After mount, if the user hasn't scrolled near it, unmount children to save memory.
    const shouldRender = !mounted || hasIntersected;

    return (
        <div ref={containerRef} className="min-h-[200px]">
            {shouldRender ? (
                children
            ) : (
                <div className="flex flex-col gap-4 animate-pulse py-8 opacity-40">
                    <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                    <div className="h-4 bg-slate-800 rounded w-1/2"></div>
                    <div className="h-4 bg-slate-800 rounded w-2/3"></div>
                    <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                </div>
            )}
        </div>
    );
}
