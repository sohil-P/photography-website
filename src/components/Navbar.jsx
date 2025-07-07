import { useState } from "react";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="1000">
      <div className="navbar-container">
        <div className="logo">
          <img src="./Images/Logo.webp" alt="Logo" />
        </div>
        <ul
          className={`nav-links ${menuActive ? "active" : ""}`}
          id="nav-links"
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="hamburger" id="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
