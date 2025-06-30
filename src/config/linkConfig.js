// Link Tree Configuration for Tech Student
// Customize your profile and links here

export const profileConfig = {
  name: "Pheeraphat",
  title: "IT Student",
  avatar: "https://cdn.discordapp.com/attachments/1161136087100567563/1342626500955865199/5ABC6765-D429-4D47-B1E3-51EE1785DDF3.jpg?ex=6862691e&is=6861179e&hm=78960911b3f6a4a58c7ccb10ef0d18356e356ca38223bc16f13920705e8ccf75&"
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
    url: "https://github.com/puppx",
    description: "My coding projects & repositories",
    category: "TECH",
    icon: "github",
    iconType: "brands"
  },
  {
    title: "Portfolio Website",
    url: "https://portfolio.puppx.top/",
    description: "Web development projects",
    category: "TECH",
    icon: "laptop-code",
    iconType: "solid"
  },

  // Connect
  {
    title: "Instagram",
    url: "https://instagram.com/_.pup.06",
    description: "Follow my journey",
    category: "CONNECT",
    icon: "instagram",
    iconType: "brands"
  },
  {
    title: "Discord",
    url: "https://discord.gg/VwjEjaABG4",
    description: "Join my community",
    category: "CONNECT",
    icon: "discord",
    iconType: "brands"
  },
  {
    title: "Email",
    url: "mailto:pheeraphat.bunliang@outlook.com",
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
