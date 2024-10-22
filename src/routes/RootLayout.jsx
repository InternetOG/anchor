import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import HeaderHero from '../component/HeaderHero'

const RootLayout = () => {

  return (
    <>
      <HeaderHero />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout