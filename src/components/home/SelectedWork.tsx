"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HamroLinkShowcase } from "@/components/home/HamroLinkShowcase";
import { DistryaShowcase } from "@/components/home/DistryaShowcase";
import { Layers } from "lucide-react";

export function SelectedWork() {
  const { language } = useLanguage();
  const isJa = language === "ja";

  return (
    <section id="work" className="py-20 md:py-28 border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#111111]/10 mb-16">
          <div>
            <SectionLabel
              label="02"
              sublabel={isJa ? "主要プロダクト" : "SELECTED WORK"}
              icon={<Layers className="w-3.5 h-3.5 text-blue-600" />}
              className="mb-4"
            />
            <h2 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight mb-3">
              {isJa ? "実績 & 開発システム" : "Selected Work"}
            </h2>
            <p className="text-sm sm:text-base text-[#666666] font-light max-w-xl">
              {isJa
                ? "商用プロダクト、リビングアーキテクチャ、自律エージェント基盤。"
                : "Production software systems, living architectures, and autonomous business infrastructure."}
            </p>
          </div>

          <p className="font-mono text-xs text-[#666666] tracking-wider max-w-xs sm:text-right hidden sm:block">
            {isJa
              ? "商用プロダクト · 分散システム · MCP契約"
              : "COMMERCIAL SYSTEMS · LIVING ARCHITECTURES · MCP PROTOCOLS"}
          </p>
        </div>

        {/* Project 01: HamroLink Showcase (Massive Case Study Centerpiece) */}
        <div className="mb-28">
          <HamroLinkShowcase />
        </div>

        {/* Project 02: Distrya Showcase (Distinct Editorial Magazine Composition) */}
        <div>
          <DistryaShowcase />
        </div>
      </div>
    </section>
  );
}
