import { Metadata } from "next";

// English metadata
export const metadata: Metadata = {
  title: {
    default:
      "Suman Basnet — Full Stack Developer & Digital Craftsman | MERN Stack Specialist",
    template: "%s | Suman Basnet",
  },
  description:
    "Suman Basnet is a passionate Full Stack Developer specializing in MERN stack and Next.js. With 3+ years of experience, I build scalable web applications, modern interfaces, and digital solutions. Expertise in React, Node.js, MongoDB, TypeScript, and modern web technologies.",
  keywords: [
    "Suman Basnet",
    "Nara Computer Vocational School",
    "Shree Jalapa Devi Secondary School",
    "Pakhribas",
    "Pakhribas, Dhankuta",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Web Application Developer",
    "Frontend Developer",
    "Backend Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Web Designer",
    "UI/UX Designer",
    "Digital Craftsman",
    "Web Solutions",
    "Portfolio",
    "Nepal Developer",
    "Japan Developer",
  ],
  authors: [{ name: "Suman Basnet" }],
  creator: "Suman Basnet",
  publisher: "Suman Basnet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://suman-basnet.com.np"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ja: "/ja",
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://suman-basnet.com.np",
    title: "Suman Basnet — Full Stack Developer & Digital Craftsman",
    description:
      "Passionate Full Stack Developer specializing in MERN stack and Next.js. Building scalable web applications and digital solutions with modern technologies.",
    siteName: "Suman Basnet Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suman Basnet - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sumanbasnet",
    creator: "@sumanbasnet",
    title: "Suman Basnet — Full Stack Developer & Digital Craftsman",
    description:
      "MERN Stack Specialist building scalable web applications with React, Node.js, and modern technologies. 3+ years of development experience.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  other: {
    "theme-color": "#0f766e",
    "msapplication-TileColor": "#0f766e",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

// Japanese metadata
export const metadataJP: Metadata = {
  title: {
    default:
      "バスネットスーマン — フルスタックデベロッパー & デジタルクラフトマン | MERNスタックスペシャリスト",
    template: "%s | Suman Basnet",
  },
  description:
    "バスネット　スーマンは、MERNスタックとNext.jsを専門とする情熱的なフルスタックデベロッパーです。3年以上の経験を持ち、スケーラブルなWebアプリケーション、モダンなインターフェース、デジタルソリューションを構築します。React、Node.js、MongoDB、TypeScript、現代のWeb技術に精通しています。",
  keywords: [
    "Suman Basnet",
    "バスネット スーマン",
    "奈良コンピューター専門学校",
    "フルスタックデベロッパー",
    "MERNスタックデベロッパー",
    "Reactデベロッパー",
    "Next.jsデベロッパー",
    "JavaScriptデベロッパー",
    "Webソリューション",
    "ポートフォリオ",
    "ネパールデベロッパー",
    "日本デベロッパー",
    "在日エンジニア",
    "外国人エンジニア",
  ],
  authors: [{ name: "Suman Basnet" }],
  creator: "Suman Basnet",
  publisher: "Suman Basnet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://suman-basnet.com.np"),
  alternates: {
    canonical: "/ja",
    languages: {
      en: "/",
      ja: "/ja",
    },
  },
  openGraph: {
    type: "profile",
    locale: "ja_JP",
    url: "https://suman-basnet.com.np/ja",
    title:
      "バスネットスーマン — フルスタックデベロッパー & デジタルクラフトマン",
    description:
      "MERNスタックとNext.jsを専門とする情熱的なフルスタックデベロッパー。現代の技術でスケーラブルなWebアプリケーションとデジタルソリューションを構築。",
    siteName: "バスネットスーマンポートフォリオ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suman Basnet - フルスタックデベロッパーポートフォリオ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sumanbasnet",
    creator: "@sumanbasnet",
    title: "Suman Basnet — フルスタックデベロッパー & デジタルクラフトマン",
    description:
      "React、Node.js、現代技術でスケーラブルなWebアプリケーションを構築するMERNスタックスペシャリスト。3年以上の開発経験。",
    images: ["/twitter-image-ja.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  other: {
    "theme-color": "#0f766e",
    "msapplication-TileColor": "#0f766e",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};
