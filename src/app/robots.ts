import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.suncityvegas.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/static/",
          "/_next/",
          "/message/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
