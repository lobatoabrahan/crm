import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Ordenes from "./Ordenes";
import Contacto from "./Contacto";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Routes>
        <Route
          path="/ordenes"
          element={<Ordenes isOpen={isOpen} setIsOpen={setIsOpen} />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/"
          element={<Inicio isOpen={isOpen} setIsOpen={setIsOpen} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
