"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const homeHref = `/${language}`;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out",
          isScrolled
            ? "py-3 bg-[#F7F7F4]/85 backdrop-blur-md border-b border-[#111111]/10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand with Image Logo */}
          <Link
            href={homeHref}
            className="group flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#111111]/20 group-hover:border-[#2563EB] group-hover:scale-105 transition-all duration-300 shrink-0 shadow-2xs">
              <Image
                src="/nav-suman.png"
                alt={siteConfig.name}
                fill
                sizes="32px"
                className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wider uppercase text-[#111111] group-hover:text-[#2563EB] transition-colors">
                {siteConfig.name}
              </span>
              <span className="font-mono text-[10px] text-[#666666] tracking-widest hidden sm:block">
                {siteConfig.role[language]}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {siteConfig.navItems.map((item) => {
              const fullHref = `/${language}${item.href}`;
              const isActive =
                item.href === "/"
                  ? pathname === `/${language}`
                  : pathname.startsWith(fullHref);

              return (
                <Link
                  key={item.href}
                  href={fullHref}
                  className={cn(
                    "relative py-1 font-mono text-xs tracking-widest uppercase transition-colors select-none",
                    isActive
                      ? "text-[#111111] font-medium"
                      : "text-[#666666] hover:text-[#111111]"
                  )}
                >
                  {item.label[language]}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#111111]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Language Switcher Button (/en <-> /ja) */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#111111]/20 hover:border-[#111111] bg-white/60 text-xs font-mono tracking-wider transition-all select-none cursor-pointer shadow-xs"
              title="Toggle between /en and /ja"
            >
              <Globe className="w-3 h-3 text-[#666666]" />
              <span
                className={
                  language === "en"
                    ? "font-semibold text-[#111111]"
                    : "text-[#666666]"
                }
              >
                EN
              </span>
              <span className="text-[#111111]/30">/</span>
              <span
                className={
                  language === "ja"
                    ? "font-semibold text-[#111111]"
                    : "text-[#666666]"
                }
              >
                JA
              </span>
            </button>

            {/* Inquire CTA */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs tracking-widest text-[#111111] border border-[#111111]/20 hover:border-[#111111] hover:bg-[#111111] hover:text-[#F7F7F4] transition-all duration-200"
            >
              <span>{language === "ja" ? "相談する" : "INQUIRE"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full border border-[#111111]/20 text-[11px] font-mono bg-white/50"
            >
              {language === "en" ? "JA" : "EN"}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#2563EB] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#F7F7F4] pt-28 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs text-[#666666] tracking-widest uppercase mb-2">
                NAVIGATION
              </span>
              {siteConfig.navItems.map((item, idx) => {
                const fullHref = `/${language}${item.href}`;
                const isActive =
                  item.href === "/"
                    ? pathname === `/${language}`
                    : pathname.startsWith(fullHref);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  >
                    <Link
                      href={fullHref}
                      className={cn(
                        "text-3xl font-light tracking-tight transition-colors block py-2",
                        isActive
                          ? "text-[#2563EB] font-normal"
                          : "text-[#111111] hover:text-[#2563EB]"
                      )}
                    >
                      {item.label[language]}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-[#111111]/10 flex flex-col gap-4">
              <span className="font-mono text-xs text-[#666666] tracking-widest uppercase">
                COORDINATES
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-base text-[#111111] hover:text-[#2563EB] font-medium"
              >
                {siteConfig.email}
              </a>
              <div className="flex gap-4 font-mono text-xs text-[#666666]">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#111111]"
                >
                  GITHUB
                </a>
                <span>/</span>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#111111]"
                >
                  LINKEDIN
                </a>
                <span>/</span>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#111111]"
                >
                  X
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
