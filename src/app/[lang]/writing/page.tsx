import Link from "next/link";
import { articles } from "@/data/writing";
import { ArrowUpRight, Clock, Calendar, Compass } from "lucide-react";

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

  const bentoSpans = [
    "md:col-span-7",
    "md:col-span-5",
    "md:col-span-5",
    "md:col-span-7",
  ];

  return (
    <div className="w-full">
      {/* Obsidian Header Band */}
      <section className="relative bg-[#000000] text-[#F5F5F7] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[420px] rounded-full bg-[#0071E3]/15 blur-[130px]"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <p className="text-xs font-semibold text-[#66B2FF] uppercase tracking-wider mb-3">
            {isJa ? "技術ノート" : "Technical notes"}
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-[1.06] mb-5 max-w-3xl">
            {isJa ? "エンジニアリング考察 & エッセイ" : "Engineering Notes & Essays"}
          </h1>
          <p className="text-base sm:text-xl text-[#A1A1A6] max-w-2xl leading-relaxed">
            {isJa
              ? "プロトコル設計、自律AIエージェントの統括、マルチテナントDBパターン、新興市場向けソフトウェア開発に関する深い考察。"
              : "In-depth reflections on designing protocols, orchestrating autonomous AI agents, multi-tenant database patterns, and building software in emerging markets."}
          </p>
        </div>
      </section>

      {/* Silver Bento Grid Band */}
      <section className="py-16 md:py-24 bg-[#F5F5F7] text-[#1D1D1F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Featured Dark Bento Card: explore.suman-basnet.com.np */}
          <a
            href="https://explore.suman-basnet.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 group relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 p-7 sm:p-10 rounded-[28px] bg-[#000000] text-[#F5F5F7] border border-white/10 hover:border-[#0071E3]/60 transition-colors shadow-xl"
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
              <h2 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-[#66B2FF] transition-colors tracking-tight">
                {isJa
                  ? "Explore — 日々の開発ノートと技術ブログ"
                  : "Explore — Ongoing notes, logs & blog"}
              </h2>
              <p className="text-sm sm:text-base text-[#A1A1A6] leading-relaxed">
                {isJa
                  ? "日々の開発メモ、システム実験、学びの記録を別サイト explore.suman-basnet.com.np にて継続的に公開しています。"
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

          {/* Asymmetric 12-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {articles.map((article, idx) => {
              const spanClass = bentoSpans[idx] || "md:col-span-6";
              return (
                <Link
                  key={article.slug}
                  href={`/${lang}/writing/${article.slug}`}
                  className={`${spanClass} group flex flex-col justify-between p-7 sm:p-9 rounded-[28px] bg-white border border-black/5 hover:border-[#0071E3]/30 transition-transform duration-300 hover:-translate-y-1 shadow-2xs`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#6E6E73] mb-5">
                      <span className="font-semibold text-[#0071E3]">
                        {article.category}
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

                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors tracking-tight leading-snug mb-3">
                      {article.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-black/5 flex items-center justify-between text-xs">
                    <span className="font-mono text-[#86868B]">
                      {article.wordCount} words
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#0071E3] group-hover:translate-x-0.5 transition-transform">
                      <span>{isJa ? "エッセイを読む" : "Read essay"}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
