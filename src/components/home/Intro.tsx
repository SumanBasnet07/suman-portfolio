"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { easeEditorial } from "@/lib/animations";
import { Layers, Cpu, Bot, Workflow } from "lucide-react";

export function Intro() {
  const { language } = useLanguage();
  const isJa = language === "ja";

  const bentoCards = [
    {
      index: "01",
      title: isJa ? "プロダクト" : "Products",
      subtitle: isJa ? "顧客接点と高速UI" : "Storefronts & surfaces",
      desc: isJa
        ? "不安定なモバイル回線でも1.2秒以内に描画される、軽量・高信頼なWeb体験。"
        : "Mobile-first storefronts engineered to render in under 1.2s on spotty 3G/4G networks.",
      icon: <Layers className="w-5 h-5 text-[#0071E3]" />,
      dark: false,
      span: "md:col-span-1 lg:col-span-6",
    },
    {
      index: "02",
      title: isJa ? "HamroLink OS" : "HamroLink OS",
      subtitle: isJa ? "統合コマース運用基盤" : "Unified commerce OS",
      desc: isJa
        ? "Webストア、在庫台帳、現地QR決済、配送手配を単一の業務OSに統合。"
        : "Storefronts, real-time inventory, eSewa/Khalti settlement, and courier dispatch in one system.",
      icon: <Workflow className="w-5 h-5 text-white" />,
      dark: true,
      span: "md:col-span-1 lg:col-span-6",
    },
    {
      index: "03",
      title: isJa ? "システム基盤" : "Living Systems",
      subtitle: isJa ? "MongoDB 原子台帳設計" : "MongoDB atomic state",
      desc: isJa
        ? "マルチテナント分離とACIDトランザクションにより、実店舗とWebの在庫不整合をゼロに。"
        : "Tenant-isolated MongoDB collections and atomic transactions keeping every channel in sync.",
      icon: <Cpu className="w-5 h-5 text-[#1D1D1F]" />,
      dark: false,
      span: "md:col-span-1 lg:col-span-6",
    },
    {
      index: "04",
      title: isJa ? "AIエージェント (MCP)" : "AI Agents (MCP)",
      subtitle: isJa ? "型安全な自律実行" : "Deterministic tool contracts",
      desc: isJa
        ? "Model Context Protocolを介し、厳格な権限とスキーマ検証のもとで業務を自律実行。"
        : "Model Context Protocol (MCP) boundaries allowing LLMs to query state and execute tools safely.",
      icon: <Bot className="w-5 h-5 text-[#0071E3]" />,
      dark: false,
      accentBg: true,
      span: "md:col-span-1 lg:col-span-6",
    },
  ];

  return (
    <section id="intro" className="py-14 md:py-24 bg-[#F5F5F7] text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Coordinate Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-black/10 mb-10 text-xs font-medium text-[#6E6E73]">
          <span>{isJa ? "開発の視点" : "Systems approach"}</span>
          <span>
            {isJa ? "日本・大阪 — ネパール市場" : "Osaka, Japan · Nepal focus"}
          </span>
        </div>

        {/* Large Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeEditorial }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 md:mb-14"
        >
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-[3.25rem] font-semibold tracking-tight text-[#1D1D1F] leading-[1.08]">
              {portfolioData.intro.statement[language]}
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 pt-1">
            <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
              {portfolioData.intro.body[language]}
            </p>
            <div className="p-3.5 rounded-2xl bg-white border border-black/5 text-xs font-medium text-[#1D1D1F]">
              {portfolioData.intro.locationNote[language]}
            </div>
          </div>
        </motion.div>

        {/* Horizontal Snap Rail on Mobile, 12-Column Bento Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-3 md:grid md:grid-cols-2 lg:grid-cols-12 md:gap-5 md:mx-0 md:px-0 md:pb-0 md:overflow-visible">
          {bentoCards.map((card, idx) => (
            <motion.div
              key={card.index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeEditorial, delay: idx * 0.07 }}
              className={`min-w-[80vw] sm:min-w-[60vw] md:min-w-0 snap-center ${card.span} p-6 sm:p-8 rounded-[28px] flex flex-col justify-between gap-6 transition-transform duration-300 hover:-translate-y-1 ${
                card.dark
                  ? "bg-[#1D1D1F] text-[#F5F5F7]"
                  : card.accentBg
                  ? "bg-gradient-to-br from-[#0071E3]/10 via-white to-white border border-[#0071E3]/15"
                  : "bg-white border border-black/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`p-3 rounded-2xl ${
                    card.dark ? "bg-white/10" : "bg-[#F5F5F7]"
                  }`}
                >
                  {card.icon}
                </div>
                <span
                  className={`font-mono text-xs ${
                    card.dark ? "text-white/40" : "text-[#86868B]"
                  }`}
                >
                  {card.index}
                </span>
              </div>

              <div>
                <p
                  className={`text-xs font-medium mb-1 ${
                    card.dark ? "text-blue-400" : "text-[#0071E3]"
                  }`}
                >
                  {card.subtitle}
                </p>
                <h3
                  className={`text-xl sm:text-2xl font-semibold tracking-tight mb-2 ${
                    card.dark ? "text-white" : "text-[#1D1D1F]"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    card.dark ? "text-[#A1A1A6]" : "text-[#6E6E73]"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
