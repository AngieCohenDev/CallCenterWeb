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
          Somos una empresa fundada con todo el potencial argentino.
          Comprometida con los sus clientes y sus necesidades especiales.
          Estamos en camino de ser reconocidos por nuestra excelencia, nuestra
          disciplina y los resultados extraordinarios que le entregamos a
          quienes nos dejan ser parte de su familia. Le aseguramos que una vez
          que trabaje con nosotros siempre querrá hacerlo.
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
