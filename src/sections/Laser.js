import React from "react";
import SectionBuild from "./SectionBuild";
import { laserData } from "../data/laserData.js";
import logo1 from "../img/usuwanieimg1.jpg";
import logo2 from "../img/usuwanieimg1.jpg";

const Laser = () => {
  return (
    <>
      <SectionBuild sectionData={laserData} logo1={logo1} logo2={logo2} />
    </>
  );
};

export default Laser;
