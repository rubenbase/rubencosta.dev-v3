import React, { createRef, useState, useEffect } from 'react'

import styles from './MainNav.module.css'

type MainNavProps = {
  sticky?: boolean
  className?: string
}

const MainNav: React.FC<MainNavProps> = ({ sticky = false, className, ...rest }) => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = createRef()

  // mount
  useEffect(() => {
    const cachedRef: any = ref.current,
      observer = new IntersectionObserver(([e]) => setIsSticky(e.intersectionRatio < 1), {
        threshold: 1,
      })

    observer.observe(cachedRef)

    // unmount
    return function () {
      observer.unobserve(cachedRef)
    }
  }, [])

  return (
    <header
      className={
        styles.mainNav + (isSticky ? ` ${styles.sticky} ` : ' ') + 'py-3 px-5 z-50'
      }
      ref={ref}
      {...rest}
    >
      <div className={`${styles.mainNavContainer} flex items-center justify-between`}>
        <h1 className={`${styles.logo} font-bold text-2xl cursor-pointer`}>RC</h1>
        <nav>
          <ul className="flex list-none space-x-9 font-semibold">
            <li className={styles.link}>Blog</li>
            <li className={styles.link}>Contact Me</li>
          </ul>
        </nav>
        {/* <nav className="flex list-none">
          <a className={`${styles.signIn} py-1 px-5 rounded-2xl font-semibold`}>Sign in</a>
        </nav> */}
      </div>
    </header>
  )
}

export default MainNav