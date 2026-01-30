export const siteConfig = {
  // Domain & SEO (GBP-aligned business name)
  domain: "suncityvegas.com",
  siteName: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
  siteTitle: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
  siteDescription: "Find your dream 55+ retirement home in Sun City Summerlin, Las Vegas. With over 25 years of experience in active adult communities, Dr. Duffy has helped countless retirees discover the perfect home to suit their lifestyle and needs. Sun City Summerlin offers world-class amenities—golf, fitness, pools, 80+ clubs. Dr. Duffy provides expert guidance every step of the way.",
  
  // Location
  community: "Sun City Summerlin",
  city: "Las Vegas",
  state: "NV",
  zip: "89134",
  address: "9406 Del Webb Blvd, Las Vegas, NV 89134",

  // Canonical NAP (use for display and tel: links) – matches GBP
  phoneDisplay: "(702) 718-0042",
  phoneHref: "tel:7027180042",

  // Agent Info
  agent: {
    name: "Dr. Jan Duffy",
    title: "Sun City Summerlin Specialist",
    license: "S.0197614.LLC",
    phone: {
      marketing: "(702) 718-0042",
      professional: "(702) 718-0042"
    },
    email: "DrDuffySells@SunCityVegas.com",
    photo: "/images/agent/dr-jan-duffy.jpg",
    openingDate: "2013-09-20"
  },
  
  // Brokerage
  brokerage: {
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    shortName: "BHHS Nevada Properties",
    logo: "/images/bhhs-logo.png"
  },
  
  // Business Hours (matching GBP)
  businessHours: {
    sunday: { open: "06:00", close: "21:00" },
    monday: { open: "06:00", close: "21:00" },
    tuesday: { open: "06:00", close: "21:00" },
    wednesday: { open: "06:00", close: "21:00" },
    thursday: { open: "06:00", close: "21:00" },
    friday: { open: "06:00", close: "21:00" },
    saturday: { open: "06:00", close: "21:00" }
  },
  
  // Theme Colors (Desert/Mountain palette)
  colors: {
    primary: "#8B5E3C",      // Warm terracotta
    secondary: "#C4A574",    // Desert sand
    accent: "#5D7A5D",       // Sage green
    background: "#FDF8F3",   // Warm cream
    text: "#2D2A26",         // Deep brown
    highlight: "#D4AF37"     // Gold accent
  },
  
  // RealScout Configuration
  realscout: {
    agentEncodedId: "QWdlbnQtMjI1MDUw",
    communityId: "sun-city-summerlin"
  },
  
  // Social Links (matching GBP)
  social: {
    facebook: "https://www.facebook.com/DrJanDuffyRealtorCentennialHills/",
    instagram: "https://www.instagram.com/drjanduffy/",
    youtube: "https://www.youtube.com/@DrDuffy",
    linkedin: "https://www.linkedin.com/company/lvrmembers/",
    pinterest: "https://www.pinterest.com/bhhsluxury/",
    tiktok: "https://www.tiktok.com/@dr.janduffy",
    twitter: "https://x.com/drjanduffy"
  },

  // Community Stats
  communityStats: {
    golfCourses: 4,
    recCenters: 3,
    clubs: "80+",
    pools: "Multiple",
    homes: "7,781",
    ageRestriction: "55+"
  },

  // Price Range
  priceRange: {
    min: "$300K",
    max: "$800K+",
    average: "$450K"
  }
}

export type SiteConfig = typeof siteConfig;
