import React from 'react'
import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
// import './Navbar.css'
import '../App.css'
function Navbar() {
    // eslint-disable-next-line
    return (
        <>
            <nav className='nav'>
              
                <ul className='nav'  >
                    <li >
                        <NavLink activeClassName="ractive" title='Web?_Logo' to="/">
                            <img src="favicon1.ico" alt="Trulli" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="ractive" title='Home' to="/"><AiIcons.AiFillHome /></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" title='About' to="/about"><FaIcons.FaEnvelopeOpenText /></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" title='Dashboard' to="/dashboard"><IoIcons.IoMdPeople /></NavLink>
                   
                    </li> 
                </ul>
                
            </nav>
        </>
    )
}

export default Navbar