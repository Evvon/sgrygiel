import React from "react";
import SectionBuild from "./SectionBuild";
import { brwiData } from "../data/brwiData";

const StylizacjeBrwi = () => {
  return <SectionBuild title={brwiData.title} text={brwiData.text} />;
};

export default StylizacjeBrwi;
