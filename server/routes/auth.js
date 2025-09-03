import express from 'express';
import { body } from 'express-validator';
import { register, login, getMe, adminLogin } from '../controllers/authController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

const registerValidation = [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
];

const loginValidation = [
  body('email').isEmail(),
  body('password').notEmpty(),
];

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.get('/me', auth, getMe);

// Added admin login route for dummy credentials
router.post('/admin/login', adminLogin);

export default router;
