import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ProfileSection = ({ profile, textColor }) => {
  return (
    <div className="text-center mb-8 relative lg:mb-0">
      <div className="relative inline-block">
        <img 
          src={profile.avatar} 
          alt={profile.name}
          className="w-28 h-28 mx-auto rounded-full border-2 border-primary mb-4 shadow-xl object-cover lg:w-36 lg:h-36"
        />
        <div className="absolute bottom-4 right-0 bg-primary text-white p-1 rounded-full border-2 border-white lg:p-1.5 lg:bottom-6 lg:right-2">
          <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 lg:h-5 lg:w-5" />
        </div>
      </div>
      <h1 className={`text-2xl font-bold ${textColor} mb-1 lg:text-3xl lg:mt-2`}>{profile.name}</h1>
      <p className={`${textColor} opacity-80 mb-4 font-light lg:text-lg lg:max-w-xs lg:mx-auto`}>{profile.bio}</p>
      
      {/* Add social proof or stats */}
      <div className="flex justify-center gap-4 text-sm lg:mt-6 lg:text-base">
        <div className={`${textColor} opacity-70`}>
          <span className="font-semibold">10K+</span> Followers
        </div>
        <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 lg:h-5"></div>
        <div className={`${textColor} opacity-70`}>
          <span className="font-semibold">150+</span> Projects
        </div>
      </div>
      
      {/* Extra info for desktop */}
      <div className="hidden lg:block mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 w-3/4 mx-auto">
        <div className={`${textColor} opacity-80 text-sm mb-2`}>
          <span className="font-medium">Location:</span> San Francisco, CA
        </div>
        <div className={`${textColor} opacity-80 text-sm`}>
          <span className="font-medium">Joined:</span> June 2023
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
