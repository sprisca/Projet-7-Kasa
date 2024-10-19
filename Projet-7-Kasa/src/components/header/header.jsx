import React from 'react'
import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/images/logo-header.png' // importation de l'image
import './header.scss'
// creation des lien de navigation
function Header() {
  return (
    <div className='navbar'>
     <img src= {logoHeader} alt="logo Kasa" />
     <ul>
            <li>
              <NavLink to= "/" className={({ isActive }) => (isActive ? "nav-active" : "")}>Accueil</NavLink></li> 
            <li>
              <NavLink to= "/about" className={({ isActive }) => (isActive ? "nav-active" : "")}>A Propos</NavLink></li>
        </ul>
    </div>
  )
}

export default Header
