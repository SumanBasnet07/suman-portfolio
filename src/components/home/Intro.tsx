"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { easeEditorial } from "@/lib/animations";
import {
  Globe,
  MapPin,
  Radio,
  ArrowRight,
  Layers,
  Cpu,
  Bot,
  Database,
  Workflow,
  Sparkles,
  ArrowDown,
} from "lucide-react";

export function Intro() {
  const { language } = useLanguage();
  const isJa = language === "ja";

  const bridgeNodes = [
    {
      label: isJa ? "プロダクト" : "PRODUCTS",
      icon: <Layers className="w-3.5 h-3.5 text-blue-600" />,
    },
    {
      label: isJa ? "システム基盤" : "SYSTEMS",
      icon: <Cpu className="w-3.5 h-3.5 text-purple-600" />,
    },
    {
      label: isJa ? "AIエージェント (MCP)" : "AI AGENTS (MCP)",
      icon: <Bot className="w-3.5 h-3.5 text-emerald-600" />,
    },
    {
      label: isJa ? "HAMROLINK OS" : "HAMROLINK OS",
      icon: <Workflow className="w-3.5 h-3.5 text-blue-700" />,
    },
  ];

  return (
    <section className="pt-8 pb-14 md:pt-12 md:pb-16 border-t border-[#111111]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Monospace Metadata & Coordinates */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <SectionLabel
            label={portfolioData.intro.label[language]}
            icon={<Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" />}
          />

          <div className="flex items-center gap-6 font-mono text-xs text-[#666666]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>OSAKA, JAPAN</span>
            </div>
            <span className="text-[#111111]/20">/</span>
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#059669]" />
              <span>NEPAL FOCUS</span>
            </div>
          </div>
        </div>

        {/* Large Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-8">
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] leading-[1.2] tracking-tight">
                {portfolioData.intro.statement[language]}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-1">
            <Reveal direction="up" delay={0.2}>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light mb-6">
                {portfolioData.intro.body[language]}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="p-3.5 rounded-xl bg-white border border-[#111111]/10 flex items-center gap-3 shadow-xs">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-xs text-[#111111]">
                  {portfolioData.intro.locationNote[language]}
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Signature Visual Transition Bridge: Ecosystem -> HamroLink Architecture */}
        <div className="pt-6 border-t border-[#111111]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="font-mono text-[11px] text-[#666666] uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>
                {isJa
                  ? "システム思考の遷移プロセス"
                  : "SYSTEMS CONTINUUM · FROM IDEA TO OPERATING ARCHITECTURE"}
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#2563EB] flex items-center gap-1">
              <span>EXPLORE BELOW</span>
              <ArrowDown className="w-3 h-3" />
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {bridgeNodes.map((b, idx) => (
              <div
                key={b.label}
                className="p-3 rounded-xl bg-white border border-[#111111]/10 flex items-center justify-between shadow-2xs group hover:border-[#2563EB]/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-[#111111]/5 group-hover:bg-[#2563EB]/10 transition-colors">
                    {b.icon}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#111111]">
                    {b.label}
                  </span>
                </div>
                {idx < bridgeNodes.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#111111]/30 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
