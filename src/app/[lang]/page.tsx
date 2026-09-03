import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { SelectedWork } from "@/components/home/SelectedWork";
import { WritingPreview } from "@/components/home/WritingPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Marquee } from "@/components/ui/Marquee";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isJa = lang === "ja";

  const systemVocabulary = isJa
    ? [
        "プロダクト開発",
        "システムアーキテクチャ",
        "AIエージェント (MCP)",
        "ビジネスステート台帳",
        "自動化 & ツール実行",
        "現地決済 & コマース",
        "マルチテナント基盤",
      ]
    : [
        "PRODUCTS",
        "SYSTEMS ARCHITECTURE",
        "AI AGENTS (MCP)",
        "BUSINESS STATE LEDGER",
        "AUTOMATION & TOOLS",
        "LOCAL COMMERCE & PAYMENTS",
        "MULTI-TENANT INFRASTRUCTURE",
      ];

  return (
    <div className="w-full">
      {/* 1. Hero Section with Dominant Interactive Ecosystem */}
      <Hero />

      {/* Moving System Vocabulary Strip with Bilingual Support */}
      <Marquee items={systemVocabulary} separator="→" speed={30} />

      {/* 2. Editorial Introduction with Architectural Bridge */}
      <Intro />

      {/* 3. Selected Work: HamroLink Centerpiece + Distrya Editorial Platform */}
      <SelectedWork />

      {/* 4. Notes from Building: 4 Production Technical Essays */}
      <WritingPreview />

      {/* 5. About: Visual Progression Timeline & Operational Grounding */}
      <AboutPreview />

      {/* 6. Contact & Interactive Message Window */}
      <ContactCTA />
    </div>
  );
}
