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
    'foundingDate': '1996', // Alhaji started around 3 decades ago as noted in content
    'founder': {
      '@type': 'Person',
      'name': 'Alhaji Sani Isah Abubakar',
      'jobTitle': 'Founder & Group Chairman'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'No. 46, Niger Street',
      'addressLocality': 'Kano',
      'addressRegion': 'Kano State',
      'postalCode': '700213',
      'addressCountry': 'NG'
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'contactType': 'legal office',
        'email': 'legal@asiagroup.ng',
        'areaServed': 'NG'
      },
      {
        '@type': 'ContactPoint',
        'contactType': 'customer support',
        'email': 'info@asiagroup.ng',
        'areaServed': ['NG', 'CM', 'NE', 'TD']
      }
    ],
    'taxID': 'RC-1832253',
    'areaServed': [
      { '@type': 'Country', 'name': 'Nigeria', 'code': 'NG' },
      { '@type': 'Country', 'name': 'Cameroon', 'code': 'CM' },
      { '@type': 'Country', 'name': 'Niger', 'code': 'NE' },
      { '@type': 'Country', 'name': 'Chad', 'code': 'TD' }
    ],
    'knowsAbout': [
      'Wholesale Distribution',
      'FMCG Distribution Supply Chain',
      'Pharmaceutical Distribution',
      'Automobile Importation & Retail',
      'Consumer Electronics Retail',
      'Beverage Supply Chain & Distribution'
    ],
    'subOrganization': [
      {
        '@type': 'Organization',
        'name': 'Asia Wholesale & Distribution',
        'description': 'The core wholesale and FMCG distribution division of Asia Group.',
        'url': 'https://asiagroup.ng/businesses/wholesale'
      },
      {
        '@type': 'Organization',
        'name': 'Asia Pharmacy',
        'description': 'Pharmaceutical retail and distribution arm.',
        'url': 'https://asiagroup.ng/businesses/pharmaceuticals'
      },
      {
        '@type': 'Organization',
        'name': 'Asia Beverages',
        'description': 'Beverages wholesale and trade operations.',
        'url': 'https://asiagroup.ng/businesses/beverages'
      },
      {
        '@type': 'Organization',
        'name': 'Asia Automobiles',
        'description': 'Vehicle logistics and dealership network.',
        'url': 'https://asiagroup.ng/businesses/automobiles'
      },
      {
        '@type': 'Organization',
        'name': 'Asia Cosmetics',
        'description': 'Cosmetics and personal care supply chain.',
        'url': 'https://asiagroup.ng/businesses/cosmetics'
      },
      {
        '@type': 'Organization',
        'name': 'Asia Phones',
        'description': 'Mobile devices and consumer electronics trade.',
        'url': 'https://asiagroup.ng/businesses/phones'
      }
    ],
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
