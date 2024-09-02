import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
import { IoMoon } from 'react-icons/io5'
import { IoSunny } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import logo from '/Media/logo.png'

const Navbar = () => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <div className='sticky top-0 -z-0 bg-white bg-hero-pattern dark:bg-zinc-900'>
      <header className="h-20 border-b-[1px] border-zinc-300">
        <div className="h-full flex justify-between items-center mx-10 xs:mx-6">

          {/* logo */}
          <img src={logo} alt="" className='max-h-[50px] xs:max-h-[30px]' />

          {/* navbar for xl */}

          <ul className="flex items-center gap-10 text-l xs:gap-3 xs:text-[14px]">
            <li>
              <Link to="/" className='hover:text-blue-500'>Home</Link>
            </li>
            <li>
              <Link to="/Project" className='hover:text-blue-500'>Projects</Link>
            </li>

            <li>
              <Link to="/About" className='hover:text-blue-500'>About</Link>
            </li>
            <li>
              <Link to="Contact" className='hover:text-blue-500'>Contact</Link>
            </li>
          </ul>
          
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
