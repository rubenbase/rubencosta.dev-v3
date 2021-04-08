import React from 'react'
import MainNav from '../MainNav'
import Footer from '../footer'
import NavbarPromo from 'components/molecules/navbar-promo'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* <NavbarPromo /> */}
      <MainNav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
