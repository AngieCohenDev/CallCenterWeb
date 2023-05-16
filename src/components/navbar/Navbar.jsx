import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#aboutUs">Sobre Nosotros</a>
    </p>
    <p>
      <a href="#servicios">Servicios</a>
    </p>
    <p>
      <a href="#cursos">Cursos</a>
    </p>
    <p>
      <a href="#experiencia">Experiencia</a>
    </p>
    <p>
      <a href="#contacto">Contacto</a>
    </p>
  </>
);


const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false)
  
  return (
    <div className="navbar">
      <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      <div className="navbar-links">
        
        <div className="navbar-links_container">
          <Menu />
        </div>
        <div className="navbar-menu">
        {toggleMenu ? 
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
         : 
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        }
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
