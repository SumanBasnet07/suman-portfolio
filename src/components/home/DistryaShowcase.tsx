"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Newspaper,
  Wrench,
  Search,
  Zap,
  TrendingUp,
  Calendar,
  Eye,
  CheckCircle2,
  Globe,
  Radio,
  BookOpen,
} from "lucide-react";

export function DistryaShowcase() {
  const project = projects.find((p) => p.id === "distrya")!;
  const { language } = useLanguage();
  const isJa = language === "ja";

  const tagline = isJa
    ? "AI生産性ツールの探索、厳選された技術ジャーナリズム、実用デジタルユーティリティを提供する現代の制作者・技術者のためのデジタル基盤。"
    : project.tagline;

  const summary = isJa
    ? "https://distrya.com にて公開・本番稼働中。Next.js App Router、Cloudinary動的メディアパイプライン、エッジキャッシュを駆使し、世界中から0.8秒以下のFCPで高速配信されるコンテンツ＆ツールエコシステムです。"
    : project.summary;

  const disciplinesJa: Record<string, string> = {
    "AI TOOLS DIRECTORY": "AIツール探索ディレクトリ",
    "EDITORIAL CONTENT PIPELINES": "エディトリアル配信パイプライン",
    "EDGE CACHING & PERFORMANCE": "エッジキャッシュ & 高速化",
    "SMART WORKSPACE UTILITIES": "実用ブラウザユーティリティ",
    "SEO & METRIC OPTIMIZATION": "SEO構造 & Core Web Vitals",
    "CLOUDINARY MEDIA PIPELINES": "Cloudinary動的画像最適化",
  };

  return (
    <div className="w-full">
      {/* Editorial Header & Narrative */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs tracking-widest text-[#7C3AED] font-bold uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60">
            {isJa ? "プロジェクト 02 · コンテンツ & ツール" : "02 / PRODUCT & DISCOVERY PLATFORM"}
          </span>
          <span className="text-[#111111]/20">/</span>
          <span className="font-mono text-xs tracking-widest text-[#666666] uppercase">
            {isJa ? "AIツール・技術メディア・実用ツール" : project.category}
          </span>
          <span className="text-[#111111]/20">/</span>
          <span className="font-mono text-xs tracking-widest text-[#666666]">
            2024–PRESENT
          </span>
        </div>

        <h3 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111] leading-[1.12] mb-6">
          {isJa
            ? "AIツール探索、テクノロジー考察、実用ユーティリティの統合基盤"
            : "Building Distrya: An AI-Driven Content & Productivity Platform"}
        </h3>

        <p className="text-base sm:text-xl text-[#111111] leading-relaxed font-normal mb-4">
          {tagline}
        </p>

        <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light max-w-3xl">
          {summary}
        </p>
      </div>

      {/* Massive Editorial Product Showcase */}
      <Reveal direction="up" delay={0.2} className="mb-12">
        <div className="w-full rounded-3xl bg-gradient-to-br from-[#180E24] via-[#100918] to-[#0A0510] text-white p-6 sm:p-10 md:p-12 border border-purple-500/20 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Distrya Platform Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8 relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/15 flex items-center justify-center">
                <Image
                  src="/distrya-logo.png"
                  alt="Distrya Logo"
                  width={110}
                  height={28}
                  className="h-6 w-auto object-contain brightness-110"
                />
              </div>
              <span className="font-mono text-xs text-purple-300 tracking-wider hidden sm:block">
                distrya.com · Live Production
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>&lt; 0.8s FIRST CONTENTFUL PAINT</span>
              </span>

              <a
                href="https://distrya.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs tracking-wider transition-colors"
              >
                <span>{isJa ? "公開サイトを開く" : "VISIT DISTRYA.COM"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Distrya Search & Navigation Preview */}
          <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/12 backdrop-blur-md mb-8 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white/50 text-xs font-mono">
              <div className="flex items-center gap-2.5 flex-1 px-2">
                <Search className="w-4 h-4 text-purple-400" />
                <span className="text-white/60 text-xs">
                  {isJa
                    ? "AI生産性ツール、技術トレンド、業務フローを検索..."
                    : "Search AI productivity tools, robotics news, workflows..."}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/30 text-purple-200 text-[11px] flex items-center gap-1">
                  <Wrench className="w-3 h-3" /> {isJa ? "AIツール" : "AI Tools Directory"}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/80 text-[11px] flex items-center gap-1">
                  <Newspaper className="w-3 h-3" /> {isJa ? "技術ニュース" : "Tech News"}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/80 text-[11px] flex items-center gap-1 hidden md:flex">
                  <Sparkles className="w-3 h-3" /> {isJa ? "実用ツール" : "Utilities"}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 mb-8">
            {/* Primary Featured Story */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-white/50 mb-4">
                  <span className="text-purple-300 font-semibold flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-red-400" />
                    <span>{isJa ? "注目エディトリアル" : "FEATURED EDITORIAL"}</span>
                  </span>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-white/40" /> 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-white/40" /> 2,400+ reads
                    </span>
                  </div>
                </div>

                <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight leading-snug mb-3">
                  {isJa
                    ? "ハイブリッドワーカーの台頭：2026年におけるAIコパイロットと人間の共創"
                    : "The Rise of the Hybrid Worker: AI Co-Pilots in Modern Workspaces"}
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                  {isJa
                    ? "トップエンジニアや実務家が人間の判断力とAIの実行力を組み合わせ、いかに生産性を10倍に高めているかを解説。"
                    : "Learn the hybrid worker AI model: how top software professionals combine human judgment with automated AI agent execution for 10x throughput."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 font-mono text-[10px]">
                <span className="px-2 py-0.5 rounded bg-white/10 text-white/80">AI CO-PILOT</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white/80">WORKPLACE SYSTEMS</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white/80">HUMAN + AI</span>
              </div>
            </div>

            {/* Secondary Editorial & Utilities Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/50 mb-2">
                  <span className="text-red-400 font-semibold">{isJa ? "ニュース" : "NEWS"}</span>
                  <span>12/2025</span>
                </div>
                <h5 className="font-medium text-sm text-white leading-snug mb-1">
                  {isJa
                    ? "米国の産業回帰とロボティクス：製造業の物理的骨格を再構築する技術"
                    : "America isn't just building robots — it's rebuilding its industrial backbone"}
                </h5>
                <p className="text-xs text-white/60 font-light line-clamp-2">
                  {isJa
                    ? "ハードウェアの自動化とエッジロボティクスが現代の製造エコシステムを変革する動向。"
                    : "Hardware automation and edge robotics shifting the landscape of modern manufacturing."}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/50 mb-2">
                  <span className="text-purple-300 font-semibold">{isJa ? "AIツール更新" : "AI TOOLS UPDATE"}</span>
                  <span>01/2026</span>
                </div>
                <h5 className="font-medium text-sm text-white leading-snug mb-1">
                  {isJa
                    ? "実務で真に役立つAIソフトウェア：エンジニアの作業時間を確実に節約するツール群"
                    : "Vetted AI Software: The Tools That Actually Save Engineering Hours"}
                </h5>
                <p className="text-xs text-white/60 font-light line-clamp-2">
                  {isJa
                    ? "文書分析、コーディング支援、受信トレイ自動処理に特化した高シグナルツールの厳選録。"
                    : "Curated directory of high-signal tools for document analysis, coding assistants, and email triage."}
                </p>
              </div>
            </div>
          </div>

          {/* Distrya Engineering Foundations Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/60 relative z-10">
            <div className="flex items-center gap-4">
              <span>CLOUDINARY DYNAMIC CDN</span>
              <span>·</span>
              <span>CLOUDFLARE EDGE DNS</span>
              <span>·</span>
              <span>EDITORIAL SORA TYPOGRAPHY</span>
            </div>

            <Link
              href={`/${language}/work/distrya`}
              className="inline-flex items-center gap-2 font-mono text-xs text-purple-300 hover:text-white transition-colors group"
            >
              <span>{isJa ? "事例研究を読む" : "READ DISTRYA CASE STUDY"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Systems Explored Badges */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#111111]/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-[#7C3AED] tracking-widest uppercase block mb-1 font-semibold">
            {isJa ? "設計領域" : "CORE DISCIPLINES"}
          </span>
          <h4 className="text-lg font-medium text-[#111111]">
            {isJa
              ? "Distryaで実践したWebエンジニアリングと表現設計"
              : "Disciplines Explored Inside Distrya"}
          </h4>
        </div>

        <div className="flex flex-wrap gap-2 max-w-xl">
          {project.systemsExplored.map((sys) => (
            <span
              key={sys}
              className="px-2.5 py-1 rounded bg-[#F7F7F4] border border-[#111111]/10 font-mono text-[11px] text-[#111111] font-medium"
            >
              {isJa && disciplinesJa[sys] ? disciplinesJa[sys] : sys}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
