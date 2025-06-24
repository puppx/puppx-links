import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGlobe, faEnvelope, faBriefcase, faCode, faLink, 
  faGamepad, faFilm, faPen, faBook, faPaintBrush,
  faMusic, faBullseye, faShoppingCart, faComment, faTimes
} from '@fortawesome/free-solid-svg-icons'
import { 
  faGithub, faLinkedin, faTwitter, faInstagram, faYoutube,
  faTwitch, faDiscord, faTiktok, faPinterest, faReddit
} from '@fortawesome/free-brands-svg-icons'

const ThemeCustomizer = ({ theme, setTheme, profile, setProfile, links, setLinks }) => {
  const [newLink, setNewLink] = useState({ title: '', url: '', icon: faLink })
  
  const colorOptions = [
    { name: 'Teal', value: 'teal', bg: 'bg-teal-500' },
    { name: 'Blue', value: 'blue', bg: 'bg-blue-500' },
    { name: 'Purple', value: 'purple', bg: 'bg-purple-500' },
    { name: 'Pink', value: 'pink', bg: 'bg-pink-500' },
    { name: 'Orange', value: 'orange', bg: 'bg-orange-500' },
    { name: 'Red', value: 'red', bg: 'bg-red-500' },
    { name: 'Green', value: 'green', bg: 'bg-green-500' },
  ]
  
  const iconOptions = [
    { icon: faLink, name: 'Link' },
    { icon: faGlobe, name: 'Web' },
    { icon: faGithub, name: 'GitHub' },
    { icon: faLinkedin, name: 'LinkedIn' },
    { icon: faTwitter, name: 'Twitter' },
    { icon: faInstagram, name: 'Instagram' },
    { icon: faYoutube, name: 'YouTube' },
    { icon: faTwitch, name: 'Twitch' },
    { icon: faDiscord, name: 'Discord' },
    { icon: faTiktok, name: 'TikTok' },
    { icon: faBriefcase, name: 'Work' },
    { icon: faCode, name: 'Code' },
    { icon: faEnvelope, name: 'Email' },
    { icon: faGamepad, name: 'Gaming' },
    { icon: faFilm, name: 'Video' },
    { icon: faMusic, name: 'Music' },
  ]
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }
  
  const handleNewLinkChange = (e) => {
    const { name, value } = e.target
    setNewLink({ ...newLink, [name]: value })
  }
  
  const addNewLink = () => {
    if (!newLink.title || !newLink.url) return
      const id = links.length ? Math.max(...links.map(l => l.id)) + 1 : 1
    setLinks([...links, { ...newLink, id }])
    setNewLink({ title: '', url: '', icon: faLink })
  }
  
  const removeLink = (id) => {
    setLinks(links.filter(link => link.id !== id))
  }
  
  const handleIconSelect = (icon) => {
    setNewLink({ ...newLink, icon })
  }
  
  const handleThemeChange = (property, value) => {
    setTheme({ ...theme, [property]: value })
  }
    return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md w-full lg:w-4/5 xl:w-2/3 2xl:w-1/2">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 lg:text-2xl">Customize Your Profile</h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Profile Customization */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2 lg:text-lg">Profile Details</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Name</label>
              <input 
                type="text" 
                name="name" 
                value={profile.name} 
                onChange={handleProfileChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Bio</label>
              <input 
                type="text" 
                name="bio" 
                value={profile.bio} 
                onChange={handleProfileChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Avatar URL</label>
              <input 
                type="text" 
                name="avatar" 
                value={profile.avatar} 
                onChange={handleProfileChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-xs text-gray-500 mt-1">Try DiceBear avatars: https://api.dicebear.com/7.x/avataaars/svg?seed=yourname</p>
            </div>
          </div>
        </div>
        
        {/* Theme Customization */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2 lg:text-lg">Theme Settings</h3>
        
        <div className="mb-3">
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Primary Color</label>
          <div className="flex flex-wrap gap-2">
            {colorOptions.map(color => (
              <button
                key={color.value}
                onClick={() => handleThemeChange('primaryColor', color.value)}
                className={`w-8 h-8 rounded-full ${color.bg} ${theme.primaryColor === color.value ? 'ring-2 ring-offset-2 ring-gray-800' : ''}`}
                title={color.name}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-3">
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Card Style</label>
          <select 
            value={theme.linkCardStyle}
            onChange={(e) => handleThemeChange('linkCardStyle', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="rounded-lg">Rounded</option>
            <option value="rounded-none">Square</option>
            <option value="rounded-full">Pill</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Animation</label>
          <select 
            value={theme.animation}
            onChange={(e) => handleThemeChange('animation', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="hover:scale-105">Scale Up</option>
            <option value="hover:translate-x-2">Slide Right</option>
            <option value="hover:shadow-lg">Shadow</option>
            <option value="">None</option>
          </select>
        </div>      </div>
      </div>
      
      {/* Links Management */}
      <div className="lg:mt-8 border-t lg:pt-6 border-gray-200 dark:border-gray-700">
        <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2 lg:text-lg mt-6 lg:mt-0">Manage Links</h3>
        
        {/* Current Links */}        <div className="space-y-2 mb-4 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0">
          {links.map(link => (
            <div key={link.id} className="flex items-center justify-between border rounded-md p-3 bg-white dark:bg-gray-700 shadow-sm">
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full mr-2">
                  <FontAwesomeIcon icon={link.icon} className="text-primary" />
                </div>
                <span className="font-medium">{link.title}</span>
              </div>
              <button 
                onClick={() => removeLink(link.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 h-8 w-8 rounded-full flex items-center justify-center"
                title="Remove link"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ))}
        </div>
          {/* Add New Link */}
        <div className="border rounded-md p-3 lg:p-5 lg:bg-gray-50 lg:dark:bg-gray-800 lg:shadow-sm">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 lg:text-base">Add New Link</h4>
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="space-y-3 mb-3 lg:mb-0">
              <div>
                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Title</label>
                <input 
                  type="text" 
                  name="title" 
                  value={newLink.title} 
                  onChange={handleNewLinkChange}
                  placeholder="e.g., My YouTube Channel"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">URL</label>
                <input 
                  type="text" 
                  name="url" 
                  value={newLink.url} 
                  onChange={handleNewLinkChange}
                  placeholder="https://example.com"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>            <div className="lg:space-y-3">
              <div>
                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Icon</label>
                <div className="flex flex-wrap gap-2 mb-2 max-h-48 lg:max-h-56 overflow-y-auto p-2 border rounded-md">
                  {iconOptions.map(iconObj => (
                    <button
                      key={iconObj.name}
                      onClick={() => handleIconSelect(iconObj.icon)}
                      title={iconObj.name}
                      className={`w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${newLink.icon === iconObj.icon ? 'bg-primary text-white hover:bg-primary' : ''}`}
                    >
                      <FontAwesomeIcon icon={iconObj.icon} />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="hidden lg:block">
                <button 
                  onClick={addNewLink}
                  disabled={!newLink.title || !newLink.url}
                  className={`w-full py-2 rounded-md text-white font-medium ${!newLink.title || !newLink.url ? 'bg-gray-400' : 'bg-primary hover:bg-primary-dark'}`}
                >
                  Add Link
                </button>
              </div>
            </div>          </div>
          
          <div className="lg:hidden">
            <button 
              onClick={addNewLink}
              disabled={!newLink.title || !newLink.url}
              className={`w-full py-2 rounded-md text-white font-medium ${!newLink.title || !newLink.url ? 'bg-gray-400' : 'bg-primary hover:bg-primary-dark'}`}
            >
              Add Link
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeCustomizer
