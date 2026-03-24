export interface Product {
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

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Long Grain Local Rice",
    vendor: "Mama Ebube's Grains",
    category: "Grains",
    price: 18500,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    distance: "5.2km away",
    location: "Central Market",
    tags: ["Verified Seller", "PRICE DROPPED 5%"],
    rating: 4.8,
    reviews: 120,
    isVerified: true
  },
  {
    id: "p2",
    name: "Premium Abuja Yams (Large)",
    vendor: "Root Harvest",
    category: "Tubers",
    price: 3200,
    image: "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e2e7?auto=format&fit=crop&q=80&w=400",
    distance: "1.8km away",
    location: "North Farm",
    tags: ["STABLE PRICE"],
    rating: 4.5,
    reviews: 45
  },
  {
    id: "p3",
    name: "Cold Pressed Groundnut Oil",
    vendor: "Golden Oils",
    category: "Oils",
    price: 5400,
    image: "https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&q=80&w=400",
    distance: "8.5km away",
    location: "East Village Market",
    tags: ["PRICE RISING"],
    rating: 4.9,
    reviews: 210
  }
];

export const mockVendorStats = {
  name: "Meadowbrook Farms",
  activeListings: 24,
  totalSales: 1284.50,
  activeOrders: 14,
  newMessages: 7,
  rating: 4.9,
  reviews: 128
};
