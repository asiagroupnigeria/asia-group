import React from 'react';

export function SchemaMarkup() {
  const corporationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    'name': 'Asia Group of Companies Ltd',
    'legalName': 'Asia Group of Companies Ltd',
    'url': 'https://asiagroup.ng',
    'logo': 'https://asiagroup.ng/logo.jpg',
    'description': "Africa's leading wholesale and distribution conglomerate. Empowering trade, building legacy, and growing together across Nigeria, West, and Central Africa.",
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'No. 46, Niger Street',
      'addressLocality': 'Kano',
      'addressRegion': 'Kano State',
      'postalCode': '700213',
      'addressCountry': 'NG'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'legal office',
      'email': 'legal@asiagroup.ng',
      'areaServed': 'NG'
    },
    'taxID': 'RC-1832253', // CAC RC number acts as tax/company identifier in Nigeria
    'sameAs': [
      'https://www.linkedin.com/company/asia-group-of-companies',
      'https://www.facebook.com/asiagroupnigeria'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Asia Group of Companies',
    'url': 'https://asiagroup.ng',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://asiagroup.ng/news?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
