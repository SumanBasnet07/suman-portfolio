"use client";

import React, { useState, use } from "react";
import { siteConfig } from "@/data/site";
import { portfolioData } from "@/data/portfolio";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Copy, Check, Mail, Send } from "lucide-react";

export default function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = use(params);
  const language = resolvedParams.lang === "ja" ? "ja" : "en";
  const isJa = language === "ja";

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      formData.subject || "Product & Systems Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="pb-16 border-b border-[#111111]/10 mb-16">
          <SectionLabel
            label={isJa ? "05 / お問い合わせ & 対話" : "05 / CONTACT & DIALOGUE"}
            className="mb-4"
          />
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] tracking-tight leading-[1.15] mb-8">
              {portfolioData.contact.heading[language]}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-lg sm:text-xl text-[#666666] font-light max-w-2xl leading-relaxed">
              {portfolioData.contact.subheading[language]}
            </p>
          </Reveal>
        </div>

        {/* Contact Form & Direct Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.25}>
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#111111]/10 shadow-sm">
                <h2 className="text-xl font-light text-[#111111] mb-6">
                  {isJa ? "直接メッセージを送信" : "Send a Direct Message"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-[#666666] mb-2"
                      >
                        {isJa ? "お名前" : "Your Name"}
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={isJa ? "山田 太郎" : "Ada Lovelace"}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F4] border border-[#111111]/10 text-sm text-[#111111] focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wider text-[#666666] mb-2"
                      >
                        {isJa ? "メールアドレス" : "Your Email"}
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="ada@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F4] border border-[#111111]/10 text-sm text-[#111111] focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-mono text-xs uppercase tracking-wider text-[#666666] mb-2"
                    >
                      {isJa ? "ご相談内容 / トピック" : "Subject / Focus Area"}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder={
                        isJa
                          ? "Model Context Protocol (MCP) やシステム設計に関する相談"
                          : "Discussing Model Context Protocol (MCP) or Systems Architecture"
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F4] border border-[#111111]/10 text-sm text-[#111111] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-wider text-[#666666] mb-2"
                    >
                      {isJa ? "メッセージ本文" : "Message"}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={
                        isJa
                          ? "プロジェクトの構想、直面している技術的制約、対話したい内容などをお書きください..."
                          : "Tell me about what you're exploring, the technical constraints, or questions you have..."
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F4] border border-[#111111]/10 text-sm text-[#111111] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#111111] text-[#F7F7F4] hover:bg-[#2563EB] text-xs font-mono tracking-widest uppercase transition-all shadow-md group cursor-pointer"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    <span>
                      {isJa ? "メールを送信する" : "TRANSMIT MESSAGE"}
                    </span>
                  </button>

                  {submitted && (
                    <p className="font-mono text-xs text-emerald-600 mt-2">
                      {isJa
                        ? "メールクライアントを開いています..."
                        : "Opening your email client to transmit message..."}
                    </p>
                  )}
                </form>
              </div>
            </Reveal>
          </div>

          {/* Coordinates Details */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal direction="up" delay={0.35}>
              <div className="p-8 rounded-3xl bg-white border border-[#111111]/10 shadow-sm">
                <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block mb-3">
                  {portfolioData.contact.directEmailLabel[language]}
                </span>
                <div className="text-xl font-medium text-[#111111] mb-2">
                  {siteConfig.email}
                </div>
                <p className="text-xs text-[#666666] font-light mb-6">
                  {portfolioData.contact.responseExpectation[language]}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111111] text-[#F7F7F4] hover:bg-[#2563EB] font-mono text-xs tracking-wider transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{isJa ? "メール作成" : "COMPOSE"}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#111111]/20 bg-white text-[#111111] hover:border-[#111111] font-mono text-xs tracking-wider transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{isJa ? "コピー完了" : "COPIED"}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#666666]" />
                        <span>{isJa ? "アドレスをコピー" : "COPY ADDRESS"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.45}>
              <div className="p-8 rounded-3xl bg-white border border-[#111111]/10 shadow-sm">
                <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block mb-4">
                  {isJa ? "オンラインアカウント" : "VERIFIED ONLINE IDENTITIES"}
                </span>

                <div className="space-y-3 font-mono text-xs">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F7F7F4] text-[#111111] transition-colors group"
                  >
                    <span>GITHUB (sumanbasnet07)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#111111] group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F7F7F4] text-[#111111] transition-colors group"
                  >
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#111111] group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F7F7F4] text-[#111111] transition-colors group"
                  >
                    <span>X / TWITTER (@distrya_online)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#111111] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
