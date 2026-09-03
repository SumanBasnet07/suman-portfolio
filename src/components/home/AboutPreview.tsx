"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Compass,
  Cpu,
  Layers,
  Sparkles,
  MapPin,
  CheckCircle2,
  Workflow,
  ArrowRight,
  Database,
  Bot,
  Globe,
} from "lucide-react";

export function AboutPreview() {
  const { language } = useLanguage();
  const isJa = language === "ja";

  const progressionSteps = [
    { label: "WEB", desc: isJa ? "基礎Web開発" : "Web Fundamentals" },
    { label: "FULL STACK", desc: isJa ? "Node & DB統合" : "Full-Stack Apps" },
    { label: "PRODUCTS", desc: isJa ? "商用プロダクト" : "Real Products" },
    { label: "SYSTEMS", desc: isJa ? "統合台帳アーキテクチャ" : "Living Systems" },
    { label: "AI AGENTS", desc: isJa ? "MCP契約 & 自律運用" : "MCP Protocol" },
    { label: "HAMROLINK", desc: isJa ? "事業OSプラットフォーム" : "Commercial OS" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column: Portrait & Operational Coordinates */}
          <div className="lg:col-span-5">
            <Reveal direction="up">
              <div className="relative rounded-3xl overflow-hidden bg-[#EAE8E2] border border-[#111111]/10 shadow-lg group mb-6">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/about-home.jpg"
                    alt={portfolioData.hero.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                </div>

                {/* Floating badge over image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 text-[#111111] shadow-md">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-xs font-bold uppercase">
                        SUMAN BASNET
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-medium">
                      ACTIVE BUILDER
                    </span>
                  </div>
                  <p className="font-mono text-xs text-[#666666] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Osaka, Japan · Nepal Product Focus</span>
                  </p>
                </div>
              </div>

              {/* Meaningful Builder Pillars (Replacing generic commit stats) */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-[#111111]/10 shadow-2xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-[#111111]">
                        2 PRODUCTION PRODUCTS
                      </div>
                      <div className="text-xs text-[#666666] font-light">
                        HamroLink &amp; Distrya
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-blue-600 font-semibold">ACTIVE</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#111111]/10 shadow-2xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-[#111111]">
                        1 COMMERCE OPERATING SYSTEM
                      </div>
                      <div className="text-xs text-[#666666] font-light">
                        Unified business state &amp; logistics
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-purple-600 font-semibold">HAMROLINK</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#111111]/10 shadow-2xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-[#111111]">
                        MODEL CONTEXT PROTOCOL (MCP)
                      </div>
                      <div className="text-xs text-[#666666] font-light">
                        Deterministic AI agent boundaries
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 font-semibold">AI CONTRACTS</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Narrative & How Suman Builds */}
          <div className="lg:col-span-7 flex flex-col items-start pt-2">
            <SectionLabel
              label="04"
              sublabel={isJa ? "視座と原点" : "ABOUT & PHILOSOPHY"}
              icon={<Compass className="w-3.5 h-3.5 text-emerald-600" />}
              className="mb-4"
            />

            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight leading-[1.15] mb-6">
                {isJa
                  ? "プロダクトから基盤インフラまで、一気通貫で設計する。"
                  : "I build from the product down to the infrastructure."}
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-lg text-[#111111] leading-relaxed font-normal mb-6">
                {portfolioData.about.lead[language]}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="space-y-4 text-sm sm:text-base text-[#666666] leading-relaxed font-light mb-8">
                <p>
                  {isJa
                    ? "多くのWebアプリケーションは画面を作って終わりますが、私の興味は「その裏側でビジネスデータがどう動き、どう保全されるか」にあります。注文が入った瞬間、決済が検証され、在庫が原子的にロックされ、自律型AIエージェントが確定的なツールを実行する—その連動した仕組みこそが最も面白い部分です。"
                    : "Many software projects stop at interface screens. My energy is directed toward what happens underneath: how business state moves, stays atomic, and safely executes work. When an order lands, payment is verified, stock is locked, and an AI agent triggers a courier manifest via typed MCP contracts—that interconnected system is the real product."}
                </p>
                <p>
                  {isJa
                    ? "日本・大阪に拠点を置きながら、ネパールをはじめとする新興デジタル市場向けに最適化されたソフトウェアを開発しています。インフラの制約や現地の商習慣に適応した、地に足のついたシステムを届けることが私のミッションです。"
                    : "Operating from Osaka, Japan with a sharp product focus on Nepal, I design software specifically adapted to emerging market realities: spotty mobile networks, fragmented tools, and localized digital payment SDKs."}
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <Link
                href={`/${language}/about`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-[#F7F7F4] hover:bg-[#2563EB] text-xs font-mono tracking-widest uppercase transition-all group shadow-sm"
              >
                <span>{isJa ? "詳細な経歴を読む" : "READ FULL BACKGROUND & PHILOSOPHIES"}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Visual Progression Timeline: WEB -> FULL STACK -> PRODUCTS -> SYSTEMS -> AI AGENTS -> HAMROLINK */}
        <div className="pt-8 border-t border-[#111111]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <span className="font-mono text-xs text-[#666666] uppercase tracking-widest font-semibold flex items-center gap-2">
              <Workflow className="w-3.5 h-3.5 text-blue-600" />
              <span>{isJa ? "エンジニアリングの深化プロセス" : "ENGINEERING PROGRESSION TIMELINE"}</span>
            </span>
            <span className="font-mono text-[10px] text-[#666666]">
              {isJa ? "基礎からシステムアーキテクチャへ" : "FROM SITES TO AUTONOMOUS COMMERCE INFRASTRUCTURE"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {progressionSteps.map((step, idx) => (
              <div
                key={step.label}
                className="p-3.5 rounded-xl bg-white border border-[#111111]/10 flex flex-col justify-between shadow-2xs hover:border-[#2563EB]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2 font-mono text-[10px] text-[#999999]">
                  <span>0{idx + 1}</span>
                  {idx === progressionSteps.length - 1 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                  )}
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-[#111111] mb-1">
                    {step.label}
                  </div>
                  <div className="text-[11px] text-[#666666] font-light">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
