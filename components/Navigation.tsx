"use client";
import { useTheme } from "@/hooks/theme";
import { Search } from "@/icons/search-icon";
import { Moon, Sun } from "@/icons/theme-icon";
import Link from "next/link";

export const Navigation = ({}) => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div
      className="navigation mx-auto https://discord.com/channels/1418625695432839342/1428711888501604423
    max-w-screen
    md:max-w-2xl px-4 pt-4 flex h-14 items-center justify-between bg-transparent"
    >
      <div className="navigator flex flex-row md:text-sm text-slate-50/50 gap-4 md:gap-6 justify-center items-center hanken-grotesk">
        <Link href={"/"}>Home</Link>
        <Link href={"/work"}>Work</Link>
        <Link href={"/project"}>Projects</Link>
        <Link href={"/resume"}>Resume</Link>
      </div>

      {/* Serach bar */}
      <div className="flex items-center">
        <div className="search-bar flex gap-2">
          <div className="md:w-30 md:border flex justify-between items-center px-2 md:border-slate-50/20 rounded-2xl md:bg-slate-50/5 h-8 p-5">
            <Search className="size-5 md:size-4 font-bold" />
            <div className="gap-1 px-2 hidden md:flex">
              <kbd className="bg-slate-100/10 px-1 rounded-md">Ctrl</kbd>
              <kbd className="bg-slate-100/10 px-1 rounded-md">K</kbd>
            </div>
          </div>
        </div>

        {/* Theme Switcher */}
        <div className="theme-switcher">
          <button
            onClick={toggleTheme}
            className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full transition-all duration-500 active:scale-90"
          >
            {/* Sun minimize logic */}
            <Sun
              className={`absolute transition-all duration-500 text-slate-50/50 size-5
          ${
            currentTheme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-180 scale-0 opacity-0"
          }`}
            />

            {/* Moon minimize logic */}
            <Moon
              className={`absolute transition-all opacity-50 duration-500 size-5 text-slate-50/50
          ${
            currentTheme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-180 scale-0 opacity-0"
          }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
