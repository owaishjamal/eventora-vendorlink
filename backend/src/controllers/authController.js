
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/db');
const { asyncHandler } = require('../middleware/errorHandler');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Check if user already exists
  const userExists = await db.query('SELECT * FROM users WHERE email = $1', [email]);

  if (userExists.rows.length > 0) {
    const error = new Error('User already exists');
    error.statusCode = 400;
    throw error;
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Insert user
  const result = await db.query(
    'INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, first_name, last_name, role',
    [firstName, lastName, email, hashedPassword, 'user']
  );

  const user = result.rows[0];

  res.status(201).json({
    status: 'success',
    data: {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id),
    },
  });
});

// @desc    Register a new vendor
// @route   POST /api/auth/vendor-register
// @access  Public
exports.registerVendor = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, businessName, category, city } = req.body;

  // Start a transaction
  const client = await db.getClient();
  
  try {
    await client.query('BEGIN');
    
    // Check if user already exists
    const userExists = await client.query('SELECT * FROM users WHERE email = $1', [email]);

    if (userExists.rows.length > 0) {
      const error = new Error('User already exists');
      error.statusCode = 400;
      throw error;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user
    const userResult = await client.query(
      'INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, first_name, last_name, role',
      [firstName, lastName, email, hashedPassword, 'vendor']
    );

    const user = userResult.rows[0];

    // Insert vendor
    const vendorResult = await client.query(
      'INSERT INTO vendors (user_id, business_name, category, city) VALUES ($1, $2, $3, $4) RETURNING id',
      [user.id, businessName, category, city]
    );

    const vendor = vendorResult.rows[0];

    await client.query('COMMIT');

    res.status(201).json({
      status: 'success',
      data: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        role: user.role,
        vendorId: vendor.id,
        businessName,
        category,
        city,
        token: generateToken(user.id),
      },
    });
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Get user
  const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  
  if (result.rows.length === 0) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const user = result.rows[0];

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  
  if (!isMatch) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  // Get vendor details if user is a vendor
  let vendorData = null;
  if (user.role === 'vendor') {
    const vendorResult = await db.query(
      'SELECT * FROM vendors WHERE user_id = $1', 
      [user.id]
    );
    
    if (vendorResult.rows.length > 0) {
      vendorData = vendorResult.rows[0];
    }
  }

  res.status(200).json({
    status: 'success',
    data: {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      role: user.role,
      ...(vendorData && {
        vendorId: vendorData.id,
        businessName: vendorData.business_name,
        category: vendorData.category,
        city: vendorData.city
      }),
      token: generateToken(user.id),
    },
  });
});

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
exports.getCurrentUser = asyncHandler(async (req, res) => {
  // User is already attached to req from auth middleware
  const { id, first_name, last_name, email, role } = req.user;

  // Get vendor details if user is a vendor
  let vendorData = null;
  if (role === 'vendor') {
    const vendorResult = await db.query(
      'SELECT * FROM vendors WHERE user_id = $1', 
      [id]
    );
    
    if (vendorResult.rows.length > 0) {
      vendorData = vendorResult.rows[0];
    }
  }

  res.status(200).json({
    status: 'success',
    data: {
      id,
      firstName: first_name,
      lastName: last_name,
      email,
      role,
      ...(vendorData && {
        vendorId: vendorData.id,
        businessName: vendorData.business_name,
        category: vendorData.category,
        city: vendorData.city,
        description: vendorData.description,
        logoUrl: vendorData.logo_url,
        coverImageUrl: vendorData.cover_image_url,
        phone: vendorData.phone,
        website: vendorData.website,
        address: vendorData.address,
        isVerified: vendorData.is_verified,
        avgRating: vendorData.avg_rating,
        reviewCount: vendorData.review_count
      }),
    },
  });
});
