"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { Laptop, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center gap-3">
      <Laptop className={`${current === "system" ? "" : "opacity-40"} h-5 w-5`} />

      <Sun className={`${current === "light" ? "" : "opacity-40"} h-5 w-5`} />
      <Switch
        checked={current === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <Moon className={`${current === "dark" ? "" : "opacity-40"} h-5 w-5`} />
    </div>
  );
}
