import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt={logo} />
        </div>
        <div className="footer-links_div">
          <h4>Tesbacom S.R.L</h4>
          <p>Florida 556 - piso 3</p>
          <p>Código Postal - 1005</p>
          <p>Ciudad de Buenos Aires</p>
        </div>
        <div className="footer-links_div">
          <h4>Contacto</h4>
          <p>+54 11-4042-8920</p>
          <p>tesbacom.ba@gmail.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>@2023 Tesbacom. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
