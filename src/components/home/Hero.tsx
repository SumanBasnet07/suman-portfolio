"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { EcosystemVisual } from "@/components/home/EcosystemVisual";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { easeEditorial } from "@/lib/animations";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={containerRef}
      className="relative pt-28 pb-12 md:pt-36 md:pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Hero Left: Dominant Editorial Story */}
          <motion.div
            style={{ y: yText }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeEditorial, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#111111]/12 shadow-xs mb-5"
            >
              <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#111111] font-medium">
                {portfolioData.hero.eyebrow[language]}
              </span>
            </motion.div>

            {/* Author Title / Identity */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeEditorial, delay: 0.2 }}
              className="mb-4"
            >
              <h2 className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[#666666] font-semibold">
                {portfolioData.hero.name} · {portfolioData.hero.title[language]}
              </h2>
            </motion.div>

            {/* Hero Heading: Line by Line Editorial Reveal */}
            <div className="overflow-hidden mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111] leading-[1.12]">
                <span className="block overflow-hidden">
                  <motion.span
                    key={`${language}-part1`}
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.95,
                      ease: easeEditorial,
                      delay: 0.25,
                    }}
                    className="block"
                  >
                    {portfolioData.hero.headline.part1[language]}
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    key={`${language}-part2`}
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.95,
                      ease: easeEditorial,
                      delay: 0.38,
                    }}
                    className="block font-normal"
                  >
                    {portfolioData.hero.headline.part2[language]}
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    key={`${language}-part3`}
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.95,
                      ease: easeEditorial,
                      delay: 0.5,
                    }}
                    className="block text-[#2563EB] font-normal italic"
                  >
                    {portfolioData.hero.headline.part3[language]}
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <motion.p
              key={`${language}-subhead`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: easeEditorial, delay: 0.62 }}
              className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-xl mb-8 font-light"
            >
              {portfolioData.hero.subheadline[language]}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: easeEditorial, delay: 0.74 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                href={`/${language}${portfolioData.hero.primaryCta.href}`}
                variant="primary"
                className="gap-2 group shadow-md"
              >
                <span>{portfolioData.hero.primaryCta.label[language]}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href={`/${language}${portfolioData.hero.secondaryCta.href}`}
                variant="secondary"
              >
                <span>{portfolioData.hero.secondaryCta.label[language]}</span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Hero Right: Dominant Ecosystem Visual */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <EcosystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
