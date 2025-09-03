import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Product, ProductVariant } from '../../types';
import { Rating } from './Rating';
import { QuantitySelector } from './QuantitySelector';

// Sandwich J Cup product data
const sandwichJCupProduct: Product = {
  id: 'sandwich-j-cup-001',
  name: 'Sandwich J Cup',
  category: 'accessories',
  price: 89.99,
  originalPrice: 109.99,
  images: ['/images/sandwich-j-cup.jpg'],
  description: 'Heavy-duty sandwich J cups designed for power racks and squat stands.',
  inStock: true,
  stockQuantity: 25,
  rating: 4.7,
  reviewCount: 43,
  isFeatured: false,
  isBestSeller: false,
  variantGroups: [
    {
      type: 'custom',
      name: 'Pin Diameter',
      required: true,
      variants: [
        {
          id: 'sandwich-j-cup-5-8',
          type: 'custom',
          name: '5/8" Pin',
          attribute: 'pinDiameter',
          value: '5/8 inch',
          price: 89.99,
          inStock: true,
          stockQuantity: 15
        },
        {
          id: 'sandwich-j-cup-1',
          type: 'custom',
          name: '1" Pin',
          attribute: 'pinDiameter',
          value: '1 inch',
          price: 94.99,
          inStock: true,
          stockQuantity: 10
        }
      ]
    }
  ],
  brand: 'Robust Fitness'
};

// Barbell product data
const barbellProduct: Product = {
  id: 'olympic-barbell-standard',
  name: 'Olympic Barbell Standard',
  category: 'barbells',
  price: 179.99,
  originalPrice: 199.99,
  images: ['/images/olympic-barbell.jpg'],
  description: 'Professional Olympic barbell with dual knurl marks and rotating sleeves.',
  inStock: true,
  stockQuantity: 15,
  rating: 4.9,
  reviewCount: 167,
  isFeatured: false,
  isBestSeller: false,
  variantGroups: [
    {
      type: 'custom',
      name: 'Length',
      required: true,
      variants: [
        {
          id: 'barbell-6ft',
          type: 'custom',
          name: '6 ft',
          attribute: 'length',
          value: 6,
          price: 179.99,
          inStock: true,
          stockQuantity: 12
        },
        {
          id: 'barbell-7ft',
          type: 'custom',
          name: '7 ft',
          attribute: 'length',
          value: 7,
          price: 199.99,
          inStock: true,
          stockQuantity: 8
        }
      ]
    }
  ],
  brand: 'Robust Fitness'
};

interface BuyTogetherCardProps {
  mainProduct: Product;
}

