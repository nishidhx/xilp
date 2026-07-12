"use client"
import React, { createContext, useEffect, useState } from "react";

export interface ThemeContextType {
  currentTheme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentTheme, settheme] = useState<string>("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ?? "dark";
    settheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    settheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};
