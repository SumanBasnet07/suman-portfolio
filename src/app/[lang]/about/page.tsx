import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import {
  ArrowUpRight,
  Globe,
  MapPin,
  Cpu,
  Layers,
  Network,
  Database,
  Workflow,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
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
      ? "Suman Basnetについて — 創業者 & プロダクトエンジニア"
      : "About — Suman Basnet",
    description: isJa
      ? "ソフトウェアプロダクト、業務システム、AI基盤アーキテクチャの開発に従事。日本・大阪在住、ネパール展開。"
      : "Founder & Product Engineer building software products, business systems, and AI-powered infrastructure. Based in Osaka, Japan, focused on Nepal.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isJa = lang === "ja";
  const language = isJa ? "ja" : "en";

  const getInterestIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Network className="w-5 h-5 text-[#0071E3]" />;
      case 1:
        return <Cpu className="w-5 h-5 text-purple-600" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <Layers className="w-5 h-5 text-orange-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0071E3]" />;
    }
  };

  const getPhilosophyIcon = (number: string) => {
    switch (number) {
      case "01":
        return <Workflow className="w-5 h-5 text-[#0071E3]" />;
      case "02":
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case "03":
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#0071E3]" />;
    }
  };

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
            {isJa ? "経歴とルーツ" : "Identity & roots"}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-[1.06] mb-6">
            {portfolioData.hero.title[language]}
          </h1>
          <p className="text-lg sm:text-2xl text-[#A1A1A6] max-w-3xl leading-relaxed">
            {portfolioData.about.lead[language]}
          </p>
        </div>
      </section>

      {/* Pure White Story & Portrait Band */}
      <section className="py-16 md:py-24 bg-white text-[#1D1D1F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-4">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="relative rounded-[28px] overflow-hidden bg-[#F5F5F7] border border-black/5 shadow-sm">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src="/file_00000000f5b482098997d1129b322e7c.png"
                        alt={siteConfig.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 40vw"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>

                  <div className="relative rounded-[28px] overflow-hidden bg-[#F5F5F7] border border-black/5 shadow-sm">
                    <div className="aspect-[4/5] lg:aspect-square relative">
                      <Image
                        src="/about2.1.png"
                        alt={siteConfig.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 40vw"
                        className="object-cover object-[center_20%]"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F5F5F7] border border-black/5">
                  <div className="text-xs font-semibold text-[#1D1D1F] mb-1">
                    {isJa ? "開発ステータス" : "Operating status"}
                  </div>
                  <p className="text-xs text-[#6E6E73] leading-relaxed flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                    <span>
                      {isJa
                        ? "日本・大阪を拠点にフルタイムで開発中。主たるプロダクト展開先はネパール。"
                        : "Building full-time from Osaka, Japan with primary systems deployment focused on Nepal."}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              {portfolioData.about.story.map((chapter, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight mb-5 pb-3 border-b border-black/10">
                    {chapter.title[language]}
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-[#6E6E73] leading-relaxed">
                    {chapter.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p[language]}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Featured Work Bento CTA */}
              <div className="p-6 sm:p-8 rounded-[28px] bg-[#1D1D1F] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#66B2FF] block mb-1">
                    {isJa ? "主要プロダクト" : "Current system"}
                  </span>
                  <span className="text-lg font-semibold text-white">
                    HamroLink Case Study &amp; Architecture
                  </span>
                </div>
                <Link
                  href={`/${language}/work/hamrolink`}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-colors shrink-0"
                >
                  <span>{isJa ? "事例を見る" : "View case study"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silver Bento Sections: Perspective, Technical Radar & Principles */}
      <section className="py-16 md:py-24 bg-[#F5F5F7] text-[#1D1D1F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          {/* Geographic Perspective */}
          <div>
            <p className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
              {isJa ? "地理的視座" : "Geographic perspective"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-8 max-w-2xl">
              {portfolioData.about.locationAndFocus.heading[language]}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-7 sm:p-8 rounded-[28px] bg-white border border-black/5">
                <div className="flex items-center gap-3 mb-4 text-[#0071E3]">
                  <div className="p-2.5 rounded-2xl bg-[#F5F5F7]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold">
                    {isJa ? "拠点" : "Operational base"}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-2">
                  {portfolioData.about.locationAndFocus.base[language]}
                </h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">
                  {portfolioData.about.locationAndFocus.baseDetails[language]}
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-[28px] bg-[#1D1D1F] text-white">
                <div className="flex items-center gap-3 mb-4 text-emerald-400">
                  <div className="p-2.5 rounded-2xl bg-white/10">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold">
                    {isJa ? "市場フォーカス" : "Market focus"}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {portfolioData.about.locationAndFocus.focus[language]}
                </h3>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  {portfolioData.about.locationAndFocus.focusDetails[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Core Technical Areas */}
          <div>
            <p className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
              {isJa ? "技術レーダー" : "Subsystem radar"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-8 max-w-2xl">
              {isJa
                ? "探求しているコア技術領域"
                : "Core Technical Areas of Interest"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {portfolioData.about.engineeringInterests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[28px] bg-white border border-black/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-2xl bg-[#F5F5F7]">
                        {getInterestIcon(idx)}
                      </div>
                      <span className="font-mono text-[10px] font-semibold text-[#0071E3]">
                        {interest.tag[language]}
                      </span>
                    </div>
                    <h3 className="font-semibold text-base text-[#1D1D1F] mb-2">
                      {interest.title[language]}
                    </h3>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      {interest.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Principles */}
          <div>
            <p className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
              {isJa ? "原則" : "Principles"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-8 max-w-2xl">
              {isJa
                ? "設計とエンジニアリングの指針"
                : "How I Approach Engineering & Products"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {portfolioData.about.philosophies.map((phil) => (
                <div
                  key={phil.number}
                  className="p-7 sm:p-8 rounded-[28px] bg-white border border-black/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-2.5 rounded-2xl bg-[#F5F5F7]">
                        {getPhilosophyIcon(phil.number)}
                      </div>
                      <span className="font-mono text-xs text-[#86868B] font-semibold">
                        {phil.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">
                      {phil.title[language]}
                    </h3>
                    <p className="text-sm text-[#6E6E73] leading-relaxed">
                      {phil.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
