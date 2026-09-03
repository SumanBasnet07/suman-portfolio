"use client";

import React, { useState } from "react";
import Link from "next/link";
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
        ? "PostgreSQL RLSで実店舗・Web間の在庫不整合を即座に防止"
        : "PostgreSQL transaction decrements stock ledger across all channels",
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
      <Reveal direction="up" delay={0.15} className="mb-16">
        <div className="w-full rounded-3xl bg-[#0E1015] border border-white/15 text-white p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Operational Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-wider text-white">
                HAMROLINK PLATFORM ARCHITECTURE · v2.6
              </span>
              <span className="font-mono text-[10px] text-white/40 hidden md:inline-block">
                TENANT: NEPAL_RETAIL_042 · PRODUCTION
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-white/60">
              <span className="px-2.5 py-1 rounded bg-white/10 text-emerald-300 text-[10px] flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>{isJa ? "ステート同期中" : "STATE SYNCHRONIZED"}</span>
              </span>
            </div>
          </div>

          {/* Centerpiece Radial Node Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-10 relative z-10">
            {/* Left Column: Touchpoint Surfaces */}
            <div className="md:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="font-mono text-xs font-semibold text-white">
                    {isJa ? "Storefront & POS" : "Storefront & POS"}
                  </span>
                </div>
                <p className="text-xs text-white/60 font-light">
                  {isJa
                    ? "3G回線でも1.2秒以下の高速表示。拠点間の在庫を即座に同期。"
                    : "Under 1.2s mobile load time; instant catalog sync across locations."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs font-semibold text-white">
                    {isJa ? "eSewa & Khalti QR決済" : "eSewa & Khalti QR"}
                  </span>
                </div>
                <p className="text-xs text-white/60 font-light">
                  {isJa
                    ? "現地デジタルウォレットの即時消込と入金台帳の自動更新。"
                    : "Automated digital payment verification and transaction ledgering."}
                </p>
              </div>
            </div>

            {/* Center Core: Unified Nervous System */}
            <div className="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/20 text-center relative shadow-lg">
              <div className="p-3 rounded-2xl bg-blue-600 text-white w-fit mx-auto mb-4 shadow-lg shadow-blue-600/30">
                <Cpu className="w-8 h-8" />
              </div>
              <h4 className="font-mono text-sm font-bold text-white tracking-wider mb-2">
                {isJa ? "統合ビジネスステート台帳" : "UNIFIED STATE LEDGER"}
              </h4>
              <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                {isJa
                  ? "在庫の空売りを防ぎ、入金を照合し、配送を手配する単一の確固たる台帳。"
                  : "Single atomic truth preventing stockouts, verifying money, and routing delivery."}
              </p>
              <div className="inline-flex items-center gap-2 font-mono text-[10px] text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                <Database className="w-3 h-3" />
                <span>POSTGRES RLS + REDIS</span>
              </div>
            </div>

            {/* Right Column: AI & Automation */}
            <div className="md:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-xs font-semibold text-white">
                    {isJa ? "MCP 業務コパイロット" : "MCP Business Copilot"}
                  </span>
                </div>
                <p className="text-xs text-white/60 font-light">
                  {isJa
                    ? "厳格なJSON Schema契約を持つModel Context Protocolツール群。"
                    : "Model Context Protocol tools with strict JSON Schema contracts."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs font-semibold text-white">
                    {isJa ? "イベント自動化" : "Event Automation"}
                  </span>
                </div>
                <p className="text-xs text-white/60 font-light">
                  {isJa
                    ? "配送伝票の自動生成、在庫僅少アラート、WhatsApp完了通知。"
                    : "Async courier manifests, low-stock alerts, and WhatsApp confirmations."}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Life-of-a-Transaction Simulator */}
          <div className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/10 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#2563EB]" />
                <span className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
                  {isJa ? "注文から配送までの自律同期フロー" : "LIFE OF A TRANSACTION · LIVE FLOW"}
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/40">
                {isJa ? "ステップをクリックして確認" : "CLICK STEP TO INSPECT"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {workflowSteps.map((step, idx) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                    activeStep === idx
                      ? "bg-white/15 border-white/40 shadow-md"
                      : "bg-white/[0.04] border-white/10 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-1 rounded bg-white/10">{step.icon}</div>
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                      {step.badge}
                    </span>
                  </div>
                  <div className="font-medium text-xs text-white mb-1">
                    {step.title}
                  </div>
                  <p className="text-[11px] text-white/60 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Footer of the Canvas */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/60 relative z-10">
            <div className="flex items-center gap-4">
              <span>{isJa ? "手作業の連携ゼロ" : "ZERO HUMAN GLUE"}</span>
              <span>·</span>
              <span>{isJa ? "確定的ツール実行" : "DETERMINISTIC TOOLS"}</span>
              <span>·</span>
              <span>NEPAL CAN MOVE &amp; PATHAO</span>
            </div>

            <Link
              href={`/${language}/work/hamrolink`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2563EB] hover:bg-blue-500 text-white text-xs font-mono tracking-wider transition-colors group"
            >
              <span>{isJa ? "詳細な事例研究を読む" : "VIEW FULL HAMROLINK CASE STUDY"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </Reveal>

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
