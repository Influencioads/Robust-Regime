import { CartItem, Order } from '../types';

const CART_STORAGE_KEY = 'bolt_fitness_cart';
const ORDERS_STORAGE_KEY = 'bolt_fitness_orders';

export const StorageService = {
  // Cart Storage
  saveCart: (cartItems: CartItem[]) => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
      return true;
    } catch (error) {
      console.error('Error saving cart:', error);
      return false;
    }
  },

  loadCart: (): CartItem[] => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart:', error);
      return [];
    }
  },

  clearCart: () => {
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing cart:', error);
      return false;
    }
  },

  // Order Storage
  saveOrder: (order: Order) => {
    try {
      const orders = StorageService.getOrders();
      orders.push(order);
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
      return true;
    } catch (error) {
      console.error('Error saving order:', error);
      return false;
    }
  },

  getOrders: (): Order[] => {
    try {
      const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
      return savedOrders ? JSON.parse(savedOrders) : [];
    } catch (error) {
      console.error('Error loading orders:', error);
      return [];
    }
  },

  getOrderById: (orderId: string): Order | undefined => {
    try {
      const orders = StorageService.getOrders();
      return orders.find(order => order.id === orderId);
    } catch (error) {
      console.error('Error finding order:', error);
      return undefined;
    }
  },

  updateOrderStatus: (orderId: string, status: Order['status']) => {
    try {
      const orders = StorageService.getOrders();
      const orderIndex = orders.findIndex(order => order.id === orderId);
      if (orderIndex !== -1) {
        orders[orderIndex].status = status;
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating order status:', error);
      return false;
    }
  },

  // Helper method to check if storage is available
  isStorageAvailable: () => {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}; 