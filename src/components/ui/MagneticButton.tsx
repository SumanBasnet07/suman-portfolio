"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  magneticStrength?: number;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  magneticStrength = 0.35,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * magneticStrength;
    const distanceY = (clientY - centerY) * magneticStrength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-[#111111] text-[#F7F7F4] hover:bg-[#2563EB] active:scale-[0.98] border border-transparent shadow-sm",
    secondary:
      "bg-transparent text-[#111111] border border-[#111111]/20 hover:border-[#111111] hover:bg-[#111111]/5",
    ghost:
      "bg-transparent text-[#111111] hover:text-[#2563EB] p-0 border-none",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.1 }}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors text-sm tracking-wide cursor-pointer select-none",
        variant !== "ghost" && "px-6 py-3.5 rounded-full",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a href={href} target={target} rel={rel} className="inline-block">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-0 cursor-pointer">
      {content}
    </button>
  );
}
