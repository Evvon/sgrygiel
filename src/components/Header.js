import React from "react";
import logo from "../img/sg-logo.png";

const handleClick = () => {
  console.log("dziala");
  const menu = document.querySelector(".menu__list");
  menu.style.top = "25px";
  menu.style.left = "20%";
};

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />
      <i onClick={handleClick} className="header__menu fa-solid fa-bars"></i>
    </div>
  );
};

export default Header;
