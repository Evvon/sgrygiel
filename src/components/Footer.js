import React from "react";
import { footerData } from "../data/footerData";

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__info">
        {footerData.name} - {footerData.copyright}
      </span>
    </div>
  );
};

export default Footer;
