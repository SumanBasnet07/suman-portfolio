"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Layers,
  Bot,
  Cpu,
  Database,
  Zap,
  Network,
  ArrowDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface NodeData {
  id: string;
  label: { en: string; ja: string };
  role: { en: string; ja: string };
  icon: React.ReactNode;
  accent: string;
  accentHex: string;
  x: number; // percentage
  y: number; // percentage
  details: {
    en: string;
    ja: string;
  };
}

export function EcosystemVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNodeId, setActiveNodeId] = useState<string>("systems");
  const { language } = useLanguage();
  const isJa = language === "ja";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 160 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  // Center node slight parallax translation
  const centerTranslateX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const centerTranslateY = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const nodes: NodeData[] = [
    {
      id: "product",
      label: { en: "PRODUCT", ja: "プロダクト" },
      role: { en: "COMMERCE & SURFACES", ja: "コマース & UI" },
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      accent: "blue",
      accentHex: "#2563EB",
      x: 18,
      y: 22,
      details: {
        en: "Storefronts, unified checkout, POS interfaces, and customer touchpoints.",
        ja: "Webストア、POS端末、決済インターフェース、顧客接点。",
      },
    },
    {
      id: "ai",
      label: { en: "AI AGENTS", ja: "AIエージェント" },
      role: { en: "MCP & AUTONOMY", ja: "MCP & 自律運用" },
      icon: <Bot className="w-5 h-5 text-purple-600" />,
      accent: "violet",
      accentHex: "#7C3AED",
      x: 82,
      y: 20,
      details: {
        en: "Autonomous business agents operating over real state via Model Context Protocol.",
        ja: "Model Context Protocolを介して実DBステートを操作する自律エージェント。",
      },
    },
    {
      id: "systems",
      label: { en: "SYSTEMS", ja: "システム基盤" },
      role: { en: "HAMROLINK CORE", ja: "中核アーキテクチャ" },
      icon: <Cpu className="w-6 h-6 text-white" />,
      accent: "dark",
      accentHex: "#111111",
      x: 50,
      y: 50,
      details: {
        en: "The unified operational nervous system linking inventory, orders, and payment state.",
        ja: "在庫、注文、決済ステートを原子的に同期させる統合中枢神経系。",
      },
    },
    {
      id: "data",
      label: { en: "DATA LEDGER", ja: "データ台帳" },
      role: { en: "POSTGRES & REDIS", ja: "マルチテナントDB" },
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      accent: "emerald",
      accentHex: "#059669",
      x: 20,
      y: 78,
      details: {
        en: "Row-level isolated multi-tenant schemas ensuring zero cross-tenant contamination.",
        ja: "行レベルセキュリティ（RLS）で完全分離されたマルチテナント台帳。",
      },
    },
    {
      id: "automation",
      label: { en: "AUTOMATION", ja: "自動化エンジン" },
      role: { en: "EVENT TRIGGERS", ja: "非同期パイプライン" },
      icon: <Zap className="w-5 h-5 text-cyan-600" />,
      accent: "cyan",
      accentHex: "#0891B2",
      x: 80,
      y: 76,
      details: {
        en: "Async Redis event buses handling instant webhook verification and courier dispatch.",
        ja: "決済確認と配送伝票作成を瞬時にトリガーする非同期イベントバス。",
      },
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[2];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center select-none"
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full h-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F5F4F0] via-[#FAF9F5] to-[#EFECE6] border border-[#111111]/12 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col justify-between"
      >
        {/* Subtle engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#111111 0.75px, transparent 0.75px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Bar inside Canvas */}
        <div className="relative z-20 flex items-center justify-between pb-4 border-b border-[#111111]/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-[#111111] uppercase">
              {isJa ? "システム相互運用レーダー" : "ACTIVE ECOSYSTEM RADAR"}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-[#666666]">
            <span>MCP JSON-RPC</span>
            <span>·</span>
            <span>RLS POSTGRES</span>
            <span>·</span>
            <span>EVENT BUS</span>
          </div>
        </div>

        {/* SVG Living Connecting Lines & Packets */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="glowLine1" x1="18%" y1="22%" x2="50%" y2="50%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="glowLine2" x1="82%" y1="20%" x2="50%" y2="50%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="glowLine3" x1="20%" y1="78%" x2="50%" y2="50%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="glowLine4" x1="80%" y1="76%" x2="50%" y2="50%">
              <stop offset="0%" stopColor="#0891B2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Lines connecting each satellite node to center Systems node */}
          <line
            x1="22"
            y1="25"
            x2="50"
            y2="50"
            stroke="url(#glowLine1)"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
          <line
            x1="78"
            y1="24"
            x2="50"
            y2="50"
            stroke="url(#glowLine2)"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
          <line
            x1="23"
            y1="75"
            x2="50"
            y2="50"
            stroke="url(#glowLine3)"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
          <line
            x1="77"
            y1="73"
            x2="50"
            y2="50"
            stroke="url(#glowLine4)"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />

          {/* Peripheral connecting ring */}
          <line
            x1="22"
            y1="25"
            x2="78"
            y2="24"
            stroke="#7C3AED"
            strokeWidth="0.6"
            strokeOpacity="0.3"
            strokeDasharray="3 3"
          />
          <line
            x1="23"
            y1="75"
            x2="77"
            y2="73"
            stroke="#059669"
            strokeWidth="0.6"
            strokeOpacity="0.3"
            strokeDasharray="3 3"
          />
        </svg>

        {/* Nodes Cluster */}
        <div className="relative w-full h-[320px] sm:h-[380px] my-auto z-20">
          {/* Satellite Nodes */}
          {nodes.map((node) => {
            const isCenter = node.id === "systems";
            const isActive = activeNodeId === node.id;

            if (isCenter) {
              return (
                <motion.div
                  key={node.id}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    x: centerTranslateX,
                    y: centerTranslateY,
                  }}
                  onClick={() => setActiveNodeId(node.id)}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
                >
                  <div
                    className={`relative p-5 sm:p-6 rounded-2xl bg-[#111111] text-white shadow-2xl transition-all duration-300 border ${
                      isActive
                        ? "border-[#2563EB] ring-4 ring-[#2563EB]/20 scale-105"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="p-2 rounded-xl bg-white/10 text-white">
                        {node.icon}
                      </div>
                      <div>
                        <div className="font-mono text-sm font-bold tracking-wider text-white">
                          {node.label[language]}
                        </div>
                        <div className="font-mono text-[10px] text-emerald-400">
                          HAMROLINK CORE
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={node.id}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                }}
                onClick={() => setActiveNodeId(node.id)}
                onMouseEnter={() => setActiveNodeId(node.id)}
                whileHover={{ scale: 1.06 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
              >
                <div
                  className={`p-3.5 sm:p-4 rounded-xl bg-white border transition-all duration-300 shadow-md ${
                    isActive
                      ? "border-[#111111] ring-3 ring-[#111111]/10 shadow-lg"
                      : "border-[#111111]/12 hover:border-[#111111]/30 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="p-1.5 rounded-lg border"
                      style={{
                        backgroundColor: `${node.accentHex}10`,
                        borderColor: `${node.accentHex}30`,
                      }}
                    >
                      {node.icon}
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-[#111111] leading-tight">
                        {node.label[language]}
                      </div>
                      <div className="font-mono text-[9px] text-[#666666] uppercase tracking-wider">
                        {node.role[language]}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Inspector Card at Bottom */}
        <div className="relative z-20 pt-4 border-t border-[#111111]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <div
              className="p-2 rounded-lg text-white font-mono text-xs font-semibold shrink-0"
              style={{ backgroundColor: activeNode.accentHex }}
            >
              {activeNode.label[language]}
            </div>
            <p className="text-xs text-[#111111] leading-relaxed font-light">
              {activeNode.details[language]}
            </p>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#2563EB] shrink-0 self-end sm:self-center">
            <span>{isJa ? "下へスクロールして全体像を見る" : "EXPLORE ARCHITECTURE"}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
