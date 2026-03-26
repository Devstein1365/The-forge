const fs = require('fs');

const baseProducts = [
  {
    name: "Long Grain Local Rice",
    vendor: "Mama Ebube's Grains",
    category: "Grains",
    price: 18500,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    tags: ["Verified Seller", "PRICE DROPPED 5%"]
  },
  {
    name: "Premium Abuja Yams (Large)",
    vendor: "Root Harvest",
    category: "Tubers",
    price: 3200,
    image: "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e2e7?auto=format&fit=crop&q=80&w=400",
    tags: ["STABLE PRICE"]
  },
  {
    name: "Cold Pressed Groundnut Oil",
    vendor: "Golden Oils",
    category: "Oils",
    price: 4500,
    image: "https://images.unsplash.com/photo-1628192231267-ff7db09139ea?auto=format&fit=crop&q=80&w=400",
    tags: ["NEW VENDOR"]
  },
  {
    name: "Fresh Tomatoes (Basket)",
    vendor: "Green Valley Farms",
    category: "Vegetables",
    price: 15000,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
    tags: ["Verified Seller", "FARM FRESH"]
  },
  {
    name: "Organic Honey 1L",
    vendor: "Sweet Nectar Ltd",
    category: "Sweeteners",
    price: 6000,
    image: "https://images.unsplash.com/photo-1587049352847-eccf608c0ef1?auto=format&fit=crop&q=80&w=400",
    tags: ["Verified Seller", "NEW IN STOCK"]
  },
  {
    name: "Dried Red Chillies",
    vendor: "Spicy Haven",
    category: "Spices",
    price: 2500,
    image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=400",
    tags: ["PRICE DROPPED"]
  },
  {
    name: "Garri (White) 10kg",
    vendor: "Mama Blessing",
    category: "Grains",
    price: 8500,
    image: "https://images.unsplash.com/photo-1533261623912-32aefb7f0322?auto=format&fit=crop&q=80&w=400",
    tags: ["Verified Seller", "STABLE PRICE"]
  }
];

const mockProducts = [];

for (let i = 1; i <= 50; i++) {
  const base = baseProducts[i % baseProducts.length];
  const distanceVal = (Math.random() * 15 + 0.5).toFixed(1);
  const ratingVal = (Math.random() * 1.5 + 3.5).toFixed(1);
  
  mockProducts.push({
    id: `p${i}`,
    name: base.name,
    vendor: base.vendor,
    category: base.category,
    price: Math.floor(base.price * (0.8 + Math.random() * 0.4)),
    image: base.image,
    distance: `${distanceVal}km away`,
    location: ["Central Market", "North Farm", "West Trade Center", "South Gate", "East Valley", "Local Suburbs"][Math.floor(Math.random() * 6)],
    tags: base.tags,
    rating: parseFloat(ratingVal),
    reviews: Math.floor(Math.random() * 300) + 10,
    isVerified: base.tags.includes("Verified Seller") || Math.random() > 0.7
  });
}

const fileContent = `export interface Product {
  id: string;
  name: string;
  vendor: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  distance: string;
  location: string;
  tags: string[];
  stock?: string;
  rating?: number;
  reviews?: number;
  isVerified?: boolean;
}

export const mockProducts: Product[] = ${JSON.stringify(mockProducts, null, 2)};
`;

fs.writeFileSync('c:/Users/USER/Desktop/collabs/netMarket/frontend/lib/mock-data.ts', fileContent);
console.log('Successfully generated 50 products!');
