import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectHero } from "@/components/work/ProjectHero";
import { ProjectDetails } from "@/components/work/ProjectDetails";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isJa = lang === "ja";
  return {
    title: isJa
      ? "HamroLink 事例研究 — Suman Basnet"
      : "HamroLink Case Study — Suman Basnet",
    description: isJa
      ? "HamroLink詳細事例: 統合コマース、Model Context Protocol (MCP)、自律型業務エージェント、マルチテナント基盤。"
      : "A deep dive into HamroLink: connected commerce, Model Context Protocol (MCP), autonomous business agents, and multi-tenant systems in Nepal.",
  };
}

export default function HamroLinkCaseStudyPage() {
  const project = projects.find((p) => p.id === "hamrolink");

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full">
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
    </div>
  );
}
