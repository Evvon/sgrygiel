import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SectionBuild = ({ sectionData, logo1, logo2 }) => {
  return (
    <motion.div
      className="motion-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <div className="contener">
          <img className="contener__img" src={logo1} alt="" />
        </div>
        <div className="section-contener">
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
        </div>
        <div className="contener">
          <img className="contener__img" src={logo2} alt="" />
        </div>
      </>
    </motion.div>
  );
};

export default SectionBuild;
