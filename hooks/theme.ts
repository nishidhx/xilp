"use client"
import { ThemeContext } from "@/contexts/ThemeProvider";
import { useContext } from "react";

// custom hook for data consumption
export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeContext;
};
