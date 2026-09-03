import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/ui/Cursor";
import { PageTransition } from "@/components/layout/PageTransition";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const isJa = resolved.lang === "ja";

  const title = isJa
    ? `${siteConfig.name} — 創業者 & プロダクトエンジニア`
    : `${siteConfig.name} — Founder & Product Engineer`;

  const description = isJa
    ? siteConfig.shortBio.ja
    : siteConfig.shortBio.en;

  return {
    title,
    description,
    keywords: [
      "Suman Basnet",
      "Product Engineer",
      "Founder",
      "HamroLink",
      "Distrya",
      "Model Context Protocol",
      "MCP",
      "AI Agents",
      "Next.js",
      "TypeScript",
      "Software Architecture",
    ],
    authors: [{ name: siteConfig.name, url: "https://suman-basnet.com.np" }],
    creator: siteConfig.name,
    metadataBase: new URL("https://suman-basnet.com.np"),
    alternates: {
      canonical: `https://suman-basnet.com.np/${resolved.lang || "en"}`,
      languages: {
        en: "https://suman-basnet.com.np/en",
        ja: "https://suman-basnet.com.np/ja",
        "x-default": "https://suman-basnet.com.np/en",
      },
    },
    openGraph: {
      type: "website",
      locale: isJa ? "ja_JP" : "en_US",
      url: `https://suman-basnet.com.np/${resolved.lang || "en"}`,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@distrya_online",
      images: ["/og-image.jpg"],
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
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const currentLang = resolved.lang === "ja" ? "ja" : "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: `https://suman-basnet.com.np/${currentLang}`,
    image: "https://suman-basnet.com.np/my-image.png",
    jobTitle: currentLang === "ja" ? "創業者 & プロダクトエンジニア" : "Founder & Product Engineer",
    description: currentLang === "ja" ? siteConfig.shortBio.ja : siteConfig.shortBio.en,
    knowsAbout: [
      "Product Engineering",
      "Model Context Protocol (MCP)",
      "AI Agents",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "System Architecture",
    ],
    location: {
      "@type": "Place",
      name: "Osaka, Japan",
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
  };

  return (
    <html
      lang={currentLang}
      className={`${sora.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between selection:bg-[#111111] selection:text-[#F7F7F4]">
        <LanguageProvider initialLanguage={currentLang}>
          <Cursor />
          <Navbar />
          <main className="flex-grow w-full">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
