"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { articles } from "@/data/writing";
import { useLanguage } from "@/context/LanguageContext";
import { easeEditorial } from "@/lib/animations";
import {
  ArrowUpRight,
  Clock,
  Calendar,
  Compass,
} from "lucide-react";

export function WritingPreview() {
  const { language } = useLanguage();
  const isJa = language === "ja";

  const jaTranslations: Record<
    string,
    { title: string; excerpt: string; category: string }
  > = {
    "building-with-mcp-ai-agents-business-context": {
      title: "MCPによるシステム構築：AIエージェントと実ビジネスステートの架け橋",
      excerpt:
        "なぜ一般的なLLMラッパーは商用で破綻するのか。AnthropicのModel Context Protocol（MCP）がもたらす確定的契約と業務自律運用の実際。",
      category: "AI & プロトコル",
    },
    "connected-systems-vs-disconnected-tools": {
      title: "なぜ地域ビジネスに必要なのは個別SaaSではなく『統合システム』なのか",
      excerpt:
        "新興市場における分断ツールの隠れた人的コストと、単一ステート台帳が個別SaaSの寄せ集めを圧倒する構造的理由。",
      category: "プロダクト設計",
    },
    "engineering-for-low-bandwidth-networks": {
      title: "低帯域・不安定回線向けのWeb設計：ネパールの3G環境で学んだ現実",
      excerpt:
        "光回線の快適な開発機を離れ、低スペックなAndroid端末と途切れるモバイル通信下でも確実に動作するWeb設計の原則。",
      category: "システム & 性能",
    },
    "lessons-from-building-distrya": {
      title: "Distrya開発からの学び：タイポグラフィ、引き算の美学、そして表示速度",
      excerpt:
        "ゼロからWebメディア・ツール基盤を構築して学んだこと。装飾を削ぎ落とし、余白と文字の規律で信頼感を築く方法。",
      category: "デザイン & 表現",
    },
  };

  const bentoSpans = [
    "md:col-span-7",
    "md:col-span-5",
    "md:col-span-5",
    "md:col-span-7",
  ];

  return (
    <section id="writing" className="py-14 md:py-24 bg-[#F5F5F7] text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-black/10 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
              {isJa ? "設計と考察" : "Writing & notes"}
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#1D1D1F] tracking-tight mb-2">
              {isJa ? "開発現場からの技術考察" : "Notes from Building"}
            </h2>
            <p className="text-sm sm:text-base text-[#6E6E73] max-w-xl">
              {isJa
                ? "実際にプロダクトを作り、動かし、デバッグする中で得たアーキテクチャの決断とトレードオフの記録。"
                : "Essays on the systems, protocol contracts, and architectural decisions behind the products."}
            </p>
          </div>

          <Link
            href={`/${language}/writing`}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#0071E3] hover:text-[#0077ED] transition-colors shrink-0"
          >
            <span>{isJa ? "すべての考察を読む" : "View all 4 essays"}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Obsidian Featured Bento Card: explore.suman-basnet.com.np */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: easeEditorial }}
        >
          <a
            href="https://explore.suman-basnet.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 group relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 p-7 sm:p-10 rounded-[28px] bg-[#000000] text-[#F5F5F7] border border-white/10 hover:border-[#0071E3]/60 transition-colors shadow-xl"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[#0071E3]/20 blur-[90px]"
            />

            <div className="space-y-2.5 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-[#66B2FF]">
                <Compass className="w-3.5 h-3.5" />
                <span>{isJa ? "外部ノート & ブログ" : "Separate notes & blog"}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-[#66B2FF] transition-colors tracking-tight">
                {isJa
                  ? "Explore — 日々の開発ノートと技術ブログ"
                  : "Explore — Ongoing notes, logs & blog"}
              </h3>
              <p className="text-sm sm:text-base text-[#A1A1A6] leading-relaxed">
                {isJa
                  ? "下記の4つの技術考察に加えて、日々の開発メモ、システム実験、学びの記録を別サイト explore.suman-basnet.com.np にて継続的に公開しています。"
                  : "Beyond the four core essays below, I publish ongoing engineering notes, experiments, and long-form blog posts separately at explore.suman-basnet.com.np."}
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0071E3] group-hover:bg-[#0077ED] text-white text-sm font-medium transition-colors">
                <span>explore.suman-basnet.com.np</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </a>
        </motion.div>

        {/* Horizontal Snap Rail on Mobile, Asymmetric 12-Col Bento Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-3 md:grid md:grid-cols-12 md:gap-5 md:mx-0 md:px-0 md:pb-0 md:overflow-visible">
          {articles.map((article, idx) => {
            const jaData = jaTranslations[article.slug];
            const title = isJa && jaData ? jaData.title : article.title;
            const excerpt = isJa && jaData ? jaData.excerpt : article.excerpt;
            const category = isJa && jaData ? jaData.category : article.category;
            const spanClass = bentoSpans[idx] || "md:col-span-6";

            return (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: easeEditorial, delay: idx * 0.06 }}
                className={`min-w-[82vw] sm:min-w-[60vw] md:min-w-0 snap-center ${spanClass}`}
              >
                <Link
                  href={`/${language}/writing/${article.slug}`}
                  className="group flex flex-col justify-between h-full p-6 sm:p-8 rounded-[28px] bg-white border border-black/5 hover:border-[#0071E3]/30 transition-transform duration-300 hover:-translate-y-1 shadow-2xs"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#6E6E73] mb-4">
                      <span className="font-semibold text-[#0071E3]">
                        {category}
                      </span>

                      <div className="flex items-center gap-3 font-mono text-[11px]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#86868B]" />
                          <span>{article.date}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#86868B]" />
                          <span>{article.readTime}</span>
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-snug tracking-tight mb-3">
                      {title}
                    </h3>

                    <p className="text-sm text-[#6E6E73] leading-relaxed line-clamp-3 mb-6">
                      {excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs">
                    <span className="font-mono text-[#86868B]">
                      {isJa ? "技術考察" : `${article.wordCount} words`}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#0071E3] group-hover:translate-x-0.5 transition-transform">
                      <span>{isJa ? "考察を読む" : "Read essay"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
