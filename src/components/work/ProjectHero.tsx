"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ArrowUpRight, Globe, Github, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectHero({ project }: { project: Project }) {
  const { language } = useLanguage();
  const isJa = language === "ja";

  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href={`/${language}/work`}
            className="inline-flex items-center gap-2 font-mono text-xs text-[#666666] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isJa ? "プロジェクト一覧へ戻る" : "BACK TO ALL WORK"}</span>
          </Link>
        </div>

        {/* Eyebrow & Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <SectionLabel
            label={`PROJECT ${project.number}`}
            dotColor="bg-[#2563EB]"
          />
          <span className="text-[#111111]/20">/</span>
          <span className="font-mono text-xs text-[#666666] tracking-wider uppercase">
            {project.category}
          </span>
          <span className="text-[#111111]/20">/</span>
          <span className="font-mono text-xs text-[#666666] tracking-wider">
            {project.year}
          </span>
        </div>

        {/* Title & Headline */}
        <Reveal direction="up" delay={0.1}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight mb-8">
            {project.name}
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#111111] font-light max-w-4xl leading-snug mb-8">
            {project.caseStudy.heroHeading}
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <p className="text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed font-light mb-12">
            {project.caseStudy.heroSubheading}
          </p>
        </Reveal>

        {/* Links & Quick Attributes */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#111111]/10">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-[#F7F7F4] hover:bg-[#2563EB] font-mono text-xs tracking-wider transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isJa ? "公開サイトを開く" : "LIVE SYSTEM"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#111111]/20 bg-white text-[#111111] hover:border-[#111111] font-mono text-xs tracking-wider transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>SOURCE CODE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          <div className="font-mono text-xs text-[#666666] sm:ml-auto flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              STATUS:{" "}
              <span className="text-[#111111] font-medium">
                {project.caseStudy.currentStatus}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
