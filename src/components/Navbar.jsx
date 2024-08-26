import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-100'>
        <header class="h-16 border">
        <div class="p-8 px-[25vw]">
            <ul class="flex justify-between">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/Project">Projects</Link>
                </li>

                <li>
                  <Link to="/Resume">Resume</Link>
                </li>
                <li>
                  <Link to="Contact">Contact</Link>
                </li>
            </ul>
        </div>
    </header>
    </div>
  )
}

export default Navbar
