import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (    <button
      onClick={() => setDarkMode(!darkMode)}
      className="btn-icon"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="h-4 w-4" />
    </button>
  )
}

export default ThemeToggle
