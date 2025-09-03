import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { products } from '../data/products';

interface WishlistContextType {
  items: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  getWishlistItems: () => Product[];
}

const WishlistContext = createContext<WishlistContextType>({
  items: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
  getWishlistItems: () => [],
});

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<string[]>(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }, [items]);

  const addToWishlist = (productId: string) => {
    setItems((prevItems) => {
      if (prevItems.includes(productId)) return prevItems;
      return [...prevItems, productId];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setItems((prevItems) => prevItems.filter((id) => id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return items.includes(productId);
  };

  const getWishlistItems = () => {
    return items.map((id) => {
      const product = products.find((p) => p.id === id);
      if (!product) {
        throw new Error(`Product with id ${id} not found`);
      }
      return product;
    });
  };

  const value = {
    items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    getWishlistItems,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};