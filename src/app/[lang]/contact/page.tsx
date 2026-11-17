"use client";

import React, { useState, use } from "react";
import { siteConfig } from "@/data/site";
import { portfolioData } from "@/data/portfolio";
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
    <div className="w-full">
      {/* Obsidian Header Band */}
      <section className="relative bg-[#000000] text-[#F5F5F7] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[420px] rounded-full bg-[#0071E3]/15 blur-[130px]"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <p className="text-xs font-semibold text-[#66B2FF] uppercase tracking-wider mb-3">
            {isJa ? "お問い合わせ・対話" : "Contact & dialogue"}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-[1.06] mb-6 max-w-4xl">
            {portfolioData.contact.heading[language]}
          </h1>
          <p className="text-base sm:text-xl text-[#A1A1A6] max-w-2xl leading-relaxed">
            {portfolioData.contact.subheading[language]}
          </p>
        </div>
      </section>

      {/* Silver Bento Form & Coordinates Band */}
      <section className="py-16 md:py-24 bg-[#F5F5F7] text-[#1D1D1F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Form Bento Card */}
            <div className="lg:col-span-7 p-7 sm:p-10 rounded-[28px] bg-white border border-black/5 shadow-xs">
              <h2 className="text-2xl font-semibold text-[#1D1D1F] tracking-tight mb-6">
                {isJa ? "直接メッセージを送信" : "Send a direct message"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-[#6E6E73] mb-2"
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
                      className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-black/5 text-sm text-[#1D1D1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-[#6E6E73] mb-2"
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
                      className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-black/5 text-sm text-[#1D1D1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-[#6E6E73] mb-2"
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
                    className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-black/5 text-sm text-[#1D1D1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-[#6E6E73] mb-2"
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
                    className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-black/5 text-sm text-[#1D1D1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isJa ? "メールを送信する" : "Transmit message"}</span>
                </button>

                {submitted && (
                  <p className="text-xs font-medium text-emerald-600 mt-2">
                    {isJa
                      ? "メールクライアントを開いています..."
                      : "Opening your email client to transmit message..."}
                  </p>
                )}
              </form>
            </div>

            {/* Right Bento Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-7 sm:p-8 rounded-[28px] bg-[#1D1D1F] text-white">
                <span className="text-xs font-semibold text-[#66B2FF] block mb-2">
                  {portfolioData.contact.directEmailLabel[language]}
                </span>
                <div className="text-xl font-semibold text-white mb-2">
                  {siteConfig.email}
                </div>
                <p className="text-xs text-[#A1A1A6] mb-6">
                  {portfolioData.contact.responseExpectation[language]}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{isJa ? "メール作成" : "Compose"}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-medium transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{isJa ? "コピー完了" : "Copied"}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#A1A1A6]" />
                        <span>{isJa ? "アドレスをコピー" : "Copy address"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-7 sm:p-8 rounded-[28px] bg-white border border-black/5">
                <span className="text-xs font-semibold text-[#6E6E73] block mb-4">
                  {isJa ? "オンラインアカウント" : "Online identities"}
                </span>

                <div className="space-y-1 text-sm">
                  <a
                    href="https://explore.suman-basnet.com.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#F5F5F7] text-[#1D1D1F] transition-colors group"
                  >
                    <span>Explore (Notes &amp; Blog)</span>
                    <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
                  </a>

                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#F5F5F7] text-[#1D1D1F] transition-colors group"
                  >
                    <span>GitHub (sumanbasnet07)</span>
                    <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
                  </a>

                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#F5F5F7] text-[#1D1D1F] transition-colors group"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
                  </a>

                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#F5F5F7] text-[#1D1D1F] transition-colors group"
                  >
                    <span>X (@distrya_online)</span>
                    <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
