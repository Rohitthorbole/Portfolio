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
    <div >
        <header className="h-20 border-b-[1px] border-zinc-300 ">
        <div className="h-full flex justify-between items-center mx-6 ">
            <img src="/Media/1.png" alt="" className='max-h-[50px]' />
            <ul className="flex items-center gap-10 text-l">
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
            <button onClick={()=> darkModeHandler()}>
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
