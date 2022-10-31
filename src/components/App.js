import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/App.css";
import TopMedia from "./TopMedia";
import Header from "./Header";
import Menu from "./Menu";
import Section from "./Section";
import Footer from "./Footer";

function App() {
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
