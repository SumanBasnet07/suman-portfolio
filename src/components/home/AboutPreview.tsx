"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { easeEditorial } from "@/lib/animations";
import { ArrowUpRight, MapPin } from "lucide-react";

export function AboutPreview() {
  const { language } = useLanguage();
  const isJa = language === "ja";

  const stats = [
    {
      value: "02",
      label: isJa ? "商用プロダクト" : "Production products",
      detail: "HamroLink & Distrya",
    },
    {
      value: "01",
      label: isJa ? "統合コマースOS" : "Commerce OS",
      detail: isJa ? "統一ビジネスステート" : "Unified state & logistics",
    },
    {
      value: "MCP",
      label: isJa ? "自律エージェント" : "AI agent contracts",
      detail: isJa ? "型安全なツール境界" : "Deterministic boundaries",
    },
  ];

  const progressionSteps = [
    { label: "Web", desc: isJa ? "基礎Web開発" : "Web fundamentals" },
    { label: "Full Stack", desc: isJa ? "Node & MongoDB" : "Full-stack apps" },
    { label: "Products", desc: isJa ? "商用プロダクト" : "Real products" },
    { label: "Systems", desc: isJa ? "統合台帳設計" : "Living systems" },
    { label: "AI Agents", desc: isJa ? "MCP契約設計" : "MCP protocol" },
    { label: "HamroLink", desc: isJa ? "事業OS基盤" : "Commercial OS" },
  ];

  return (
    <section id="about" className="py-14 md:py-24 bg-white text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12">
          {/* Left Column: Portrait Bento Plate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: easeEditorial }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[28px] overflow-hidden bg-[#F5F5F7] border border-black/5 shadow-sm group max-w-md mx-auto lg:max-w-none">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/about-home.jpg"
                  alt={portfolioData.hero.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/30 text-[#1D1D1F]">
                <div className="font-semibold text-sm text-[#1D1D1F] mb-0.5">
                  {portfolioData.hero.name}
                </div>
                <p className="text-xs text-[#6E6E73] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                  <span>Osaka, Japan · Nepal Product Focus</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative + 3-Tile Bento Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: easeEditorial, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <p className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
              {isJa ? "視座と原点" : "About & philosophy"}
            </p>

            <h2 className="text-3xl sm:text-5xl font-semibold text-[#1D1D1F] tracking-tight leading-[1.08] mb-5">
              {isJa
                ? "プロダクトから基盤インフラまで、一気通貫で設計する。"
                : "I build from the product down to the infrastructure."}
            </h2>

            <p className="text-base sm:text-lg text-[#1D1D1F] leading-relaxed mb-4">
              {portfolioData.about.lead[language]}
            </p>

            <div className="space-y-3 text-sm sm:text-base text-[#6E6E73] leading-relaxed mb-7">
              <p>
                {isJa
                  ? "多くのWebアプリケーションは画面を作って終わりますが、私の興味は「その裏側でビジネスデータがどう動き、どう保全されるか」にあります。注文が入った瞬間、決済が検証され、在庫が原子的にロックされ、自律型AIエージェントが確定的なツールを実行する—その連動した仕組みこそが最も面白い部分です。"
                  : "Many software projects stop at interface screens. My energy is directed toward what happens underneath: how business state moves, stays atomic, and safely executes work. When an order lands, payment is verified, stock is locked, and an AI agent triggers a courier manifest via typed MCP contracts—that interconnected system is the real product."}
              </p>
            </div>

            {/* 3-Tile Bento Stats */}
            <div className="w-full grid grid-cols-3 gap-3 mb-7">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#F5F5F7] border border-black/5"
                >
                  <div className="font-mono text-lg sm:text-xl font-semibold text-[#0071E3] mb-1">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-[#1D1D1F]">
                    {s.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#6E6E73] mt-0.5 hidden sm:block">
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`/${language}/about`}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1D1D1F] hover:bg-[#0071E3] text-white text-sm font-medium transition-colors"
            >
              <span>{isJa ? "詳細な経歴を読む" : "Read full background"}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 6-Step Bento Progression: Horizontal Snap on Mobile, 6-Col Grid on Desktop */}
        <div className="pt-8 border-t border-black/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <span className="text-xs font-semibold text-[#1D1D1F]">
              {isJa ? "エンジニアリングの深化プロセス" : "Engineering progression"}
            </span>
            <span className="text-xs text-[#6E6E73]">
              {isJa
                ? "基礎からシステムアーキテクチャへ"
                : "From sites to autonomous commerce infrastructure"}
            </span>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-6 px-6 pb-2 md:grid md:grid-cols-3 lg:grid-cols-6 md:mx-0 md:px-0 md:pb-0 md:overflow-visible">
            {progressionSteps.map((step, idx) => (
              <div
                key={step.label}
                className="min-w-[44vw] sm:min-w-[30vw] md:min-w-0 snap-center p-4 rounded-2xl bg-[#F5F5F7] border border-black/5 flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] text-[#86868B] mb-2">
                  0{idx + 1}
                </span>
                <div>
                  <div className="text-sm font-semibold text-[#1D1D1F]">
                    {step.label}
                  </div>
                  <div className="text-xs text-[#6E6E73] mt-0.5">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
