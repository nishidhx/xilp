"use client"
import React, { createContext, useState } from "react";

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
    const [currentTheme, settheme] = useState("dark")

    const toggleTheme = () => {
        settheme(prevtheme => prevtheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};
