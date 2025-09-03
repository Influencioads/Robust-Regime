export interface WeightOption {
  weight: string;
  price: number;
  salePrice?: number;
  inStock: boolean;
}

export interface WeightVariant {
  weight: string;
  price: number;
  salePrice?: number;
  inStock: boolean;
  variantImages?: string[];
  weightOptions?: WeightOption[];
}

export interface SizeVariant {
  size: string;
  price: number;
  salePrice?: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  images: string[];
  description: string;
  shortDescription: string;
  specifications: {
    [key: string]: string | string[];
    features: string[];
  };
  weightVariants?: WeightVariant[];  // Optional weight variants
  sizeVariants?: SizeVariant[];      // Optional size variants
  features: {
    title: string;
    description: string;
    image: string;
  }[];
  keyPoints: {
    icon: string;
    title: string;
    description: string;
  }[];
  productFeatures: {
    title: string;
    description: string;
    image: string;
  }[];
  productInsights: {
    title: string;
    videoId: string;
  }[];
  reviews: {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
    images?: string[];
  }[];
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
  videoUrl?: string;
  demoVideoId?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export type PaymentMethod = 'cod' | 'online';

export interface ShippingInfo {
  fullName: string;
  mobile: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
}