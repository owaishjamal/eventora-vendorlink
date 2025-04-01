
const jwt = require('jsonwebtoken');
const { asyncHandler } = require('./errorHandler');
const db = require('../db/db');

/**
 * Middleware to protect routes - requires valid JWT token
 */
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  
  if (!token) {
    const error = new Error('Not authorized, no token');
    error.statusCode = 401;
    throw error;
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user still exists
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await db.query(query, [decoded.id]);
    
    if (result.rows.length === 0) {
      const error = new Error('User not found');
      error.statusCode = 401;
      throw error;
    }
    
    // Attach user to request object
    req.user = result.rows[0];
    next();
  } catch (error) {
    error.statusCode = 401;
    error.message = 'Not authorized, token failed';
    next(error);
  }
});

/**
 * Middleware to restrict access to vendor-only routes
 */
exports.vendorOnly = asyncHandler(async (req, res, next) => {
  if (!req.user || req.user.role !== 'vendor') {
    const error = new Error('Not authorized as a vendor');
    error.statusCode = 403;
    throw error;
  }
  next();
});
