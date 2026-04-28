"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center gap-1.5 w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-all duration-300 border border-gray-300 dark:border-gray-600 hover:border-teal-400 dark:hover:border-teal-500"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sliding thumb */}
      <div
        className={`absolute w-6 h-6 rounded-full shadow-sm flex items-center justify-center transition-all duration-300 ${
          isDark
            ? 'translate-x-8 bg-gray-900'
            : 'translate-x-0 bg-white'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-blue-400" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-500" />
        )}
      </div>

      {/* Background icons */}
      <Sun className={`w-3.5 h-3.5 text-amber-400 ml-0.5 transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-0'}`} />
      <Moon className={`w-3.5 h-3.5 text-blue-300 ml-auto mr-0.5 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-30'}`} />
    </button>
  );
}