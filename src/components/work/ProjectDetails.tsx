"use client";

import React from "react";
import Link from "next/link";
import { Project, projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Architecture } from "@/components/work/Architecture";
import {
  AlertCircle,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Boxes,
  Database,
  Terminal,
  ExternalLink,
} from "lucide-react";

export function ProjectDetails({ project }: { project: Project }) {
  const otherProject = projects.find((p) => p.id !== project.id);
  const { language } = useLanguage();
  const isJa = language === "ja";

  return (
    <div className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
      {/* 1. Overview */}
      <section className="mb-24">
        <SectionLabel
          label="01"
          sublabel={isJa ? "概要" : "OVERVIEW"}
          className="mb-6"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight leading-tight">
              {isJa ? "背景と目的" : "The Context & Motivation"}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#666666] leading-relaxed font-light">
            {project.caseStudy.overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The Problem */}
      <section className="mb-24 pt-16 border-t border-[#111111]/10">
        <SectionLabel
          label="02"
          sublabel={isJa ? "課題" : "THE PROBLEM"}
          className="mb-6"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-4">
              {project.caseStudy.problem.heading}
            </h2>
            {project.caseStudy.problem.description.map((desc, idx) => (
              <p key={idx} className="text-base text-[#666666] leading-relaxed">
                {desc}
              </p>
            ))}
          </div>

          <div className="lg:col-span-7 space-y-4">
            {project.caseStudy.problem.points.map((point, idx) => {
              const [title, ...rest] = point.split(":");
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#111111]/10 shadow-sm flex items-start gap-4"
                >
                  <AlertCircle className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-[#111111] mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed font-light">
                      {rest.join(":")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Product Solution */}
      <section className="mb-24 pt-16 border-t border-[#111111]/10">
        <SectionLabel
          label="03"
          sublabel={isJa ? "プロダクト解決策" : "PRODUCT SOLUTION"}
          className="mb-6"
        />
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-4 max-w-2xl">
            {project.caseStudy.productSolution.heading}
          </h2>
          {project.caseStudy.productSolution.description.map((desc, idx) => (
            <p key={idx} className="text-base text-[#666666] max-w-3xl leading-relaxed">
              {desc}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.caseStudy.productSolution.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#111111]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1 rounded bg-blue-50 text-blue-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-medium text-base text-[#111111]">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-sm text-[#666666] leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Living Architecture Diagram (if present) */}
      {project.architectureLayers && (
        <section className="mb-24 pt-16 border-t border-[#111111]/10">
          <SectionLabel
            label="04"
            sublabel={isJa ? "システム設計" : "SYSTEM ARCHITECTURE"}
            className="mb-6"
          />
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-4">
              {project.caseStudy.systemArchitecture.heading}
            </h2>
            {project.caseStudy.systemArchitecture.description.map((desc, idx) => (
              <p key={idx} className="text-base text-[#666666] max-w-3xl leading-relaxed">
                {desc}
              </p>
            ))}
          </div>

          <Architecture />
        </section>
      )}

      {/* 5. AI & Model Context Protocol (MCP) Section */}
      {project.caseStudy.aiAndAgents && (
        <section className="mb-24 pt-16 border-t border-[#111111]/10">
          <SectionLabel
            label="05"
            sublabel={isJa ? "AI & プロトコル" : "AI & PROTOCOLS"}
            className="mb-6"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-[#7C3AED] mb-3">
                <Cpu className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  AGENTIC RUNTIME
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-4">
                {project.caseStudy.aiAndAgents.heading}
              </h2>
              {project.caseStudy.aiAndAgents.description.map((desc, idx) => (
                <p key={idx} className="text-base text-[#666666] leading-relaxed mb-4">
                  {desc}
                </p>
              ))}

              <div className="space-y-3 mt-6">
                {project.caseStudy.aiAndAgents.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-violet-50/60 border border-violet-200/60 text-xs sm:text-sm text-[#111111] font-light flex items-start gap-3"
                  >
                    <Zap className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.caseStudy.mcpAndTools && (
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-[#2563EB] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest">
                    MCP CONTRACTS
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-4">
                  {project.caseStudy.mcpAndTools.heading}
                </h2>
                {project.caseStudy.mcpAndTools.description.map((desc, idx) => (
                  <p key={idx} className="text-base text-[#666666] leading-relaxed mb-4">
                    {desc}
                  </p>
                ))}

                <div className="space-y-3 mt-6">
                  {project.caseStudy.mcpAndTools.protocolDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 text-xs sm:text-sm text-[#111111] font-light flex items-start gap-3"
                    >
                      <Terminal className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. Technology Matrix */}
      <section className="mb-24 pt-16 border-t border-[#111111]/10">
        <SectionLabel
          label="06"
          sublabel={isJa ? "技術スタック" : "TECH STACK"}
          className="mb-6"
        />
        <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-8">
          {isJa ? "エンジニアリング基盤" : "The Engineering Foundation"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.caseStudy.technologyStack.map((stack) => (
            <div
              key={stack.category}
              className="p-6 rounded-2xl bg-white border border-[#111111]/10 shadow-sm"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#2563EB] mb-4 pb-3 border-b border-[#111111]/10 flex items-center gap-2">
                <Boxes className="w-3.5 h-3.5" />
                <span>{stack.category}</span>
              </h3>
              <ul className="space-y-2">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs text-[#111111] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/30" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 7. What I Learned & Roadmap */}
      <section className="mb-24 pt-16 border-t border-[#111111]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Learnings */}
          <div className="lg:col-span-6">
            <SectionLabel
              label="07"
              sublabel={isJa ? "学び" : "TAKEAWAYS"}
              className="mb-6"
            />
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-6">
              {isJa ? "アーキテクチャ上の学び" : "Core Architectural Learnings"}
            </h2>
            <div className="space-y-4">
              {project.caseStudy.learnings.map((learning, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F0EFEB] border border-[#111111]/10 text-sm text-[#111111] leading-relaxed font-light"
                >
                  {learning}
                </div>
              ))}
            </div>
          </div>

          {/* What Next */}
          <div className="lg:col-span-6">
            <SectionLabel
              label="08"
              sublabel={isJa ? "今後の展望" : "ROADMAP"}
              className="mb-6"
            />
            <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight mb-6">
              {project.caseStudy.whatNext.heading}
            </h2>
            <div className="space-y-3">
              {project.caseStudy.whatNext.milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#111111]/10 flex items-center gap-3 text-xs sm:text-sm text-[#111111] font-light shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Footer Bar */}
      {otherProject && (
        <div className="pt-16 border-t border-[#111111]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#666666] tracking-widest uppercase block mb-1">
              {isJa ? "次のプロジェクトを読む" : "CONTINUE READING"}
            </span>
            <div className="text-2xl font-light text-[#111111]">
              {otherProject.name}
            </div>
          </div>

          <Link
            href={`/${language}/work/${otherProject.id}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-[#F7F7F4] hover:bg-[#2563EB] font-mono text-xs tracking-widest uppercase transition-all"
          >
            <span>{isJa ? "プロジェクトを見る" : `EXPLORE ${otherProject.name.toUpperCase()}`}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
