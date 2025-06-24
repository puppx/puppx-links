# PuppX-Links Server

Backend server for PuppX-Links, a LinkTree-like application built with Node.js, Express, and MySQL.

## Prerequisites

- Node.js (v14 or above)
- MySQL (v5.7 or above)

## Setup

1. Create a MySQL database named `puppx_links_db` (or update the DB_NAME in your `.env` file)
2. Install dependencies:

```bash
npm install
```

3. Configure the `.env` file with your MySQL credentials:

```
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=puppx_links_db
DB_PORT=3306
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

## Running the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user profile

### Users
- GET `/api/users` - Get all users (Admin only)
- GET `/api/users/:id` - Get user by ID (Admin only)
- PUT `/api/users/:id` - Update user (Admin only)
- DELETE `/api/users/:id` - Delete user (Admin only)
- PUT `/api/users/password` - Update password (Authenticated user)

### Profiles
- GET `/api/profiles/me` - Get current user's profile
- GET `/api/profiles/:username` - Get profile by username
- PUT `/api/profiles` - Update user's profile
- PUT `/api/profiles/theme` - Update profile theme

### Links
- GET `/api/links` - Get all links for logged-in user
- GET `/api/links/public/:username` - Get public links by username
- POST `/api/links` - Create a new link
- PUT `/api/links/:id` - Update a link
- DELETE `/api/links/:id` - Delete a link
- PUT `/api/links/:id/click` - Track a click on a link
