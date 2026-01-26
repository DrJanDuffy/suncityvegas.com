// FAQ Data for Sun City Summerlin
// Structured for easy use in React components

export const faqData = [
  {
    category: "About the Community",
    questions: [
      {
        question: "What is Sun City Summerlin?",
        answer: "Sun City Summerlin is Las Vegas' premier 55+ active adult community, developed by Del Webb between 1989 and 2002. Located in the Summerlin area with stunning Red Rock Canyon views, it features 7,779 homes on approximately 2,400 acres.",
      },
      {
        question: "Is Sun City Summerlin a gated community?",
        answer: "Yes, Sun City Summerlin is a guard-gated community with 24/7 security at all entrances.",
      },
      {
        question: "How many homes are in Sun City Summerlin?",
        answer: "The community includes 7,779 homes ranging from approximately 1,200 to 2,800+ square feet in various configurations including single-story and some two-story options.",
      },
      {
        question: "When was Sun City Summerlin built?",
        answer: "Construction began in 1989, with the first homeowners moving in that same year. The community was completed in 2002, making it a well-established neighborhood with mature landscaping.",
      },
    ],
  },
  {
    category: "Age Requirements & Residency",
    questions: [
      {
        question: "What are the age requirements to live in Sun City Summerlin?",
        answer: "At least one resident in each home must be 55 years of age or older. This complies with the Housing for Older Persons Act of 1995 (HOPA).",
      },
      {
        question: "Can I purchase a home for my parent?",
        answer: "Yes, you can purchase a home for your mother or father as long as at least one person residing in the home is 55 years of age or older.",
      },
      {
        question: "Can adult children live in Sun City Summerlin?",
        answer: "Yes. Adult children are permitted to be permanent residents, as long as at least one resident meets the 55+ age requirement.",
      },
      {
        question: "What is the guest policy for children and grandchildren?",
        answer: "Guests aged 18 and younger are welcome to visit or stay with residents. When using community amenities, guests under 18 must be accompanied by a Sun City Summerlin resident.",
      },
    ],
  },
  {
    category: "HOA & Fees",
    questions: [
      {
        question: "What are the monthly HOA fees?",
        answer: "The HOA assessment is approximately $165 per month. This includes access to all three recreation centers, pools, fitness facilities, tennis courts, and community amenities. There are no SIDs (Special Improvement Districts) or LIDs (Local Improvement Districts).",
      },
      {
        question: "What does the HOA fee cover?",
        answer: "HOA fees include access to all amenities at Mountain Shadows, Desert Vista, and Pinnacle recreation centers; common area landscaping and maintenance; guard-gated security; and community programs and events.",
      },
      {
        question: "What is the property tax rate?",
        answer: "The effective property tax rate in Nevada is approximately 0.75% of the assessed value, which is lower than many other states including California. Nevada also has no state income tax.",
      },
    ],
  },
  {
    category: "Amenities",
    questions: [
      {
        question: "What amenities are included at Sun City Summerlin?",
        answer: "Sun City Summerlin features 3 recreation centers totaling over 125,000 sq ft: Mountain Shadows (45,000 sq ft), Desert Vista (48,000 sq ft), and Pinnacle (34,000 sq ft). Amenities include multiple pools and spas, fitness centers, tennis courts, pickleball courts, bocce ball, billiards, arts & crafts rooms, ballrooms, and much more.",
      },
      {
        question: "How many golf courses are there?",
        answer: "Sun City Summerlin has 4 championship golf courses: Highland Falls (18 holes), Palm Valley (18 holes), Eagle Crest (18 holes, executive), and Stonebridge (27 holes). All courses offer stunning views of Red Rock Canyon and the Las Vegas valley.",
      },
      {
        question: "How many clubs and organizations are available?",
        answer: "Sun City Summerlin has over 80 active clubs and organizations covering interests from golf and tennis to book clubs, photography, dance, travel, arts & crafts, and much more.",
      },
      {
        question: "Are there swimming pools?",
        answer: "Yes! Sun City Summerlin has multiple indoor and outdoor pools at all three recreation centers, including heated lap pools, resort-style pools, and therapeutic spas.",
      },
    ],
  },
  {
    category: "Pets & Lifestyle",
    questions: [
      {
        question: "Are pets allowed at Sun City Summerlin?",
        answer: "Yes! Sun City Summerlin welcomes pets. The community has pet-friendly policies and residents enjoy walking their dogs throughout the community's beautiful landscaped streets and paths.",
      },
      {
        question: "What is the lifestyle like at Sun City Summerlin?",
        answer: "Sun City Summerlin offers an active, social lifestyle with daily activities, clubs, golf, tennis, swimming, fitness classes, social events, and more. Residents describe it as like living at a resort every day.",
      },
    ],
  },
  {
    category: "Location & Nearby",
    questions: [
      {
        question: "How far is Sun City Summerlin from the Las Vegas Strip?",
        answer: "Approximately 15 minutes from world-class Las Vegas Strip dining, shopping, and entertainment.",
      },
      {
        question: "How far is Red Rock Canyon?",
        answer: "Red Rock Canyon National Conservation Area is just minutes away, offering scenic drives, hiking trails, and stunning desert landscapes visible from many homes in the community.",
      },
      {
        question: "How far is the airport?",
        answer: "Harry Reid International Airport (formerly McCarran) is approximately 20-25 minutes away.",
      },
      {
        question: "What medical facilities are nearby?",
        answer: "Summerlin Hospital Medical Center is nearby, along with numerous medical offices, urgent care centers, and specialty clinics in the Summerlin area.",
      },
      {
        question: "What shopping is nearby?",
        answer: "Downtown Summerlin is minutes away with shopping, dining, and entertainment. Multiple grocery stores including Smith's, Vons, Whole Foods, and Trader Joe's are within a short drive.",
      },
    ],
  },
  {
    category: "Buying Process",
    questions: [
      {
        question: "What is the price range for homes in Sun City Summerlin?",
        answer: "Homes in Sun City Summerlin typically range from approximately $300,000 to $800,000+, depending on size, location, upgrades, and views. Some premium properties with golf course or mountain views may be priced higher.",
      },
      {
        question: "Are these new construction or resale homes?",
        answer: "Sun City Summerlin was completed in 2002, so all homes available are resale properties. Many homes have been updated and well-maintained by their owners.",
      },
      {
        question: "Why should I work with Dr. Jan Duffy?",
        answer: "Dr. Jan Duffy specializes exclusively in Sun City Summerlin and knows the community inside and out. She can help you find the perfect home, negotiate the best price, and navigate the entire buying process with expertise.",
      },
      {
        question: "Will I need homeowner's insurance?",
        answer: "If you have a mortgage, homeowner's insurance is required. Even if paying cash, homeowner's insurance is highly recommended to protect your investment.",
      },
    ],
  },
];

// Helper function to get all questions flattened (useful for search/filtering)
export const getAllQuestions = () => {
  return faqData.flatMap((category) =>
    category.questions.map((q) => ({
      ...q,
      category: category.category,
    }))
  );
};

// Helper function to get questions by category
export const getQuestionsByCategory = (categoryName) => {
  const category = faqData.find((cat) => cat.category === categoryName);
  return category ? category.questions : [];
};

// Helper function to get all categories
export const getAllCategories = () => {
  return faqData.map((category) => category.category);
};
