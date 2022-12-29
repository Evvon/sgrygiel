import React from "react";
import { contactData } from "../data/contactData";
import { motion } from "framer-motion";
import logo from "../img/sg-logo.png";

const Contact = () => (
  <motion.div
    className="motion-div"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="contener">
      <img className="contener__img" src={logo} alt="" />
    </div>
    <div className="section-information">
      <h1 className="test">{contactData.title}</h1>
      <div className="testtwo">
        <h3>{contactData.name}</h3>
        <p>{contactData.adress}</p>
        <p>{contactData.phoneNumber}</p>
        <p>{contactData.fb}</p>
        <p>{contactData.instagram}</p>
        <p>{contactData.text}</p>
      </div>
    </div>
    <div className="contener">
      <img className="contener__img" src={logo} alt="" />
    </div>
  </motion.div>
);

export default Contact;
