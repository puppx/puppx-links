# PuppX Links - Your Custom Link Tree

PuppX Links is a customizable LinkTree-like website that allows you to create a beautiful landing page with all your important links in one place. Built with React, Vite, and Tailwind CSS v3 for the frontend, and Node.js, Express, and MySQL for the backend.

![PuppX Links Demo](https://via.placeholder.com/800x400?text=PuppX+Links)

## Features

- 🎨 **Fully Customizable**: Change colors, styles, animations, and more
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes
- 📱 **Responsive Design**: Looks great on all devices
- ⚡ **Fast & Lightweight**: Built with Vite for optimal performance
- 🧩 **Easy to Use**: Simple interface to add/edit/remove links
- 🖼️ **Avatar Support**: Showcase your profile picture
- 🔐 **User Authentication**: Secure login and registration
- 💾 **Database Storage**: All user data stored securely in MySQL
- 🔄 **API Integration**: Full-featured REST API

## Project Structure

The project is divided into two main parts:
- `frontend/` - React frontend application
- `server/` - Node.js/Express backend API

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- MySQL (v5.7 or above)

### Frontend Setup

```bash
# Navigate to the project directory
cd puppx-links

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Backend Setup

```bash
# Navigate to the server directory
cd puppx-links/server

# Install dependencies
npm install

# Configure your MySQL database in .env file
# See server/README.md for details

# Start the development server
npm run dev
```

### Customization

1. Open the website in your browser
2. Register a new account
3. Log in with your credentials
4. Use the theme customizer to adjust your profile, theme settings, and links

## API Documentation

The backend API provides endpoints for:
- User authentication (login/register)
- Profile management
- Link management
- Theme customization

For detailed API documentation, see `server/README.md`.

## Deployment

### Frontend Build

```bash
cd puppx-links
npm run build
```

This will generate a `dist` folder that you can deploy to any static hosting service like GitHub Pages, Netlify, or Vercel.

### Backend Deployment

The backend can be deployed to any Node.js hosting service like Heroku, DigitalOcean, or AWS.
