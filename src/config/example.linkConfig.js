// Link Tree Configuration for Tech Student
// Copy this file to linkConfig.js and customize with your own information

export const profileConfig = {
  name: "Your Name",
  title: "IT Student", // or "Computer Science Student", "Software Developer", etc.
  avatar: "https://ui-avatars.com/api/?name=Your+Name&size=150&background=3b82f6&color=ffffff&rounded=true&bold=true"
};

export const linkCategories = {
  TECH: {
    title: "Tech Projects",
    color: "from-blue-500 to-purple-600",
    icon: "code"
  },
  CONNECT: {
    title: "Connect",
    color: "from-cyan-400 to-blue-600",
    icon: "link"
  }
};

export const linksConfig = [
  // Tech Projects
  {
    title: "GitHub Profile",
    url: "https://github.com/yourusername",
    description: "My coding projects & repositories",
    category: "TECH",
    icon: "github",
    iconType: "brands"
  },
  {
    title: "Portfolio Website",
    url: "https://yourportfolio.com",
    description: "Web development projects",
    category: "TECH",
    icon: "laptop-code",
    iconType: "solid"
  },
  {
    title: "CodePen",
    url: "https://codepen.io/yourusername",
    description: "Frontend experiments & demos",
    category: "TECH",
    icon: "codepen",
    iconType: "brands"
  },

  // Connect
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    description: "Professional network",
    category: "CONNECT",
    icon: "linkedin",
    iconType: "brands"
  },
  {
    title: "Instagram",
    url: "https://instagram.com/yourusername",
    description: "Follow my journey",
    category: "CONNECT",
    icon: "instagram",
    iconType: "brands"
  },
  {
    title: "Discord",
    url: "https://discord.gg/yourinvite",
    description: "Join my community",
    category: "CONNECT",
    icon: "discord",
    iconType: "brands"
  },
  {
    title: "Email",
    url: "mailto:your.email@example.com",
    description: "Get in touch",
    category: "CONNECT",
    icon: "envelope",
    iconType: "solid"
  }
];

// Theme configuration for IT Student
export const themeConfig = {
  background: "from-slate-900 via-blue-900 to-slate-900",
  cardBackground: "bg-slate-800/80",
  cardBorder: "border-blue-500/30",
  textPrimary: "text-white",
  textSecondary: "text-slate-300",
  textMuted: "text-slate-400",
  accent: "from-blue-500 to-purple-500",
  glowEffect: "shadow-blue-500/25"
};
