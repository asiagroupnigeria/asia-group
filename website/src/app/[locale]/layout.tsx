import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Nobile } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import '../globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const nobile = Nobile({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700'],
  variable: '--font-sans' 
});
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-heading' 
});

export const metadata = {
  title: 'Asia Group | Gateway to the Sahel',
  description: '38 years serving 350M+ people. Zero compromise on trust.',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${nobile.variable} ${inter.variable} font-sans bg-background text-foreground min-h-screen flex flex-col antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
