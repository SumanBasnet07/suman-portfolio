import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ja"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Determine preferred locale
  const acceptLanguage = request.headers.get("accept-language");
  let preferredLocale = defaultLocale;

  if (acceptLanguage) {
    const languages = acceptLanguage.split(",");
    const primaryLanguage = languages[0].split(";")[0].trim().substring(0, 2);
    if (locales.includes(primaryLanguage)) {
      preferredLocale = primaryLanguage;
    }
  }

  // Redirect to locale prefixed URL
  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip internal Next.js assets, public images, icons, and API routes
    "/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
