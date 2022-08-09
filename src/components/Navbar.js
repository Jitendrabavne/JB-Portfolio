import React from 'react'
import { NavLink } from 'react-router-dom'
// import About from './About'
// import Dashboard from './Dashboard'
import '../App.css'


function Navbar() {
    return (
        <>
            <nav className='nav'>
                <ul>
                    <li >
                        <NavLink activeClassName="ractive" to="/"><img src="favicon1.ico" alt="Trulli" />

                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="ractive" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
                    </li>
                </ul>
            </nav>


        </>
    )
}

export default Navbar