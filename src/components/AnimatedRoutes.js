import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../sections/HomePage";
import Makijaze from "../sections/Makijaze";
import StylizacjeBrwi from "../sections/StylizacjeBrwi";
import Laser from "../sections/Laser";
import Contact from "../sections/Contact";
import MakijazPerm from "../sections/MakijazPerm";
import PermBrows from "../service-info/perm-info/PermBrows";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/makijaze-permanentne" element={<MakijazPerm />} />
        <Route path="/makijaze" element={<Makijaze />} />
        <Route path="/stylizacje-brwi" element={<StylizacjeBrwi />} />
        <Route path="/usuwanieperm" element={<Laser />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/makijaze-permanentne/permbrwi" element={<PermBrows />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
