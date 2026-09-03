"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { easeEditorial } from "@/lib/animations";
import {
  Activity,
  Cpu,
  Database,
  Globe,
  Boxes,
  Users,
  ShoppingBag,
  CreditCard,
  Send,
  Bot,
  FileSpreadsheet,
  Zap,
  Terminal,
  Network,
  Code2,
  Flame,
  Building2,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface ArchitectureProps {
  compact?: boolean;
}

export function Architecture({ compact = false }: ArchitectureProps) {
  const hamrolink = projects.find((p) => p.id === "hamrolink");
  const layers = hamrolink?.architectureLayers || [];
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(1); // default to AI layer
  const { language } = useLanguage();
  const isJa = language === "ja";

  const activeLayer = layers[selectedLayerIndex] || layers[0];

  const getSubsystemIcon = (id: string) => {
    switch (id) {
      case "website":
        return <Globe className="w-4 h-4 text-blue-400" />;
      case "products":
        return <Boxes className="w-4 h-4 text-blue-400" />;
      case "customers":
        return <Users className="w-4 h-4 text-blue-400" />;
      case "orders":
        return <ShoppingBag className="w-4 h-4 text-blue-400" />;
      case "payments":
        return <CreditCard className="w-4 h-4 text-blue-400" />;
      case "marketing":
        return <Send className="w-4 h-4 text-blue-400" />;
      case "agent":
        return <Bot className="w-4 h-4 text-purple-400" />;
      case "context":
        return <FileSpreadsheet className="w-4 h-4 text-purple-400" />;
      case "automation":
        return <Zap className="w-4 h-4 text-purple-400" />;
      case "tools":
        return <Terminal className="w-4 h-4 text-purple-400" />;
      case "mcp":
        return <Network className="w-4 h-4 text-emerald-400" />;
      case "apis":
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case "database":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "caching":
        return <Flame className="w-4 h-4 text-emerald-400" />;
      case "multitenancy":
        return <Building2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-white" />;
    }
  };

  const getLayerIcon = (layerNum: string) => {
    switch (layerNum) {
      case "01":
        return <Activity className="w-4 h-4 text-[#2563EB]" />;
      case "02":
        return <Cpu className="w-4 h-4 text-[#7C3AED]" />;
      case "03":
        return <Database className="w-4 h-4 text-[#059669]" />;
      default:
        return <ShieldCheck className="w-4 h-4" />;
    }
  };

  const layerTitlesJa: Record<string, { title: string; subtitle: string }> = {
    "01": {
      title: "01. ビジネス・UI層",
      subtitle: "Webストア、在庫台帳、顧客管理、決済ゲートウェイ接点",
    },
    "02": {
      title: "02. AI & エージェント層",
      subtitle: "Model Context Protocol（MCP）、ツール実行、構造化コンテキスト",
    },
    "03": {
      title: "03. インフラ & 台帳層",
      subtitle: "PostgreSQL RLS、Redisキャッシュ、マルチテナント分離機構",
    },
  };

  return (
    <div className="w-full bg-[#111111] text-[#F7F7F4] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background technical grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-white/60 uppercase">
              {isJa ? "HAMROLINK 実装アーキテクチャ" : "HAMROLINK LIVING ARCHITECTURE"}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
            {isJa
              ? "相互連動する3層マルチティア・アーキテクチャ"
              : "Interconnected Multi-Tier Architecture"}
          </h3>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
          <Network className="w-3.5 h-3.5 text-emerald-400" />
          <span>MCP PROTOCOL</span>
          <span>·</span>
          <Database className="w-3.5 h-3.5 text-blue-400" />
          <span>POSTGRES RLS</span>
        </div>
      </div>

      {/* Layer Selectors (Tabs) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-8 relative z-10">
        {layers.map((layer, idx) => {
          const isSelected = selectedLayerIndex === idx;
          const jaInfo = layerTitlesJa[layer.layer];
          const title = isJa && jaInfo ? jaInfo.title : layer.title;
          const subtitle = isJa && jaInfo ? jaInfo.subtitle : layer.subtitle;

          return (
            <button
              key={layer.layer}
              type="button"
              onClick={() => setSelectedLayerIndex(idx)}
              className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between relative cursor-pointer ${
                isSelected
                  ? "bg-white/10 border-white/30 shadow-lg"
                  : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div className="flex items-center gap-2">
                  {getLayerIcon(layer.layer)}
                  <span className="font-mono text-xs font-semibold tracking-wider text-white">
                    {title}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/40">
                  {layer.layer}
                </span>
              </div>

              <p className="text-xs text-white/60 line-clamp-2 leading-relaxed font-light">
                {subtitle}
              </p>

              {isSelected && (
                <motion.div
                  layoutId="activeLayerIndicator"
                  className="absolute -bottom-[1px] left-4 right-4 h-[2px]"
                  style={{ backgroundColor: layer.accent }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Interactive Node Grid for Active Layer */}
      <div className="relative z-10 pt-2">
        <div className="flex items-center justify-between mb-4 font-mono text-xs text-white/50">
          <span className="uppercase tracking-widest flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>
              {isJa
                ? `${activeLayer.title} サブシステム & 契約仕様`
                : `${activeLayer.title} SUBSYSTEMS & CONTRACTS`}
            </span>
          </span>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            LIVE SPEC
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayer.layer}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: easeEditorial }}
            className={`grid grid-cols-1 ${
              compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
            } gap-3.5`}
          >
            {activeLayer.items.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/25 hover:bg-white/[0.07] transition-all group"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                      {getSubsystemIcon(item.id)}
                    </div>
                    <span className="font-medium text-sm text-white group-hover:text-blue-300 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/70">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Technical Context Bar */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/40 relative z-10">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-white/60">
            <Flame className="w-3 h-3 text-orange-400" />
            <span>EVENT BUS: ASYNC REDIS</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1 text-white/60">
            <Network className="w-3 h-3 text-emerald-400" />
            <span>PROTOCOL: MCP JSON-RPC 2.0</span>
          </span>
        </div>
        <div className="flex items-center gap-1 text-white/70 hover:text-white transition-colors cursor-pointer">
          <span>{isJa ? "完全なプロトコル契約仕様を見る" : "VIEW FULL PROTOCOL CONTRACTS"}</span>
          <ChevronRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
