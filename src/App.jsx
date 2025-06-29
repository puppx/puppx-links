import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode,
  faLink,
  faLaptopCode,
  faEnvelope,
  faExternalLinkAlt,
  faTerminal,
  faMicrochip
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faInstagram,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import { profileConfig, linksConfig, linkCategories, themeConfig } from './config/linkConfig';

function App() {
  // Debug: Check if profileConfig is being imported correctly
  console.log('Profile Config:', profileConfig);
  console.log('Theme Config:', themeConfig);
  
  const getIcon = (iconName, iconType = 'solid') => {
    const iconMap = {
      solid: {
        'code': faCode,
        'link': faLink,
        'laptop-code': faLaptopCode,
        'envelope': faEnvelope,
        'external-link-alt': faExternalLinkAlt,
        'terminal': faTerminal,
        'microchip': faMicrochip
      },
      brands: {
        'github': faGithub,
        'instagram': faInstagram,
        'discord': faDiscord
      }
    };
    
    return iconMap[iconType]?.[iconName] || faCode;
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Group links by category
  const groupedLinks = linksConfig.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = [];
    }
    acc[link.category].push(link);
    return acc;
  }, {});

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeConfig.background} py-8 px-4`}>
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className={`${themeConfig.cardBackground} backdrop-blur-md border ${themeConfig.cardBorder} rounded-3xl p-8 shadow-2xl text-center ${themeConfig.textPrimary} mb-8 tech-glow`}>
          <div className="relative mb-6">
            <img
              src={profileConfig.avatar}
              alt={profileConfig.name}
              className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500/50 shadow-lg object-cover ring-4 ring-blue-500/20"
            />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-800 flex items-center justify-center shadow-lg animate-pulse">
              <FontAwesomeIcon icon={faMicrochip} className="text-white text-sm" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {profileConfig.name}
          </h1>
          <p className="text-blue-400 font-semibold text-lg tracking-wide">
            {profileConfig.title}
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-6">
          {Object.entries(groupedLinks).map(([categoryKey, categoryLinks], categoryIndex) => {
            const category = linkCategories[categoryKey];
            return (
              <div key={categoryKey} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                {/* Category Header */}
                <div className={`${themeConfig.cardBackground} backdrop-blur-md border ${themeConfig.cardBorder} rounded-2xl p-4 mb-4 shadow-lg`}>
                  <div className="flex items-center justify-center">
                    <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-3 shadow-lg`}>
                      <FontAwesomeIcon icon={getIcon(category.icon)} className="text-white text-lg" />
                    </div>
                    <h2 className={`text-lg font-bold ${themeConfig.textPrimary}`}>
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Category Links */}
                <div className="space-y-3">
                  {categoryLinks.map((link, linkIndex) => (
                    <div
                      key={linkIndex}
                      onClick={() => handleLinkClick(link.url)}
                      className={`${themeConfig.cardBackground} backdrop-blur-md border ${themeConfig.cardBorder} p-4 rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95 animate-fade-in-up group tech-card`}
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (linkIndex * 0.1)}s` }}
                    >
                      <div className={`flex items-center ${themeConfig.textPrimary}`}>
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300`}>
                          <FontAwesomeIcon 
                            icon={getIcon(link.icon, link.iconType)} 
                            className="text-white text-lg group-hover:scale-110 transition-transform duration-300" 
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors duration-300">
                            {link.title}
                          </h3>
                          <p className={`${themeConfig.textSecondary} text-sm group-hover:text-slate-200 transition-colors duration-300`}>
                            {link.description}
                          </p>
                        </div>
                        <div className="ml-4">
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className={`${themeConfig.textMuted} group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className={`text-center mt-8 ${themeConfig.textMuted} text-sm animate-fade-in-up`} style={{ animationDelay: '1s' }}>
          <div className="flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faCode} className="mr-2 text-blue-400" />
            <span>Built with React + Tailwind CSS</span>
          </div>
          <p className="text-blue-400 font-mono">// IT Student Portfolio</p>
        </div>
      </div>
    </div>
  );
}

export default App;