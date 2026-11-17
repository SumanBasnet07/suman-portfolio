"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { easeEditorial } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("Product Systems");
  const { language } = useLanguage();
  const isJa = language === "ja";

  const topics = [
    { id: "Product Systems", label: isJa ? "プロダクト設計" : "Product Systems" },
    { id: "AI & MCP", label: isJa ? "AI & MCP基盤" : "AI & MCP" },
    { id: "Commerce Infrastructure", label: isJa ? "コマースインフラ" : "Commerce Tech" },
    { id: "Collaboration", label: isJa ? "協業・対話" : "Collaboration" },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `[Inquiry / ${selectedTopic}] Conversation with Suman Basnet`
  )}`;

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-[#000000] text-[#F5F5F7] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[780px] h-[420px] rounded-full bg-[#0071E3]/15 blur-[130px]"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <p className="text-xs font-semibold text-[#66B2FF] uppercase tracking-wider mb-3">
          {isJa ? "対話" : "Dialogue"}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: easeEditorial }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Main Statement & Direct CTA */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.08] tracking-tight mb-5">
              {portfolioData.contact.heading[language]}
            </h2>

            <p className="text-sm sm:text-lg text-[#A1A1A6] leading-relaxed max-w-xl mb-7">
              {portfolioData.contact.subheading[language]}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={mailtoUrl}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{portfolioData.contact.primaryButton[language]}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-[#F5F5F7] text-sm font-medium transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{isJa ? "コピー完了" : "Copied to clipboard"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#A1A1A6]" />
                    <span>{siteConfig.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Obsidian Bento Topic Selector */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-[28px] bg-[#161617]/90 backdrop-blur-xl border border-white/10">
            <div className="flex items-center justify-between text-xs text-[#86868B] pb-4 border-b border-white/10 mb-5">
              <span className="font-medium text-white">
                {isJa ? "トピックを選択" : "Select a topic"}
              </span>
              <span className="font-mono">JST (UTC+9)</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {topics.map((topic) => {
                const isSelected = selectedTopic === topic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setSelectedTopic(topic.id)}
                    className={cn(
                      "px-4 py-3 rounded-2xl text-left text-xs font-medium transition-colors cursor-pointer border",
                      isSelected
                        ? "bg-[#0071E3] text-white border-[#0071E3]"
                        : "bg-white/5 text-[#A1A1A6] border-white/10 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {topic.label}
                  </button>
                );
              })}
            </div>

            <a
              href={mailtoUrl}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] text-sm font-medium transition-colors"
            >
              <span>
                {isJa ? "この内容でメールを作成" : `Message about ${selectedTopic}`}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <p className="mt-4 text-xs text-[#86868B] text-center">
              {portfolioData.contact.responseExpectation[language]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
