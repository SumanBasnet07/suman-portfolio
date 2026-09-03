"use client";

import React from "react";
import Link from "next/link";
import { articles } from "@/data/writing";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Clock,
  BookOpen,
  Bot,
  Layers,
  Cpu,
  Sparkles,
  Calendar,
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
        "ゼロからWebメディア・ツール基盤を構築して学んだこと。装飾を削ぎ落とし、余白と文字の規律（Sora）で信頼感を築く方法。",
      category: "デザイン & 表現",
    },
  };

  const getCategoryIcon = (cat: string) => {
    if (cat.includes("AI")) return <Bot className="w-3.5 h-3.5 text-blue-600" />;
    if (cat.includes("PRODUCT") || cat.includes("プロダクト"))
      return <Layers className="w-3.5 h-3.5 text-purple-600" />;
    if (cat.includes("SYSTEMS") || cat.includes("システム"))
      return <Cpu className="w-3.5 h-3.5 text-emerald-600" />;
    return <Sparkles className="w-3.5 h-3.5 text-orange-600" />;
  };

  return (
    <section id="writing" className="py-20 md:py-28 border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#111111]/10 mb-14">
          <div>
            <SectionLabel
              label="03"
              sublabel={isJa ? "設計と考察" : "WRITING & NOTES"}
              icon={<BookOpen className="w-3.5 h-3.5 text-purple-600" />}
              className="mb-4"
            />
            <h2 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight mb-3">
              {isJa ? "開発現場からの技術考察" : "Notes from Building"}
            </h2>
            <p className="text-sm sm:text-base text-[#666666] font-light max-w-xl">
              {isJa
                ? "実際にプロダクトを作り、動かし、デバッグする中で得たアーキテクチャの決断とトレードオフの記録。"
                : "I build software products and write about the systems, protocol contracts, and architectural decisions behind them."}
            </p>
          </div>

          <Link
            href={`/${language}/writing`}
            className="group inline-flex items-center gap-2 font-mono text-xs text-[#111111] hover:text-[#2563EB] tracking-widest uppercase transition-colors"
          >
            <span>{isJa ? "すべての考察を読む" : "VIEW ALL 4 ESSAYS"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4 Rich Editorial Article Cards in 2x2 Grid with Japanese Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, idx) => {
            const jaData = jaTranslations[article.slug];
            const title = isJa && jaData ? jaData.title : article.title;
            const excerpt = isJa && jaData ? jaData.excerpt : article.excerpt;
            const category = isJa && jaData ? jaData.category : article.category;

            return (
              <Reveal key={article.slug} direction="up" delay={idx * 0.1}>
                <Link
                  href={`/${language}/writing/${article.slug}`}
                  className="group flex flex-col justify-between h-full p-8 rounded-3xl bg-white border border-[#111111]/10 hover:border-[#111111]/40 transition-all duration-300 shadow-xs hover:shadow-md"
                >
                  <div>
                    {/* Category, Date & Read Time */}
                    <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[#666666] mb-6">
                      <span
                        className="px-3 py-1 rounded-full font-semibold tracking-wider text-[10px] flex items-center gap-1.5"
                        style={{
                          backgroundColor: `${article.accent}12`,
                          color: article.accent,
                          border: `1px solid ${article.accent}30`,
                        }}
                      >
                        {getCategoryIcon(category)}
                        <span>{category}</span>
                      </span>

                      <div className="flex items-center gap-3 text-[11px]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#999999]" />
                          <span>{article.date}</span>
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#999999]" />
                          <span>{article.readTime}</span>
                        </span>
                      </div>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-xl sm:text-2xl font-light text-[#111111] group-hover:text-[#2563EB] transition-colors leading-snug tracking-tight mb-4">
                      {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-[#666666] leading-relaxed font-light line-clamp-3 mb-6">
                      {excerpt}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-6 border-t border-[#111111]/10 flex items-center justify-between font-mono text-xs text-[#111111]">
                    <span className="text-[#666666] text-[11px]">
                      {isJa ? "技術考察ノート" : `${article.wordCount} WORDS · ARCHITECTURE NOTE`}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#111111] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all">
                      <span>{isJa ? "考察を読む" : "READ ESSAY"}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
