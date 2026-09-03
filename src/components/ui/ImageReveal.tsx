"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeEditorial } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  parallaxStrength?: number;
}

export function ImageReveal({
  children,
  className,
  parallaxStrength = 24,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-parallaxStrength, parallaxStrength]);

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden relative rounded-xl", className)}
    >
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.15, ease: easeEditorial }}
        className="w-full h-full"
      >
        <motion.div
          initial={{ scale: 1.08, opacity: 0.7 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.25, ease: easeEditorial }}
          style={{ y }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
