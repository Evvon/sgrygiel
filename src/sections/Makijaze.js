import React from "react";
import SectionBuild from "./SectionBuild";
import { makeupData } from "../data/makeupData";
import logo1 from "../img/makeupimg1.jpg";
import logo2 from "../img/makeupimg2.jpg";

const Makijaze = () => (
  <SectionBuild sectionData={makeupData} logo1={logo1} logo2={logo2} />
);

export default Makijaze;
