"use client";
import { useTheme } from "@/hooks/theme";
import { Moon, Sun } from "@/icons/theme-icon";
import Link from "next/link";

export const Navigation = ({}) => {
  const { currentTheme, toggleTheme } = useTheme();
  return (
    <div className="navigation mx-auto max-w-2xl px-4 flex h-14 items-center justify-between">
      <div className="navigator flex flex-row text-sm font-medium text-slate-50/50 gap-6 justify-center items-center hanken-grotesk">
        <Link href={"/"}>Home</Link>
        <Link href={"/work"}>Work</Link>
        <Link href={"/project"}>Projects</Link>
        <Link href={"/resume"}>Resume</Link>
      </div>


      <div className="theme-switcher">
        <button
          onClick={toggleTheme}
          className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full transition-all duration-500 active:scale-90"
        >
          {/* Sun minimize logic */}
          <Sun
            className={`absolute transition-all duration-500 text-slate-50/50
          ${
            currentTheme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-180 scale-0 opacity-0"
          }`}
          />

          {/* Moon minimize logic */}
          <Moon
            className={`absolute transition-all opacity-50 duration-500 text-slate-50/50
          ${
            currentTheme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-180 scale-0 opacity-0"
          }`}
          />
        </button>
      </div>
    </div>
  );
};
