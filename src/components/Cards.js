import React from 'react'
import Card from './Card';

import s_ventas from '../assets/servicio_venta.jpg';
import s_encuestas from '../assets/servicio_encuesta.jpg';
import s_energia from '../assets/servicio_energia.jpg';

const cards = [
    {
        id: 1,
        title: 'Fazt web',
        image: s_ventas,
        text: 'Hola este es el texto de prueba'
    },
    {
        id: 2,
        title: 'Fazt blog',
        image: s_encuestas,
        text: 'Hola este es el texto de prueba'
    },
    {
        id: 3,
        title: 'Fazt site',
        image: s_energia,
        text: 'Hola este es el texto de prueba'
    },
    {
        id: 4,
        title: 'Fazt site',
        image: s_energia,
        text: 'Hola este es el texto de prueba'
    },
    {
        id: 5,
        title: 'Fazt site',
        image: s_energia,
        text: 'Hola este es el texto de prueba'
    },
    


]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100 m-5'>
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-4' key={card.id}>
                        <Card title = {card.title} imag={card.image} text={card.text} />
                    </div>
                ))
            } 
        </div>
    </div>
  )
}

export default Cards