// lib/fetchOldSiteData.js
// Utility to structure data for Sun City Summerlin

export const oldSiteData = {
  // All testimonials
  testimonials: [
    {
      name: "Stephanie O.",
      text: "Working with Dr. Jan Duffy to find our dream home in Sun City Summerlin was an absolute pleasure! Her unwavering dedication to her clients truly sets her apart. She took the time to deeply understand our needs as retirees, ensuring every detail was considered, and went above and beyond to help us find the perfect property in this beautiful gated community. Her professionalism, expertise, and genuine care made the entire process smooth and stress-free. We couldn't be happier with our new home and highly recommend Dr. Jan Duffy to anyone looking for exceptional real estate guidance!",
    },
    {
      name: "Kelly P.",
      text: "Dr. Jan Duffy's expertise in the Sun City Summerlin community is truly unparalleled. Thanks to her guidance, we found our dream retirement home with stunning Red Rock Canyon views. Her in-depth knowledge of the 55+ gated community, combined with her meticulous attention to detail, made the entire home-buying process seamless and enjoyable.",
    },
    {
      name: "Mike S.",
      text: "Dr. Jan Duffy exceeded all our expectations! Her deep knowledge of the Las Vegas real estate market, especially in Sun City Summerlin, made all the difference. From finding the perfect property to closing the deal, she was with us every step of the way, offering expert guidance and genuine care. We couldn't have asked for a better partner in this journey!",
    },
    {
      name: "Sally S.",
      text: "As newcomers to Las Vegas, we had the privilege of working with Dr. Jan Duffy, whose expertise in the Sun City Summerlin community was truly invaluable. Thanks to her insightful guidance, we found a stunning 2-bedroom home that perfectly complements our retirement lifestyle.",
    },
    {
      name: "Paul B.",
      text: "Dr. Duffy's extensive experience in the Las Vegas area, particularly in Sun City Summerlin, truly shines through in her work. Her deep knowledge of the market and understanding of the unique challenges within the competitive 55+ community set her apart. She guided us through every step of the process with professionalism and ease, ensuring we felt confident in our decisions. Thanks to her expertise, we were able to secure a fantastic home that not only met but exceeded our expectations, complete with all the amenities we had hoped for. We couldn't be happier with the results and highly recommend her to anyone looking for their perfect home in this area!",
    },
  ],

  // Amenities list
  amenities: {
    homeFeatures: [
      "Air Conditioning",
      "Covered Patios",
      "Updated Kitchens",
      "Walk-in Closets",
      "Dual Pane Windows",
      "Single Story Living",
      "Attached Garages",
      "Desert Landscaping",
    ],
    communityFeatures: [
      "Guard-Gated Community",
      "4 Championship Golf Courses",
      "3 Recreation Centers (125,000+ sq ft)",
      "Resort-style pools & spas",
      "Heated lap pools",
      "State-of-the-art fitness centers",
      "Tennis & Pickleball courts",
      "Bocce & Shuffleboard courts",
      "Scenic walking trails",
      "80+ Active clubs",
      "Ballrooms & meeting rooms",
      "Arts & crafts studios",
      "Woodworking shops",
      "Card rooms & billiards",
    ],
  },

  // External links and integrations
  integrations: {
    calendly: "https://calendly.com/drjanduffy/appointment",
    realscout: "https://drjanduffy.realscout.com/onboarding",
    youtube: "https://www.youtube.com/@DrDuffy",
    youtubeChannelId: "UCIMieP7FSUSwN0vw8FVNprA",
    youtubeUserId: "IMieP7FSUSwN0vw8FVNprA",
  },

  // Community details
  communityInfo: {
    name: "Sun City Summerlin",
    builder: "Del Webb (Original)",
    type: "55+ Active Adult Gated Community",
    address: "9107 Del Webb Blvd",
    city: "Las Vegas",
    state: "NV",
    zip: "89134",
    priceRange: "$275,000 - $1,200,000+",
    hoaFee: "~$165/month",
    totalHomes: 7779,
    constructionStart: 1989,
    constructionEnd: 2002,
    homeStyles: "Single-family residences",
    stories: "Single-story only",
    sqftRange: "1,000 - 3,500+",
    bedRange: "2-4",
    bathRange: "2-3.5",
    garages: "2-3 car attached",
  },
};

// Helper functions to access the data
export function getAllTestimonials() {
  return oldSiteData.testimonials;
}

export function getCommunityInfo() {
  return oldSiteData.communityInfo;
}

// Keep for backward compatibility - returns undefined since we don't have builder floor plans
export function getVirtualTourByModel(_model) {
  return undefined;
}
