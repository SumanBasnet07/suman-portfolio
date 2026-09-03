"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Layers,
  BookOpen,
  Compass,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const getNavIcon = (href: string) => {
    switch (href) {
      case "/work":
        return <Layers className="w-3.5 h-3.5 text-blue-600" />;
      case "/writing":
        return <BookOpen className="w-3.5 h-3.5 text-purple-600" />;
      case "/about":
        return <Compass className="w-3.5 h-3.5 text-emerald-600" />;
      case "/contact":
        return <MessageSquare className="w-3.5 h-3.5 text-orange-600" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-blue-600" />;
    }
  };

  return (
    <footer className="w-full bg-[#F7F7F4] border-t border-[#111111]/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Identity */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                <span className="font-semibold tracking-wider text-base uppercase text-[#111111]">
                  {siteConfig.name}
                </span>
              </div>
              <p className="font-mono text-xs tracking-widest uppercase text-[#666666] mb-4">
                {siteConfig.role[language]}
              </p>
              <p className="text-sm text-[#666666] max-w-sm leading-relaxed">
                {siteConfig.shortBio[language]}
              </p>
            </div>

            <div className="pt-8 md:pt-0 font-mono text-[11px] text-[#666666] tracking-wider flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>
                {siteConfig.location.base[language]} · {siteConfig.location.timezone}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <span className="block font-mono text-xs text-[#666666] tracking-widest uppercase mb-6">
              {language === "ja" ? "ナビゲーション" : "NAVIGATION"}
            </span>
            <ul className="space-y-3 font-mono text-xs tracking-wider">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${language}${item.href}`}
                    className="text-[#111111] hover:text-[#2563EB] transition-colors inline-flex items-center gap-2.5 group"
                  >
                    <span className="p-1 rounded bg-[#111111]/5 group-hover:bg-[#2563EB]/10 transition-colors">
                      {getNavIcon(item.href)}
                    </span>
                    <span>{item.label[language]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <span className="block font-mono text-xs text-[#666666] tracking-widest uppercase mb-6">
              {language === "ja" ? "コンタクト & リンク" : "CONNECT & NETWORK"}
            </span>
            <ul className="space-y-3 font-mono text-xs tracking-wider">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-2 text-[#111111] hover:text-[#2563EB] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#2563EB] transition-colors" />
                  <span>{siteConfig.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#2563EB] transition-colors ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[#111111] hover:text-[#2563EB] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#2563EB] transition-colors" />
                  <span>GITHUB (sumanbasnet07)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#2563EB] transition-colors ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[#111111] hover:text-[#2563EB] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#2563EB] transition-colors" />
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#2563EB] transition-colors ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[#111111] hover:text-[#2563EB] transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#2563EB] transition-colors" />
                  <span>X / TWITTER (@distrya_online)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#2563EB] transition-colors ml-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#111111]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#666666]">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-[#666666]/80 flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-purple-600 inline" />
            <span>{siteConfig.footer.colophon[language]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
