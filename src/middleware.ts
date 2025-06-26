// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_LOCALES = ["id", "en"];
const DEFAULT_LOCALE = "id";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next();
  }

  const hasLocale = PUBLIC_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!hasLocale) {
    // ✅ Get preferred locale from cookie
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

    const redirectLocale = PUBLIC_LOCALES.includes(cookieLocale || "")
      ? cookieLocale
      : DEFAULT_LOCALE;

    const redirectUrl = new URL(`/${redirectLocale}${pathname}`, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|api).*)"],
};
