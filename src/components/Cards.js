import React from 'react'
import Card  from './Card';

import s_ventas    from '../assets/servicio_venta.jpg';
import s_encuestas from '../assets/servicio_encuesta.jpg';
import s_energia   from '../assets/servicio_energia.jpg';
import s_mercado   from '../assets/servicio_mercado.jpg';
import s_grupo     from '../assets/servicio_grupo.jpg'

const cards = [
    {
        id: 1,
        title: 'Telemarketing',
        image: s_ventas,
        text: 'Nuestra dedicación al servicio al cliente y nuestra experiencia en la industria nos permiten ofrecer soluciones efectivas y personalizadas para satisfacer tus necesidades comerciales.',
        url: 'https://www.youtube.com/'
    },
    {
        id: 2,
        title: 'Encuestas Publicitarias',
        image: s_encuestas,
        text: 'Hola este es el texto de prueba',
        url: 'https://www.youtube.com/'
    },
    {
        id: 3,
        title: 'Estudio de Mercado',
        image: s_mercado,
        text: 'Ofrecemos servicios de estudios de mercado y encuestas telefónicas para recopilar datos valiosos sobre la percepción de tu marca, preferencias del cliente y tendencias del mercado',
        url: 'https://www.youtube.com/'
    },
    {
        id: 4,
        title: 'Armado de Grupo',
        image: s_grupo,
        text: 'Hola este es el texto de prueba',
        url: 'https://www.youtube.com/'
    },
    {
        id: 5,
        title: 'Venta de servicios energéticos ',
        image: s_energia,
        text: 'Nuestro enfoque en el cliente y nuestra habilidad para comunicarnos con claridad y persuasión nos permite llevar a cabo campañas de ventas efectivas.',
        url: 'https://www.youtube.com/'
    },
    


]

function Cards() {
  return (
    <div>
        <h1>Nuestos servicios</h1>
    <div className='container d-flex justify-content-center align-items-center w-76 m-5'>
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-4' key={card.id}>
                        <Card title = {card.title} imag={card.image} text={card.text} url={card.url} />
                    </div>
                ))
            } 
        </div>
    </div>
    </div>
  )
}

export default Cards