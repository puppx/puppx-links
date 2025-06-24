import { useState } from 'react'
import './index.css'
import ThemeToggle from './components/ThemeToggle'
import LinkCard from './components/LinkCard'
import ProfileSection from './components/ProfileSection'
import ThemeCustomizer from './components/ThemeCustomizer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import Font Awesome icons
import { faGlobe, faEnvelope, faCheck, faCog } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function App() {

  // Default links - you can customize these
  const [links, setLinks] = useState([
    { id: 1, title: 'Portfolio Website', url: 'https://yourportfolio.com', icon: faGlobe },
    { id: 2, title: 'GitHub', url: 'https://github.com/yourusername', icon: faGithub },
    { id: 3, title: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: faLinkedin },
    { id: 4, title: 'Twitter/X', url: 'https://twitter.com/yourhandle', icon: faTwitter },
    { id: 5, title: 'Instagram', url: 'https://instagram.com/yourhandle', icon: faInstagram },
    { id: 6, title: 'Contact Me', url: 'mailto:your.email@example.com', icon: faEnvelope },
  ])

  // Theme settings
  const [theme, setTheme] = useState({
    primaryColor: 'teal',
    backgroundColor: 'bg-gray-100',
    darkModeBackground: 'bg-gray-900',
    textColor: 'text-gray-800',
    darkModeTextColor: 'text-gray-100',
    linkCardStyle: 'rounded-lg',
    animation: 'hover:scale-105',
  })
  
  // Profile info
  const [profile, setProfile] = useState({
    name: 'Your Name',
    bio: 'Frontend Developer & UI Designer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=yourusername',
  })

  const [customizing, setCustomizing] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? theme.darkModeBackground : theme.backgroundColor} relative overflow-hidden`}>
      {/* Modern gradient backgrounds */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className={`absolute -top-40 -left-40 w-80 h-80 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-primary'} opacity-10 blur-3xl`}></div>
        <div className={`absolute top-20 -right-20 w-60 h-60 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-blue-400'} opacity-10 blur-3xl`}></div>
        <div className={`absolute -bottom-40 -right-20 w-72 h-72 rounded-full ${darkMode ? 'bg-teal-500' : 'bg-purple-400'} opacity-10 blur-3xl`}></div>
        <div className={`absolute -bottom-10 left-20 w-52 h-52 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-yellow-400'} opacity-10 blur-3xl`}></div>
      </div>
      
      {/* Glass effect container */}
      <div className="container mx-auto px-4 py-8 relative z-10 w-full sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl flex flex-col items-center">
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className={`text-sm font-medium ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
              PuppX<span className="text-primary font-bold">Links</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button 
              onClick={() => setCustomizing(!customizing)} 
              className="p-2.5 bg-primary rounded-full text-white hover:bg-primary-dark shadow-md transition-all duration-200 flex items-center justify-center"
              aria-label={customizing ? 'Save customization' : 'Customize profile'}
            >
              <FontAwesomeIcon icon={customizing ? faCheck : faCog} className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {customizing ? (
          <ThemeCustomizer 
            theme={theme} 
            setTheme={setTheme} 
            profile={profile}
            setProfile={setProfile}
            links={links}
            setLinks={setLinks}
          />
        ) : (
          <>
            <div className="w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3">
              <div className="lg:flex lg:gap-10 lg:items-start">
                <div className="lg:sticky lg:top-8 lg:w-1/3">
                  <ProfileSection 
                    profile={profile} 
                    textColor={darkMode ? theme.darkModeTextColor : theme.textColor} 
                  />
                </div>
                
                <div className="space-y-3 mt-6 lg:mt-0 lg:w-2/3">
                  {links.map(link => (
                    <LinkCard 
                      key={link.id}
                      link={link}
                      theme={theme}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <footer className="mt-10 text-center">
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800/50' : 'bg-white/70'} backdrop-blur-sm shadow-sm`}>
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  © {new Date().getFullYear()} PuppX Links
                </span>
                <span className="mx-2 text-xs text-gray-300">•</span>
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Made with <span className="text-red-500">Copilot</span>
                </span>
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  )
}

export default App
