import React from "react";
import logo from "../img/sg-logo.png";

const SectionBuild = ({
  title,
  text,
  name,
  adress,
  phoneNumber,
  fb,
  instagram,
}) => {
  return (
    <>
      <div className="contener">
        <img className="contener__img" src={logo} alt="" />
      </div>
      <div className="section-information">
        <h1 className="test">{title}</h1>
        <div className="testtwo">
          <h3>{name}</h3>
          <p>{adress}</p>
          <p>{phoneNumber}</p>
          <p>{fb}</p>
          <p>{instagram}</p>
          <p>{text}</p>
        </div>
      </div>
      <div className="contener">
        <img className="contener__img" src={logo} alt="" />
      </div>
    </>
  );
};

export default SectionBuild;
