import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { products } from '../data/products';
import { StorageService } from '../services/storage';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: string, quantity: number, variant?: string, variantType?: 'weight' | 'color') => void;
  removeFromCart: (productId: string, variant?: string) => void;
  updateQuantity: (productId: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  getCartItems: () => CartItem[];
  getItemPrice: (item: CartItem) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    return StorageService.loadCart();
  });

  useEffect(() => {
    StorageService.saveCart(cartItems);
  }, [cartItems]);

  const getItemPrice = (item: CartItem): number => {
    if (item.variant && item.variantType === 'weight') {
      const weightVariant = item.product.weightVariants?.find(v => v.weight === item.variant);
      if (weightVariant) {
        return weightVariant.salePrice || weightVariant.price;
      }
    }

    if (item.variant && item.variantType === 'color') {
      const colorVariant = item.product.ColorVariant?.find(v => v.color === item.variant);
      if (colorVariant) {
        return colorVariant.salePrice || colorVariant.price;
      }
    }

    return item.product.salePrice || item.product.price;
  };

  const addToCart = (productId: string, quantity: number, variant?: string, variantType?: 'weight' | 'color') => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.productId === productId && item.variant === variant
      );

      if (existingItemIndex >= 0) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      const newItems = [...prevItems, { 
        productId, 
        quantity, 
        variant, 
        variantType,
        product 
      }];

      return newItems;
    });
  };

  const removeFromCart = (productId: string, variant?: string) => {
    setCartItems(prevItems => 
      prevItems.filter(item => 
        !(item.productId === productId && item.variant === variant)
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, variant?: string) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    StorageService.clearCart();
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = getItemPrice(item);
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const getCartItems = () => {
    return cartItems;
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    getCartItems,
    getItemPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};