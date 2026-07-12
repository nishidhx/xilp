"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

interface LazyBlogContentProps {
    children: React.ReactNode;
}

export function LazyBlogContent({ children }: LazyBlogContentProps) {
    const [mounted, setMounted] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const lenis = useLenis();

    useEffect(() => {
        // Check if the component is already in or close to the viewport
        const rect = containerRef.current?.getBoundingClientRect();
        const isInViewport =
            rect &&
            rect.top < window.innerHeight + 300 &&
            rect.bottom > -300;

        if (isInViewport) {
            setHasIntersected(true);
        }
        setMounted(true);

        if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
            setHasIntersected(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "300px 0px", // Pre-load when within 300px of viewport
            }
        );

        if (containerRef.current && !isInViewport) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // Resize Lenis whenever the container height changes (due to unmounting, mounting, or image loads)
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
