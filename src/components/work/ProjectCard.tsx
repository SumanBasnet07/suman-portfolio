"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Cpu, Layers, ExternalLink } from "lucide-react";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { language } = useLanguage();
  const isJa = language === "ja";

  return (
    <Reveal direction="up" delay={index * 0.15}>
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#111111]/10 shadow-sm hover:shadow-md transition-all group">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#111111]/10 mb-8">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-semibold px-2.5 py-1 rounded"
              style={{
                backgroundColor: `${project.accentHex}15`,
                color: project.accentHex,
              }}
            >
              PROJECT {project.number}
            </span>
            <span className="text-[#111111]/20">/</span>
            <span className="font-mono text-xs text-[#666666] tracking-wider uppercase">
              {project.category}
            </span>
          </div>

          <span className="font-mono text-xs text-[#666666]">
            {project.year}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-8">
            <h3 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-4">
              {project.name}
            </h3>
            <p className="text-lg text-[#111111] font-normal leading-relaxed mb-4">
              {project.tagline}
            </p>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              {project.summary}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-xs text-[#666666] uppercase tracking-widest flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-600" />
              <span>SYSTEM ARCHITECTURE</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.systemsExplored.slice(0, 5).map((sys) => (
                <span
                  key={sys}
                  className="px-2 py-1 rounded bg-[#F7F7F4] border border-[#111111]/10 font-mono text-[10px] text-[#111111]"
                >
                  {sys}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#111111]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-[#666666] flex items-center gap-1.5 after:content-['·'] last:after:content-[''] after:ml-2"
              >
                <span>{tech}</span>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#666666] hover:text-[#111111] tracking-wider uppercase transition-colors"
              >
                <span>LIVE SITE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <Link
              href={`/${language}/work/${project.id}`}
              className="inline-flex items-center gap-2 font-mono text-xs text-[#111111] group-hover:text-[#2563EB] tracking-wider uppercase transition-colors"
            >
              <span>{isJa ? "事例研究" : "CASE STUDY"}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
