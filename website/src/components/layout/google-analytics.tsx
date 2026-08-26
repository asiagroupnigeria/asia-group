'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';

export function GoogleAnalytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    // Check consent status on mount
    setConsent(localStorage.getItem('asia_group_cookie_consent'));

    const handleConsentChange = () => {
      setConsent(localStorage.getItem('asia_group_cookie_consent'));
    };

    window.addEventListener('asia_group_consent_changed', handleConsentChange);
    return () => {
      window.removeEventListener('asia_group_consent_changed', handleConsentChange);
    };
  }, []);

  if (consent !== 'accepted') return null;

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-9PJBSXMY5L';

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
