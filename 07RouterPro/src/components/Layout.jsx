import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
{/* where we use outlet that only change other are fix on there position */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
