import pool from '../config/db.js';

/**
 * Create or update products in the database.
 * @param {Array} products - Array of product objects to insert or update.
 * @returns {Promise<{successCount: number, errorCount: number}>}
 */
export const upsertProducts = async (products) => {
  let successCount = 0;
  let errorCount = 0;

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    for (const product of products) {
      try {
        // Upsert product by id
        const query = `
          INSERT INTO products (id, name, category, price, sale_price, images, description, short_description, specifications, in_stock, featured, best_seller, is_new, rating, review_count, video_url)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE
            name = VALUES(name),
            category = VALUES(category),
            price = VALUES(price),
            sale_price = VALUES(sale_price),
            images = VALUES(images),
            description = VALUES(description),
            short_description = VALUES(short_description),
            specifications = VALUES(specifications),
            in_stock = VALUES(in_stock),
            featured = VALUES(featured),
            best_seller = VALUES(best_seller),
            is_new = VALUES(is_new),
            rating = VALUES(rating),
            review_count = VALUES(review_count),
            video_url = VALUES(video_url)
        `;

        // Convert images array to JSON string
        const imagesJson = JSON.stringify(product.images || []);
        // Convert specifications object to JSON string
        const specificationsJson = JSON.stringify(product.specifications || {});

        await connection.query(query, [
          product.id,
          product.name,
          product.category,
          product.price,
          product.sale_price,
          imagesJson,
          product.description,
          product.short_description,
          specificationsJson,
          product.in_stock ? 1 : 0,
          product.featured ? 1 : 0,
          product.best_seller ? 1 : 0,
          product.is_new ? 1 : 0,
          product.rating || 0,
          product.review_count || 0,
          product.video_url || null
        ]);

        successCount++;
      } catch (err) {
        console.error('Error upserting product:', err, product);
        errorCount++;
      }
    }

    await connection.commit();
  } catch (err) {
    await connection.rollback();
    console.error('Transaction error:', err);
    throw err;
  } finally {
    connection.release();
  }

  return { successCount, errorCount };
};

/**
 * Get all products from the database.
 * @returns {Promise<Array>}
 */
export const getProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM products');
  return rows;
};
