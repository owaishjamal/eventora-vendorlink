
-- Drop tables if they exist (for clean restarts)
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS venues;
DROP TABLE IF EXISTS vendors;
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create vendors table (extension of users)
CREATE TABLE vendors (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  business_name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  logo_url VARCHAR(255),
  cover_image_url VARCHAR(255),
  phone VARCHAR(20),
  website VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  avg_rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create venues table
CREATE TABLE venues (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  capacity INTEGER NOT NULL,
  price_range VARCHAR(20) NOT NULL,
  features TEXT[], -- Array of features
  image_urls TEXT[], -- Array of image URLs
  contact_email VARCHAR(255),
  contact_phone VARCHAR(20),
  website VARCHAR(255),
  avg_rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create services table
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  vendor_id INTEGER REFERENCES vendors(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2),
  price_type VARCHAR(50), -- 'fixed', 'hourly', 'starting_at', etc.
  duration VARCHAR(50), -- Service duration if applicable
  image_url VARCHAR(255),
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create reviews table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  vendor_id INTEGER REFERENCES vendors(id) ON DELETE CASCADE,
  venue_id INTEGER REFERENCES venues(id) ON DELETE CASCADE, -- Optional, if reviewing a venue
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CHECK (
    (vendor_id IS NOT NULL AND venue_id IS NULL) OR
    (venue_id IS NOT NULL AND vendor_id IS NULL)
  ) -- Ensure review is for either a vendor or a venue, not both
);

-- Create orders table
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  status VARCHAR(50) DEFAULT 'pending',
  total_amount DECIMAL(10,2) NOT NULL,
  event_date DATE,
  event_address VARCHAR(255),
  event_city VARCHAR(100),
  special_instructions TEXT,
  payment_method VARCHAR(50),
  payment_status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create order items table
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  service_id INTEGER REFERENCES services(id) ON DELETE SET NULL,
  vendor_id INTEGER REFERENCES vendors(id) ON DELETE SET NULL,
  venue_id INTEGER REFERENCES venues(id) ON DELETE SET NULL,
  quantity INTEGER DEFAULT 1,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create triggers to update avg_rating in vendors table on review insert/update/delete
CREATE OR REPLACE FUNCTION update_vendor_rating() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    UPDATE vendors 
    SET avg_rating = (SELECT COALESCE(AVG(rating), 0) FROM reviews WHERE vendor_id = OLD.vendor_id),
        review_count = (SELECT COUNT(*) FROM reviews WHERE vendor_id = OLD.vendor_id)
    WHERE id = OLD.vendor_id;
  ELSE
    UPDATE vendors 
    SET avg_rating = (SELECT COALESCE(AVG(rating), 0) FROM reviews WHERE vendor_id = NEW.vendor_id),
        review_count = (SELECT COUNT(*) FROM reviews WHERE vendor_id = NEW.vendor_id)
    WHERE id = NEW.vendor_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER vendor_rating_update
AFTER INSERT OR UPDATE OR DELETE ON reviews
FOR EACH ROW
WHEN (pg_trigger_depth() = 0)
EXECUTE FUNCTION update_vendor_rating();

-- Create similar trigger for venues
CREATE OR REPLACE FUNCTION update_venue_rating() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    UPDATE venues 
    SET avg_rating = (SELECT COALESCE(AVG(rating), 0) FROM reviews WHERE venue_id = OLD.venue_id),
        review_count = (SELECT COUNT(*) FROM reviews WHERE venue_id = OLD.venue_id)
    WHERE id = OLD.venue_id;
  ELSE
    UPDATE venues 
    SET avg_rating = (SELECT COALESCE(AVG(rating), 0) FROM reviews WHERE venue_id = NEW.venue_id),
        review_count = (SELECT COUNT(*) FROM reviews WHERE venue_id = NEW.venue_id)
    WHERE id = NEW.venue_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER venue_rating_update
AFTER INSERT OR UPDATE OR DELETE ON reviews
FOR EACH ROW
WHEN (pg_trigger_depth() = 0)
EXECUTE FUNCTION update_venue_rating();
