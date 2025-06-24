import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const LinkCard = ({ link, theme, darkMode }) => {
  return (
    <a 
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-card flex items-center transition-all duration-300 ${theme.animation} ${theme.linkCardStyle} ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700/50' : 'bg-white/90 backdrop-blur-sm border-gray-200/50'} hover:border-primary/50 group lg:p-5`}
    >
      <div className={`flex items-center justify-center h-10 w-10 rounded-full mr-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} lg:h-12 lg:w-12 lg:mr-5`}>
        <FontAwesomeIcon icon={link.icon} className={`text-lg ${darkMode ? 'text-primary-light' : 'text-primary'} lg:text-xl`} />
      </div>
      <div className={`flex-1 ${darkMode ? theme.darkModeTextColor : theme.textColor}`}>
        <h3 className="font-medium lg:text-lg">{link.title}</h3>
        <p className="hidden lg:block text-sm opacity-70 mt-1">{link.url.replace(/(^\w+:|^)\/\//, '').split('/')[0]}</p>
      </div>
      <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} opacity-70 group-hover:opacity-100 transition-opacity`}>
        <div className="hidden lg:flex lg:items-center">
          <span className="mr-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Visit</span>
          <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
        </div>
        <div className="lg:hidden">
          <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
        </div>
      </div>
    </a>
  )
}

export default LinkCard
