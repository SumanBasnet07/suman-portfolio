"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
          "fixed top-0 left-0 right-0 z-40 transition-colors duration-300",
          isScrolled
            ? "py-3 bg-white/80 backdrop-blur-xl border-b border-black/5"
            : "py-4 bg-white/70 backdrop-blur-md border-b border-black/5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand */}
          <Link
            href={homeHref}
            className="group flex items-center gap-3 select-none"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-black/10 shrink-0">
              <Image
                src="/nav-suman.png"
                alt={siteConfig.name}
                fill
                sizes="32px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-[#6E6E73] hidden sm:block leading-none mt-0.5">
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
                    "text-xs font-medium transition-colors select-none",
                    isActive
                      ? "text-[#1D1D1F]"
                      : "text-[#6E6E73] hover:text-[#1D1D1F]"
                  )}
                >
                  {item.label[language]}
                </Link>
              );
            })}

            {/* Segmented Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center p-0.5 rounded-full bg-[#F5F5F7] border border-black/5 text-[11px] font-medium cursor-pointer"
              title="Toggle between /en and /ja"
            >
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full transition-colors",
                  language === "en"
                    ? "bg-white text-[#1D1D1F] shadow-2xs"
                    : "text-[#6E6E73]"
                )}
              >
                EN
              </span>
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full transition-colors",
                  language === "ja"
                    ? "bg-white text-[#1D1D1F] shadow-2xs"
                    : "text-[#6E6E73]"
                )}
              >
                JA
              </span>
            </button>

            {/* Primary Pill CTA */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-4 py-1.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-colors"
            >
              {language === "ja" ? "相談する" : "Inquire"}
            </a>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full bg-[#F5F5F7] border border-black/5 text-xs font-medium text-[#1D1D1F]"
            >
              {language === "en" ? "JA" : "EN"}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        {/* Scroll-linked reading progress line */}
        <motion.div
          style={{ scaleX }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0071E3] origin-left"
        />
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 md:hidden"
          >
            <div className="flex flex-col gap-3">
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
                      "text-3xl font-semibold tracking-tight py-2 transition-colors",
                      isActive
                        ? "text-[#0071E3]"
                        : "text-[#1D1D1F] hover:text-[#0071E3]"
                    )}
                  >
                    {item.label[language]}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-black/10 flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-base text-[#0071E3] font-medium"
              >
                {siteConfig.email}
              </a>
              <div className="flex gap-5 text-xs text-[#6E6E73]">
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer">
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
