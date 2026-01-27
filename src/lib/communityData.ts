// lib/communityData.ts
// Comprehensive community data for Sun City Summerlin

export type CommunityInfo = {
  name: string;
  developer: string;
  type: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  totalAcres: number;
  totalHomes: number;
  priceRange: string;
  hoaFee: string;
  hoaBilling: string;
  gated: boolean;
  security: string;
  constructionStart: number;
  constructionEnd: number;
  propertyTaxRate: string;
  petPolicy: string;
  ageRequirement: string;
  sidLid: string;
};

export type RecreationCenter = {
  name: string;
  size: string;
  description: string;
  features: string[];
};

export type GolfCourse = {
  name: string;
  holes: number;
  type: string;
  description: string;
  designer?: string;
};

export type Distance = {
  miles: number;
  description: string;
};

export const communityInfo: CommunityInfo = {
  name: 'Sun City Summerlin',
  developer: 'Del Webb',
  type: '55+ Active Adult Community',
  address: '9406 Del Webb Blvd',
  city: 'Las Vegas',
  state: 'NV',
  zip: '89134',
  totalAcres: 2400,
  totalHomes: 7781,
  priceRange: '$300,000 - $800,000+',
  hoaFee: '$165/month (approx)',
  hoaBilling: 'Monthly',
  gated: true,
  security: 'Guard-gated entrances with 24/7 security',
  constructionStart: 1989,
  constructionEnd: 2002,
  propertyTaxRate: '~0.75% of assessed value',
  petPolicy: 'Pets welcome with community guidelines',
  ageRequirement: 'At least one resident must be 55+',
  sidLid: 'None',
};

export const recreationCenters: RecreationCenter[] = [
  {
    name: 'Mountain Shadows',
    size: '45,000 sq ft',
    description: 'The original recreation center featuring comprehensive fitness facilities, indoor pool, racquetball courts, and extensive arts and crafts studios.',
    features: [
      'Fitness center',
      'Indoor pool',
      'Racquetball courts',
      'Aerobics studio',
      'Arts & crafts rooms',
      'Woodworking shop',
      'Meeting rooms',
    ],
  },
  {
    name: 'Desert Vista',
    size: '48,000 sq ft',
    description: 'The largest recreation center with state-of-the-art fitness equipment, indoor pool and spa, tennis and pickleball courts, plus a grand ballroom for events.',
    features: [
      'Fitness center',
      'Indoor pool & spa',
      'Tennis courts',
      'Pickleball courts',
      'Ballroom',
      'Computer lab',
      'Library',
    ],
  },
  {
    name: 'Pinnacle',
    size: '34,000 sq ft',
    description: 'A welcoming recreation center offering fitness facilities, pool and spa, tennis courts, bocce ball courts, and versatile multi-purpose spaces.',
    features: [
      'Fitness center',
      'Pool & spa',
      'Tennis courts',
      'Bocce ball courts',
      'Card rooms',
      'Multi-purpose rooms',
    ],
  },
];

export const golfCourses: GolfCourse[] = [
  {
    name: 'Highland Falls',
    holes: 18,
    type: 'Championship',
    description: 'With excellent conditions, unique holes, serene views and enough forgiveness to keep you in the fairway, Highland Falls is perfect for both novices and experts alike. The course is a two-time winner of the Las Vegas Review-Journal Best of Las Vegas award for incredible views. The panoramic view of Las Vegas at the 14th hole has been featured in major publications and used as the backdrop for national ad campaigns.',
    designer: 'Billy Casper & Greg Nash',
  },
  {
    name: 'Palm Valley',
    holes: 18,
    type: 'Championship',
    description: 'Palm Valley features a traditional layout over a mildly rolling terrain, with only minor elevation changes. Course traits include fine conditioning of the fairways, greens and sand traps throughout, along with careful landscaping. Numerous bunkers are strategically placed along the fairways and putting surfaces, which are large in design and mildly undulating. The views of the mountains from the course are unmatched.',
    designer: 'Billy Casper & Greg Nash',
  },
  {
    name: 'Eagle Crest',
    holes: 18,
    type: 'Executive',
    description: 'A challenging executive course designed for those on a time-sensitive schedule, allowing golfers to play a full 18-hole round in under three hours. The course boasts incredible mountain and Las Vegas valley views, including a stunning panoramic view of the Las Vegas strip from the driving range. Made up of six par four holes and 12 par three holes that challenge you to use every club in your bag. Features Golf Summerlin\'s lowest rates.',
  },
  {
    name: 'Stonebridge (at Sun City)',
    holes: 27,
    type: 'Championship',
    description: 'A 27-hole championship facility offering three distinct 9-hole combinations, providing variety and challenge for golfers of all skill levels.',
  },
];

