import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-content_image'>
          <img src={logo} alt={logo} />
        </div>
        <div className='footer_title section__padding'>
          <h1>Encuéntranos aquí</h1>
        </div>
      </div>
     
    </div>
  )
}

export default Footer