import React from "react";
import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";

const handleClick = () => {
  const menu = document.querySelector(".menu__list");
  menu.style.top = "25px";
  menu.style.left = "100%";
};

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuData.map(({ link, name, id }) => (
          <li className="menu__element" key={id}>
            <Link onClick={handleClick} to={link} className="menu__link">
              {name}
            </Link>
          </li>
        ))}
        <i onClick={handleClick} className="menu__close fa-solid fa-xmark"></i>
      </ul>
    </nav>
  );
};

export default Menu;
