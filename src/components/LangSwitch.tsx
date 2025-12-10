'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Language } from '@/types/language';

interface LanguageSwitcherProps {
  currentLanguage: Language;
}

export function LanguageSwitcher({ currentLanguage }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (lang: Language) => {
    const newPathname = pathname.replace(
      `/${currentLanguage}`,
      `/${lang}`
    );
    router.push(newPathname);
    
    // Update hreflang meta tag
    if (typeof document !== 'undefined') {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `https://suman-basnet.com.np${lang === 'ja' ? '/ja' : ''}`);
      }
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-md transition-colors ${
          currentLanguage === 'en'
            ? 'bg-teal-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('ja')}
        className={`px-3 py-1 rounded-md transition-colors ${
          currentLanguage === 'ja'
            ? 'bg-teal-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
        }`}
        aria-label="日本語に切り替え"
      >
        日本語
      </button>
    </div>
  );
}