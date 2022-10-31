import React from "react";
import "../styles/App.css";
import TopMedia from "./TopMedia";
import Header from "./Header";
import Menu from "./Menu";

function App() {
  return (
    <div className="wrapper">
      <TopMedia />
      <Header />
      <Menu />
    </div>
  );
}

export default App;
