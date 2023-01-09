import React from "react";
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
        <nav className="menu menu--section">
          <ul className="menu__list menu__list--section">
            {sectionData.map(({ link, name, img, id }) => (
              <li className="menu__element-section" key={id}>
                <NavLink
                  style={{ backgroundImage: `url(${img})` }}
                  to={link}
                  className="menu__link menu__link--section"
                >
                  <p className="menu__link--section__btn">{name}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </>
    </motion.div>
  );
};

export default SectionBuild;
