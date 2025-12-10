"use client";

import {
  Heart,
  Code2,
  Mail,
  ArrowUp,
  ExternalLink,
  Coffee,
} from "lucide-react";
import { Language } from "@/types/language"; // Updated import
import { Button } from "./ui/button";
import { useRouter, usePathname } from "next/navigation"; // Add these imports

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const content = {
    en: {
      copyright: "© 2024 Suman Basnet. All rights reserved.",
      madeWith: "Crafted with",
      and: "and",
      links: {
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        about: "About",
        contact: "Contact",
      },
      description:
        "Full-Stack Developer specializing in MERN stack and Next.js applications.",
      quickLinks: "Quick Links",
      language: "Language",
      connect: "Connect",
      backToTop: "Back to Top",
      ready: "Ready to start your project?",
      getInTouch: "Get in touch today!",
    },
    ja: {
      copyright: "© 2024 スマン・バスネット. 全著作権所有。",
      madeWith: "愛情を込めて作成",
      and: "と",
      links: {
        home: "ホーム",
        projects: "プロジェクト",
        skills: "スキル",
        about: "私について",
        contact: "お問い合わせ",
      },
      description:
        "MERNスタックとNext.jsアプリケーションを専門とするフルスタック開発者。",
      quickLinks: "クイックリンク",
      language: "言語",
      connect: "コンタクト",
      backToTop: "トップに戻る",
      ready: "プロジェクトを始める準備はできていますか？",
      getInTouch: "今日ご連絡ください！",
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to switch language using router
  const switchLanguage = (newLang: Language) => {
    // Replace the language prefix in the current pathname
    const newPathname = pathname.replace(`/${language}`, `/${newLang}`);
    router.push(newPathname);
  };

  const footerLinks = [
    { label: content[language].links.home, id: "hero" },
    { label: content[language].links.projects, id: "projects" },
    { label: content[language].links.skills, id: "skills" },
    { label: content[language].links.about, id: "about" },
    { label: content[language].links.contact, id: "contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sumanbasnet07",
      icon: Code2,
    },
    {
      name: "Email",
      url: "mailto:suman@distrya.com",
      icon: Mail,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/suman.basnet.5095110/",
      icon: ExternalLink,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-95"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {content[language].ready}
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                {content[language].getInTouch}
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-full px-8 py-6 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="mr-2" size={20} />
                {language === "en" ? "Let's Talk" : "お問い合わせ"}
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Code2 className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Suman Basnet</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                {content[language].description}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    title={social.name}
                  >
                    <social.icon
                      className="text-gray-300 hover:text-white"
                      size={18}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {content[language].quickLinks}
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Language Toggle */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {content[language].language}
              </h3>
              <div className="flex items-center gap-2 bg-gray-800 rounded-full p-1 w-fit border border-gray-700">
                <button
                  onClick={() => switchLanguage("en")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                    language === "en"
                      ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage("ja")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                    language === "ja"
                      ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  JP
                </button>
              </div>
            </div>

            {/* Back to Top */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {content[language].connect}
              </h3>
              <Button
                onClick={scrollToTop}
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-full px-6 py-3 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 group"
                variant="outline"
              >
                <ArrowUp
                  className="mr-2 group-hover:-translate-y-0.5 transition-transform"
                  size={16}
                />
                {content[language].backToTop}
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {content[language].copyright}
            </p>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span>{content[language].madeWith}</span>
              <Heart
                className="text-red-500 fill-red-500 animate-pulse"
                size={16}
              />
              <span>{content[language].and}</span>
              <Coffee className="text-amber-500" size={16} />
              <span>by Suman Basnet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
