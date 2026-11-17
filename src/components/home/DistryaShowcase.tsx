"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const stageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "center center"],
  });
  const stageScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const stageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.65, 1]);

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

      {/* Massive Editorial Product Showcase with Scroll-Linked Scale */}
      <motion.div
        ref={stageRef}
        style={{ scale: stageScale, opacity: stageOpacity }}
        className="mb-12"
      >
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

          {/* Featured Editorial Grid with Real Live Content from distrya.com */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 mb-6">
            {/* Primary Featured Story: #1 Flagship Publication (47,073 Views) */}
            <motion.a
              href="https://distrya.com/blog/solo-founder-ai-workflow-2026"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.08] transition-colors flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-white/50 mb-4">
                  <span className="text-purple-300 font-semibold flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-red-400" />
                    <span>{isJa ? "フラッグシップ論考 (RANK #1)" : "FLAGSHIP ESSAY · RANK #1"}</span>
                  </span>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-white/40" /> 09/2026
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <Eye className="w-3.5 h-3.5" /> 73,191 VIEWS
                    </span>
                  </div>
                </div>

                {/* Small Featured Image from distrya.com */}
                <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden border border-white/10 mb-5 bg-white/5">
                  <img
                    src="https://res.cloudinary.com/dr846vni4/image/upload/w_1200,c_limit,q_auto,f_auto,fl_progressive/v1790563600/blog-featured-images/jp9rtsupoemoyby6ge7q.jpg"
                    alt="Solo Founder AI Workflow 2026"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight leading-snug group-hover:text-purple-200 transition-colors">
                    {isJa
                      ? "一人創業者のためのAI運用設計 2026：個人で事業を自律スケールさせる全手法"
                      : "Solo Founder AI Workflow 2026: Run a One-Person Business"}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-purple-300 transition-colors shrink-0 mt-1" />
                </div>

                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                  {isJa
                    ? "2026年のソロ創業者が実践する実践的AIワークフロー。週7時間の運用ルーティン、実質運用コスト、プロダクト開発・コンテンツ制作・顧客サポートの自律化システムを実例とともに詳説。"
                    : "The exact AI workflow solo founders use in 2026 — tools, infrastructure costs, a 7-hour weekly routine, and repeatable systems for product development, content syndication, and customer support."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 font-mono text-[10px]">
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-200 font-medium border border-purple-500/30">73.2K VIEWS</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white/80">SOLO FOUNDER</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white/80">AI WORKFLOWS</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white/80">ONE-PERSON UNICORN</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white/80">REVENUE OPS</span>
              </div>
            </motion.a>

            {/* Secondary Editorial Column: #2 (25,206 Views) & #3 (17,997 Views) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* #2 Ranked: AI Agentic Workflows for SMEs (25,206 Views) */}
              <motion.a
                href="https://distrya.com/blog/ai-agentic-workflows-for-smes-2026-report"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2 }}
                className="flex-1 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.08] transition-colors flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/50 mb-3">
                    <span className="text-purple-300 font-semibold flex items-center gap-1">
                      <span>{isJa ? "調査レポート (RANK #2)" : "RESEARCH · RANK #2"}</span>
                    </span>
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <Eye className="w-3.5 h-3.5" /> 30,774 VIEWS
                      </span>
                      <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-purple-300 transition-colors" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-24 h-16 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-white/5">
                      <img
                        src="https://res.cloudinary.com/dr846vni4/image/upload/w_1200,c_limit,q_auto,f_auto,fl_progressive/v1772616138/blog-featured-images/j1magexe08gwprdiac7w.jpg"
                        alt="AI Agentic Workflows for SMEs"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="min-w-0">
                      <h5 className="font-medium text-sm text-white leading-snug mb-1 group-hover:text-purple-200 transition-colors">
                        {isJa
                          ? "中堅・中小企業のための自律AIエージェント導入 2026レポート（実データ＋ROI分析）"
                          : "AI Agentic Workflows for SMEs: 2026 Report (Real Data + ROI)"}
                      </h5>
                      <p className="text-xs text-white/60 font-light line-clamp-2">
                        {isJa
                          ? "中堅中小企業の60%が実務投入。導入企業の実数値、投資対効果（ROI）基準、ツール選定コスト、段階的6ステップ実装フレームワーク。"
                          : "60% of SMEs are now using agentic AI workflows. Real adoption benchmarks, verified ROI data, implementation costs, and a deterministic 6-step framework."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10 font-mono text-[9px] text-white/50">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 font-semibold">30.8K VIEWS</span>
                  <span>AGENTIC AI</span>
                  <span>·</span>
                  <span>SME AUTOMATION</span>
                  <span>·</span>
                  <span>ROI</span>
                </div>
              </motion.a>

              {/* #3 Ranked: Rogue AI & FTC (25,341 Views) */}
              <motion.a
                href="https://distrya.com/blog/ai-agents-rogue-openai-ftc-investigation-2026"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2 }}
                className="flex-1 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.08] transition-colors flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/50 mb-3">
                    <span className="text-red-400 font-semibold">{isJa ? "安全規制 (RANK #3)" : "AI SAFETY · RANK #3"}</span>
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <Eye className="w-3.5 h-3.5" /> 25,341 VIEWS
                      </span>
                      <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-purple-300 transition-colors" />
                    </div>
                  </div>
                  <h5 className="font-medium text-base text-white leading-snug mb-2 group-hover:text-purple-200 transition-colors">
                    {isJa
                      ? "自律AIエージェントの暴走とOpenAIの学習一時停止：米FTCによる調査の真相"
                      : "AI Agents Went Rogue — OpenAI Paused Training. Now the FTC Is Investigating."}
                  </h5>
                  <p className="text-xs text-white/60 font-light line-clamp-3 leading-relaxed">
                    {isJa
                      ? "自律エージェントの挙動を受けてOpenAIが学習中断。米FTC初の自律AI調査と開発者が備えるべき実務的含意。"
                      : "OpenAI pauses training after agent escape. The FTC opens its first rogue AI probe. Architectural breakdown for software builders."}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10 font-mono text-[9px] text-white/50">
                  <span className="px-1.5 py-0.5 rounded bg-purple-950/70 text-purple-300 border border-purple-500/30 font-semibold">25.3K VIEWS</span>
                  <span>OPENAI</span>
                  <span>·</span>
                  <span>FTC PROBE</span>
                  <span>·</span>
                  <span>AGENT GOVERNANCE</span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Real Live Reach Leaderboard Strip */}
          <div className="mb-8 p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[11px] text-white/60">
            <div className="flex items-center gap-2 text-purple-300 font-semibold">
              <TrendingUp className="w-3.5 h-3.5 text-red-400" />
              <span>{isJa ? "DISTRYA フラッグシップ論考:" : "DISTRYA FLAGSHIP ESSAYS:"}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-white/50 text-[10px]">
              <a
                href="https://distrya.com/blog/solo-founder-ai-workflow-2026"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-300 transition-colors font-medium text-purple-200 flex items-center gap-1"
              >
                #1 Solo Founder Workflow (73.2K)
              </a>
              <span>·</span>
              <a
                href="https://distrya.com/blog/ai-agentic-workflows-for-smes-2026-report"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-300 transition-colors font-medium text-purple-200 flex items-center gap-1"
              >
                #2 SME Agentic Workflows (30.8K)
              </a>
              <span>·</span>
              <a
                href="https://distrya.com/blog/ai-agents-rogue-openai-ftc-investigation-2026"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-300 transition-colors text-white/70"
              >
                #3 Rogue AI Probe (25.3K)
              </a>
              <span>·</span>
              <span>#4 Future of Work (2.9K)</span>
              <span>·</span>
              <span>#5 AI Tools Update (2.8K)</span>
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
      </motion.div>

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
