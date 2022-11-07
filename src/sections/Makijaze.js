import React from "react";
import SectionBuild from "./SectionBuild";
import { makeupData } from "../data/makeupData";

const Makijaze = () => (
  <SectionBuild title={makeupData.title} text={makeupData.text} />
);

export default Makijaze;
