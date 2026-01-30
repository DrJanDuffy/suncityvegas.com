import Script from 'next/script';
import { siteConfig } from '@/lib/site-config';

export default function SchemaMarkup() {
  const baseUrl = `https://www.${siteConfig.domain}`;

  // Organization Schema (matches GBP business name)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: siteConfig.siteName,
    alternateName: ['Sun City Vegas Real Estate', 'Homes by Dr. Jan Duffy'],
    url: baseUrl,
    logo: `${baseUrl}/images/logo/logo.jpg`,
    telephone: '+1-702-718-0042',
    email: siteConfig.agent.email,
    foundingDate: siteConfig.agent.openingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9406 Del Webb Blvd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89134',
      addressCountry: 'US',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
      siteConfig.social.pinterest,
      siteConfig.social.tiktok,
      siteConfig.social.twitter,
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: siteConfig.brokerage.name,
    },
  };

  // WebSite Schema with SearchAction (enables sitelinks search box)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
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
      name: siteConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo/logo.svg`,
      },
    },
  };

  // RealEstateAgent Schema (GBP-aligned)
  const realEstateAgentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.siteName,
    url: baseUrl,
    image: `${baseUrl}${siteConfig.agent.photo}`,
    telephone: '+1-702-718-0042',
    email: siteConfig.agent.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9406 Del Webb Blvd',
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
      name: siteConfig.siteName,
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
