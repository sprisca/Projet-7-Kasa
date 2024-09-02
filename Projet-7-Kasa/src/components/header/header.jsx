import React from 'react'
import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/images/logo-header.png'
import './header.scss'

function Header() {
  return (
    <div className='navbar'>
     <img src= {logoHeader} alt="logo Kasa" />
     <ul>
            <li>
              <NavLink to= "/">Accueil</NavLink></li>
            <li>
              <NavLink to= "/about">A propos</NavLink></li>
        </ul>
    </div>
  )
}

export default Header
