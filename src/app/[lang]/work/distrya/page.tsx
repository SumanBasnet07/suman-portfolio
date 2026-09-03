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
      ? "Distrya 事例研究 — Suman Basnet"
      : "Distrya Case Study — Suman Basnet",
    description: isJa
      ? "Distryaの開発事例: 目的特化型デジタル基盤、タイポグラフィ、高速サーバーコンポーネント。"
      : "A case study on building Distrya: purpose-built digital presence, editorial typography, and high-performance server components.",
  };
}

export default function DistryaCaseStudyPage() {
  const project = projects.find((p) => p.id === "distrya");

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
