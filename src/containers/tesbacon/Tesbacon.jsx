import React from "react";
import "./tesbacon.css";
import services from "../../assets/Services.png";

const Tesbacon = () => {
  return (
    <div className="tesbacon section__padding" id="us">
      <div className="tesbacon-content">
        <h1>Especializados en soluciones empresariales</h1>
        <h2>Somos máster en ventas, mercadería y acompañamiento empresarial</h2>
        <p>
        Tesbacom es tu socio confiable en soluciones de atención al cliente, soporte empresarial y venta telefónica. Nos enorgullece ser una empresa líder en el sector, dedicada a brindar servicios de alta calidad que fortalecen las relaciones entre nuestros clientes y sus consumidores. !Estamos encantados de formar parte de su equipo!
        </p>
        <p>
        Ofrecemos una amplia gama de servicios para satisfacer las necesidades únicas de nuestros clientes. Desde atención al cliente multicanal hasta soporte técnico especializado y estrategias de telemarketing efectivas,
        </p>
        <div className="tesbacon-down">
        <p>¡Somos Tesbacom, Somos su Solución!</p>
      </div>
      </div>
      <div className="tesbacon-image">
        <img src={services} alt={services} />
      </div>
      </div>
      
   
  );
};

export default Tesbacon;
