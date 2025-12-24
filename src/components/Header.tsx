// components/Header.tsx
'use client';

import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language } from '@/types/language';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  language: Language;
}

export function Header({ language }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = {
    en: ['Home', 'Projects', 'Skills', 'About', 'Contact'],
    ja: ['ホーム', 'プロジェクト', 'スキル', '私について', 'お問い合わせ']
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const switchLanguage = (newLang: Language) => {
    const newPathname = pathname.replace(`/${language}`, `/${newLang}`);
    router.push(newPathname);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 h-16 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">SB</span>
          </div>
          <span className="font-semibold">Suman Basnet</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems[language].map((item) => (
            <Button
              key={item}
              variant="ghost"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </Button>
          ))}
          
          <div className="flex items-center gap-2 ml-4">
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => switchLanguage('en')}
            >
              EN
            </Button>
            <Button
              variant={language === 'ja' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => switchLanguage('ja')}
            >
              日本語
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              {navItems[language].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              ))}
              
              <div className="flex gap-2 pt-4">
                <Button
                  variant={language === 'en' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => switchLanguage('en')}
                >
                  EN
                </Button>
                <Button
                  variant={language === 'ja' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => switchLanguage('ja')}
                >
                  日本語
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}