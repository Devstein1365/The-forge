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
    "id": "p1",
    "name": "Premium Abuja Yams (Large)",
    "vendor": "Root Harvest",
    "category": "Tubers",
    "price": 3368,
    "image": "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e2e7?auto=format&fit=crop&q=80&w=400",
    "distance": "14.7km away",
    "location": "East Valley",
    "tags": [
      "STABLE PRICE"
    ],
    "rating": 3.9,
    "reviews": 15,
    "isVerified": true
  },
  {
    "id": "p2",
    "name": "Cold Pressed Groundnut Oil",
    "vendor": "Golden Oils",
    "category": "Oils",
    "price": 3621,
    "image": "https://images.unsplash.com/photo-1628192231267-ff7db09139ea?auto=format&fit=crop&q=80&w=400",
    "distance": "4.3km away",
    "location": "Central Market",
    "tags": [
      "NEW VENDOR"
    ],
    "rating": 5,
    "reviews": 235,
    "isVerified": true
  },
  {
    "id": "p3",
    "name": "Fresh Tomatoes (Basket)",
    "vendor": "Green Valley Farms",
    "category": "Vegetables",
    "price": 15478,
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
    "distance": "7.2km away",
    "location": "East Valley",
    "tags": [
      "Verified Seller",
      "FARM FRESH"
    ],
    "rating": 5,
    "reviews": 108,
    "isVerified": true
  },
  {
    "id": "p4",
    "name": "Organic Honey 1L",
    "vendor": "Sweet Nectar Ltd",
    "category": "Sweeteners",
    "price": 5118,
    "image": "https://images.unsplash.com/photo-1587049352847-eccf608c0ef1?auto=format&fit=crop&q=80&w=400",
    "distance": "8.9km away",
    "location": "Central Market",
    "tags": [
      "Verified Seller",
      "NEW IN STOCK"
    ],
    "rating": 4.2,
    "reviews": 206,
    "isVerified": true
  },
  {
    "id": "p5",
    "name": "Dried Red Chillies",
    "vendor": "Spicy Haven",
    "category": "Spices",
    "price": 2581,
    "image": "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=400",
    "distance": "11.6km away",
    "location": "North Farm",
    "tags": [
      "PRICE DROPPED"
    ],
    "rating": 3.7,
    "reviews": 105,
    "isVerified": false
  },
  {
    "id": "p6",
    "name": "Garri (White) 10kg",
    "vendor": "Mama Blessing",
    "category": "Grains",
    "price": 9056,
    "image": "https://images.unsplash.com/photo-1533261623912-32aefb7f0322?auto=format&fit=crop&q=80&w=400",
    "distance": "2.1km away",
    "location": "East Valley",
    "tags": [
      "Verified Seller",
      "STABLE PRICE"
    ],
    "rating": 3.9,
    "reviews": 298,
    "isVerified": true
  },
  {
    "id": "p7",
    "name": "Long Grain Local Rice",
    "vendor": "Mama Ebube's Grains",
    "category": "Grains",
    "price": 19646,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    "distance": "2.3km away",
    "location": "East Valley",
    "tags": [
      "Verified Seller",
      "PRICE DROPPED 5%"
    ],
    "rating": 4.3,
    "reviews": 13,
    "isVerified": true
  },
  {
    "id": "p8",
    "name": "Premium Abuja Yams (Large)",
    "vendor": "Root Harvest",
    "category": "Tubers",
    "price": 3621,
    "image": "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e2e7?auto=format&fit=crop&q=80&w=400",
    "distance": "15.5km away",
    "location": "North Farm",
    "tags": [
      "STABLE PRICE"
    ],
    "rating": 3.6,
    "reviews": 203,
    "isVerified": false
  },
  {
    "id": "p9",
    "name": "Cold Pressed Groundnut Oil",
    "vendor": "Golden Oils",
    "category": "Oils",
    "price": 3722,
    "image": "https://images.unsplash.com/photo-1628192231267-ff7db09139ea?auto=format&fit=crop&q=80&w=400",
    "distance": "5.8km away",
    "location": "North Farm",
    "tags": [
      "NEW VENDOR"
    ],
    "rating": 4.5,
    "reviews": 210,
    "isVerified": true
  },
  {
    "id": "p10",
    "name": "Fresh Tomatoes (Basket)",
    "vendor": "Green Valley Farms",
    "category": "Vegetables",
    "price": 12867,
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
    "distance": "5.9km away",
    "location": "Local Suburbs",
    "tags": [
      "Verified Seller",
      "FARM FRESH"
    ],
    "rating": 4.4,
    "reviews": 241,
    "isVerified": true
  },
  {
    "id": "p11",
    "name": "Organic Honey 1L",
    "vendor": "Sweet Nectar Ltd",
    "category": "Sweeteners",
    "price": 7018,
    "image": "https://images.unsplash.com/photo-1587049352847-eccf608c0ef1?auto=format&fit=crop&q=80&w=400",
    "distance": "9.7km away",
    "location": "Local Suburbs",
    "tags": [
      "Verified Seller",
      "NEW IN STOCK"
    ],
    "rating": 4.4,
    "reviews": 182,
    "isVerified": true
  },
  {
    "id": "p12",
    "name": "Dried Red Chillies",
    "vendor": "Spicy Haven",
    "category": "Spices",
    "price": 2180,
    "image": "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=400",
    "distance": "3.7km away",
    "location": "Central Market",
    "tags": [
      "PRICE DROPPED"
    ],
    "rating": 4.2,
    "reviews": 137,
    "isVerified": false
  },
  {
    "id": "p13",
    "name": "Garri (White) 10kg",
    "vendor": "Mama Blessing",
    "category": "Grains",
    "price": 9278,
    "image": "https://images.unsplash.com/photo-1533261623912-32aefb7f0322?auto=format&fit=crop&q=80&w=400",
    "distance": "2.9km away",
    "location": "Local Suburbs",
    "tags": [
      "Verified Seller",
      "STABLE PRICE"
    ],
    "rating": 4.7,
    "reviews": 243,
    "isVerified": true
  },
  {
    "id": "p14",
    "name": "Long Grain Local Rice",
    "vendor": "Mama Ebube's Grains",
    "category": "Grains",
    "price": 16125,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    "distance": "12.1km away",
    "location": "Local Suburbs",
    "tags": [
      "Verified Seller",
      "PRICE DROPPED 5%"
    ],
    "rating": 3.7,
    "reviews": 57,
    "isVerified": true
  },
  {
    "id": "p15",
    "name": "Premium Abuja Yams (Large)",
    "vendor": "Root Harvest",
    "category": "Tubers",
    "price": 3139,
    "image": "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e2e7?auto=format&fit=crop&q=80&w=400",
    "distance": "1.3km away",
    "location": "South Gate",
    "tags": [
      "STABLE PRICE"
    ],
    "rating": 4.7,
    "reviews": 231,
    "isVerified": false
  },
  {
    "id": "p16",
    "name": "Cold Pressed Groundnut Oil",
    "vendor": "Golden Oils",
    "category": "Oils",
    "price": 4941,
    "image": "https://images.unsplash.com/photo-1628192231267-ff7db09139ea?auto=format&fit=crop&q=80&w=400",
    "distance": "3.3km away",
    "location": "Central Market",
    "tags": [
      "NEW VENDOR"
    ],
    "rating": 3.7,
    "reviews": 83,
    "isVerified": false
  },
  {
    "id": "p17",
    "name": "Fresh Tomatoes (Basket)",
    "vendor": "Green Valley Farms",
    "category": "Vegetables",
    "price": 17845,
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
    "distance": "10.2km away",
    "location": "South Gate",
    "tags": [
      "Verified Seller",
      "FARM FRESH"
    ],
    "rating": 3.7,
    "reviews": 187,
    "isVerified": true
  },
  {
    "id": "p18",
    "name": "Organic Honey 1L",
    "vendor": "Sweet Nectar Ltd",
    "category": "Sweeteners",
    "price": 6153,
    "image": "https://images.unsplash.com/photo-1587049352847-eccf608c0ef1?auto=format&fit=crop&q=80&w=400",
    "distance": "10.1km away",
    "location": "West Trade Center",
    "tags": [
      "Verified Seller",
      "NEW IN STOCK"
    ],
    "rating": 3.8,
    "reviews": 75,
    "isVerified": true
  },
  {
    "id": "p19",
    "name": "Dried Red Chillies",
    "vendor": "Spicy Haven",
    "category": "Spices",
    "price": 2099,
    "image": "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=400",
    "distance": "14.5km away",
    "location": "Local Suburbs",
    "tags": [
      "PRICE DROPPED"
    ],
    "rating": 4.6,
    "reviews": 76,
    "isVerified": false
  },
  {
    "id": "p20",
    "name": "Garri (White) 10kg",
    "vendor": "Mama Blessing",
    "category": "Grains",
    "price": 8826,
    "image": "https://images.unsplash.com/photo-1533261623912-32aefb7f0322?auto=format&fit=crop&q=80&w=400",
    "distance": "2.3km away",
    "location": "North Farm",
    "tags": [
      "Verified Seller",
      "STABLE PRICE"
    ],
    "rating": 4.1,
    "reviews": 119,
    "isVerified": true
  },
  {
    "id": "p21",
    "name": "Long Grain Local Rice",
    "vendor": "Mama Ebube's Grains",
    "category": "Grains",
    "price": 19903,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    "distance": "15.0km away",
    "location": "Central Market",
    "tags": [
      "Verified Seller",
      "PRICE DROPPED 5%"
    ],
    "rating": 4.8,
    "reviews": 217,
    "isVerified": true
  },
  {
    "id": "p22",
    "name": "Premium Abuja Yams (Large)",
    "vendor": "Root Harvest",
    "category": "Tubers",
    "price": 3569,
    "image": "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e2e7?auto=format&fit=crop&q=80&w=400",
    "distance": "12.2km away",
    "location": "South Gate",
    "tags": [
      "STABLE PRICE"
    ],
    "rating": 3.7,
    "reviews": 165,
    "isVerified": false
  },
  {
    "id": "p23",
    "name": "Cold Pressed Groundnut Oil",
    "vendor": "Golden Oils",
    "category": "Oils",
    "price": 4153,
    "image": "https://images.unsplash.com/photo-1628192231267-ff7db09139ea?auto=format&fit=crop&q=80&w=400",
    "distance": "4.5km away",
    "location": "South Gate",
    "tags": [
      "NEW VENDOR"
    ],
    "rating": 4.7,
    "reviews": 288,
    "isVerified": false
  },
  {
    "id": "p24",
    "name": "Fresh Tomatoes (Basket)",
    "vendor": "Green Valley Farms",
    "category": "Vegetables",
    "price": 14682,
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
    "distance": "4.7km away",
    "location": "Central Market",
    "tags": [
      "Verified Seller",
      "FARM FRESH"
    ],
    "rating": 4.2,
    "reviews": 244,
    "isVerified": true
  },
  {
    "id": "p25",
    "name": "Organic Honey 1L",
    "vendor": "Sweet Nectar Ltd",
    "category": "Sweeteners",
    "price": 5103,
    "image": "https://images.unsplash.com/photo-1587049352847-eccf608c0ef1?auto=format&fit=crop&q=80&w=400",
    "distance": "3.9km away",
    "location": "West Trade Center",
    "tags": [
      "Verified Seller",
      "NEW IN STOCK"
    ],
    "rating": 4.6,
    "reviews": 186,
    "isVerified": true
  },
  {
    "id": "p26",
    "name": "Dried Red Chillies",
    "vendor": "Spicy Haven",
    "category": "Spices",
    "price": 2421,
    "image": "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=400",
    "distance": "13.8km away",
    "location": "West Trade Center",
    "tags": [
      "PRICE DROPPED"
    ],
    "rating": 4.4,
    "reviews": 16,
    "isVerified": false
  },
  {
    "id": "p27",
    "name": "Garri (White) 10kg",
    "vendor": "Mama Blessing",
    "category": "Grains",
    "price": 7350,
    "image": "https://images.unsplash.com/photo-1533261623912-32aefb7f0322?auto=format&fit=crop&q=80&w=400",
    "distance": "8.2km away",
    "location": "Central Market",
    "tags": [
      "Verified Seller",
      "STABLE PRICE"
    ],
    "rating": 5,
    "reviews": 302,
    "isVerified": true
  },
  {
    "id": "p28",
    "name": "Long Grain Local Rice",
    "vendor": "Mama Ebube's Grains",
    "category": "Grains",
    "price": 20653,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    "distance": "12.8km away",
    "location": "Central Market",
    "tags": [
      "Verified Seller",
      "PRICE DROPPED 5%"
    ],
    "rating": 3.5,
    "reviews": 284,
    "isVerified": true
  },
  {
    "id": "p29",
    "name": "Premium Abuja Yams (Large)",
    "vendor": "Root Harvest",
    "category": "Tubers",
    "price": 3551,
    "image": "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e2e7?auto=format&fit=crop&q=80&w=400",
    "distance": "6.3km away",
    "location": "Central Market",
    "tags": [
      "STABLE PRICE"
    ],
    "rating": 4.7,
    "reviews": 55,
    "isVerified": false
  },
  {
    "id": "p30",
    "name": "Cold Pressed Groundnut Oil",
    "vendor": "Golden Oils",
    "category": "Oils",
    "price": 4339,
    "image": "https://images.unsplash.com/photo-1628192231267-ff7db09139ea?auto=format&fit=crop&q=80&w=400",
    "distance": "0.9km away",
    "location": "North Farm",
    "tags": [
      "NEW VENDOR"
    ],
    "rating": 4.9,
    "reviews": 95,
    "isVerified": false
  },
  {
    "id": "p31",
    "name": "Fresh Tomatoes (Basket)",
    "vendor": "Green Valley Farms",
    "category": "Vegetables",
    "price": 17164,
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
    "distance": "5.3km away",
    "location": "South Gate",
    "tags": [
      "Verified Seller",
      "FARM FRESH"
    ],
    "rating": 4.7,
    "reviews": 118,
    "isVerified": true
  },
  {
    "id": "p32",
    "name": "Organic Honey 1L",
    "vendor": "Sweet Nectar Ltd",
    "category": "Sweeteners",
    "price": 6954,
    "image": "https://images.unsplash.com/photo-1587049352847-eccf608c0ef1?auto=format&fit=crop&q=80&w=400",
    "distance": "7.3km away",
    "location": "Local Suburbs",
    "tags": [
      "Verified Seller",
      "NEW IN STOCK"
    ],
    "rating": 4.6,
    "reviews": 186,
    "isVerified": true
  },
  {
    "id": "p33",
    "name": "Dried Red Chillies",
    "vendor": "Spicy Haven",
    "category": "Spices",
    "price": 2416,
    "image": "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=400",
    "distance": "10.9km away",
    "location": "North Farm",
    "tags": [
      "PRICE DROPPED"
    ],
    "rating": 3.8,
    "reviews": 17,
    "isVerified": false
  },
  {
    "id": "p34",
    "name": "Garri (White) 10kg",
    "vendor": "Mama Blessing",
    "category": "Grains",
    "price": 9654,
    "image": "https://images.unsplash.com/photo-1533261623912-32aefb7f0322?auto=format&fit=crop&q=80&w=400",
    "distance": "4.5km away",
    "location": "West Trade Center",
    "tags": [
      "Verified Seller",
      "STABLE PRICE"
    ],
    "rating": 3.6,
    "reviews": 257,
    "isVerified": true
  },
  {
    "id": "p35",
    "name": "Long Grain Local Rice",
    "vendor": "Mama Ebube's Grains",
    "category": "Grains",
    "price": 21866,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    "distance": "6.1km away",
    "location": "East Valley",
    "tags": [
      "Verified Seller",
      "PRICE DROPPED 5%"
    ],
    "rating": 4,
    "reviews": 118,
    "isVerified": true
  },
  {
    "id": "p36",
    "name": "Premium Abuja Yams (Large)",
    "vendor": "Root Harvest",
    "category": "Tubers",
    "price": 2904,
    "image": "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e2e7?auto=format&fit=crop&q=80&w=400",
    "distance": "1.0km away",
    "location": "West Trade Center",
    "tags": [
      "STABLE PRICE"
    ],
    "rating": 4.5,
    "reviews": 45,
    "isVerified": false
  },
  {
    "id": "p37",
    "name": "Cold Pressed Groundnut Oil",
    "vendor": "Golden Oils",
    "category": "Oils",
    "price": 4324,
    "image": "https://images.unsplash.com/photo-1628192231267-ff7db09139ea?auto=format&fit=crop&q=80&w=400",
    "distance": "8.1km away",
    "location": "Local Suburbs",
    "tags": [
      "NEW VENDOR"
    ],
    "rating": 4,
    "reviews": 12,
    "isVerified": false
  },
  {
    "id": "p38",
    "name": "Fresh Tomatoes (Basket)",
    "vendor": "Green Valley Farms",
    "category": "Vegetables",
    "price": 16596,
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
    "distance": "11.0km away",
    "location": "South Gate",
    "tags": [
      "Verified Seller",
      "FARM FRESH"
    ],
    "rating": 4.4,
    "reviews": 303,
    "isVerified": true
  },
  {
    "id": "p39",
    "name": "Organic Honey 1L",
    "vendor": "Sweet Nectar Ltd",
    "category": "Sweeteners",
    "price": 7116,
    "image": "https://images.unsplash.com/photo-1587049352847-eccf608c0ef1?auto=format&fit=crop&q=80&w=400",
    "distance": "3.6km away",
    "location": "South Gate",
    "tags": [
      "Verified Seller",
      "NEW IN STOCK"
    ],
    "rating": 5,
    "reviews": 122,
    "isVerified": true
  },
  {
    "id": "p40",
    "name": "Dried Red Chillies",
    "vendor": "Spicy Haven",
    "category": "Spices",
    "price": 2537,
    "image": "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=400",
    "distance": "10.4km away",
    "location": "Central Market",
    "tags": [
      "PRICE DROPPED"
    ],
    "rating": 3.8,
    "reviews": 65,
    "isVerified": false
  },
  {
    "id": "p41",
    "name": "Garri (White) 10kg",
    "vendor": "Mama Blessing",
    "category": "Grains",
    "price": 9577,
    "image": "https://images.unsplash.com/photo-1533261623912-32aefb7f0322?auto=format&fit=crop&q=80&w=400",
    "distance": "11.7km away",
    "location": "North Farm",
    "tags": [
      "Verified Seller",
      "STABLE PRICE"
    ],
    "rating": 3.7,
    "reviews": 296,
    "isVerified": true
  },
  {
    "id": "p42",
    "name": "Long Grain Local Rice",
    "vendor": "Mama Ebube's Grains",
    "category": "Grains",
    "price": 20973,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    "distance": "15.0km away",
    "location": "West Trade Center",
    "tags": [
      "Verified Seller",
      "PRICE DROPPED 5%"
    ],
    "rating": 3.8,
    "reviews": 282,
    "isVerified": true
  },
  {
    "id": "p43",
    "name": "Premium Abuja Yams (Large)",
    "vendor": "Root Harvest",
    "category": "Tubers",
    "price": 2851,
    "image": "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e2e7?auto=format&fit=crop&q=80&w=400",
    "distance": "15.1km away",
    "location": "Local Suburbs",
    "tags": [
      "STABLE PRICE"
    ],
    "rating": 3.8,
    "reviews": 70,
    "isVerified": false
  },
  {
    "id": "p44",
    "name": "Cold Pressed Groundnut Oil",
    "vendor": "Golden Oils",
    "category": "Oils",
    "price": 3640,
    "image": "https://images.unsplash.com/photo-1628192231267-ff7db09139ea?auto=format&fit=crop&q=80&w=400",
    "distance": "15.1km away",
    "location": "West Trade Center",
    "tags": [
      "NEW VENDOR"
    ],
    "rating": 3.9,
    "reviews": 243,
    "isVerified": false
  },
  {
    "id": "p45",
    "name": "Fresh Tomatoes (Basket)",
    "vendor": "Green Valley Farms",
    "category": "Vegetables",
    "price": 16732,
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
    "distance": "1.1km away",
    "location": "South Gate",
    "tags": [
      "Verified Seller",
      "FARM FRESH"
    ],
    "rating": 4.5,
    "reviews": 272,
    "isVerified": true
  },
  {
    "id": "p46",
    "name": "Organic Honey 1L",
    "vendor": "Sweet Nectar Ltd",
    "category": "Sweeteners",
    "price": 5874,
    "image": "https://images.unsplash.com/photo-1587049352847-eccf608c0ef1?auto=format&fit=crop&q=80&w=400",
    "distance": "15.2km away",
    "location": "East Valley",
    "tags": [
      "Verified Seller",
      "NEW IN STOCK"
    ],
    "rating": 4.6,
    "reviews": 227,
    "isVerified": true
  },
  {
    "id": "p47",
    "name": "Dried Red Chillies",
    "vendor": "Spicy Haven",
    "category": "Spices",
    "price": 2988,
    "image": "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=400",
    "distance": "9.1km away",
    "location": "South Gate",
    "tags": [
      "PRICE DROPPED"
    ],
    "rating": 3.7,
    "reviews": 86,
    "isVerified": false
  },
  {
    "id": "p48",
    "name": "Garri (White) 10kg",
    "vendor": "Mama Blessing",
    "category": "Grains",
    "price": 7970,
    "image": "https://images.unsplash.com/photo-1533261623912-32aefb7f0322?auto=format&fit=crop&q=80&w=400",
    "distance": "10.3km away",
    "location": "North Farm",
    "tags": [
      "Verified Seller",
      "STABLE PRICE"
    ],
    "rating": 3.6,
    "reviews": 221,
    "isVerified": true
  },
  {
    "id": "p49",
    "name": "Long Grain Local Rice",
    "vendor": "Mama Ebube's Grains",
    "category": "Grains",
    "price": 17495,
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    "distance": "5.3km away",
    "location": "North Farm",
    "tags": [
      "Verified Seller",
      "PRICE DROPPED 5%"
    ],
    "rating": 3.6,
    "reviews": 189,
    "isVerified": true
  },
  {
    "id": "p50",
    "name": "Premium Abuja Yams (Large)",
    "vendor": "Root Harvest",
    "category": "Tubers",
    "price": 2953,
    "image": "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e2e7?auto=format&fit=crop&q=80&w=400",
    "distance": "8.2km away",
    "location": "East Valley",
    "tags": [
      "STABLE PRICE"
    ],
    "rating": 4.3,
    "reviews": 145,
    "isVerified": false
  }
];
export const mockVendorStats = { name: "Mama Ebube's Grains", activeListings: 24, totalSales: 845000, activeOrders: 14, newMessages: 7, rating: 4.9, reviews: 128 };
