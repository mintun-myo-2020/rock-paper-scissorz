import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <Link className='title' to="/">ScisPapStone</Link>
        <ul>
            <li ><Link to="/single"> Single Player </Link></li>
            <li ><Link to="/multi"> Multi Player </Link></li>
        </ul>
    </nav>
  )
}

export default Navbar