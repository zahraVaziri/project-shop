import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {
  return (
     <nav>
          <ul className='ul-nav'>
            <li>
                <NavLink to="/home" activeClassName="action-lin">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/cart" >
                    Cart
                </NavLink>
            </li>
            
          </ul>
    </nav>
  )
}

export default Navigation
