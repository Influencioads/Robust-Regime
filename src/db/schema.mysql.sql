-- Create users table if not exists
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36),
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    payment_status ENUM('pending', 'paid', 'failed') DEFAULT 'pending',
    payment_method ENUM('cod', 'online') NOT NULL,
    shipping_address JSON NOT NULL,
    billing_address JSON NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expected_delivery_date TIMESTAMP NULL,
    delivered_date TIMESTAMP NULL,
    tracking_id VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
    id VARCHAR(36) PRIMARY KEY,
    order_id VARCHAR(36) NOT NULL,
    product_id VARCHAR(36) NOT NULL,
    quantity INT NOT NULL,
    price_at_purchase DECIMAL(10,2) NOT NULL,
    variant VARCHAR(100),
    variant_type ENUM('weight', 'size'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create stored procedure for creating a new order
DELIMITER //
CREATE PROCEDURE create_order(
    IN p_user_id VARCHAR(36),
    IN p_total_amount DECIMAL(10,2),
    IN p_payment_method VARCHAR(10),
    IN p_shipping_address JSON,
    IN p_billing_address JSON
)
BEGIN
    DECLARE order_id VARCHAR(36);
    SET order_id = UUID();
    
    INSERT INTO orders (
        id,
        user_id,
        total_amount,
        payment_method,
        shipping_address,
        billing_address
    ) VALUES (
        order_id,
        p_user_id,
        p_total_amount,
        p_payment_method,
        p_shipping_address,
        p_billing_address
    );
    
    SELECT order_id;
END //
DELIMITER ;

-- Create stored procedure for adding order items
DELIMITER //
CREATE PROCEDURE add_order_item(
    IN p_order_id VARCHAR(36),
    IN p_product_id VARCHAR(36),
    IN p_quantity INT,
    IN p_price_at_purchase DECIMAL(10,2),
    IN p_variant VARCHAR(100),
    IN p_variant_type VARCHAR(10)
)
BEGIN
    INSERT INTO order_items (
        id,
        order_id,
        product_id,
        quantity,
        price_at_purchase,
        variant,
        variant_type
    ) VALUES (
        UUID(),
        p_order_id,
        p_product_id,
        p_quantity,
        p_price_at_purchase,
        p_variant,
        p_variant_type
    );
END //
DELIMITER ;

-- Create stored procedure for updating order status
DELIMITER //
CREATE PROCEDURE update_order_status(
    IN p_order_id VARCHAR(36),
    IN p_status VARCHAR(20)
)
BEGIN
    UPDATE orders 
    SET status = p_status,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = p_order_id;
END //
DELIMITER ;

-- Create indexes for better performance
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id); 