export interface LocalizedString {
  en: string;
  ja: string;
}

export interface SiteConfig {
  name: string;
  role: LocalizedString;
  shortBio: LocalizedString;
  email: string;
  location: {
    base: LocalizedString;
    focus: LocalizedString;
    timezone: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  navItems: {
    label: LocalizedString;
    href: string;
  }[];
  footer: {
    colophon: LocalizedString;
  };
}

export const siteConfig: SiteConfig = {
  name: "Suman Basnet",
  role: {
    en: "Founder & Product Engineer",
    ja: "創業者 & プロダクトエンジニア",
  },
  shortBio: {
    en: "Building software products, business systems and AI-powered infrastructure.",
    ja: "ソフトウェアプロダクト、業務システム、AI基盤アーキテクチャの開発に従事。",
  },
  email: "suman@distrya.com",
  location: {
    base: {
      en: "Osaka, Japan",
      ja: "日本・大阪",
    },
    focus: {
      en: "Nepal & Global",
      ja: "ネパール & グローバル展開",
    },
    timezone: "JST (UTC+9)",
  },
  social: {
    github: "https://github.com/sumanbasnet07",
    linkedin: "https://www.linkedin.com/in/suman-basnet-73a07037a/",
    twitter: "https://x.com/distrya_online",
  },
  navItems: [
    { label: { en: "WORK", ja: "実績 / WORK" }, href: "/work" },
    { label: { en: "WRITING", ja: "考察 / WRITING" }, href: "/writing" },
    { label: { en: "ABOUT", ja: "経歴 / ABOUT" }, href: "/about" },
    { label: { en: "CONTACT", ja: "連絡 / CONTACT" }, href: "/contact" },
  ],
  footer: {
    colophon: {
      en: "Built with curiosity and too many browser tabs.",
      ja: "探究心と無数のブラウザタブと共に構築。",
    },
  },
};
