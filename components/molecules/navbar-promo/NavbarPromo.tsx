import React from 'react'

import styles from './NavbarPromo.module.css'

const NavbarPromo: React.FC = () => {
  return (
    <div
      className={`${styles.promoBackground} text-white overflow-hidden my-0 mr-auto flex justify-center relative bg-gradient-to-r from-blue-600 to-blue-800`}
    >
      <div className="flex flex-col justify-start items-start py-4 px-5 sm:px-10 xs:flex-row">
        <div className="mr-9 flex-shrink-0">
          <span className="border uppercase tracking-wider text-xs rounded-md py-1 px-2">
            New!
          </span>
        </div>
        <div className="xs:mr-5 mt-2 xs:mt-0">
          <span className="tracking-wide text-sm">
            Now you can book your 1:1 sessions through the platform 🎉
          </span>
        </div>
      </div>
      <span className="flex pr-4 xs:items-center py-4">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </span>
    </div>
  )
}

export default NavbarPromo
