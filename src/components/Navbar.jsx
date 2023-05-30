import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faHome } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu  ()  {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar">
       {showMenu ? (
        <ul className="nav-list" data-aos="fade-right" data-aos-duration="1000">
          <li onClick={toggleMenu}><a href="#about">About</a></li>
          <li onClick={toggleMenu}><a href="#contact">Contact</a></li>
          <li onClick={toggleMenu}><a href="#projects">Projects</a></li>
            </ul>
          ) : ''}
      <ul className="navbar-icons-menu">
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li className="menu">
          <button className="btn" onClick={toggleMenu}>
            Menu
          </button>
        </li>
      </ul>
     
    </nav>
  );
};

export default Navbar;
