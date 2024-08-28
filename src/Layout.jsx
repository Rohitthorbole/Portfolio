import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import End from './components/End'


function Layout() {
  
  return (
    <>
      <div className='bg-white dark:bg-zinc-900 bg-hero-pattern dark:text-gray-50 font-Jakarta'>
      <Navbar />
      <Outlet />
      <End />
      </div>
      
    </>
  )
}

export default Layout
