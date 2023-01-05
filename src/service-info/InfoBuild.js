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
        <div>test</div>
      </>
    </motion.div>
  );
};

export default InfoBuild;
