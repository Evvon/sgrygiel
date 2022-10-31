import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Menu = () => {
  return (
    <BrowserRouter>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/" className="menu__link">
              Strona Główna
            </Link>
          </li>
          <li>
            <Link to="/makijaże" className="menu__link">
              Makijaże
            </Link>
          </li>
          <li>
            <Link to="/stylizacje-brwi" className="menu__link">
              Stylizacje Brwi
            </Link>
          </li>
          <li>
            <Link to="/laser" className="menu__link">
              Laser
            </Link>
          </li>
          <li>
            <Link to="kontakt" className="menu__link">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default Menu;
