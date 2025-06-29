// Link Tree Configuration for Tech Student
// Customize your profile and links here

export const profileConfig = {
  name: "Alex Chen",
  title: "IT Student",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
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
    title: "Portfolio",
    url: "https://yourportfolio.dev",
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
    title: "Email",
    url: "mailto:your.email@university.edu",
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
