
const db = require('../db/db');
const { asyncHandler } = require('../middleware/errorHandler');

// @desc    Create a new service
// @route   POST /api/services
// @access  Private (Vendor only)
exports.createService = asyncHandler(async (req, res) => {
  const { id: userId, role } = req.user;
  
  if (role !== 'vendor') {
    const error = new Error('Not authorized');
    error.statusCode = 403;
    throw error;
  }
  
  // Get vendor ID
  const vendorResult = await db.query('SELECT id FROM vendors WHERE user_id = $1', [userId]);
  
  if (vendorResult.rows.length === 0) {
    const error = new Error('Vendor profile not found');
    error.statusCode = 404;
    throw error;
  }
  
  const vendorId = vendorResult.rows[0].id;
  
  const {
    name,
    description,
    price,
    priceType,
    duration,
    imageUrl,
    isFeatured = false
  } = req.body;
  
  // Create service
  const result = await db.query(
    `INSERT INTO services 
      (vendor_id, name, description, price, price_type, duration, image_url, is_featured)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [vendorId, name, description, price, priceType, duration, imageUrl, isFeatured]
  );
  
  res.status(201).json({
    status: 'success',
    data: {
      service: result.rows[0]
    }
  });
});

// @desc    Get all services with filtering
// @route   GET /api/services
// @access  Public
exports.getServices = asyncHandler(async (req, res) => {
  const { 
    vendorId,
    minPrice,
    maxPrice,
    featured,
    limit = 10,
    page = 1
  } = req.query;
  
  const offset = (page - 1) * limit;
  
  // Build query with optional filters
  let query = `
    SELECT s.*, v.business_name, v.city, v.avg_rating
    FROM services s
    JOIN vendors v ON s.vendor_id = v.id
    WHERE 1=1
  `;
  
  const params = [];
  let paramIndex = 1;
  
  if (vendorId) {
    query += ` AND s.vendor_id = $${paramIndex++}`;
    params.push(vendorId);
  }
  
  if (minPrice) {
    query += ` AND s.price >= $${paramIndex++}`;
    params.push(minPrice);
  }
  
  if (maxPrice) {
    query += ` AND s.price <= $${paramIndex++}`;
    params.push(maxPrice);
  }
  
  if (featured === 'true') {
    query += ` AND s.is_featured = true`;
  }
  
  // Count total services matching criteria
  const countQuery = `SELECT COUNT(*) FROM (${query}) AS count`;
  const countResult = await db.query(countQuery, params);
  const total = parseInt(countResult.rows[0].count);
  
  // Add pagination to query
  query += ` ORDER BY s.is_featured DESC, v.avg_rating DESC LIMIT $${paramIndex++} OFFSET $${paramIndex++}`;
  params.push(limit, offset);
  
  // Execute query
  const result = await db.query(query, params);
  
  res.status(200).json({
    status: 'success',
    data: {
      services: result.rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    }
  });
});

// @desc    Get service by ID
// @route   GET /api/services/:id
// @access  Public
exports.getServiceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  
  const query = `
    SELECT s.*, v.business_name, v.city, v.avg_rating, v.category, v.id AS vendor_id
    FROM services s
    JOIN vendors v ON s.vendor_id = v.id
    WHERE s.id = $1
  `;
  
  const result = await db.query(query, [id]);
  
  if (result.rows.length === 0) {
    const error = new Error('Service not found');
    error.statusCode = 404;
    throw error;
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      service: result.rows[0]
    }
  });
});

// @desc    Update service
// @route   PUT /api/services/:id
// @access  Private (Vendor only)
exports.updateService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { id: userId, role } = req.user;
  
  if (role !== 'vendor') {
    const error = new Error('Not authorized');
    error.statusCode = 403;
    throw error;
  }
  
  // Get vendor ID
  const vendorResult = await db.query('SELECT id FROM vendors WHERE user_id = $1', [userId]);
  
  if (vendorResult.rows.length === 0) {
    const error = new Error('Vendor profile not found');
    error.statusCode = 404;
    throw error;
  }
  
  const vendorId = vendorResult.rows[0].id;
  
  // Check if service exists and belongs to the vendor
  const serviceResult = await db.query(
    'SELECT * FROM services WHERE id = $1',
    [id]
  );
  
  if (serviceResult.rows.length === 0) {
    const error = new Error('Service not found');
    error.statusCode = 404;
    throw error;
  }
  
  const service = serviceResult.rows[0];
  
  if (service.vendor_id !== vendorId) {
    const error = new Error('Not authorized to update this service');
    error.statusCode = 403;
    throw error;
  }
  
  const {
    name,
    description,
    price,
    priceType,
    duration,
    imageUrl,
    isFeatured
  } = req.body;
  
  // Update service
  const updateResult = await db.query(
    `UPDATE services
     SET name = $1, description = $2, price = $3, price_type = $4, 
         duration = $5, image_url = $6, is_featured = $7, updated_at = CURRENT_TIMESTAMP
     WHERE id = $8
     RETURNING *`,
    [name, description, price, priceType, duration, imageUrl, isFeatured, id]
  );
  
  res.status(200).json({
    status: 'success',
    data: {
      service: updateResult.rows[0]
    }
  });
});

// @desc    Delete service
// @route   DELETE /api/services/:id
// @access  Private (Vendor only)
exports.deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { id: userId, role } = req.user;
  
  if (role !== 'vendor') {
    const error = new Error('Not authorized');
    error.statusCode = 403;
    throw error;
  }
  
  // Get vendor ID
  const vendorResult = await db.query('SELECT id FROM vendors WHERE user_id = $1', [userId]);
  
  if (vendorResult.rows.length === 0) {
    const error = new Error('Vendor profile not found');
    error.statusCode = 404;
    throw error;
  }
  
  const vendorId = vendorResult.rows[0].id;
  
  // Check if service exists and belongs to the vendor
  const serviceResult = await db.query(
    'SELECT * FROM services WHERE id = $1',
    [id]
  );
  
  if (serviceResult.rows.length === 0) {
    const error = new Error('Service not found');
    error.statusCode = 404;
    throw error;
  }
  
  const service = serviceResult.rows[0];
  
  if (service.vendor_id !== vendorId) {
    const error = new Error('Not authorized to delete this service');
    error.statusCode = 403;
    throw error;
  }
  
  // Delete service
  await db.query('DELETE FROM services WHERE id = $1', [id]);
  
  res.status(200).json({
    status: 'success',
    message: 'Service deleted successfully'
  });
});
