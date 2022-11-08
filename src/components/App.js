import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../css/App.css";
import TopMedia from "./TopMedia";
import Header from "./Header";
import Menu from "./Menu";
import Section from "./Section";
import Footer from "./Footer";

function App() {
  const handleResize = () => {
    if (window.innerWidth > 799) {
      const menu = document.querySelector(".menu__list");
      menu.style.opacity = "1";
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <TopMedia />
        <Header />
        <Menu />
        <Section />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
