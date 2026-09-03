"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { easeEditorial } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  duration?: number;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 28,
  className,
  duration = 0.85,
  once = true,
  ...props
}: RevealProps) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-6%" }}
      transition={{
        duration,
        ease: easeEditorial,
        delay,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
