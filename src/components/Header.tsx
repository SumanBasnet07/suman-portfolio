'use client';

import { Menu, Sparkles, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language } from '@/types/language';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  language: Language;
}

export function Header({ language }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    en: [
      { label: 'Home', id: 'hero' },
      { label: 'Projects', id: 'projects' },
      { label: 'Skills', id: 'skills' },
      { label: 'About', id: 'about' },
      { label: 'Contact', id: 'contact' },
    ],
    ja: [
      { label: 'ホーム', id: 'hero' },
      { label: 'プロジェクト', id: 'projects' },
      { label: 'スキル', id: 'skills' },
      { label: '私について', id: 'about' },
      { label: 'お問い合わせ', id: 'contact' },
    ],
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const switchLanguage = (newLang: Language) => {
    const newPathname = pathname.replace(`/${language}`, `/${newLang}`);
    router.push(newPathname);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-sm shadow-black/5 border-b border-gray-100/80 dark:border-gray-800/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/30" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm tracking-tight"><img src="/favicon-96x96.png" alt="" /></span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-gray-900 dark:text-white text-[15px] tracking-tight">Suman Basnet</span>
            <span className="text-[10px] text-teal-600 dark:text-teal-400 font-medium tracking-widest uppercase">Full‑Stack Dev</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems[language].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60 rounded-lg transition-all duration-200"
            >
              {item.label}
            </button>
          ))}

          {/* HamroLink CTA pill */}
          <a
            href="https://hamrolink.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white text-xs font-semibold rounded-full shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <Sparkles className="w-3 h-3 group-hover:rotate-12 transition-transform" />
            HamroLink
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          {/* Language toggle */}
          <div className="flex items-center ml-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5 border border-gray-200 dark:border-gray-700">
            {(['en', 'ja'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => switchLanguage(lang)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                  language === lang
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                {lang === 'en' ? 'EN' : '日本語'}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-2 mt-8">
              {/* HamroLink hero CTA in mobile */}
              <a
                href="https://hamrolink.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 mb-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-semibold rounded-xl shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                Try HamroLink Free
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              {navItems[language].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}

              <div className="flex gap-2 pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
                {(['en', 'ja'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => switchLanguage(lang)}
                    className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                      language === lang
                        ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/30'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {lang === 'en' ? 'English' : '日本語'}
                  </button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}