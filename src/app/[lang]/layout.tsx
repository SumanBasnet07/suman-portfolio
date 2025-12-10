import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import Providers from "@/providers/Providers";
import { metadata as metadataEN, metadataJP } from "@/app/layout-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return lang === "ja" ? metadataJP : metadataEN;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";

  const isJapanese = lang === "ja";
  const currentFont = isJapanese ? notoSansJP : geistSans;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suman Basnet",
    url: `https://suman-basnet.com.np${isJapanese ? "/ja" : ""}`,
    image: "https://suman-basnet.com.np/my-image.png",
    jobTitle: isJapanese ? "フルスタックデベロッパー" : "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description: isJapanese
      ? "MERNスタックとNext.jsアプリケーションを専門とするフルスタックデベロッパー。3年以上の経験。"
      : "Full Stack Developer specializing in MERN stack and Next.js applications with 3+ years of experience.",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Git",
      "REST APIs",
      "UI/UX Design",
      "Responsive Web Design",
    ],
    knowsLanguage: ["English", "Japanese", "Nepali", "Hindi"],
    hasCredential: isJapanese
      ? "コンピュータ科学学士"
      : "Bachelor in Computer Science",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: isJapanese
        ? "奈良コンピュータ専門学校"
        : "Nara Computer Vocational School",
    },
    location: {
      "@type": "Place",
      name: "Osaka, Japan",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "suman@distrya.com",
      contactType: "Professional",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Japanese"],
    },
    sameAs: [
      "https://github.com/sumanbasnet07",
      "https://www.facebook.com/suman.basnet.5095110/",
      "https://www.linkedin.com/in/sumanbasnet07/",
      "https://twitter.com/sumanbasnet",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: isJapanese ? "Suman Basnetポートフォリオ" : "Suman Basnet Portfolio",
    description: isJapanese
      ? "Suman Basnetのポートフォリオ - MERNスタックとNext.jsアプリケーションを専門とするフルスタックデベロッパー"
      : "Portfolio of Suman Basnet - Full Stack Developer specializing in MERN stack and Next.js applications",
    url: `https://suman-basnet.com.np${isJapanese ? "/ja" : ""}`,
    author: {
      "@type": "Person",
      name: "Suman Basnet",
    },
    inLanguage: isJapanese ? "ja" : "en",
    potentialAction: {
      "@type": "ReadAction",
      target: `https://suman-basnet.com.np${isJapanese ? "/ja" : ""}`,
    },
  };

  return (
    <html lang={isJapanese ? "ja" : "en"} className="scroll-smooth" dir="ltr">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.jpg" type="image/jpg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#0f766e" />
        <meta name="msapplication-TileColor" content="#0f766e" />

        {/* App Capable */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Hreflang for multilingual SEO */}
        <link
          rel="alternate"
          href="https://suman-basnet.com.np"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://suman-basnet.com.np/ja"
          hrefLang="ja"
        />
        <link
          rel="alternate"
          href="https://suman-basnet.com.np"
          hrefLang="x-default"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://suman-basnet.com.np${isJapanese ? "/ja" : ""}`}
        />

        {/* Open Graph for Japanese */}
        {isJapanese && (
          <>
            <meta property="og:locale" content="ja_JP" />
            <meta property="og:locale:alternate" content="en_US" />
          </>
        )}

        {/* Open Graph for English */}
        {!isJapanese && (
          <>
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="ja_JP" />
          </>
        )}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* SEO Meta Tags */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Geo Location - Add Japan for Japanese version */}
        {isJapanese ? (
          <>
            <meta name="geo.region" content="JP-27" />
            <meta name="geo.placename" content="Osaka" />
            <meta name="geo.position" content="34.6937;135.5023" />
            <meta name="ICBM" content="34.6937, 135.5023" />
          </>
        ) : (
          <>
            <meta name="geo.region" content="NP" />
            <meta name="geo.placename" content="Kathmandu" />
            <meta name="geo.position" content="27.7172;85.3240" />
            <meta name="ICBM" content="27.7172, 85.3240" />
          </>
        )}

        {/* Social Media */}
        <meta name="twitter:site" content="@sumanbasnet" />
        <meta name="twitter:creator" content="@sumanbasnet" />

        {/* Performance Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Additional SEO */}
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content={
            isJapanese ? "Suman Basnetポートフォリオ" : "Suman Basnet Portfolio"
          }
        />

        {/* Add language-specific copyright */}
        <meta
          name="copyright"
          content={`© ${new Date().getFullYear()} Suman Basnet`}
        />
      </head>
      <body
        className={`${currentFont.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <Providers>{children}</Providers>

        {/* Performance Monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                if (typeof performance !== 'undefined' && performance.mark) {
                  performance.mark('page-fully-loaded');
                }
                
                // Track language preference
                const lang = '${lang}';
                if (typeof gtag !== 'undefined') {
                  gtag('set', 'user_properties', {
                    preferred_language: lang
                  });
                  gtag('config', 'GA_MEASUREMENT_ID', {
                    page_title: document.title,
                    page_location: window.location.href,
                    page_language: lang
                  });
                }
              });
            `,
          }}
        />

        {/* Language detection for search engines */}
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </body>
    </html>
  );
}
