import React from 'react'
import { Link } from 'react-router-dom'
// import About from './About'
// import Dashboard from './Dashboard'
import '../App.css'


function Navbar() {
    return (
        <>
            <nav className='nav'>
                <ul>
                    <li >
                        <Link to="/"><img src="favicon1.ico" alt="Trulli" />

                        </Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>


        </>
    )
}

export default Navbar