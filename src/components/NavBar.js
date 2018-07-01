import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => (
  <nav className='nav-bar'>
    <ul className='nav-bar__list'>
      <li>
        <NavLink exact to='/' activeClassName='nav-active' className='nav-bar__link'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/new' activeClassName='nav-active' className='nav-bar__link'>New Tweet</NavLink>
      </li>
    </ul>
  </nav>
)

export default NavBar