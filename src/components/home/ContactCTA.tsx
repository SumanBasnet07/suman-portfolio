"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  MessageSquare,
  Clock,
  Sparkles,
  Send,
  Layers,
  Bot,
  Globe,
} from "lucide-react";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("Product Systems");
  const { language } = useLanguage();
  const isJa = language === "ja";

  const topics = [
    {
      id: "Product Systems",
      label: isJa ? "プロダクト設計" : "Product Systems",
      icon: <Layers className="w-3.5 h-3.5" />,
    },
    {
      id: "AI & MCP",
      label: isJa ? "AI & MCP基盤" : "AI & MCP",
      icon: <Bot className="w-3.5 h-3.5" />,
    },
    {
      id: "Commerce Infrastructure",
      label: isJa ? "コマースインフラ" : "Commerce Tech",
      icon: <Globe className="w-3.5 h-3.5" />,
    },
    {
      id: "Collaboration",
      label: isJa ? "協業・対話" : "Collaboration",
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
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
      className="py-20 md:py-28 border-t border-[#111111]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel
          label="05"
          sublabel={isJa ? "対話" : "DIALOGUE"}
          icon={<MessageSquare className="w-3.5 h-3.5 text-blue-600" />}
          className="mb-6"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Statement & Direct CTA */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#111111] leading-[1.12] tracking-tight mb-6">
                {portfolioData.contact.heading[language]}
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-xl font-light mb-8">
                {portfolioData.contact.subheading[language]}
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={0.3}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                href={mailtoUrl}
                variant="primary"
                className="gap-2 group text-xs font-mono tracking-widest uppercase shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>{portfolioData.contact.primaryButton[language]}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[#111111]/20 hover:border-[#111111] bg-white text-[#111111] text-xs font-mono tracking-wider transition-all cursor-pointer shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isJa ? "コピー完了" : "COPIED TO CLIPBOARD"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#666666]" />
                    <span>{siteConfig.email}</span>
                  </>
                )}
              </button>
            </Reveal>
          </div>

          {/* Distinctive Interactive Message Window (Personal Visual Object) */}
          <div className="lg:col-span-5">
            <Reveal direction="up" delay={0.25}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] text-white border border-white/15 shadow-2xl relative overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white font-semibold">MESSAGE WINDOW</span>
                  </div>
                  <span className="text-white/40">DIRECT DISPATCH</span>
                </div>

                {/* Recipient */}
                <div className="mb-6">
                  <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider block mb-1">
                    RECIPIENT
                  </span>
                  <div className="font-mono text-sm sm:text-base font-medium text-white flex items-center gap-2">
                    <span>{siteConfig.email}</span>
                  </div>
                </div>

                {/* Interest Topic Selector */}
                <div className="mb-6">
                  <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider block mb-2.5">
                    {isJa ? "対話のテーマを選択" : "SELECT TOPIC OF CONVERSATION"}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {topics.map((t) => {
                      const isSelected = selectedTopic === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setSelectedTopic(t.id)}
                          className={`p-2.5 rounded-xl text-left font-mono text-[11px] transition-all flex items-center gap-2 cursor-pointer border ${
                            isSelected
                              ? "bg-blue-600 text-white border-blue-500 shadow-sm"
                              : "bg-white/[0.06] text-white/70 border-white/10 hover:bg-white/10"
                          }`}
                        >
                          {t.icon}
                          <span className="truncate">{t.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Window Action */}
                <a
                  href={mailtoUrl}
                  className="w-full py-3 px-4 rounded-xl bg-white text-[#111111] hover:bg-blue-50 font-mono text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-md mb-4"
                >
                  <Send className="w-3.5 h-3.5 text-blue-600" />
                  <span>{isJa ? "メールを作成して送信" : "COMPOSE DIRECT EMAIL"}</span>
                </a>

                <p className="font-mono text-[10px] text-white/40 text-center flex items-center justify-center gap-1.5">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>Replies within 24 hours · Japan Standard Time</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
