import React, { createContext, useContext, useState, useEffect } from 'react';
import { Order, CartItem, Address } from '../types';
import { StorageService } from '../services/storage';
import { useCart } from './CartContext';

interface OrderContextType {
  orders: Order[];
  createOrder: (
    cartItems: CartItem[],
    shippingAddress: Address,
    billingAddress: Address,
    paymentMethod: Order['paymentMethod']
  ) =>Promise< Order>;
  getOrderById: (orderId: string) => Order | undefined;
  updateOrderStatus: (orderId: string, status: Order['status']) => boolean;
  getOrders: () => Order[];
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(() => StorageService.getOrders());
  const { getCartTotal, clearCart } = useCart();

  // Generate a unique order ID
  const generateOrderId = () => {
    return 'ORD' + Date.now() + Math.random().toString(36).substr(2, 9);
  };

  const createOrder = (
    cartItems: CartItem[],
    shippingAddress: Address,
    billingAddress: Address,
    paymentMethod: Order['paymentMethod']
  ): Order => {
    const orderItems = cartItems.map(item => ({
      ...item,
      priceAtPurchase: item.product.salePrice || item.product.price
    }));

    const newOrder: Order = {
      id: generateOrderId(),
      items: orderItems,
      totalAmount: getCartTotal(),
      status: 'pending',
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
      paymentMethod,
      shippingAddress,
      billingAddress,
      orderDate: new Date().toISOString(),
      expectedDeliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
    };

    setOrders(prevOrders => {
      const updatedOrders = [...prevOrders, newOrder];
      StorageService.saveOrder(newOrder);
      return updatedOrders;
    });

    // Clear the cart after successful order creation
    clearCart();

    return newOrder;
  };

  const getOrderById = (orderId: string): Order | undefined => {
    return orders.find(order => order.id === orderId);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']): boolean => {
    const success = StorageService.updateOrderStatus(orderId, status);
    if (success) {
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order.id === orderId ? { ...order, status } : order
        )
      );
    }
    return success;
  };

  const getOrders = () => {
    return orders;
  };

  const value = {
    orders,
    createOrder,
    getOrderById,
    updateOrderStatus,
    getOrders,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}; 