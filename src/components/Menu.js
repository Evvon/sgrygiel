import React from "react";
import { NavLink } from "react-router-dom";
import { menuData } from "../data/menuData";

const handleClick = () => {
  if (window.innerWidth > 799) return;
  const menu = document.querySelector(".menu__list");
  menu.style.top = "25px";
  menu.style.left = "100%";
  menu.style.opacity = "0";
};

const Menu = () => {
  const handleResize = () => {
    const menu = document.querySelector(".menu__list");
    if (window.innerWidth > 799) {
      menu.style.opacity = "1";
    } else {
      menu.style.opacity = "0";
    }
  };

  window.addEventListener("resize", handleResize);
  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuData.map(({ link, name, id }) => (
          <li className="menu__element" key={id}>
            <NavLink onClick={handleClick} to={link} className="menu__link">
              {name}
            </NavLink>
          </li>
        ))}
        <i onClick={handleClick} className="menu__close fa-solid fa-xmark"></i>
      </ul>
    </nav>
  );
};

export default Menu;
