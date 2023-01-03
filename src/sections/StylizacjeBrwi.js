import React from "react";
import SectionBuild from "./SectionBuild";
import { brwiData } from "../data/brwiData";
import logo1 from "../img/brwiimg1.jpg";
import logo2 from "../img/brwiimg2.jpg";

const StylizacjeBrwi = () => {
  return <SectionBuild sectionData={brwiData} logo1={logo1} logo2={logo2} />;
};

export default StylizacjeBrwi;
