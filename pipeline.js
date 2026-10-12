const listings = [
  {
    name: "Cozy Studio Westlands",
    price: 3500,
    rating: 4.8,
    neighborhood: "Westlands",
    amenities: ["wifi", "kitchen", "parking"],
  },
  {
    name: "Modern Apartment Kilimani",
    price: 6000,
    rating: 4.9,
    neighborhood: "Kilimani",
    amenities: ["wifi", "pool", "gym", "kitchen"],
  },
  {
    name: "Budget Room Eastleigh",
    price: 1500,
    rating: 4.2,
    neighborhood: "Eastleigh",
    amenities: ["wifi"],
  },
  {
    name: "Luxury Penthouse Kilimani",
    price: 15000,
    rating: 4.7,
    neighborhood: "Kilimani",
    amenities: ["wifi", "pool", "gym", "kitchen", "parking", "balcony"],
  },
  {
    name: "Garden Cottage Karen",
    price: 8000,
    rating: 4.6,
    neighborhood: "Karen",
    amenities: ["wifi", "kitchen", "garden", "parking"],
  },
  {
    name: "Artist Loft Westlands",
    price: 4500,
    rating: 4.5,
    neighborhood: "Westlands",
    amenities: ["wifi", "kitchen"],
  },
  {
    name: "Family Home Karen",
    price: 12000,
    rating: 4.9,
    neighborhood: "Karen",
    amenities: ["wifi", "kitchen", "garden", "parking", "pool"],
  },
  {
    name: "Studio Near CBD",
    price: 2000,
    rating: 3.9,
    neighborhood: "CBD",
    amenities: ["wifi"],
  },
  {
    name: "Riverside Apartment",
    price: 5500,
    rating: 4.4,
    neighborhood: "Westlands",
    amenities: ["wifi", "kitchen", "gym"],
  },
  {
    name: "Backpacker Hostel Westlands",
    price: 800,
    rating: 4.1,
    neighborhood: "Westlands",
    amenities: ["wifi"],
  },
];

function findTopListings(listings, neighborhood, maxPrice) {
  const processedListings = listings
    .filter((listing) => listing.neighborhood === neighborhood)
    .filter((listing) => listing.price < maxPrice)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)
    .map(
      (listing, index) =>
       `${index + 1}. ⭐ ${listing.rating} - ${listing.name} (KES ${listing.price.toLocaleString("en-KE")}/night) - ${listing.amenities.join(", ")}`,
    );
    console.log(`Top listings in ${neighborhood} under ${maxPrice.toLocaleString("en-KE")}: \n`)
    console.log(processedListings.join("\n"));
    console.log("\n")
}

findTopListings(listings, "Westlands", 5000);
findTopListings(listings, "Kilimani", 10000);
