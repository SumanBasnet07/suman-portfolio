import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Layers } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isJa = lang === "ja";
  return {
    title: isJa
      ? "実績 & プロダクト — Suman Basnet"
      : "Selected Work — Suman Basnet",
    description: isJa
      ? "HamroLinkおよびDistryaの事例研究。商用プロダクト、リビングアーキテクチャ、AI基盤システム。"
      : "Explore case studies for HamroLink and Distrya: connected digital platforms, living systems architecture, and AI-powered infrastructure.",
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isJa = lang === "ja";

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="pb-16 border-b border-[#111111]/10 mb-16">
          <SectionLabel
            label={isJa ? "プロジェクト実績" : "SELECTED WORK"}
            icon={<Layers className="w-3.5 h-3.5 text-blue-600" />}
            className="mb-4"
          />
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-light text-[#111111] tracking-tight mb-6">
              {isJa ? "プロダクトと稼働システム" : "Products & Living Systems"}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-lg sm:text-xl text-[#666666] font-light max-w-2xl leading-relaxed">
              {isJa
                ? "プロダクトエンジニアリング、マルチテナント基盤、Model Context Protocol（MCP）ツール設計、コマース運用の詳細事例研究。"
                : "Detailed case studies examining product engineering, multi-tenant infrastructure, Model Context Protocol (MCP) tool design, and commerce operations."}
            </p>
          </Reveal>
        </div>

        {/* Projects Listing */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
