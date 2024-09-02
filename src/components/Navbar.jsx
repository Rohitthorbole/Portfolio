import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
import { IoMoon } from 'react-icons/io5'
import { IoSunny } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import 1 from '/Media/1.png'

const Navbar = () => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <div className='sticky top-0 -z-0 bg-white bg-hero-pattern dark:bg-zinc-900'>
      <header className="h-20 border-b-[1px] border-zinc-300">
        <div className="h-full flex justify-between items-center mx-6 ">

          {/* logo */}
          <img src={1} alt="" className='max-h-[50px]' />

          {/* navbar for xl */}

          <ul className="flex items-center gap-10 text-l xs:hidden">
            <li className='hover:text-blue-500'>
              <Link to="/">Home</Link>
            </li>
            <li className='hover:text-blue-500'>
              <Link to="/Project">Projects</Link>
            </li>

            <li className='hover:text-blue-500'>
              <Link to="/About">About</Link>
            </li>
            <li className='hover:text-blue-500'>
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
          {/* Navbar for xs */}
          <div className='xl:hidden flex gap-5'>
            <Link to="/"><img src="./Media/arrow.svg" alt=""/></Link>
            <Link to="/Project"><img src="./Media/arrow.svg" alt=""/></Link>
            <Link to="/About"><img src="./Media/arrow.svg" alt=""/></Link>
            <Link to="Contact"><img src="./Media/arrow.svg" alt=""/></Link>
          </div>
          
          <button onClick={() => darkModeHandler()}>
            {

              dark && <IoSunny />
            }
            {
              !dark && <IoMoon />
            }
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
