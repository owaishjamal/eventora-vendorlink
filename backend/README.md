
# PlanEro Backend

This is the backend server for the PlanEro wedding planning platform, built with Node.js, Express, and PostgreSQL.

## Setup Instructions

1. Install dependencies:
```
npm install
```

2. Create a PostgreSQL database and update the connection details in `.env`

3. Run migrations:
```
npm run migrate
```

4. Start the development server:
```
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL=postgresql://username:password@localhost:5432/planero
JWT_SECRET=your_jwt_secret_key
PORT=3001
NODE_ENV=development
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/vendor-register` - Register a new vendor
- `POST /api/auth/login` - Login user or vendor
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Vendors
- `GET /api/vendors` - Get all vendors (with filtering)
- `GET /api/vendors/:id` - Get vendor details
- `PUT /api/vendors/profile` - Update vendor profile
- `GET /api/vendors/dashboard` - Get vendor dashboard stats

### Venues
- `GET /api/venues` - Get all venues (with filtering)
- `GET /api/venues/:id` - Get venue details

### Services
- `POST /api/services` - Create a service (vendor only)
- `GET /api/services` - Get all services (with filtering)
- `GET /api/services/:id` - Get service details
- `PUT /api/services/:id` - Update a service (owner only)
- `DELETE /api/services/:id` - Delete a service (owner only)

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

### Reviews
- `POST /api/reviews` - Create a review
- `GET /api/reviews/vendor/:vendorId` - Get reviews for a vendor
