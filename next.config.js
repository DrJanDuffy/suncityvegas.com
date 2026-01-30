/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      // Redirect old /units/* routes to floor plans
      {
        source: '/units/overlook-model',
        destination: '/floor-plans',
        permanent: true,
      },
      {
        source: '/units/the-haven',
        destination: '/floor-plans/haven',
        permanent: true,
      },
      // Catch-all for any other /units/* routes
      {
        source: '/units/:path*',
        destination: '/floor-plans',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://www.googletagmanager.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://calendly.com https://www.google-analytics.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com",
              "img-src 'self' data: https:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "frame-src 'self' https://em.realscout.com https://www.realscout.com https://calendly.com https://www.youtube.com https://youtube.com https://my.matterport.com https://www.google.com https://maps.google.com https://storage.googleapis.com",
              "frame-ancestors 'self'",
            ].join('; '),
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Permissions-Policy',
            value: 'payment=(), camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
