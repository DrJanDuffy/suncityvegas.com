/**
 * Generate BreadcrumbList structured data for SEO
 * Google Search Console 2025: Breadcrumbs still important for desktop SERPs and on-page UX
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Common breadcrumb paths for the site
 */
export const breadcrumbPaths = {
  homepage: [{ name: "Home", url: "https://www.suncityvegas.com" }],
  homesForSale: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Homes for Sale", url: "https://www.suncityvegas.com/homes-for-sale" },
  ],
  amenities: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Amenities", url: "https://www.suncityvegas.com/amenities" },
  ],
  lifestyle: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Lifestyle", url: "https://www.suncityvegas.com/lifestyle" },
  ],
  about: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "About", url: "https://www.suncityvegas.com/about" },
  ],
  blog: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Blog", url: "https://www.suncityvegas.com/blog" },
  ],
  blogPost: (postTitle: string, postSlug: string) => [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Blog", url: "https://www.suncityvegas.com/blog" },
    { name: postTitle, url: `https://www.suncityvegas.com/blog/${postSlug}` },
  ],
  faq: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "FAQ", url: "https://www.suncityvegas.com/faq" },
  ],
  contact: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Contact", url: "https://www.suncityvegas.com/contact" },
  ],
  testimonials: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Testimonials", url: "https://www.suncityvegas.com/testimonials" },
  ],
  privacy: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Privacy Policy", url: "https://www.suncityvegas.com/privacy" },
  ],
  homeValue: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Home Value", url: "https://www.suncityvegas.com/home-value" },
  ],
  schedule: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Schedule Tour", url: "https://www.suncityvegas.com/schedule" },
  ],
  community: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Community", url: "https://www.suncityvegas.com/community" },
  ],
  selling: [
    { name: "Home", url: "https://www.suncityvegas.com" },
    { name: "Selling", url: "https://www.suncityvegas.com/selling" },
  ],
};
