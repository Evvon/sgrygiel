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
        <div className="section-contener">
          <nav className="menu menu--section">
            <ul className="menu__list menu__list--section">
              {sectionData.map(({ link, name, img, id }) => (
                <li className="menu__element-section" key={id}>
                  <NavLink
                    style={{ backgroundImage: `url(${img})` }}
                    to={link}
                    className="menu__link menu__link--section"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </>
    </motion.div>
  );
};

export default SectionBuild;
