import React from 'react'
import PropTypes from 'prop-types';

import './cards.css'

function Card({title, imag, text,url}) {
  return (
    <div className='card text-center border-0 animate__animated animate__fadeInUp'>
       <div className='overflow'>
        <img src={imag} alt='' className='card-img-top' />
       </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>
            {title}
        </h4>
        <p className='card-text'>
          {
            text ? text : 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)'
          }
        
        </p>
        <a href={url} className='btn btn-warning text-uppercase fw-bold' target='__blank'>
            Contáctanos  
        </a>

      </div>
    </div>
  )
}

// eslint-disable-next-line react/no-typos
Card.propTypes = {
  title: PropTypes.string.isRequired,
  imag: PropTypes.string,
  text: PropTypes.string
}
export default Card