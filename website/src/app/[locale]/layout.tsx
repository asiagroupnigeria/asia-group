import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Noto_Serif, Barlow, Barlow_Condensed } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import 'remixicon/fonts/remixicon.css';
import '../globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AutoPlayVideo } from '@/components/AutoPlayVideo';
import { CookieConsent } from '@/components/layout/cookie-consent';
import { GoogleAnalytics } from '@/components/layout/google-analytics';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-condensed',
});

export const metadata = {
  title: 'Asia Group of Companies — Africa\'s Leading Wholesale & Distribution Conglomerate',
  description: 'From a single market stall in Abubakar Rimi Market to commanding over 30 global partnerships across four nations — Asia Group is the backbone of African trade.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${notoSerif.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <AutoPlayVideo />
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
          <GoogleAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
