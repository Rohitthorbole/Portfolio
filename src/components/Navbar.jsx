import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
import { IoMoon } from 'react-icons/io5'
import { IoSunny } from 'react-icons/io5'
import { IconContext } from 'react-icons'

const Navbar = () => {
  const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

  return (
    <div>
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
                <li><button onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
            </button></li>
            </ul>
        </div>
    </header>
    </div>
  )
}

export default Navbar
