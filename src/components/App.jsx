import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Inicio from './Inicio';
import Ordenes from './Ordenes';
import Contacto from './Contacto';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/ordenes" element={<Ordenes/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/" element={<Inicio/>}/>
      </Routes>
    </Router>
  );
}

export default App;
