import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ha', 'fr', 'pcm'],
  defaultLocale: 'en',
  localePrefix: 'as-needed' // English routes won't have a prefix (e.g. /about), but others will (e.g. /ha/about)
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ha|fr|pcm)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
