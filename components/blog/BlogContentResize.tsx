"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

export function BlogContentResize() {
  const lenis = useLenis();

  useEffect(() => {
    requestAnimationFrame(() => {
      lenis?.resize();
    });
  }, [lenis]);

  return null;
}
