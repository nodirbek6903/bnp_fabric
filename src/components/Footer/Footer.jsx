import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-texts">
        <span className='footer-text'>&copy;{new Date().getFullYear()}LLC"BUKHARA NATURAL PRODUCT". All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer