import Script from 'next/script';

export default function SchemaMarkup() {
  const baseUrl = 'https://www.suncityvegas.com';

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Sun City Summerlin Homes for Sale | Dr. Jan Duffy',
    alternateName: 'Sun City Vegas Real Estate',
    url: baseUrl,
    logo: `${baseUrl}/images/logo/logo.svg`,
    telephone: '+1-702-222-1964',
    email: 'jan@drjanduffy.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9107 Del Webb Blvd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89134',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.youtube.com/@drjanduffy',
      'https://www.instagram.com/drjanduffy',
      'https://www.linkedin.com/in/drjanduffy',
      'https://www.facebook.com/drjanduffy',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
  };

  // WebSite Schema with SearchAction (enables sitelinks search box)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sun City Summerlin Homes for Sale | Dr. Jan Duffy',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/homes-for-sale?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sun City Summerlin Homes for Sale | Dr. Jan Duffy',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo/logo.svg`,
      },
    },
  };

  // RealEstateAgent Schema
  const realEstateAgentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    url: baseUrl,
    image: `${baseUrl}/images/about/dr-jan-duffy.jpg`,
    telephone: '+1-702-222-1964',
    email: 'jan@drjanduffy.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9107 Del Webb Blvd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89134',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Sun City Summerlin',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
        },
      },
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Summerlin',
        addressRegion: 'NV',
      },
    ],
    priceRange: '$300,000-$800,000+',
    worksFor: {
      '@type': 'Organization',
      name: 'Sun City Summerlin Homes for Sale | Dr. Jan Duffy',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      credentialNumber: 'S.0197614.LLC',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        id="realestateagent-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateAgentSchema).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
