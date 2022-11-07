import React from "react";
import SectionBuild from "./SectionBuild";
import { contactData } from "../data/contactData";

const Contact = () => (
  <SectionBuild
    title={contactData.title}
    name={contactData.name}
    adress={contactData.adress}
    phoneNumber={contactData.phoneNumber}
    fb={contactData.fb}
    instagram={contactData.instagram}
  />
);

export default Contact;
