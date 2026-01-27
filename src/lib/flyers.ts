export type Flyer = {
  slug: string;
  title: string;
  description: string;
  filePath: string;
  category: string;
  content?: string;
  features?: string[];
  lastUpdated?: string;
  pages?: number;
};

export const flyers: Flyer[] = [
  {
    slug: "sun-city-summerlin-guide",
    title: "Sun City Summerlin Complete Community Guide 2026",
    description: "The definitive guide to Sun City Summerlin, Las Vegas' premier 55+ active adult community. Includes amenities, floor plans, HOA fees, lifestyle, and everything you need to know about retiring in Summerlin, Nevada.",
    filePath: "/flyers/sun-city-summerlin-guide-2026.html",
    category: "Community Guide",
    content: "This comprehensive 2026 guide covers everything about Sun City Summerlin—from the 4 championship golf courses and 3 world-class recreation centers to the 80+ social clubs and Nevada's tax advantages. Whether you're relocating from California, Arizona, or elsewhere, this guide provides all the information you need to make an informed decision about retiring in Las Vegas' most sought-after 55+ community.",
    features: [
      "Complete community overview and history (Del Webb's masterpiece since 1989)",
      "All 4 golf courses: Highland Falls, Palm Valley, Eagle Crest, and Starbright Par 3",
      "3 Recreation centers: Mountain Shadows, Desert Vista, Pinnacle",
      "80+ clubs and activities from pickleball to woodworking",
      "2026 HOA fees and what's included",
      "Popular floor plans with square footage and features",
      "Nevada tax benefits: No state income tax, inheritance tax, or estate tax",
      "Healthcare and proximity to Summerlin Hospital",
      "Shopping, dining, and entertainment nearby",
      "Directions from Las Vegas Strip and Harry Reid International Airport",
    ],
    lastUpdated: "2026-01-15",
    pages: 24,
  },
];

export function getFlyerBySlug(slug: string): Flyer | undefined {
  return flyers.find((flyer) => flyer.slug === slug);
}

export function getAllFlyers(): Flyer[] {
  return flyers;
}
