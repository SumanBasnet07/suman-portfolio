"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Bot,
  Network,
  Database,
  Layers,
  Zap,
  ShoppingBag,
  CreditCard,
  Users,
  Terminal,
  Cpu,
  Sparkles,
  Flame,
  Globe,
  Code2,
  Server,
  Building2,
  Boxes,
  Radio,
} from "lucide-react";

export interface MarqueeItem {
  text: string;
  icon?: React.ReactNode;
  accent?: string;
}

interface MarqueeProps {
  items: (string | MarqueeItem)[];
  speed?: number;
  className?: string;
  separator?: string;
  showLiveBadge?: boolean;
}

export function getItemIcon(name: string) {
  const upper = name.toUpperCase();
  if (upper.includes("AI AGENT") || upper.includes("COPILOT")) {
    return <Bot className="w-3.5 h-3.5 text-blue-500" />;
  }
  if (upper.includes("MCP") || upper.includes("PROTOCOL") || upper.includes("CONTEXT")) {
    return <Network className="w-3.5 h-3.5 text-emerald-500" />;
  }
  if (upper.includes("STATE") || upper.includes("LEDGER") || upper.includes("POSTGRES")) {
    return <Database className="w-3.5 h-3.5 text-purple-500" />;
  }
  if (upper.includes("MULTI-TENANT") || upper.includes("ISOLATION") || upper.includes("TIER")) {
    return <Layers className="w-3.5 h-3.5 text-amber-500" />;
  }
  if (upper.includes("AUTOMATION") || upper.includes("EVENT") || upper.includes("TRIGGER")) {
    return <Zap className="w-3.5 h-3.5 text-cyan-500" />;
  }
  if (upper.includes("COMMERCE") || upper.includes("STORE") || upper.includes("ORDER")) {
    return <ShoppingBag className="w-3.5 h-3.5 text-rose-500" />;
  }
  if (upper.includes("PAYMENT") || upper.includes("GATEWAY") || upper.includes("ESEWA")) {
    return <CreditCard className="w-3.5 h-3.5 text-emerald-500" />;
  }
  if (upper.includes("CRM") || upper.includes("CUSTOMER")) {
    return <Users className="w-3.5 h-3.5 text-blue-500" />;
  }
  if (upper.includes("TOOL") || upper.includes("TERMINAL") || upper.includes("RPC")) {
    return <Terminal className="w-3.5 h-3.5 text-purple-500" />;
  }
  if (upper.includes("REDIS") || upper.includes("CACHE")) {
    return <Flame className="w-3.5 h-3.5 text-orange-500" />;
  }
  if (upper.includes("NEXT") || upper.includes("WEB") || upper.includes("EDGE")) {
    return <Globe className="w-3.5 h-3.5 text-indigo-500" />;
  }
  if (upper.includes("TYPESCRIPT") || upper.includes("API") || upper.includes("CODE")) {
    return <Code2 className="w-3.5 h-3.5 text-blue-600" />;
  }
  if (upper.includes("SERVER") || upper.includes("NODE")) {
    return <Server className="w-3.5 h-3.5 text-emerald-600" />;
  }
  if (upper.includes("DIRECTORY") || upper.includes("CATALOG")) {
    return <Boxes className="w-3.5 h-3.5 text-purple-500" />;
  }
  if (upper.includes("TENANT") || upper.includes("INFRASTRUCTURE")) {
    return <Building2 className="w-3.5 h-3.5 text-amber-600" />;
  }
  return <Sparkles className="w-3.5 h-3.5 text-blue-500" />;
}

export function Marquee({
  items,
  speed = 32,
  className,
  separator = "•",
  showLiveBadge = true,
}: MarqueeProps) {
  const normalizedItems: MarqueeItem[] = items.map((item) =>
    typeof item === "string"
      ? { text: item, icon: getItemIcon(item) }
      : { ...item, icon: item.icon || getItemIcon(item.text) }
  );

  const repeatedItems = [
    ...normalizedItems,
    ...normalizedItems,
    ...normalizedItems,
    ...normalizedItems,
  ];

  return (
    <div
      className={cn(
        "w-full overflow-hidden whitespace-nowrap py-3.5 bg-white/70 backdrop-blur-xs border-y border-[#111111]/10 select-none relative flex items-center",
        className
      )}
    >
      {showLiveBadge && (
        <div className="absolute left-0 z-20 h-full px-4 bg-gradient-to-r from-[#F7F7F4] via-[#F7F7F4] to-transparent flex items-center pr-8 pointer-events-none hidden sm:flex">
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold tracking-wider text-[#111111] bg-white px-2.5 py-1 rounded-full border border-[#111111]/15 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>RADAR</span>
          </div>
        </div>
      )}

      <motion.div
        className="inline-flex items-center gap-8 pl-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#111111] group cursor-default"
          >
            <span className="p-1 rounded-md bg-[#111111]/5 group-hover:bg-[#2563EB]/10 transition-colors shrink-0">
              {item.icon}
            </span>
            <span className="font-medium text-[#111111] group-hover:text-[#2563EB] transition-colors">
              {item.text}
            </span>
            <span className="text-[#111111]/20 text-[10px] ml-4">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
