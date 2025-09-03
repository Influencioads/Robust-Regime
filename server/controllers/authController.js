import pool from '../config/db.js';
import bcrypt from 'bcryptjs';

/**
 * Register a new user
 */
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, 'user']
    );
    return res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Login a user
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // For simplicity, return a dummy token or session info
    return res.json({ message: 'Login successful', token: 'real-user-token', role: user.role, user });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Authenticate admin user from database
 */
export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ? AND role = ?', [email, 'admin']);
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // For simplicity, return a dummy token or session info
    return res.json({ message: 'Login successful', token: 'real-admin-token', role: user.role });
  } catch (error) {
    console.error('Error during admin login:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Get authenticated user info
 */
export const getMe = async (req, res) => {
  try {
    // Assuming user info is attached to req.user by auth middleware
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    return res.json(req.user);
  } catch (error) {
    console.error('Error fetching user info:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
