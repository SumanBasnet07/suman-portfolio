import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Suman Basnet — Full Stack Developer & Digital Craftsman | MERN Stack Specialist",
    template: "%s | Suman Basnet"
  },
  description: "Suman Basnet is a passionate Full Stack Developer specializing in MERN stack and Next.js. With 3+ years of experience, I build scalable web applications, modern interfaces, and digital solutions. Expertise in React, Node.js, MongoDB, TypeScript, and modern web technologies.",
  keywords: [
    "Suman Basnet",
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
    "Kathmandu Developer"
  ],
  authors: [{ name: "Suman Basnet" }],
  creator: "Suman Basnet",
  publisher: "Suman Basnet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://suman-basnet.com.np'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ja': '/jp',
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://suman-basnet.com.np',
    title: "Suman Basnet — Full Stack Developer & Digital Craftsman",
    description: "Passionate Full Stack Developer specializing in MERN stack and Next.js. Building scalable web applications and digital solutions with modern technologies.",
    siteName: "Suman Basnet Portfolio",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Suman Basnet - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sumanbasnet',
    creator: '@sumanbasnet',
    title: "Suman Basnet — Full Stack Developer & Digital Craftsman",
    description: "MERN Stack Specialist building scalable web applications with React, Node.js, and modern technologies. 3+ years of development experience.",
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-search-console-verification',
    // yandex: 'your-yandex-verification',
    // yandex: 'your-yandex-verification',
  },
  category: 'technology',
  other: {
    'theme-color': '#0f766e',
    'msapplication-TileColor': '#0f766e',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Suman Basnet',
    url: 'https://suman-basnet.com.np',
    image: 'https://suman-basnet.com.np/my-image.png',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    description: 'Full Stack Developer specializing in MERN stack and Next.js applications with 3+ years of experience.',
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Git',
      'REST APIs',
      'UI/UX Design',
      'Responsive Web Design'
    ],
    knowsLanguage: ['English', 'Japanese', 'Nepali','Hindi'],
    hasCredential: 'Bachelor in Computer Science',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Nara Computer Vocational School'
    },
    location: {
      '@type': 'Place',
      name: 'Osaka, Japan'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'suman@distrya.com',
      contactType: 'Professional',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Japanese']
    },
    sameAs: [
      'https://github.com/sumanbasnet07',
      'https://www.facebook.com/suman.basnet.5095110/'
    ]
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Suman Basnet Portfolio',
    description: 'Portfolio of Suman Basnet - Full Stack Developer specializing in MERN stack and Next.js applications',
    url: 'https://sumanbasnet.com.np',
    author: {
      '@type': 'Person',
      name: 'Suman Basnet'
    },
    inLanguage: ['en', 'jp']
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta name="theme-color" content="#0f766e" />
        <meta name="msapplication-TileColor" content="#0f766e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geo Location */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Kathmandu" />
        <meta name="geo.position" content="27.7172;85.3240" />
        <meta name="ICBM" content="27.7172, 85.3240" />
        
        {/* Social Media Verification */}
        <meta name="twitter:site" content="@sumanbasnet" />
        <meta name="twitter:creator" content="@sumanbasnet" />
        
        {/* Additional Open Graph */}
        <meta property="og:email" content="suman.basnet@example.com" />
        <meta property="og:phone_number" content="+977-9841XXXXXX" />
        <meta property="og:country-name" content="Nepal" />
        
        {/* Performance Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <Providers>
          {children}
        </Providers>
        
        {/* Performance Monitoring Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simple performance monitoring
              window.addEventListener('load', function() {
                if (typeof performance !== 'undefined' && performance.mark) {
                  performance.mark('page-fully-loaded');
                }
                
                // Track page views
                if (typeof gtag !== 'undefined') {
                  gtag('config', 'GA_MEASUREMENT_ID', {
                    page_title: document.title,
                    page_location: window.location.href
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}