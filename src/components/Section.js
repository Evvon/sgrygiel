import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "../sections/HomePage";
import Makijaze from "../sections/Makijaze";
import StylizacjeBrwi from "../sections/StylizacjeBrwi";
import Laser from "../sections/Laser";
import Contact from "../sections/Contact";

const Section = () => {
  return (
    <>
      <section className="sections">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/makijaze" element={<Makijaze />} />
          <Route path="/stylizacje-brwi" element={<StylizacjeBrwi />} />
          <Route path="/laser" element={<Laser />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </section>
    </>
  );
};

export default Section;
