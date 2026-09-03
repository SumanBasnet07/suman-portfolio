import Link from "next/link";
import { articles } from "@/data/writing";
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
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isJa = lang === "ja";
  return {
    title: isJa
      ? "技術考察 & ノート — Suman Basnet"
      : "Writing & Technical Notes — Suman Basnet",
    description: isJa
      ? "Model Context Protocol (MCP)、自律型AIエージェント、マルチテナント台帳、新興国コマースに関する技術考察。"
      : "Technical notes and essays on Model Context Protocol (MCP), AI agents, multi-tenant state architectures, and emerging market commerce.",
  };
}

export default async function WritingIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isJa = lang === "ja";

  const getCategoryIcon = (cat: string) => {
    if (cat.includes("AI")) return <Bot className="w-3 h-3" />;
    if (cat.includes("PRODUCT")) return <Layers className="w-3 h-3" />;
    if (cat.includes("SYSTEMS")) return <Cpu className="w-3 h-3" />;
    return <Sparkles className="w-3 h-3" />;
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="pb-16 border-b border-[#111111]/10 mb-16">
          <SectionLabel
            label={isJa ? "技術ノート" : "TECHNICAL NOTES"}
            icon={<BookOpen className="w-3.5 h-3.5 text-purple-600" />}
            className="mb-4"
          />
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-light text-[#111111] tracking-tight mb-6">
              {isJa ? "エンジニアリング考察 & エッセイ" : "Engineering Notes & Essays"}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-lg sm:text-xl text-[#666666] font-light max-w-2xl leading-relaxed">
              {isJa
                ? "プロトコル設計、自律AIエージェントの統括、マルチテナントDBパターン、新興市場向けソフトウェア開発に関する深い考察。"
                : "In-depth reflections on designing protocols, orchestrating autonomous AI agents, multi-tenant database patterns, and building software in emerging markets."}
            </p>
          </Reveal>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {articles.map((article, idx) => (
            <Reveal key={article.slug} direction="up" delay={idx * 0.1}>
              <Link
                href={`/${lang}/writing/${article.slug}`}
                className="group block p-8 sm:p-12 rounded-3xl bg-white border border-[#111111]/10 hover:border-[#111111]/40 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#111111]/10 mb-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2.5 py-1 rounded-full font-mono text-[10px] font-semibold tracking-wider flex items-center gap-1.5"
                      style={{
                        backgroundColor: `${article.accent}15`,
                        color: article.accent,
                      }}
                    >
                      {getCategoryIcon(article.category)}
                      <span>{article.category}</span>
                    </span>
                    <span className="text-[#111111]/20">/</span>
                    <span className="font-mono text-xs text-[#666666]">
                      {article.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#666666]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8">
                    <h2 className="text-2xl sm:text-3xl font-light text-[#111111] group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug mb-4">
                      {article.title}
                    </h2>
                    <p className="text-base text-[#666666] leading-relaxed font-light">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex items-center lg:justify-end pt-2">
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-[#111111] group-hover:text-[#2563EB] tracking-wider uppercase transition-colors">
                      <span>{isJa ? "エッセイを読む" : "READ ESSAY"}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