export const distances: Record<string, Distance> = {
  harryReidAirport: {
    miles: 18,
    description: 'Harry Reid International Airport',
  },
  lasVegasStrip: {
    miles: 12,
    description: 'Las Vegas Strip dining, shopping, entertainment',
  },
  downtownSummerlin: {
    miles: 3,
    description: 'Downtown Summerlin (shopping, dining, entertainment)',
  },
  redRockCanyon: {
    miles: 8,
    description: 'Red Rock Canyon National Conservation Area',
  },
  summerlinHospital: {
    miles: 4,
    description: 'Summerlin Hospital Medical Center',
  },
  lakeMead: {
    miles: 30,
    description: 'Lake Mead National Recreation Area',
  },
  mountCharleston: {
    miles: 25,
    description: 'Mount Charleston (skiing, hiking)',
  },
  tivoli: {
    miles: 2,
    description: 'Tivoli Village (upscale shopping)',
  },
};

export const amenities = [
  // Recreation & Fitness
  '4 Golf courses',
  '3 Recreation centers',
  'Multiple swimming pools',
  'Indoor & outdoor spas',
  'Tennis courts',
  'Pickleball courts',
  'Bocce ball courts',
  'Fitness centers',
  'Walking & biking trails',
  
  // Social & Activities
  '80+ clubs and organizations',
  'Ballroom dancing',
  'Arts & crafts studios',
  'Woodworking shops',
  'Computer labs',
  'Libraries',
  'Card rooms',
  
  // Dining & Entertainment
  'On-site restaurants',
  'Tavern at the Falls',
  'Summit Restaurant',
  'Special events & entertainment',
  
  // Services
  'Guard-gated security',
  'Community association',
  'Landscape maintenance (common areas)',
];

export const clubs = [
  'Art Club',
  'Billiards Club',
  'Book Club',
  'Bridge Club',
  'Ceramics Club',
  'Chess Club',
  'Computer Club',
  'Dance Club',
  'Euchre Club',
  'Garden Club',
  'Golf Clubs (Men\'s & Women\'s)',
  'Hiking Club',
  'Italian Club',
  'Jewish Club',
  'Line Dancing',
  'Mah Jongg',
  'Model Railroad Club',
  'Photography Club',
  'Pickleball Club',
  'Quilting Club',
  'RV Club',
  'Softball League',
  'Stained Glass Club',
  'Swimming Club',
  'Table Tennis Club',
  'Tennis Club',
  'Theater Group',
  'Travel Club',
  'Water Aerobics',
  'Woodworking Club',
  'Yoga Classes',
  '...and many more!',
];

// Homesites by collection (for floor plans page compatibility)
export type HomesiteCollection = {
  count: string;
  sqftRange: string;
};

export function getHomesitesByCollection(): Record<string, HomesiteCollection> {
  return {
    cottage: { count: '2,500+', sqftRange: '1,200-1,500' },
    classic: { count: '3,000+', sqftRange: '1,500-1,800' },
    retreat: { count: '2,200+', sqftRange: '1,800-2,400' },
  };
}

// Helper functions
export function getCommunityInfo(): CommunityInfo {
  return communityInfo;
}

export function getRecreationCenters(): RecreationCenter[] {
  return recreationCenters;
}

export function getGolfCourses(): GolfCourse[] {
  return golfCourses;
}

export function getDistances(): Record<string, Distance> {
  return distances;
}

export function getAmenities(): string[] {
  return amenities;
}

export function getClubs(): string[] {
  return clubs;
}
