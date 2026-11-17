"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
} from "lucide-react";

interface ArchitectureProps {
  compact?: boolean;
}

export function Architecture({ compact = false }: ArchitectureProps) {
  const hamrolink = projects.find((p) => p.id === "hamrolink");
  const layers = hamrolink?.architectureLayers || [];
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(1);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const { language } = useLanguage();
  const isJa = language === "ja";

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const cardScale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.45], [0.7, 1]);

  const activeLayer = layers[selectedLayerIndex] || layers[0];
  const activeItems = activeLayer?.items || [];
  const activeItem =
    activeItems.find((i) => i.id === selectedItemId) || activeItems[0];

  const handleLayerChange = (idx: number) => {
    setSelectedLayerIndex(idx);
    setSelectedItemId(null);
  };

  const getSubsystemIcon = (id: string) => {
    const cls = "w-4 h-4 text-[#66B2FF]";
    switch (id) {
      case "website":
        return <Globe className={cls} />;
      case "products":
        return <Boxes className={cls} />;
      case "customers":
        return <Users className={cls} />;
      case "orders":
        return <ShoppingBag className={cls} />;
      case "payments":
        return <CreditCard className={cls} />;
      case "marketing":
        return <Send className={cls} />;
      case "agent":
        return <Bot className={cls} />;
      case "context":
        return <FileSpreadsheet className={cls} />;
      case "automation":
        return <Zap className={cls} />;
      case "tools":
        return <Terminal className={cls} />;
      case "mcp":
        return <Network className={cls} />;
      case "apis":
        return <Code2 className={cls} />;
      case "database":
        return <Database className={cls} />;
      case "caching":
        return <Flame className={cls} />;
      case "multitenancy":
        return <Building2 className={cls} />;
      default:
        return <ShieldCheck className={cls} />;
    }
  };

  const getLayerIcon = (layerNum: string) => {
    switch (layerNum) {
      case "01":
        return <Activity className="w-3.5 h-3.5" />;
      case "02":
        return <Cpu className="w-3.5 h-3.5" />;
      case "03":
        return <Database className="w-3.5 h-3.5" />;
      default:
        return <ShieldCheck className="w-3.5 h-3.5" />;
    }
  };

  const layerLabelsJa: Record<string, { short: string; subtitle: string }> = {
    "01": {
      short: "01 · ビジネス層",
      subtitle: "Webストア、在庫台帳、顧客管理、現地決済ゲートウェイ",
    },
    "02": {
      short: "02 · AI & MCP層",
      subtitle: "Model Context Protocol、構造化コンテキスト、ツール実行",
    },
    "03": {
      short: "03 · インフラ層",
      subtitle: "MongoDBマルチテナント分離、Redisキャッシュ、アトミック更新",
    },
  };

  const layerLabelsEn: Record<string, string> = {
    "01": "01 · Business",
    "02": "02 · AI & MCP",
    "03": "03 · Infrastructure",
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ scale: cardScale, opacity: cardOpacity }}
      className="w-full bg-[#000000] text-[#F5F5F7] rounded-[28px] p-5 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
    >
      {/* Subtle Apple-style ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 w-80 h-80 rounded-full bg-[#0071E3]/15 blur-[110px]"
      />

      {/* Clean Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div>
          <p className="text-xs font-medium text-[#66B2FF] mb-1">
            {isJa ? "HamroLink アーキテクチャ" : "HamroLink Architecture"}
          </p>
          <h3 className="text-xl sm:text-3xl font-semibold text-white tracking-tight">
            {isJa
              ? "3層システム構成を探索する"
              : "Explore the 3-Tier System"}
          </h3>
        </div>

        {/* Compact Segmented Layer Switcher */}
        <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 self-start sm:self-auto overflow-x-auto max-w-full">
          {layers.map((layer, idx) => {
            const isSelected = selectedLayerIndex === idx;
            const label = isJa
              ? layerLabelsJa[layer.layer]?.short || layer.title
              : layerLabelsEn[layer.layer] || layer.title;

            return (
              <button
                key={layer.layer}
                type="button"
                onClick={() => handleLayerChange(idx)}
                className={`relative px-3.5 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected ? "text-white" : "text-[#86868B] hover:text-white"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="archActiveLayerPill"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-[#0071E3]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {getLayerIcon(layer.layer)}
                  <span>{label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Layer Subtitle */}
      <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#A1A1A6] relative z-10">
        <span>
          {isJa
            ? layerLabelsJa[activeLayer?.layer]?.subtitle || activeLayer?.subtitle
            : activeLayer?.subtitle}
        </span>
        <span className="text-[#86868B] font-mono">
          {isJa ? "ノードを選択して詳細を表示" : "Tap any node to inspect"}
        </span>
      </div>

      {/* Compact Node Pills (No wall of text — clean interactive chips) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLayer?.layer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: easeEditorial }}
          className="relative z-10"
        >
          <div
            className={`grid grid-cols-2 ${
              compact ? "sm:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-6"
            } gap-2.5 mb-5`}
          >
            {activeItems.map((item, idx) => {
              const isSelected = activeItem?.id === item.id;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItemId(item.id)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-3.5 rounded-2xl text-left border transition-colors cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? "bg-white/15 border-[#0071E3] text-white"
                      : "bg-white/[0.04] border-white/10 text-[#A1A1A6] hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-1.5 rounded-xl bg-white/10">
                      {getSubsystemIcon(item.id)}
                    </div>
                    <span className="font-mono text-[9px] text-[#86868B]">
                      {item.tag}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white leading-snug">
                    {item.name}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Focused Single-Node Inspector Card */}
          {activeItem && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#161617] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#0071E3]/15 border border-[#0071E3]/30 shrink-0 mt-0.5">
                    {getSubsystemIcon(activeItem.id)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <h4 className="text-base font-semibold text-white">
                        {activeItem.name}
                      </h4>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-[#66B2FF]">
                        {activeItem.tag}
                      </span>
                    </div>
                    <p className="text-sm text-[#A1A1A6] leading-relaxed">
                      {activeItem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
