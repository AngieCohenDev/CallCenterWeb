import React from "react";
import "./blog.css";
import services from "../../assets/Services.png";
import Why_Us from "../../assets/Why_Us.png";
import Why_Us1 from "../../assets/Why_Us1.png";

const emailAddress = "angiecohenr@outlook.com"; // Reemplaza con tu dirección de correo electrónico
const mailtoLink = `mailto:${emailAddress}`;

const Blog = () => {
  return (
    <div className="blog section__padding" id="unete">
      <div className="blog-content">
        <h1>Se parte del equipo Tesbacom </h1>
        <p>
          Constantemente estamos en busca de talentos que quieran expandir sus
          habilidades en el mercado laboral. En nuestra empresa vas a laborar
          con un maravilloso equipo de profesionales, contamos con horarios
          flexibles y una gran remuneración económica.{" "}
        </p>
        <div>
          <h2>
            ¡No esperes más! Obtén la oportunidad de trabajar con una empresa de
            primer nivel.
          </h2>
        </div>
        <div>
          <p>
          Envíanos tu curriculum o ingresa a nuestro LinkedIn y postúlate en la vacante que más se ajuste a tu perfil
          </p>
        </div>
        <div className="blog_content-red">
          <a href={mailtoLink}>
            <img className="img_1" src={Why_Us} alt={Why_Us} />
          </a>
         <a href="!#">
          <img className="img_2" src={Why_Us1} alt={Why_Us1} />
         </a>
        </div>
      </div>
      <div className="blog-image">
        <img src={services} alt={services} />
      </div>
    </div>
  );
};

export default Blog;
