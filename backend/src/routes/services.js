
const express = require('express');
const {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService
} = require('../controllers/serviceController');
const { protect, vendorOnly } = require('../middleware/auth');
const router = express.Router();

// Public routes
router.get('/', getServices);
router.get('/:id', getServiceById);

// Protected routes
router.post('/', protect, vendorOnly, createService);
router.put('/:id', protect, vendorOnly, updateService);
router.delete('/:id', protect, vendorOnly, deleteService);

module.exports = router;
