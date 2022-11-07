import React from "react";
import SectionBuild from "./SectionBuild";
import { laserData } from "../data/laserData";

const Laser = () => {
  return (
    <>
      <SectionBuild title={laserData.title} text={laserData.text} />
    </>
  );
};

export default Laser;
