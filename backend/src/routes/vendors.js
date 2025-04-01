
const express = require('express');
const {
  getVendors,
  getVendorById,
  updateVendorProfile,
  getVendorDashboard
} = require('../controllers/vendorController');
const { protect, vendorOnly } = require('../middleware/auth');
const router = express.Router();

// Public routes
router.get('/', getVendors);
router.get('/:id', getVendorById);

// Protected routes
router.put('/profile', protect, vendorOnly, updateVendorProfile);
router.get('/dashboard', protect, vendorOnly, getVendorDashboard);

module.exports = router;
