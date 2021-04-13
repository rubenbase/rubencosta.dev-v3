import React from 'react'

import styles from './Hero.module.css'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <div className="">
      {/* artwork */}
      <div className={`${styles.artBox} overflow-hidden bg-gray-800`}>
        <div className="flex bg-black items-center pb-10 flex-col-reverse p-2">
          <div className="rounded-full w-3 h-3 mt-2 bg-red-500"></div>
          <div className="rounded-full w-3 h-3 mt-2 bg-yellow-500"></div>
          <div className="rounded-full w-3 h-3 bg-green-500"></div>
        </div>
      </div>

      <div className="mx-4">
        <div className={`${styles.heroContainer} px-4 py-28 mx-auto`}>
          <div className="grid grid-cols-2 auto-cols-fr">
            <div className="grid gap-10">
              <header className="min-w-0">
                <h1 className={`${styles.title} font-semibold tracking-tight`}>
                  I'm <br />
                  building experiences
                </h1>
              </header>
              <div className={`${styles.description} font-medium text-gray-700 text-lg`}>
                I'm <span className="font-bold text-black">Ruben Costa</span>, a{' '}
                <span className="font-bold text-black">
                  product centric Software Developer.
                </span>
                <br />
                <br /> I help people build pixel perfect and performant experiences
                through quality software.
              </div>
              <div className="flex items-center">
                <a
                  href="/cv"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-primary hover:opacity-80 rounded-2xl text-white mr-4 cursor-pointer"
                >
                  View resume
                  <svg
                    className="w-4 h-4 ml-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>{/* TODO: hi */}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
