import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Inicio from './Inicio';
import Acerca from './Acerca';
import Contacto from './Contacto';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/acerca" element={<Acerca/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/" element={<Inicio/>}/>
      </Routes>
    </Router>
  );
}

export default App;
