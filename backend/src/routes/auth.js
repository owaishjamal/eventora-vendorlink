
const express = require('express');
const { registerUser, registerVendor, loginUser, getCurrentUser } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/vendor-register', registerVendor);
router.post('/login', loginUser);

// Protected routes
router.get('/me', protect, getCurrentUser);

module.exports = router;
