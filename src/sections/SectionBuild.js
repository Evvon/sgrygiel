import React from "react";
import logo from "../img/sg-logo.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SectionBuild = ({ sectionData }) => {
  return (
    <motion.div
      className="motion-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <div className="contener">
          <img className="contener__img" src={logo} alt="" />
        </div>
        <nav className="menu menu--section">
          <ul className="menu__list menu__list--section">
            {sectionData.map(({ link, name, id }) => (
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
    </motion.div>
  );
};

export default SectionBuild;
