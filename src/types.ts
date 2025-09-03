export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface ComboOffer {
  id: string;
  name: string;
  category: 'combo-offers';
  price: number;
  salePrice: number;
  images: string[];
  description: string;
  shortDescription: string;
  inStock: boolean;
  featured: boolean;
  bestSeller: boolean;
  isNew: boolean;
  rating: number;
  reviewCount: number;
  savings: string;
  originalPrice: number;
  items: string[]; // List of items included in the combo
  benefits: string[]; // Benefits of buying this combo
}

export interface WeightOption {
  weight: string;
  price: number;
  salePrice?: number;
  inStock: boolean;
}

export interface WeightVariant {
  weight: string;
  price?: number;
  salePrice?: number;
  inStock: boolean;
  variantImages?: string[];
  weightOptions: WeightOption[];
}

export interface SizeVariant {
  color:string;
  price: number;
  salePrice?: number;
  inStock: boolean;

}

export interface colorVariant {
  color:string;
  price: number;
  salePrice?: number;
  inStock: boolean;

}






export interface CartItem {
  productId: string;
  quantity: number;
  variant?: string;  // Can be either weight or color
  variantType?: 'weight' | 'color';  // Specify which type of variant it is
  product: Product;
}

export interface OrderItem extends CartItem {
  priceAtPurchase: number;
}

export interface Address {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pinCode: string;
  phone: string;
  email: string;
}

export interface Order {
  id: string;
  userId?: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed';
  paymentMethod: 'cod' | 'online';
  shippingAddress: Address;
  billingAddress: Address;
  orderDate: string;
  expectedDeliveryDate?: string;
  deliveredDate?: string;
  trackingId?: string;
  notes?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  priceRange?: string;
  images: string[];
  description: string;
  shortDescription: string;
  specifications: {
    features: string[];
    dimensions?: string;
    weight?: string;
    material?: string;
    maxWeight?: string;
    [key: string]: string | string[] | undefined;
  };
  weightVariants?: WeightVariant[];
  sizeVariants?: SizeVariant[];
  ColorVariant?: colorVariant[];
  color?:string;
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
  videoUrl?: string;
  demoVideoId?: string;
  reviews: {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
    images?: string[];
  }[];
  features?: {
    title: string;
    description: string;
    image: string;
  }[];
  keyPoints?: {
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
}

