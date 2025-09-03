import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: 'localhost',
  port:'3306',
  user: 'root',
  password: 'root',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection
pool.getConnection()
  .then(connection => {
    console.log('Successfully connected to MySQL');
    connection.release();
  })
  .catch(err => {
    console.error('Detailed connection error:', err);
    console.error('Error code:', err.code);
    console.error('Error number:', err.errno);
    console.error('SQL state:', err.sqlState);
    console.error('SQL message:', err.sqlMessage);
  });

// Create database and tables if they don't exist
const initializeDatabase = async () => {
  try {
    // Create database if it doesn't exist
    await pool.query('CREATE DATABASE IF NOT EXISTS ecommerce_db');
    
    // Use the database
    await pool.query('USE ecommerce_db');
    
    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role ENUM('user', 'admin') DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    console.log('Database and tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

// Initialize database on startup
initializeDatabase().catch(console.error);

export default pool;
