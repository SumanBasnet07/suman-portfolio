import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Globe,
  MapPin,
  Compass,
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
        return <Network className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Cpu className="w-5 h-5 text-purple-600" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <Layers className="w-5 h-5 text-orange-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  const getPhilosophyIcon = (number: string) => {
    switch (number) {
      case "01":
        return <Workflow className="w-5 h-5 text-blue-600" />;
      case "02":
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case "03":
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="pb-16 border-b border-[#111111]/10 mb-20">
          <SectionLabel
            label={isJa ? "01 / 経歴とルーツ" : "01 / IDENTITY & ROOTS"}
            icon={<Compass className="w-3.5 h-3.5 text-blue-600" />}
            className="mb-4"
          />
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight mb-8">
              {portfolioData.hero.title[language]}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xl sm:text-2xl text-[#666666] font-light max-w-3xl leading-relaxed">
              {portfolioData.about.lead[language]}
            </p>
          </Reveal>
        </div>

        {/* Section 1: Visual Identity & Story Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-28">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative rounded-3xl overflow-hidden bg-[#EAE8E2] border border-[#111111]/10 shadow-lg mb-6">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/about-page-new.png"
                    alt={siteConfig.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top filter contrast-105"
                    priority
                  />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#111111]/10 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-semibold uppercase text-[#111111]">
                    {isJa ? "開発ステータス" : "OPERATING STATUS"}
                  </span>
                </div>
                <p className="font-mono text-xs text-[#666666] leading-relaxed flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>
                    {isJa
                      ? "日本・大阪を拠点にフルタイムで開発中。主たるプロダクト展開先はネパール。"
                      : "Building full-time from Osaka, Japan with primary systems deployment focused on Nepal."}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-16">
            {/* Story Chapters */}
            {portfolioData.about.story.map((chapter, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.15}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-light text-[#111111] tracking-tight mb-6 pb-3 border-b border-[#111111]/10 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>{chapter.title[language]}</span>
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-[#666666] leading-relaxed font-light">
                    {chapter.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p[language]}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Quick Links to Featured Work */}
            <div className="p-6 rounded-2xl bg-white border border-[#111111]/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="font-mono text-xs text-[#666666] uppercase tracking-wider block mb-1">
                  {isJa ? "主要プロダクト" : "CURRENT SYSTEM"}
                </span>
                <span className="text-base font-medium text-[#111111]">
                  HamroLink Case Study &amp; Architecture
                </span>
              </div>
              <Link
                href={`/${language}/work/hamrolink`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#111111] text-[#F7F7F4] hover:bg-[#2563EB] font-mono text-xs tracking-wider transition-colors"
              >
                <span>{isJa ? "事例を見る" : "VIEW CASE STUDY"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: Global Perspective & Location Context */}
        <section className="pt-20 border-t border-[#111111]/10 mb-28">
          <SectionLabel
            label={isJa ? "02 / 地理的視座" : "02 / GEOGRAPHIC PERSPECTIVE"}
            icon={<Globe className="w-3.5 h-3.5 text-emerald-600" />}
            className="mb-6"
          />
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-12 max-w-2xl">
            {portfolioData.about.locationAndFocus.heading[language]}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#111111]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-[#2563EB]">
                <div className="p-2 rounded-xl bg-blue-50">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  {isJa ? "拠点" : "OPERATIONAL BASE"}
                </span>
              </div>
              <h3 className="text-2xl font-light text-[#111111] mb-3">
                {portfolioData.about.locationAndFocus.base[language]}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed font-light">
                {portfolioData.about.locationAndFocus.baseDetails[language]}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#111111]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-[#059669]">
                <div className="p-2 rounded-xl bg-emerald-50">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  {isJa ? "市場フォーカス" : "MARKET FOCUS"}
                </span>
              </div>
              <h3 className="text-2xl font-light text-[#111111] mb-3">
                {portfolioData.about.locationAndFocus.focus[language]}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed font-light">
                {portfolioData.about.locationAndFocus.focusDetails[language]}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Engineering Interests */}
        <section className="pt-20 border-t border-[#111111]/10 mb-28">
          <SectionLabel
            label={isJa ? "03 / 技術レーダー" : "03 / SUBSYSTEM RADAR"}
            icon={<Cpu className="w-3.5 h-3.5 text-purple-600" />}
            className="mb-6"
          />
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-12 max-w-2xl">
            {isJa
              ? "探求しているコア技術領域"
              : "Core Technical Areas of Interest"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.about.engineeringInterests.map((interest, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#111111]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-[#F7F7F4] border border-[#111111]/5">
                      {getInterestIcon(idx)}
                    </div>
                    <span
                      className="font-mono text-[10px] font-semibold uppercase tracking-widest"
                      style={{ color: interest.accent }}
                    >
                      {interest.tag[language]}
                    </span>
                  </div>
                  <h3 className="font-medium text-base text-[#111111] mb-3">
                    {interest.title[language]}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed font-light">
                    {interest.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Engineering Philosophies */}
        <section className="pt-20 border-t border-[#111111]/10">
          <SectionLabel
            label={isJa ? "04 / 原則" : "04 / PRINCIPLES"}
            icon={<Workflow className="w-3.5 h-3.5 text-orange-600" />}
            className="mb-6"
          />
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-12 max-w-2xl">
            {isJa
              ? "設計とエンジニアリングの指針"
              : "How I Approach Engineering & Products"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioData.about.philosophies.map((phil) => (
              <div
                key={phil.number}
                className="p-8 rounded-3xl bg-white border border-[#111111]/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-[#F7F7F4]">
                      {getPhilosophyIcon(phil.number)}
                    </div>
                    <span className="font-mono text-xs text-[#666666] font-semibold">
                      {phil.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-[#111111] mb-4">
                    {phil.title[language]}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed font-light">
                    {phil.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
