"use client";

import { Heart, Code2, Mail, ArrowUp, Coffee, Sparkles, Zap, ExternalLink, Globe } from "lucide-react";
import { Language } from "@/types/language";
import { Button } from "./ui/button";
import { useRouter, usePathname } from "next/navigation";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const content = {
    en: {
      copyright: "© 2025 Suman Basnet. All rights reserved.",
      madeWith: "Crafted with",
      and: "and",
      links: {
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        about: "About",
        contact: "Contact",
      },
      description: "Full-Stack Developer specializing in MERN stack and Next.js. Also building HamroLink — AI-powered websites for Nepali SMEs.",
      quickLinks: "Quick Links",
      language: "Language",
      connect: "Navigate",
      backToTop: "Back to Top",
      ready: "Ready to start your project?",
      getInTouch: "Let's build something great together!",
      hamrolinkSection: "My Product",
      hamrolinkDesc: "AI-powered website builder for Nepali SMEs",
      hamrolinkCTA: "Try for Free",
      hamrolinkPricing: "View Pricing",
      hamrolinkHint: "From NPR 199/month",
    },
    ja: {
      copyright: "© 2025 スマン・バスネット. 全著作権所有。",
      madeWith: "愛情を込めて作成",
      and: "と",
      links: {
        home: "ホーム",
        projects: "プロジェクト",
        skills: "スキル",
        about: "私について",
        contact: "お問い合わせ",
      },
      description: "MERNスタックとNext.jsを専門とするフルスタック開発者。HamroLink（ネパールSME向けAIウェブサイトビルダー）も構築中。",
      quickLinks: "クイックリンク",
      language: "言語",
      connect: "ナビゲーション",
      backToTop: "トップに戻る",
      ready: "プロジェクトを始める準備はできていますか？",
      getInTouch: "一緒に素晴らしいものを作りましょう！",
      hamrolinkSection: "自社製品",
      hamrolinkDesc: "ネパールSME向けAIウェブサイトビルダー",
      hamrolinkCTA: "無料で試す",
      hamrolinkPricing: "料金を見る",
      hamrolinkHint: "NPR 199/月〜",
    },
  };

  const c = content[language];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const switchLanguage = (newLang: Language) => {
    const newPathname = pathname.replace(`/${language}`, `/${newLang}`);
    router.push(newPathname);
  };

  const footerLinks = [
    { label: c.links.home, id: "hero" },
    { label: c.links.projects, id: "projects" },
    { label: c.links.skills, id: "skills" },
    { label: c.links.about, id: "about" },
    { label: c.links.contact, id: "contact" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/sumanbasnet07", icon: Code2 },
    { name: "Email", url: "mailto:suman@distrya.com", icon: Mail },
    { name: "Distrya", url: "https://distrya.com", icon: Globe },
  ];

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* CTA Banner */}
        <div className="border-b border-gray-800/80">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">{c.ready}</h3>
              <p className="text-gray-400 text-lg mb-8">{c.getInTouch}</p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-2xl px-8 py-6 shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-300 hover:-translate-y-1 font-bold"
              >
                <Mail className="mr-2" size={18} />
                {language === "en" ? "Let's Talk" : "お問い合わせ"}
              </Button>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Code2 className="text-white" size={18} />
                </div>
                <h3 className="text-lg font-black text-white tracking-tight">Suman Basnet</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm mb-5">{c.description}</p>
              <div className="flex gap-2.5">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <social.icon className="text-gray-400 hover:text-white" size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-bold text-white mb-5 tracking-widest uppercase">{c.quickLinks}</h3>
              <ul className="space-y-2.5">
                {footerLinks.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:translate-x-1.5 flex items-center gap-2 group text-sm"
                    >
                      <span className="w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* HamroLink */}
            <div>
              <div className="flex items-center gap-1.5 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <h3 className="text-sm font-bold text-white tracking-widest uppercase">{c.hamrolinkSection}</h3>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-950/50 to-rose-950/40 border border-orange-900/40 space-y-3">
                <div>
                  <p className="text-sm font-bold text-orange-300">HamroLink Digital</p>
                  <p className="text-xs text-gray-400 mt-0.5">{c.hamrolinkDesc}</p>
                  <p className="text-xs font-semibold text-orange-400/70 mt-1">{c.hamrolinkHint}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="https://hamrolink.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white text-xs font-bold rounded-xl transition-all duration-300"
                  >
                    <Zap className="w-3 h-3" />
                    {c.hamrolinkCTA}
                  </a>
                  <a
                    href="https://hamrolink.com/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs font-semibold rounded-xl transition-all duration-300"
                  >
                    {c.hamrolinkPricing}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Language + back to top */}
            <div>
              <h3 className="text-sm font-bold text-white mb-5 tracking-widest uppercase">{c.language}</h3>
              <div className="flex items-center gap-1 bg-gray-800/80 rounded-xl p-1 w-fit border border-gray-700/60 mb-6">
                {(['en', 'ja'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => switchLanguage(lang)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                      language === lang
                        ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/60'
                    }`}
                  >
                    {lang === 'en' ? 'EN' : 'JP'}
                  </button>
                ))}
              </div>

              <h3 className="text-sm font-bold text-white mb-3 tracking-widest uppercase">{c.connect}</h3>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white text-xs font-bold rounded-xl border border-gray-700/60 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                {c.backToTop}
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">{c.copyright}</p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>{c.madeWith}</span>
              <Heart className="text-red-500 fill-red-500 animate-pulse" size={14} />
              <span>{c.and}</span>
              <Coffee className="text-amber-500" size={14} />
              <span>by Suman Basnet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}