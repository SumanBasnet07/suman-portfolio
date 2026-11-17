"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const isJa = language === "ja";

  return (
    <footer className="w-full bg-[#F5F5F7] border-t border-black/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/10">
          {/* Identity */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <p className="font-semibold text-lg tracking-tight text-[#1D1D1F] mb-1">
                {siteConfig.name}
              </p>
              <p className="text-xs text-[#6E6E73] mb-4">
                {siteConfig.role[language]}
              </p>
              <p className="text-sm text-[#6E6E73] max-w-sm leading-relaxed">
                {siteConfig.shortBio[language]}
              </p>
            </div>

            <div className="text-xs text-[#6E6E73]">
              {siteConfig.location.base[language]} · {siteConfig.location.timezone}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <span className="block text-xs font-semibold text-[#1D1D1F] mb-4">
              {isJa ? "ナビゲーション" : "Navigation"}
            </span>
            <ul className="space-y-2.5 text-sm text-[#6E6E73]">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${language}${item.href}`}
                    className="hover:text-[#1D1D1F] transition-colors"
                  >
                    {item.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <span className="block text-xs font-semibold text-[#1D1D1F] mb-4">
              {isJa ? "コンタクト・リンク" : "Connect"}
            </span>
            <ul className="space-y-2.5 text-sm text-[#6E6E73]">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1 hover:text-[#0071E3] transition-colors"
                >
                  <span>{siteConfig.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://explore.suman-basnet.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#0071E3] transition-colors"
                >
                  <span>explore.suman-basnet.com.np</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#1D1D1F] transition-colors"
                >
                  <span>GitHub (sumanbasnet07)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#1D1D1F] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#1D1D1F] transition-colors"
                >
                  <span>X (@distrya_online)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6E73]">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div>{siteConfig.footer.colophon[language]}</div>
        </div>
      </div>
    </footer>
  );
}
