# Puppx Links - IT Student Link Tree

A modern, customizable link tree application built with React, Vite, and Tailwind CSS. Perfect for IT students and tech enthusiasts to showcase their projects and social connections in one place.

## ✨ Features

- **Modern IT Student Theme** - Clean, professional design with blue/purple gradient aesthetics
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Font Awesome Icons** - Beautiful icons for all your links and social media
- **Smooth Animations** - Elegant fade-in animations and hover effects
- **Easy Configuration** - Simple JSON-based configuration for all links and profile data
- **Categorized Links** - Organize links into Tech Projects and Connect sections
- **Customizable Profile** - Avatar, name, and title with gradient text effects

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/puppx-links.git
cd puppx-links
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Profile Configuration

Edit `src/config/linkConfig.js` to customize your profile:

```javascript
export const profileConfig = {
  name: "Your Name",
  title: "Your Title",
  avatar: "your-avatar-url"
};
```

### Adding Links

Add your links in the `linksConfig` array:

```javascript
{
  title: "Your Project",
  url: "https://your-url.com",
  description: "Project description",
  category: "TECH", // or "CONNECT"
  icon: "github", // Font Awesome icon name
  iconType: "brands" // "solid" or "brands"
}
```

### Theme Customization

Modify the theme colors in `themeConfig`:

```javascript
export const themeConfig = {
  background: "from-slate-900 via-blue-900 to-slate-900",
  cardBackground: "bg-slate-800/80",
  cardBorder: "border-blue-500/30",
  // ... more theme options
};
```

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4.1** - Utility-first CSS framework
- **Font Awesome** - Icon library for beautiful icons
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
puppx-links/
├── src/
│   ├── config/
│   │   └── linkConfig.js    # Profile and links configuration
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles and animations
│   └── main.jsx             # Application entry point
├── public/
└── package.json
```

## 🎯 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Inspired by modern link tree applications

---

Made with ❤️ by IT Students for IT Students
