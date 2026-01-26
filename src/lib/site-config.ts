export const siteConfig = {
  // Domain & SEO
  domain: "suncityvegas.com",
  siteName: "Sun City Vegas",
  siteTitle: "Sun City Summerlin Homes for Sale | Las Vegas 55+ Community",
  siteDescription: "Find your perfect home in Sun City Summerlin, Las Vegas' premier 55+ active adult community. Browse listings, explore amenities, and work with Dr. Jan Duffy, your Sun City specialist.",
  
  // Location
  community: "Sun City Summerlin",
  city: "Las Vegas",
  state: "NV",
  zip: "89134",
  address: "9107 Del Webb Blvd, Las Vegas, NV 89134",
  
  // Agent Info
  agent: {
    name: "Dr. Jan Duffy",
    title: "Sun City Summerlin Specialist",
    license: "S.0197614.LLC",
    phone: {
      marketing: "702-222-1964",
      professional: "702-500-1955"
    },
    email: "jan@drjanduffy.com",
    photo: "/images/about/dr-jan-duffy.jpg"
  },
  
  // Brokerage
  brokerage: {
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    shortName: "BHHS Nevada Properties",
    logo: "/images/bhhs-logo.png"
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
  
  // Social Links
  social: {
    facebook: "https://facebook.com/drjanduffy",
    instagram: "https://instagram.com/drjanduffy",
    youtube: "https://youtube.com/@drjanduffy",
    linkedin: "https://linkedin.com/in/drjanduffy"
  },

  // Community Stats
  communityStats: {
    golfCourses: 4,
    recCenters: 3,
    clubs: "80+",
    pools: "Multiple",
    homes: "7,779",
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
