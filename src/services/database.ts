import mysql from 'mysql2/promise';
import { Order, OrderItem, Address } from '../types';

class DatabaseService {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'bolt_fitness',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  // Create a new order
  async createOrder(
    userId: string,
    items: OrderItem[],
    totalAmount: number,
    paymentMethod: 'cod' | 'online',
    shippingAddress: Address,
    billingAddress: Address
  ): Promise<string> {
    const connection = await this.pool.getConnection();
    
    try {
      await connection.beginTransaction();

      // Create order
      const [result] = await connection.execute(
        'CALL create_order(?, ?, ?, ?, ?)',
        [
          userId,
          totalAmount,
          paymentMethod,
          JSON.stringify(shippingAddress),
          JSON.stringify(billingAddress)
        ]
      );

      const orderId = (result as any)[0][0].order_id;

      // Add order items
      for (const item of items) {
        await connection.execute(
          'CALL add_order_item(?, ?, ?, ?, ?, ?)',
          [
            orderId,
            item.productId,
            item.quantity,
            item.priceAtPurchase,
            item.variant || null,
            item.variantType || null
          ]
        );
      }

      await connection.commit();
      return orderId;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // Get order by ID
  async getOrderById(orderId: string): Promise<Order | null> {
    const [orderRows] = await this.pool.execute(
      `SELECT * FROM orders WHERE id = ?`,
      [orderId]
    );

    if (!orderRows || !(orderRows as any[])[0]) {
      return null;
    }

    const order = (orderRows as any[])[0];

    const [itemRows] = await this.pool.execute(
      `SELECT * FROM order_items WHERE order_id = ?`,
      [orderId]
    );

    return {
      ...order,
      items: itemRows as OrderItem[],
      shippingAddress: JSON.parse(order.shipping_address),
      billingAddress: JSON.parse(order.billing_address)
    };
  }

  // Get orders by user ID
  async getOrdersByUserId(userId: string): Promise<Order[]> {
    const [orderRows] = await this.pool.execute(
      `SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC`,
      [userId]
    );

    const orders = [];
    for (const order of orderRows as any[]) {
      const [itemRows] = await this.pool.execute(
        `SELECT * FROM order_items WHERE order_id = ?`,
        [order.id]
      );

      orders.push({
        ...order,
        items: itemRows as OrderItem[],
        shippingAddress: JSON.parse(order.shipping_address),
        billingAddress: JSON.parse(order.billing_address)
      });
    }

    return orders;
  }

  // Update order status
  async updateOrderStatus(orderId: string, status: Order['status']): Promise<boolean> {
    try {
      await this.pool.execute(
        'CALL update_order_status(?, ?)',
        [orderId, status]
      );
      return true;
    } catch (error) {
      console.error('Error updating order status:', error);
      return false;
    }
  }

  // Get all orders (admin only)
  async getAllOrders(): Promise<Order[]> {
    const [orderRows] = await this.pool.execute(
      `SELECT * FROM orders ORDER BY created_at DESC`
    );

    const orders = [];
    for (const order of orderRows as any[]) {
      const [itemRows] = await this.pool.execute(
        `SELECT * FROM order_items WHERE order_id = ?`,
        [order.id]
      );

      orders.push({
        ...order,
        items: itemRows as OrderItem[],
        shippingAddress: JSON.parse(order.shipping_address),
        billingAddress: JSON.parse(order.billing_address)
      });
    }

    return orders;
  }
}

export const db = new DatabaseService(); 