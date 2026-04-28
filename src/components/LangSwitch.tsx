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
    const newPathname = pathname.replace(`/${currentLanguage}`, `/${lang}`);
    router.push(newPathname);

    if (typeof document !== 'undefined') {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `https://suman-basnet.com.np${lang === 'ja' ? '/ja' : ''}`);
      }
    }
  };

  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 border border-gray-200 dark:border-gray-700">
      {(['en', 'ja'] as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          aria-label={lang === 'en' ? 'Switch to English' : '日本語に切り替え'}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
            currentLanguage === lang
              ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {lang === 'en' ? 'EN' : '日本語'}
        </button>
      ))}
    </div>
  );
}