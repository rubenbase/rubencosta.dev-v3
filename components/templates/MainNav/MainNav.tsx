import React, { createRef, useState, useEffect } from 'react'
import { sendMail } from 'utils/sendEmail'

import styles from './MainNav.module.css'
import Link from 'next/link'

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
        <Link href="/">
          <a className={`${styles.logo} font-bold text-2xl cursor-pointer`}>RC</a>
        </Link>
        <nav>
          <ul className="flex list-none space-x-9 font-semibold">
            <li className={styles.link}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={styles.link}>
              <button className="font-semibold" onClick={sendMail}>
                Contact
              </button>
            </li>
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
