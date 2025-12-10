import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ja'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the pathname already includes a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Get user's preferred language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  let preferredLocale = defaultLocale;
  
  if (acceptLanguage) {
    // Extract first language code from Accept-Language header
    const languages = acceptLanguage.split(',');
    const primaryLanguage = languages[0].split(';')[0].trim().substring(0, 2);
    
    if (locales.includes(primaryLanguage)) {
      preferredLocale = primaryLanguage;
    } else if (primaryLanguage === 'ja') {
      preferredLocale = 'ja';
    }
  }

  // Redirect to locale-prefixed path
  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)',
  ],
};