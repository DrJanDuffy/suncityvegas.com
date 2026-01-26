export type Flyer = {
  slug: string;
  title: string;
  description: string;
  filePath: string;
  category: string;
  content?: string;
};

export const flyers: Flyer[] = [
  {
    slug: "sun-city-summerlin-guide",
    title: "Sun City Summerlin Community Guide",
    description: "Complete community guide with amenities, lifestyle information, and community details for Sun City Summerlin.",
    filePath: "/images/flyers/sun-city-summerlin-guide.pdf",
    category: "Community Guide",
    content: "This comprehensive brochure includes detailed information about Sun City Summerlin, including 4 golf courses, 3 recreation centers, 80+ clubs, HOA information, and lifestyle features. Perfect for sharing with family and friends or keeping as a reference guide.",
  },
];

export function getFlyerBySlug(slug: string): Flyer | undefined {
  return flyers.find((flyer) => flyer.slug === slug);
}

export function getAllFlyers(): Flyer[] {
  return flyers;
}
