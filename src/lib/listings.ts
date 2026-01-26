import type { Listing } from "@/types/listing";

/**
 * Fetches Sun City Summerlin listings
 * TODO: Replace with actual RealScout API integration
 * For now, returns mock data matching the community specifications
 */
export async function getSunCitySummerlinListings(): Promise<Listing[]> {
  // TODO: Replace with RealScout API call
  // Example:
  // const response = await fetch(
  //   `https://api.realscout.com/v3/listings?community=sun-city-summerlin`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${process.env.REALSCOUT_API_KEY}`,
  //     },
  //   }
  // );
  // const data = await response.json();
  // return data.listings;

  // Mock data for development
  // In production, this should fetch from RealScout or MLS API
  return [
    {
      id: "1",
      address: "9107 Del Webb Blvd",
      city: "Las Vegas",
      state: "NV",
      zipCode: "89134",
      price: 425000,
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1650,
      yearBuilt: 1995,
      imageUrl: "/images/listings/listing-1.jpg",
      status: "active",
      description: "Beautiful single-story home in Sun City Summerlin with golf course views",
    },
    {
      id: "2",
      address: "2810 High Range Dr",
      city: "Las Vegas",
      state: "NV",
      zipCode: "89134",
      price: 575000,
      bedrooms: 3,
      bathrooms: 2.5,
      squareFeet: 2200,
      yearBuilt: 1998,
      imageUrl: "/images/listings/listing-2.jpg",
      status: "active",
      description: "Spacious home with pool and Red Rock views",
    },
    {
      id: "3",
      address: "9401 Eagle Valley Dr",
      city: "Las Vegas",
      state: "NV",
      zipCode: "89134",
      price: 350000,
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1400,
      yearBuilt: 1992,
      imageUrl: "/images/listings/listing-3.jpg",
      status: "active",
      description: "Cozy home perfect for active adults looking to downsize",
    },
  ];
}
