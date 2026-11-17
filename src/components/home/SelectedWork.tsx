"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { HamroLinkShowcase } from "@/components/home/HamroLinkShowcase";
import { DistryaShowcase } from "@/components/home/DistryaShowcase";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  const { language } = useLanguage();
  const isJa = language === "ja";
  const [mobileProject, setMobileProject] = useState<"hamrolink" | "distrya">("hamrolink");

  return (
    <section id="work" className="py-14 md:py-24 bg-white text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-black/10 mb-10 md:mb-16">
          <div>
            <p className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
              {isJa ? "主要プロダクト" : "Selected work"}
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#1D1D1F] tracking-tight mb-2">
              {isJa ? "実績 & 開発システム" : "Products & Systems"}
            </h2>
            <p className="text-sm sm:text-base text-[#6E6E73] max-w-xl">
              {isJa
                ? "商用プロダクト、リビングアーキテクチャ、自律エージェント基盤。"
                : "Production software systems, living architectures, and autonomous business infrastructure."}
            </p>
          </div>

          <p className="text-xs font-medium text-[#86868B] max-w-xs sm:text-right hidden sm:block">
            {isJa
              ? "商用プロダクト · 分散システム · MCP契約"
              : "Commercial systems · Living architectures · MCP"}
          </p>
        </div>

        {/* Mobile Segmented Switcher to keep phone scroll concise */}
        <div className="md:hidden mb-8 flex p-1 rounded-full bg-[#F5F5F7] border border-black/5">
          <button
            type="button"
            onClick={() => setMobileProject("hamrolink")}
            className={cn(
              "flex-1 py-2.5 rounded-full text-xs font-semibold transition-colors",
              mobileProject === "hamrolink"
                ? "bg-[#1D1D1F] text-white shadow-xs"
                : "text-[#6E6E73]"
            )}
          >
            01 · HamroLink
          </button>
          <button
            type="button"
            onClick={() => setMobileProject("distrya")}
            className={cn(
              "flex-1 py-2.5 rounded-full text-xs font-semibold transition-colors",
              mobileProject === "distrya"
                ? "bg-[#1D1D1F] text-white shadow-xs"
                : "text-[#6E6E73]"
            )}
          >
            02 · Distrya
          </button>
        </div>

        {/* Mobile Interactive Tabbed View */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            {mobileProject === "hamrolink" ? (
              <motion.div
                key="hamrolink-mobile"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <HamroLinkShowcase />
              </motion.div>
            ) : (
              <motion.div
                key="distrya-mobile"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <DistryaShowcase />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Full Showcase */}
        <div className="hidden md:block">
          <div className="mb-24">
            <HamroLinkShowcase />
          </div>
          <div>
            <DistryaShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
