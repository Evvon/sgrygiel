import React from "react";
import logo from "../img/sg-logo.png";

const sectionBuild = () => {
  return (
    <>
      <div className="contener">
        <img className="contener__img" src={logo} alt="" />
      </div>
      <div className="contener">
        <p className="coneter__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex
          sint provident, cumque voluptatibus iste vero quae beatae. Quasi,
          autem. Quia illum dolorem excepturi! Corrupti, earum. Esse repellendus
          quaerat nihil.
        </p>
      </div>
      <div className="contener">
        <img className="contener__img" src={logo} alt="" />
      </div>
    </>
  );
};

export default sectionBuild;
