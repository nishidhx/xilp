"use client"

import { useEffect } from "react";

export default function ClickSoundProvider() {
  useEffect(() => {
    const audio = new Audio("/sounds/click.mp3");
    audio.volume = 0.3;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // only play for interactive elements
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]')
      ) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;

}
