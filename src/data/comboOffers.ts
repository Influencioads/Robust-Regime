import { ComboOffer } from '../types';

export const comboOffers: ComboOffer[] = [
  {
    id: 'combo-1',
    name: 'MASSIVE COMBO DEAL!',
    category: 'combo-offers',
    price: 26400,
    salePrice: 21999,
    images: ['/Combo-Offer.webp'],
    description: 'CAST IRON PLATES & THUNDER BOLT BARBELL SET FOR ONLY',
    shortDescription: 'Complete weight plates and barbell set',
    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 127,
    savings: 'Save ₹4,401',
    originalPrice: 26400,
    items: [
      'Cast Iron Weight Plates (20kg, 15kg, 10kg, 5kg, 2.5kg, 1.25kg)',
      'Thunder Bolt Barbell',
      'Standard Olympic Size',
      'Professional Quality'
    ],
    benefits: [
      'Save ₹4,401 compared to buying individually',
      'Complete weight set for strength training',
      'Professional grade equipment',
      'Perfect for home gym setup'
    ]
  },
 
];
