import React from 'react'
import logoFooter from '../../assets/images/logo-footer.png'
import './footer.scss'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src= {logoFooter} alt="logo footer"/>
      </div>
      <div className='footer-text'>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
