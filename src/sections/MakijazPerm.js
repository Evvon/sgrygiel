import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/sg-logo.png";
import { permMakeupData } from "../data/permMakeupData";

const MakijazPerm = () => {
  return (
    <>
      <div className="contener">
        <img className="contener__img" src={logo} alt="" />
      </div>
      <nav className="menu menu--section">
        <ul className="menu__list menu__list--section">
          {permMakeupData.map(({ link, name, id }) => (
            <li className="menu__element" key={id}>
              <NavLink to={link} className="menu__link menu__link--section">
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="contener">
        <img className="contener__img" src={logo} alt="" />
      </div>
    </>
  );
};

export default MakijazPerm;
