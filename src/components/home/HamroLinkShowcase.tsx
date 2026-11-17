"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { Architecture } from "@/components/work/Architecture";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Globe,
  Boxes,
  Users,
  ShoppingBag,
  CreditCard,
  Bot,
  Zap,
  Layers,
  Cpu,
  Network,
  Database,
  CheckCircle2,
  Terminal,
  Activity,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function HamroLinkShowcase() {
  const project = projects.find((p) => p.id === "hamrolink")!;
  const { language } = useLanguage();
  const isJa = language === "ja";
  const [activeStep, setActiveStep] = useState<number>(0);
  const stageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "center center"],
  });
  const stageScale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const stageOpacity = useTransform(scrollYProgress, [0, 0.45], [0.7, 1]);

  const tagline = isJa
    ? "ネパールの商店・事業者に向けた統合デジタルプラットフォーム — Webストア、リアルタイム在庫、現地決済（eSewa/Khalti QR）、自律型AIエージェントを一元化。"
    : project.tagline;

  const summary = isJa
    ? "多くの事業者がSNSのDM、手書きノート、銀行振込のスクショ確認といった分断されたツールで疲弊しています。HamroLinkは、Model Context Protocol（MCP）を基盤として、これらを単一の統合ビジネスOSへとまとめ上げます。"
    : project.summary;

  const workflowSteps = [
    {
      title: isJa ? "01. Webストアで注文受付" : "01. Order Captured",
      desc: isJa
        ? "超軽量Webストア（3G対応）から即時チェックアウト"
        : "Lightweight storefront captures order under spotty mobile data",
      badge: "STOREFRONT",
      icon: <ShoppingBag className="w-4 h-4 text-blue-400" />,
    },
    {
      title: isJa ? "02. QR決済の自動検証" : "02. QR Payment Verified",
      desc: isJa
        ? "eSewa / Khalti の決済Webhookを暗号検証し即時消込"
        : "eSewa & Khalti QR webhook signature cryptographically confirmed",
      badge: "FINTECH",
      icon: <CreditCard className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: isJa ? "03. 在庫台帳の原子更新" : "03. Atomic Inventory Sync",
      desc: isJa
        ? "MongoDBのアトミックトランザクションで実店舗・Web間の在庫不整合を即座に防止"
        : "MongoDB atomic transaction decrements stock ledger across all channels",
      badge: "STATE LEDGER",
      icon: <Database className="w-4 h-4 text-purple-400" />,
    },
    {
      title: isJa ? "04. 自律AIエージェント起動" : "04. MCP Agent Triage",
      desc: isJa
        ? "MCPプロトコルを介して配送伝票を発行し顧客通知を送信"
        : "Model Context Protocol triggers courier manifest and buyer notification",
      badge: "MCP AGENT",
      icon: <Bot className="w-4 h-4 text-cyan-400" />,
    },
  ];

  const subsystemsJa: Record<string, string> = {
    "AI AGENTS": "自律型AIエージェント",
    "MODEL CONTEXT PROTOCOL (MCP)": "Model Context Protocol (MCP)",
    "BUSINESS STATE ENGINE": "ビジネスステート台帳",
    "MULTI-TENANT ARCHITECTURE": "マルチテナント基盤",
    "LOCAL COMMERCE & PAYMENTS": "現地決済 (eSewa / Khalti)",
    "EVENT-DRIVEN AUTOMATION": "イベント駆動型自動化",
    "UNIFIED CRM": "統合CRM顧客台帳",
    "REAL-TIME TOOL CALLING": "リアルタイム・ツール実行",
  };

  return (
    <div className="w-full">
      {/* 1. Case Study Eyebrow & Dominant Headline */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs tracking-widest text-[#2563EB] font-bold uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            {isJa ? "プロジェクト 01 · システム基盤" : "01 / PRODUCT SYSTEM"}
          </span>
          <span className="text-[#111111]/20">/</span>
          <span className="font-mono text-xs tracking-widest text-[#666666] uppercase">
            {isJa ? "商用オペレーティングシステム" : project.category}
          </span>
        </div>

        <h3 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111] leading-[1.12] mb-6">
          {isJa
            ? "事業の裏側を支える統合オペレーティングシステム"
            : "Building the Connected Operating System Behind a Business"}
        </h3>

        <p className="text-base sm:text-xl text-[#111111] leading-relaxed font-normal mb-4">
          {tagline}
        </p>

        <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light max-w-3xl">
          {summary}
        </p>
      </div>

      {/* 2. Massive HamroLink Operating System Canvas (Centerpiece UI) */}
      <motion.div
        ref={stageRef}
        style={{ scale: stageScale, opacity: stageOpacity }}
        className="mb-10"
      >
        <div className="w-full rounded-[28px] bg-[#000000] border border-white/10 text-[#F5F5F7] p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 bg-[#0071E3]/15 rounded-full blur-[120px]" />

          {/* Top Operational Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10 mb-7 relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-semibold text-[#66B2FF]">
                HamroLink OS · v2.6
              </span>
              <span className="font-mono text-[10px] text-[#86868B] hidden md:inline-block">
                NEPAL_RETAIL_042 · PRODUCTION
              </span>
            </div>

            <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/25 px-3 py-1 rounded-full inline-flex items-center gap-1.5 self-start sm:self-auto">
              <CheckCircle2 className="w-3 h-3" />
              <span>{isJa ? "ステート同期中" : "STATE SYNCHRONIZED"}</span>
            </span>
          </div>

          {/* Centerpiece Hub-and-Spoke Grid (Compact 2x2 on Phone, 3-Col on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center mb-7 relative z-10">
            {/* Center Core first on mobile for clear hierarchy */}
            <div className="order-1 md:order-2 md:col-span-4 p-6 rounded-2xl bg-[#161617] border border-white/15 text-center shadow-lg">
              <div className="p-3 rounded-2xl bg-[#0071E3] text-white w-fit mx-auto mb-3 shadow-lg shadow-[#0071E3]/30">
                <Cpu className="w-7 h-7" />
              </div>
              <h4 className="text-sm font-semibold text-white tracking-tight mb-1.5">
                {isJa ? "統合ビジネスステート台帳" : "Unified State Ledger"}
              </h4>
              <p className="text-xs text-[#A1A1A6] leading-relaxed mb-3.5">
                {isJa
                  ? "在庫・入金・配送を一元管理する単一のアトミック台帳。"
                  : "Single atomic truth preventing stockouts, verifying money, and routing delivery."}
              </p>
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/25">
                <Database className="w-3 h-3" />
                <span>MONGODB + REDIS</span>
              </div>
            </div>

            {/* Left Column: Touchpoint Surfaces */}
            <div className="order-2 md:order-1 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3">
              <motion.div
                whileHover={{ y: -2 }}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#0071E3]/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-4 text-[#66B2FF] shrink-0" />
                  <span className="text-xs font-semibold text-white">
                    Storefront &amp; POS
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#86868B] leading-snug">
                  {isJa
                    ? "1.2秒以下の高速表示と拠点間在庫同期。"
                    : "Under 1.2s load time; instant catalog sync."}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">
                    eSewa &amp; Khalti QR
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#86868B] leading-snug">
                  {isJa
                    ? "デジタル決済の即時検証と自動消込。"
                    : "Automated payment verification & ledgering."}
                </p>
              </motion.div>
            </div>

            {/* Right Column: AI & Automation */}
            <div className="order-3 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3">
              <motion.div
                whileHover={{ y: -2 }}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">
                    {isJa ? "MCP コパイロット" : "MCP Copilot"}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#86868B] leading-snug">
                  {isJa
                    ? "JSON Schema契約による型安全なツール実行。"
                    : "Model Context Protocol with strict schemas."}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">
                    {isJa ? "イベント自動化" : "Event Automation"}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#86868B] leading-snug">
                  {isJa
                    ? "配送伝票発行とWhatsApp完了通知。"
                    : "Async courier manifests & alerts."}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Interactive Life-of-a-Transaction Stepper (Compact Pill Bar + Single Inspector) */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#161617] border border-white/10 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#0071E3]" />
                <span className="text-xs font-semibold text-white">
                  {isJa ? "注文から配送までの同期フロー" : "Life of a Transaction"}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#86868B]">
                {isJa ? "ステップを選択" : "Tap step to inspect"}
              </span>
            </div>

            {/* 4-Step Pill Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {workflowSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`relative px-3 py-2.5 rounded-xl text-left text-xs font-medium transition-colors cursor-pointer border ${
                      isActive
                        ? "border-[#0071E3] text-white"
                        : "border-white/10 bg-white/[0.03] text-[#A1A1A6] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="hamroTxStepPill"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        className="absolute inset-0 rounded-xl bg-[#0071E3]/20"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {step.icon}
                      <span className="truncate">{step.title}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Single Focused Step Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-black/50 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10 shrink-0">
                    {workflowSteps[activeStep].icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">
                      {workflowSteps[activeStep].title}
                    </div>
                    <p className="text-xs text-[#A1A1A6] leading-relaxed">
                      {workflowSteps[activeStep].desc}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-[#66B2FF] self-start sm:self-center shrink-0">
                  {workflowSteps[activeStep].badge}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer of the Canvas */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B] relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[11px]">
              <span>{isJa ? "手作業の連携ゼロ" : "ZERO HUMAN GLUE"}</span>
              <span>·</span>
              <span>{isJa ? "確定的ツール実行" : "DETERMINISTIC TOOLS"}</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">NEPAL CAN MOVE &amp; PATHAO</span>
            </div>

            <Link
              href={`/${language}/work/hamrolink`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-colors group"
            >
              <span>{isJa ? "詳細な事例研究を読む" : "View HamroLink case study"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* 3. Deep 3-Tier Architecture Explorer */}
      <Reveal direction="up" delay={0.2} className="mb-12">
        <Architecture />
      </Reveal>

      {/* 4. Subsystems Explored Badges */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#111111]/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase block mb-1 font-semibold">
            {isJa ? "探求中の技術基盤" : "SUBSYSTEMS RADAR"}
          </span>
          <h4 className="text-lg font-medium text-[#111111]">
            {isJa
              ? "HamroLinkを支える8つの深層アーキテクチャ"
              : "8 Deep Subsystems Architected Inside HamroLink"}
          </h4>
        </div>

        <div className="flex flex-wrap gap-2 max-w-xl">
          {project.systemsExplored.map((sys) => (
            <span
              key={sys}
              className="px-2.5 py-1 rounded bg-[#F7F7F4] border border-[#111111]/10 font-mono text-[11px] text-[#111111] font-medium"
            >
              {isJa && subsystemsJa[sys] ? subsystemsJa[sys] : sys}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
