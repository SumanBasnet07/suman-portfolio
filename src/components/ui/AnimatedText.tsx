"use client";

import React from "react";
import { motion } from "framer-motion";
import { easeEditorial } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function AnimatedText({
  text,
  className,
  delay = 0.1,
  as: Component = "div",
}: AnimatedTextProps) {
  const lines = Array.isArray(text) ? text : [text];

  return (
    <Component className={cn("overflow-hidden", className)}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden pb-1">
          <motion.span
            className="block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.95,
              ease: easeEditorial,
              delay: delay + index * 0.12,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
