import express from 'express';
import { upsertProducts, getProducts } from '../controllers/productController.js';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Upsert products in batch
router.post('/', async (req, res) => {
  const products = req.body;
  if (!Array.isArray(products)) {
    return res.status(400).json({ error: 'Request body must be an array of products' });
  }

  try {
    const { successCount, errorCount } = await upsertProducts(products);
    res.json({ successCount, errorCount });
  } catch (error) {
    console.error('Error upserting products:', error);
    res.status(500).json({ error: 'Failed to upsert products' });
  }
});

export default router;
