import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'No authentication token, access denied' });
    }

    // Verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token verification failed, access denied' });
  }
};

export const adminAuth = (req, res, next) => {
  try {
    // First verify the token
    auth(req, res, async () => {
      // Check if user is admin
      const [users] = await pool.query(
        'SELECT role FROM users WHERE id = ?',
        [req.user.id]
      );

      if (users.length === 0 || users[0].role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admin only.' });
      }

      next();
    });
  } catch (error) {
    res.status(403).json({ message: 'Access denied. Admin only.' });
  }
};
