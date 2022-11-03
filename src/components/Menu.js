import React from "react";
import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuData.map(({ link, name, id }) => (
          <li className="menu__element" key={id}>
            <Link to={link} className="menu__link">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
