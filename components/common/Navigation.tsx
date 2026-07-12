"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/theme";
import { Moon, Sun } from "@/icons/theme-icon";
import Link from "next/link";
import { SerachBar } from "./search-bar";
import { Container } from "./container";
import cn from "@/utils/clsx";

export const Navigation = () => {
  const { currentTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Container className="fixed top-0 left-0 right-0 z-50  bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div
        className="navigation mx-auto max-w-screen
    md:max-w-2xl flex h-14 items-center justify-between bg-transparent"
      >
        <div className="navigator flex text-sm text-[#909092] gap-4 md:gap-6 justify-center items-center font-medium">
          <Link href={"/"}>Home</Link>
          <Link href={"/work"}>Work</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/resume"}>Resume</Link>
        </div>

        {/* Serach bar */}
        <div className="flex items-center">
          <SerachBar />

          {/* Theme Switcher */}
          <div className="theme-switcher">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full transition-all duration-500 active:scale-90"
            >
              {/* Sun minimize logic */}
              <Sun
                className={cn(
                  "absolute transition-all duration-500 text-slate-50/50 size-5",
                  mounted && currentTheme === "light"
                    ? "rotate-180 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                )}
              />

              {/* Moon minimize logic */}
              <Moon
                className={cn(
                  "absolute transition-all opacity-50 duration-500 size-5 text-slate-50/50",
                  !mounted || currentTheme === "dark"
                    ? "rotate-180 scale-0 opacity-0"
                    : "-rotate-0 scale-100 opacity-100"
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
