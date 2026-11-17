"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { EcosystemVisual } from "@/components/home/EcosystemVisual";
import { SpatialCanvas } from "@/components/home/SpatialCanvas";
import { easeEditorial } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const stageScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.95]);
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 32]);

  // Interactive 3D tilt on pointer move over the hero stage
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 180,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 180,
    damping: 24,
  });

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleStageMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#000000] text-[#F5F5F7] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Interactive 3D Spatial Constellation Canvas */}
      <SpatialCanvas />

      {/* Subtle spatial radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-[#0071E3]/15 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Left */}
          <motion.div
            style={{ y: yText }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeEditorial }}
              className="text-xs sm:text-sm font-medium text-[#86868B] mb-3"
            >
              {portfolioData.hero.name} · {portfolioData.hero.title[language]}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeEditorial, delay: 0.08 }}
              className="text-4xl sm:text-5xl xl:text-[3.75rem] font-semibold tracking-tight text-[#F5F5F7] leading-[1.05] mb-5"
            >
              <span>{portfolioData.hero.headline.part1[language]} </span>
              <span>{portfolioData.hero.headline.part2[language]} </span>
              <span className="text-[#86868B]">
                {portfolioData.hero.headline.part3[language]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeEditorial, delay: 0.16 }}
              className="text-sm sm:text-lg text-[#A1A1A6] leading-relaxed max-w-md mb-8"
            >
              {portfolioData.hero.subheadline[language]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeEditorial, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href={`/${language}${portfolioData.hero.primaryCta.href}`}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-medium transition-colors"
              >
                <span>{portfolioData.hero.primaryCta.label[language]}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href={`/${language}${portfolioData.hero.secondaryCta.href}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-[#F5F5F7] text-sm font-medium transition-colors"
              >
                {portfolioData.hero.secondaryCta.label[language]}
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Right: 3D Pointer-Tilt + Scroll-Linked Spatial Stage */}
          <div
            className="lg:col-span-7 w-full"
            style={{ perspective: 1200 }}
            onMouseMove={handleStageMouseMove}
            onMouseLeave={handleStageMouseLeave}
          >
            <motion.div
              style={{
                scale: stageScale,
                y: stageY,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: easeEditorial, delay: 0.18 }}
              className="rounded-[28px] p-2 sm:p-3 bg-[#161617]/90 backdrop-blur-xl border border-white/15 shadow-[0_32px_80px_rgba(0,113,227,0.2)]"
            >
              <EcosystemVisual />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