export default function BuyTogetherCard({ mainProduct }: BuyTogetherCardProps) {
  const { addToCart } = useCart();
  
  // State for Sandwich J Cup
  const [jCupSelectedVariants, setJCupSelectedVariants] = useState<{ [key: string]: ProductVariant }>({});
  const [jCupQuantity, setJCupQuantity] = useState(1);
  const [jCupSelected, setJCupSelected] = useState(false);
  
  // State for Barbell
  const [barbellSelectedVariants, setBarbellSelectedVariants] = useState<{ [key: string]: ProductVariant }>({});
  const [barbellQuantity, setBarbellQuantity] = useState(1);
  const [barbellSelected, setBarbellSelected] = useState(false);

  const getJCupDisplayPrice = () => {
    let basePrice = sandwichJCupProduct.price;
    if (jCupSelectedVariants && Object.keys(jCupSelectedVariants).length > 0) {
      Object.values(jCupSelectedVariants).forEach(variant => {
        if (variant && variant.price > basePrice) {
          basePrice = variant.price;
        }
      });
    }
    return basePrice;
  };

  const getBarbellDisplayPrice = () => {
    let basePrice = barbellProduct.price;
    if (barbellSelectedVariants && Object.keys(barbellSelectedVariants).length > 0) {
      Object.values(barbellSelectedVariants).forEach(variant => {
        if (variant && variant.price > basePrice) {
          basePrice = variant.price;
        }
      });
    }
    return basePrice;
  };

  const canAddJCupToCart = () => {
    if (!sandwichJCupProduct.inStock) return false;
    return sandwichJCupProduct.variantGroups?.every(group => 
      !group.required || jCupSelectedVariants[group.type]
    ) ?? true;
  };

  const canAddBarbellToCart = () => {
    if (!barbellProduct.inStock) return false;
    return barbellProduct.variantGroups?.every(group => 
      !group.required || barbellSelectedVariants[group.type]
    ) ?? true;
  };

  const handleJCupVariantChange = (variantType: string, variant: ProductVariant) => {
    setJCupSelectedVariants(prev => ({
      ...prev,
      [variantType]: variant
    }));
  };

  const handleBarbellVariantChange = (variantType: string, variant: ProductVariant) => {
    setBarbellSelectedVariants(prev => ({
      ...prev,
      [variantType]: variant
    }));
  };

  const renderVariantSelector = (product: Product, selectedVariants: { [key: string]: ProductVariant }, handleVariantChange: (type: string, variant: ProductVariant) => void) => {
    if (!product.variantGroups) return null;

    return product.variantGroups.map((variantGroup) => (
      <div key={variantGroup.type} className="mt-3">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          {variantGroup.name}
          {variantGroup.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <select
          value={selectedVariants[variantGroup.type]?.id || ''}
          onChange={(e) => {
            const variant = variantGroup.variants.find(v => v.id === e.target.value);
            if (variant) handleVariantChange(variantGroup.type, variant);
          }}
          className="w-full text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select {variantGroup.name}</option>
          {variantGroup.variants.map((variant) => {
            const additionalCost = variant.price > product.price ? ` (+$${(variant.price - product.price).toFixed(2)})` : '';
            return (
              <option key={variant.id} value={variant.id} disabled={!variant.inStock}>
                {variant.name}{additionalCost}
                {!variant.inStock ? ' (Out of Stock)' : ''}
              </option>
            );
          })}
        </select>
      </div>
    ));
  };

  const handleAddSelectedToCart = () => {
    let addedItems = 0;
    
    if (jCupSelected && canAddJCupToCart()) {
      addToCart(sandwichJCupProduct.id, jCupQuantity, Object.keys(jCupSelectedVariants).length > 0 ? jCupSelectedVariants : undefined);
      addedItems++;
    }
    
    if (barbellSelected && canAddBarbellToCart()) {
      addToCart(barbellProduct.id, barbellQuantity, Object.keys(barbellSelectedVariants).length > 0 ? barbellSelectedVariants : undefined);
      addedItems++;
    }

    if (addedItems > 0) {
      alert(`${addedItems} item(s) added to cart!`);
    }
  };

  const getTotalSavings = () => {
    let total = 0;
    if (jCupSelected) total += getJCupDisplayPrice() * jCupQuantity;
    if (barbellSelected) total += getBarbellDisplayPrice() * barbellQuantity;
    return total * 0.05; // 5% savings
  };

  const getSelectedItemsCount = () => {
    return (jCupSelected ? 1 : 0) + (barbellSelected ? 1 : 0);
  };

  // Only show if this is the Robust Power Case product
  if (mainProduct.name !== "Robust-Power-Case-P493") {
    return null;
  }

  return (
    <div className="mt-8 border-t pt-8">
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">🔥</span>
          <h3 className="text-lg font-semibold text-gray-900">
            Frequently Bought Together
          </h3>
          <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Save 5%
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Sandwich J Cup Card */}
          <div className={`bg-white rounded-lg p-4 border-2 transition-all ${jCupSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={jCupSelected}
                onChange={(e) => setJCupSelected(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <div className="flex-1">
                <div className="flex items-start space-x-3">
                  <img
                    src={sandwichJCupProduct.images[0] || '/images/placeholder.jpg'}
                    alt={sandwichJCupProduct.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-gray-900">{sandwichJCupProduct.name}</h4>
                    <div className="flex items-center mt-1">
                      <Rating rating={sandwichJCupProduct.rating} size="sm" />
                      <span className="ml-1 text-xs text-gray-500">({sandwichJCupProduct.reviewCount})</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-sm font-bold text-blue-600">${getJCupDisplayPrice().toFixed(2)}</span>
                      {sandwichJCupProduct.originalPrice && (
                        <span className="ml-2 text-xs text-gray-500 line-through">
                          ${sandwichJCupProduct.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {jCupSelected && (
                  <div className="mt-3 space-y-2">
                    {renderVariantSelector(sandwichJCupProduct, jCupSelectedVariants, handleJCupVariantChange)}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Quantity</label>
                      <QuantitySelector
                        quantity={jCupQuantity}
                        onQuantityChange={setJCupQuantity}
                        max={sandwichJCupProduct.stockQuantity || 99}
                        size="sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Barbell Card */}
          <div className={`bg-white rounded-lg p-4 border-2 transition-all ${barbellSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={barbellSelected}
                onChange={(e) => setBarbellSelected(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <div className="flex-1">
                <div className="flex items-start space-x-3">
                  <img
                    src={barbellProduct.images[0] || '/images/placeholder.jpg'}
                    alt={barbellProduct.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-gray-900">{barbellProduct.name}</h4>
                    <div className="flex items-center mt-1">
                      <Rating rating={barbellProduct.rating} size="sm" />
                      <span className="ml-1 text-xs text-gray-500">({barbellProduct.reviewCount})</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-sm font-bold text-blue-600">${getBarbellDisplayPrice().toFixed(2)}</span>
                      {barbellProduct.originalPrice && (
                        <span className="ml-2 text-xs text-gray-500 line-through">
                          ${barbellProduct.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {barbellSelected && (
                  <div className="mt-3 space-y-2">
                    {renderVariantSelector(barbellProduct, barbellSelectedVariants, handleBarbellVariantChange)}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Quantity</label>
                      <QuantitySelector
                        quantity={barbellQuantity}
                        onQuantityChange={setBarbellQuantity}
                        max={barbellProduct.stockQuantity || 99}
                        size="sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        {getSelectedItemsCount() > 0 && (
          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-600">
                {getSelectedItemsCount()} item(s) selected
              </div>
              <div className="text-sm font-medium text-green-600">
                Save ${getTotalSavings().toFixed(2)}
              </div>
            </div>
            <button
              onClick={handleAddSelectedToCart}
              disabled={
                (jCupSelected && !canAddJCupToCart()) || 
                (barbellSelected && !canAddBarbellToCart())
              }
              className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white ${
                (jCupSelected && canAddJCupToCart()) || (barbellSelected && canAddBarbellToCart())
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Add Selected to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
