import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.suncityvegas.com";

  // Blog post slugs - keep in sync with blog routes
  const blogPosts = [
    "pros-and-cons-sun-city-summerlin",
    "best-sun-city-summerlin-neighborhoods",
    "california-to-sun-city-summerlin",
    "is-sun-city-summerlin-safe",
    "sun-city-summerlin-floor-plans",
    "sun-city-summerlin-hoa-fees",
    "sun-city-summerlin-vs-sun-city-anthem",
    "sun-city-summerlin-vs-other-55-communities",
    "what-55-buyers-spend-sun-city-summerlin",
    "selling-home-sun-city-summerlin",
  ];

  const amenitySlugs = ["mountain-shadows", "sun-shadows", "desert-vista", "pinnacle", "golf"];
  const lifestyleSlugs = ["clubs", "events", "restaurants"];
  const resourceSlugs = ["market-insights", "moving-guide", "first-time-buyers"];

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage - use trailing slash to match canonical (fixes "Duplicate, Google chose different canonical than user")
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Main Pages - Priority 0.9, Daily
    {
      url: `${baseUrl}/homes-for-sale`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Secondary Pages - Priority 0.8
    {
      url: `${baseUrl}/amenities`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lifestyle`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/floor-plans`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/selling`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Tertiary Pages - Priority 0.7
    {
      url: `${baseUrl}/home-value`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/flyers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Lower Priority Pages
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/sitemap-page`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const amenityPages: MetadataRoute.Sitemap = amenitySlugs.map((slug) => ({
    url: `${baseUrl}/amenities/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const lifestylePages: MetadataRoute.Sitemap = lifestyleSlugs.map((slug) => ({
    url: `${baseUrl}/lifestyle/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const communityPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/community/history`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/community/neighborhood`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const resourcePages: MetadataRoute.Sitemap = resourceSlugs.map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...blogPages, ...amenityPages, ...lifestylePages, ...communityPages, ...resourcePages];
}
