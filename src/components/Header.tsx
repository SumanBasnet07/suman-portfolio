'use client';

import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Language } from '@/app/page';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Header({ language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = {
    en: ['Home', 'Projects', 'Skills', 'About', 'Contact'],
    jp: ['ホーム', 'プロジェクト', 'スキル', '私について', 'お問い合わせ']
  };

  const scrollToSection = (index: number) => {
    const sections = ['hero', 'projects', 'skills', 'about', 'contact'];
    const element = document.getElementById(sections[index]);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 border-b bg-white/80 dark:bg-gray-900 backdrop-blur-md z-50 border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
              {language === 'en' ? 'My Portfolio' : 'マイポートフォリオ'}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems[language].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium py-2 px-1 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 dark:bg-teal-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Theme Toggle and Language */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Language Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full transition-all duration-300 text-sm font-medium ${
                  language === 'en'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('jp')}
                className={`px-3 py-1 rounded-full transition-all duration-300 text-sm font-medium ${
                  language === 'jp'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                JP
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2 bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 shadow-lg">
            {navItems[language].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-left"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}