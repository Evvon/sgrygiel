import React from "react";
import SectionBuild from "./SectionBuild";
import { permMakeupData } from "../data/permMakeupData";

const MakijazPerm = () => {
  return (
    <SectionBuild title={permMakeupData.title} text={permMakeupData.text} />
  );
};

export default MakijazPerm;
