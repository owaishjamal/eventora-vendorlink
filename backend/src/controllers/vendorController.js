
const db = require('../db/db');
const { asyncHandler } = require('../middleware/errorHandler');

// @desc    Get all vendors with filtering
// @route   GET /api/vendors
// @access  Public
exports.getVendors = asyncHandler(async (req, res) => {
  const { 
    category,
    city,
    minRating,
    search,
    limit = 10,
    page = 1
  } = req.query;
  
  const offset = (page - 1) * limit;
  
  // Build query with optional filters
  let query = `
    SELECT v.*, u.first_name, u.last_name
    FROM vendors v
    JOIN users u ON v.user_id = u.id
    WHERE 1=1
  `;
  
  const params = [];
  let paramIndex = 1;
  
  if (category) {
    query += ` AND v.category = $${paramIndex++}`;
    params.push(category);
  }
  
  if (city) {
    query += ` AND v.city = $${paramIndex++}`;
    params.push(city);
  }
  
  if (minRating) {
    query += ` AND v.avg_rating >= $${paramIndex++}`;
    params.push(minRating);
  }
  
  if (search) {
    query += ` AND (v.business_name ILIKE $${paramIndex++} OR v.description ILIKE $${paramIndex++})`;
    params.push(`%${search}%`, `%${search}%`);
  }
  
  // Count total vendors matching criteria
  const countQuery = `SELECT COUNT(*) FROM (${query}) AS count`;
  const countResult = await db.query(countQuery, params);
  const total = parseInt(countResult.rows[0].count);
  
  // Add pagination to query
  query += ` ORDER BY v.is_verified DESC, v.avg_rating DESC LIMIT $${paramIndex++} OFFSET $${paramIndex++}`;
  params.push(limit, offset);
  
  // Execute query
  const result = await db.query(query, params);
  
  res.status(200).json({
    status: 'success',
    data: {
      vendors: result.rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    }
  });
});

// @desc    Get vendor by ID
// @route   GET /api/vendors/:id
// @access  Public
exports.getVendorById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  
  // Get vendor
  const vendorQuery = `
    SELECT v.*, u.first_name, u.last_name, u.email
    FROM vendors v
    JOIN users u ON v.user_id = u.id
    WHERE v.id = $1
  `;
  
  const vendorResult = await db.query(vendorQuery, [id]);
  
  if (vendorResult.rows.length === 0) {
    const error = new Error('Vendor not found');
    error.statusCode = 404;
    throw error;
  }
  
  const vendor = vendorResult.rows[0];
  
  // Get vendor services
  const servicesQuery = `
    SELECT * FROM services WHERE vendor_id = $1
  `;
  
  const servicesResult = await db.query(servicesQuery, [id]);
  
  // Get vendor reviews
  const reviewsQuery = `
    SELECT r.*, u.first_name, u.last_name
    FROM reviews r
    JOIN users u ON r.user_id = u.id
    WHERE r.vendor_id = $1
    ORDER BY r.created_at DESC
    LIMIT 10
  `;
  
  const reviewsResult = await db.query(reviewsQuery, [id]);
  
  res.status(200).json({
    status: 'success',
    data: {
      vendor,
      services: servicesResult.rows,
      reviews: reviewsResult.rows
    }
  });
});

// @desc    Update vendor profile
// @route   PUT /api/vendors/profile
// @access  Private (Vendor only)
exports.updateVendorProfile = asyncHandler(async (req, res) => {
  const { id: userId, role } = req.user;
  
  if (role !== 'vendor') {
    const error = new Error('Not authorized');
    error.statusCode = 403;
    throw error;
  }
  
  const {
    businessName,
    category,
    description,
    phone,
    website,
    address,
    city
  } = req.body;
  
  // Get vendor ID
  const vendorResult = await db.query('SELECT id FROM vendors WHERE user_id = $1', [userId]);
  
  if (vendorResult.rows.length === 0) {
    const error = new Error('Vendor profile not found');
    error.statusCode = 404;
    throw error;
  }
  
  const vendorId = vendorResult.rows[0].id;
  
  // Update vendor profile
  const updateResult = await db.query(
    `UPDATE vendors
     SET business_name = $1, category = $2, description = $3, phone = $4, 
         website = $5, address = $6, city = $7, updated_at = CURRENT_TIMESTAMP
     WHERE id = $8
     RETURNING *`,
    [businessName, category, description, phone, website, address, city, vendorId]
  );
  
  res.status(200).json({
    status: 'success',
    data: {
      vendor: updateResult.rows[0]
    }
  });
});

// @desc    Get vendor dashboard stats
// @route   GET /api/vendors/dashboard
// @access  Private (Vendor only)
exports.getVendorDashboard = asyncHandler(async (req, res) => {
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
  
  // Get order count
  const orderCountQuery = `
    SELECT COUNT(*) FROM order_items WHERE vendor_id = $1
  `;
  
  const orderCountResult = await db.query(orderCountQuery, [vendorId]);
  const orderCount = parseInt(orderCountResult.rows[0].count);
  
  // Get recent orders
  const recentOrdersQuery = `
    SELECT oi.*, o.status, o.event_date, o.total_amount, s.name AS service_name
    FROM order_items oi
    JOIN orders o ON oi.order_id = o.id
    JOIN services s ON oi.service_id = s.id
    WHERE oi.vendor_id = $1
    ORDER BY o.created_at DESC
    LIMIT 5
  `;
  
  const recentOrdersResult = await db.query(recentOrdersQuery, [vendorId]);
  
  // Get review stats
  const reviewStatsQuery = `
    SELECT AVG(rating) AS avg_rating, COUNT(*) AS total_reviews
    FROM reviews
    WHERE vendor_id = $1
  `;
  
  const reviewStatsResult = await db.query(reviewStatsQuery, [vendorId]);
  
  // Get service count
  const serviceCountQuery = `
    SELECT COUNT(*) FROM services WHERE vendor_id = $1
  `;
  
  const serviceCountResult = await db.query(serviceCountQuery, [vendorId]);
  const serviceCount = parseInt(serviceCountResult.rows[0].count);
  
  res.status(200).json({
    status: 'success',
    data: {
      orderCount,
      recentOrders: recentOrdersResult.rows,
      reviewStats: reviewStatsResult.rows[0],
      serviceCount
    }
  });
});
