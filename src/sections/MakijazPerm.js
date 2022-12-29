import React from "react";
import SectionBuild from "./SectionBuild";
import { permMakeupData } from "../data/permMakeupData";
import logo1 from "../img/permimg1.jpg";
import logo2 from "../img/permimg2.jpg";

const MakijazPerm = () => (
  <SectionBuild sectionData={permMakeupData} logo1={logo1} logo2={logo2} />
);

export default MakijazPerm;
