import React from "react";
import "./header.css";
import whatsapp from "../../assets/whatsapp.png";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import instagran from "../../assets/instagran.png";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1>Somos Tesbacon</h1>
        <h2 className="subtitle"> La herramienta que tu empresa necesita</h2>
        <p>
          Somos la solución que su empresa necesita. Estamos encantados de
          formar parte de su equipo, contáctanos vía WhatsApp, LinkedIn o correo
          electrónico para agendar una entrevista personal.
        </p>
      
        <div className="header-down">
          <button type="button">CONTÁCTANOS</button>
          <div className="header-social_links">
            <img src={whatsapp} alt="whatsapp" />
            <img src={gmail} alt="gmail" />
            <img src={linkedin} alt="linkedin" />
            <img src={instagran} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
