import express from 'express';
import { body } from 'express-validator';
import { createOrder, getOrders, getOrderById, updateOrderStatus } from '../controllers/orderController.js';

const router = express.Router();

// Validation middleware
const orderValidation = [
  body('userId').notEmpty().isInt(),
  body('products').isArray().notEmpty(),
  body('products.*.productId').isInt(),
  body('products.*.quantity').isInt({ min: 1 }),
  body('totalAmount').isFloat({ min: 0 }),
  body('shippingAddress').notEmpty()
];

// Routes
router.post('/', orderValidation, createOrder);
router.get('/', getOrders);
router.get('/:id', getOrderById);
router.patch('/:id/status', updateOrderStatus);

export default router; 