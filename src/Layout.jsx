import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import End from './components/End'


function Layout() {
  
  return (
    <>
      <div className='bg-gray-100 dark:bg-black dark:text-gray-50'>
      <Navbar />
      <Outlet />
      <End />
      </div>
      
    </>
  )
}

export default Layout
