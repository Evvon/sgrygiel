import React from "react";
import { motion } from "framer-motion";

const InfoBuild = ({ infoData }) => {
  return (
    <motion.div
      className="motion-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <div className="information">
          <h1>{infoData.name}</h1>
          <p>{infoData.info}</p>
          <p>Cena: {infoData.cost}</p>
          <button>Zarazerwój termin</button>
        </div>
      </>
    </motion.div>
  );
};

export default InfoBuild;
